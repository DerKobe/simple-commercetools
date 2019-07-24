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
const BaseModule_1 = require("./BaseModule");
class CustomObjects extends BaseModule_1.BaseModule {
    fetchAll(page, perPage, condition, sort) {
        return __awaiter(this, void 0, void 0, function* () {
            let uri = this.request.customObjects;
            if (page) {
                uri = uri.page(page);
            }
            if (perPage) {
                uri = uri.page(perPage);
            }
            if (condition) {
                uri = uri.where(condition);
            }
            if (sort) {
                uri = uri.parse({ sort });
            }
            const fetchRequest = {
                uri: uri.build(),
                method: 'GET',
                headers: this.headers,
            };
            return (this.client
                .execute(fetchRequest)
                .then(response => response.body));
        });
    }
    fetchById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const fetchRequest = {
                uri: this.request.customObjects.byId(id).build(),
                method: 'GET',
                headers: this.headers,
            };
            return (this.client
                .execute(fetchRequest)
                .then(response => response.body));
        });
    }
    fetchByKeyAndContainer(key, container) {
        return __awaiter(this, void 0, void 0, function* () {
            const condition = `key="${key}" AND container="${container}"`;
            return (yield this.fetchAll(1, 1, condition)).results[0];
        });
    }
    save(customObjectDraft) {
        return __awaiter(this, void 0, void 0, function* () {
            const postRequest = {
                uri: this.request.customObjects.build(),
                method: 'POST',
                headers: this.headers,
                body: customObjectDraft,
            };
            return (this.client
                .execute(postRequest)
                .then(response => response.body));
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteRequest = {
                uri: this.request.customObjects.byId(id).build(),
                method: 'DELETE',
                headers: this.headers,
            };
            return this.client.execute(deleteRequest);
        });
    }
}
exports.CustomObjects = CustomObjects;
