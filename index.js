import express from "express";

const app = express();
app.use(express.json());

// AI processing endpoint
app.post("/process", async (req, res) => {
  const text = req.body.text || "";

  // 🔥 Basic AI logic (later GPT add cheyyam)
  let reply = "";
  let urgent = false;

  if (text.toLowerCase().includes("urgent") || text.includes("emergency")) {
    reply = "This seems urgent, connecting you now";
    urgent = true;
  } else {
    reply = "I will help you, please explain more";
  }

  res.json({ reply, urgent });
});

app.get("/", (req, res) => {
  res.send("AI Call Server Running 🚀");
});

app.listen(3000, () => console.log("Server running on 3000"));
