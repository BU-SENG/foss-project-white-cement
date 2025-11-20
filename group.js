// Simple in-memory store (replace with DB in production)
const users = [
  // password hashed when created via signup; seed user omitted for safety
];

const groups = [
  {
    id: "g1",
    title: "Advanced Algorithms Study Group",
    description:
      "A highly collaborative group focused on weekly problem sets and rigorous exam preparation.",
    interests: ["Computer Science", "Mathematics"],
    members: ["user1", "user2", "user3", "user4"],
    schedule: ["Weekday Evenings"],
    skill: "Advanced",
  },
  {
    id: "g2",
    title: "Data Structures Practice",
    description:
      "Weekly review of core data structures. Focus on collaborative problem-solving.",
    interests: ["Computer Science"],
    members: ["user5", "user6"],
    schedule: ["Weekday Evenings", "Weekend Afternoons"],
    skill: "Intermediate",
  },
  {
    id: "g3",
    title: "Calculus II Peer Tutors",
    description: "Friendly group for tackling tough Calculus concepts.",
    interests: ["Mathematics"],
    members: ["user7", "user8", "user9"],
    schedule: ["Weekday Mornings"],
    skill: "Beginner",
  },
];

export { users, groups };