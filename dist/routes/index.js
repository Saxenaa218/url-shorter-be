import { Router } from "express";
import { createShortURL } from "../controllers/createShortURL";
import { deleteShortURL } from "../controllers/deleteShortURL";
import { getAllShortURLs } from "../controllers/getAllShortURLs";
import { getOriginalUrl } from "../controllers/getOriginalUrl";
export const router = Router();
router.get("/allUrls", getAllShortURLs);
router.get("/url/:shortUrlId", getOriginalUrl);
router.post("/url", createShortURL);
router.delete("/url", deleteShortURL);
//# sourceMappingURL=index.js.map