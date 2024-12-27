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
exports.getAllShortURLs = void 0;
const schema_1 = require("../schema");
const getAllShortURLs = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allShortUrls = yield schema_1.UrlModel.find({}, {
            originalURL: 1,
            shortUrlId: 1,
            createdAt: 1,
            _id: 0,
        });
        resp.status(200).send({ message: "success!", data: allShortUrls });
    }
    catch (error) {
        resp.status(500).send({ message: "Unable to fetch all URLs" });
    }
});
exports.getAllShortURLs = getAllShortURLs;
//# sourceMappingURL=getAllShortURLs.js.map