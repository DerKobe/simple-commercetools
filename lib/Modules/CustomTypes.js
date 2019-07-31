"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const CommonModule_1 = require("./CommonModule");
class CustomTypes extends CommonModule_1.CommonModule {
    constructor() {
        super(...arguments);
        this.entityType = 'types';
    }
    create(customTypeDraft) {
        return __awaiter(this, void 0, void 0, function* () {
            const postRequest = {
                uri: this.request.types.build(),
                method: 'POST',
                headers: this.headers,
                body: customTypeDraft,
            };
            return (this.client
                .execute(postRequest)
                .then(response => response.body));
        });
    }
    updateByKey(key, actions) {
        return __awaiter(this, void 0, void 0, function* () {
            const customType = yield this.resolveKeyAndVersion(key, this.fetchByKey.bind(this));
            const postRequest = {
                uri: this.request.types.byKey(key).build(),
                method: 'POST',
                headers: this.headers,
                body: {
                    version: customType.version,
                    actions
                },
            };
            return (this.client
                .execute(postRequest)
                .then(response => response.body));
        });
    }
}
exports.CustomTypes = CustomTypes;
