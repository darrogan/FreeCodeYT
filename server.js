import express from "express"
import cors from "cors"
import reviews from "./api/reviews.route.js"

const app = express();

app.use(cors());
app.use(express.json());

// Good practices, especify that's an api and the version -v1
app.use("/api/v1/reviews", reviews);
app.use("*", (req, res) => res.status(404).json({error: "not found"}));

export default app