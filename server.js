import express from "express";
import { groups } from "../data/store.js";
import { requireAuth } from "../middleware/auth.js";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

// GET /api/groups - list all groups (public)
router.get("/", (_req, res) => {
  const summary = groups.map((g) => ({
    id: g.id,
    title: g.title,
    description: g.description,
    membersCount: g.members.length,
    interests: g.interests,
    schedule: g.schedule,
    skill: g.skill,
  }));
  res.json({ groups: summary });
});

// POST /api/groups/find - basic matching using preferences
// body: { interests: [], availability: [], skill: 'Beginner' }
router.post("/find", (req, res) => {
  const { interests = [], availability = [], skill } = req.body || {};

  // simple scoring: +2 for shared interest, +1 for schedule overlap, +1 if skill matches
  const scored = groups.map((g) => {
    let score = 0;
    interests.forEach((i) => { if (g.interests.includes(i)) score += 2; });
    availability.forEach((a) => { if (g.schedule.includes(a)) score += 1; });
    if (skill && g.skill === skill) score += 1;
    return { group: g, score };
  });

  scored.sort((a, b) => b.score - a.score);

  const results = scored.map((s) => ({
    id: s.group.id,
    title: s.group.title,
    description: s.group.description,
    match: Math.min(100, 40 + s.score * 12), // normalized-ish
    members: { count: s.group.members.length, list: s.group.members.map((m) => m[0].toUpperCase()) },
  }));

  res.json({ results });
});

// POST /api/groups/join - protected, join a group
// body: { groupId }
router.post("/join", requireAuth, (req, res) => {
  const { groupId } = req.body;
  if (!groupId) return res.status(400).json({ error: "groupId required" });

  const group = groups.find((g) => g.id === groupId);
  if (!group) return res.status(404).json({ error: "Group not found" });

  const userId = req.user.id;
  if (!group.members.includes(userId)) group.members.push(userId);

  res.json({ success: true, groupId: group.id, members: group.members.length });
});

// POST /api/groups/create - protected, create new group
router.post("/create", requireAuth, (req, res) => {
  const { title, description, interests = [], schedule = [], skill = "Intermediate" } = req.body || {};
  if (!title) return res.status(400).json({ error: "title required" });

  const newGroup = {
    id: uuidv4(),
    title,
    description: description || "",
    interests,
    members: [req.user.id],
    schedule,
    skill,
  };
  groups.push(newGroup);
  res.status(201).json({ group: newGroup });
});

export default router;