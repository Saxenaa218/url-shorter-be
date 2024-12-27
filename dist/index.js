import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./utils/dbConnection";
import { getAllShortURLs } from "./controllers/getAllShortURLs";
import { getOriginalUrl } from "./controllers/getOriginalUrl";
import { createShortURL } from "./controllers/createShortURL";
import { deleteShortURL } from "./controllers/deleteShortURL";
dotenv.config();
dbConnection();
export const app = express();
const PORT = process.env.PORT;
app.use(cors({
    origin: process.env.CLIENT_URL,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// use to make express
const router = express.Router();
router.use("/api", router);
router.get("/allUrls", getAllShortURLs);
router.get("/url/:shortUrlId", getOriginalUrl);
router.post("/url", createShortURL);
router.delete("/url", deleteShortURL);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(PORT || 3005, () => {
    console.log(`Server is running on ${PORT}`);
});
//# sourceMappingURL=index.js.map