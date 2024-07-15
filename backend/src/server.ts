import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/api/subscribe", (req: Request, res: Response) => {
  const { email } = req.body;

  // Add your subscription logic here (e.g., save to database, send confirmation email)
  if (email) {
    // Simulate success response
    res.status(200).json({ message: "Subscription successful!" });
  } else {
    res.status(400).json({ error: "Invalid email address." });
  }
});

const PORT = process.env.PORT || 5001; // Ensure this port matches your server setup
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
