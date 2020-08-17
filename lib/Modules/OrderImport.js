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
exports.OrderImport = void 0;
const BaseModule_1 = require("./BaseModule");
class OrderImport extends BaseModule_1.BaseModule {
    create(draft) {
        return __awaiter(this, void 0, void 0, function* () {
            const postRequest = {
                uri: this.request.orderImport.build(),
                method: 'POST',
                headers: this.headers,
                body: draft,
            };
            return (this.client
                .execute(postRequest)
                .then(response => response.body));
        });
    }
}
exports.OrderImport = OrderImport;
