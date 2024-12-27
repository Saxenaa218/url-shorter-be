"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createShortURL = void 0;
const schema_1 = require("../schema");
const nanoid_1 = require("nanoid");
const createShortURL = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const url = req.body.url;
    if (!url) {
        resp.status(400).send({ message: "URL is required" });
        return;
    }
    const found = yield schema_1.UrlModel.find({
        originalURL: url,
    });
    if (found.length > 0) {
        resp.status(200).send({ message: "success!", data: found[0] });
        return;
    }
    const urlObj = yield schema_1.UrlModel.create({
        originalURL: url,
        shortUrlId: (0, nanoid_1.nanoid)(6),
        createdAt: new Date(),
    });
    resp.status(200).send({ message: "success!", data: urlObj });
});
exports.createShortURL = createShortURL;
//# sourceMappingURL=createShortURL.js.map