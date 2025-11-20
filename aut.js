import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import groupsRoutes from "./routes/groups.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/groups", groupsRoutes);

// simple health
app.get("/api/health", (_req, res) => res.json({ status: "ok" }));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`StudySync backend running on http://localhost:${PORT}`);
});