"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlModel = void 0;
const mongoose_1 = require("mongoose");
const urlSchema = new mongoose_1.Schema({
    originalURL: {
        type: String,
        required: true,
    },
    shortUrlId: {
        type: String,
        required: true,
    },
    createdAt: {
        type: String,
        required: true,
    },
});
exports.UrlModel = (0, mongoose_1.model)("urls", urlSchema);
//# sourceMappingURL=index.js.map