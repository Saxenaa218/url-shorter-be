"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const createShortURL_1 = require("../controllers/createShortURL");
const deleteShortURL_1 = require("../controllers/deleteShortURL");
const getAllShortURLs_1 = require("../controllers/getAllShortURLs");
const getOriginalUrl_1 = require("../controllers/getOriginalUrl");
exports.router = (0, express_1.Router)();
exports.router.get("/allUrls", getAllShortURLs_1.getAllShortURLs);
exports.router.get("/url/:shortUrlId", getOriginalUrl_1.getOriginalUrl);
exports.router.post("/url", createShortURL_1.createShortURL);
exports.router.delete("/url", deleteShortURL_1.deleteShortURL);
//# sourceMappingURL=index.js.map