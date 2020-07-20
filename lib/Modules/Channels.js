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
exports.Channels = void 0;
const CommonModule_1 = require("./CommonModule");
class Channels extends CommonModule_1.CommonModule {
    constructor() {
        super(...arguments);
        this.entityType = 'channels';
    }
    fetchByKey(key) {
        return __awaiter(this, void 0, void 0, function* () {
            const fetchRequest = {
                uri: this.request[this.entityType].where(`key="${key}"`).build(),
                method: 'GET',
                headers: this.headers,
            };
            return this.client.execute(fetchRequest).then(({ body }) => body.results[0]);
        });
    }
}
exports.Channels = Channels;
