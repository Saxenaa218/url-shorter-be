"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./routes");
const dbConnection_1 = require("./utils/dbConnection");
dotenv_1.default.config();
(0, dbConnection_1.dbConnection)();
exports.app = (0, express_1.default)();
const PORT = process.env.PORT;
exports.app.use((0, cors_1.default)({
    origin: process.env.CLIENT_URL,
}));
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.urlencoded({ extended: true }));
// use to make express
exports.app.use("/api/", routes_1.router);
exports.app.get("/", (req, res) => {
    res.send("Hello World!");
});
exports.app.listen(PORT || 3005, () => {
    console.log(`Server is running on ${PORT}`);
});
//# sourceMappingURL=index.js.map