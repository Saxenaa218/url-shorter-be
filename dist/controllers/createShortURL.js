var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { UrlModel } from "../schema";
import { nanoid } from "nanoid";
export const createShortURL = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const url = req.body.url;
    if (!url) {
        resp.status(400).send({ message: "URL is required" });
        return;
    }
    const found = yield UrlModel.find({
        originalURL: url,
    });
    if (found.length > 0) {
        resp.status(200).send({ message: "success!", data: found[0] });
        return;
    }
    const urlObj = yield UrlModel.create({
        originalURL: url,
        shortUrlId: nanoid(6),
        createdAt: new Date(),
    });
    resp.status(200).send({ message: "success!", data: urlObj });
});
//# sourceMappingURL=createShortURL.js.map