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
export const getOriginalUrl = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const { shortUrlId } = req.params;
    try {
        const shortUrlObject = yield UrlModel.findOne({
            shortUrlId,
        }, {
            originalURL: 1,
            shortUrlId: 1,
            createdAt: 1,
            _id: 0,
        });
        resp.status(200).send({ message: "success!", data: shortUrlObject });
    }
    catch (error) {
        console.error(error);
        resp.status(500).send({ message: "Unable to fetch all URLs" });
    }
});
//# sourceMappingURL=getOriginalUrl.js.map