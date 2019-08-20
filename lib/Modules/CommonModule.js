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
class CommonModule extends BaseModule_1.BaseModule {
    fetchAll(page, perPage, condition, sort) {
        return __awaiter(this, void 0, void 0, function* () {
            let uri = this.request[this.entityType];
            if (page) {
                uri = uri.page(page);
            }
            if (perPage) {
                uri = uri.perPage(perPage);
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
    fetch(condition) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.fetchAll(1, 1, condition);
            return response.results[0];
        });
    }
    fetchByKey(key) {
        return __awaiter(this, void 0, void 0, function* () {
            const fetchRequest = {
                uri: this.request[this.entityType].byKey(key).build(),
                method: 'GET',
                headers: this.headers,
            };
            return this.client.execute(fetchRequest).then(({ body }) => body);
        });
    }
    fetchById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const fetchRequest = {
                uri: this.request[this.entityType].byId(id).build(),
                method: 'GET',
                headers: this.headers,
            };
            return this.client.execute(fetchRequest).then(({ body }) => body);
        });
    }
    fetchAllExpanded(page, perPage, condition, expansions, sort) {
        return __awaiter(this, void 0, void 0, function* () {
            let uri = this.request[this.entityType];
            if (page) {
                uri = uri.page(page);
            }
            if (perPage) {
                uri = uri.perPage(perPage);
            }
            if (condition) {
                uri = uri.where(condition);
            }
            if (expansions) {
                expansions.forEach(expansion => uri = uri.expand(expansion));
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
    fetchExpandedById(id, expansions) {
        let uri = this.request().orders.byId(id);
        if (expansions) {
            expansions.forEach(expansion => uri = uri.expand(expansion));
        }
        const fetchRequest = {
            uri: uri.build(),
            method: 'GET',
            headers: this.headers,
        };
        return this.client.execute(fetchRequest).then(({ body }) => body);
    }
    delete(keyOrEntity) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, version } = yield this.resolveKeyAndVersion(keyOrEntity, this.fetchByKey.bind(this));
            const createRequest = {
                uri: this.request[this.entityType].byId(id).withVersion(version).build(),
                method: 'DELETE',
                headers: this.headers,
            };
            return this.client.execute(createRequest);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const entry = yield this.fetchById(id);
            const deleteRequest = {
                uri: this.request[this.entityType].byId(id).withVersion(entry.version).build(),
                method: 'DELETE',
                headers: this.headers,
            };
            return this.client.execute(deleteRequest);
        });
    }
    create(draft) {
        return __awaiter(this, void 0, void 0, function* () {
            const postRequest = {
                uri: this.request[this.entityType].build(),
                method: 'POST',
                headers: this.headers,
                body: draft,
            };
            return (this.client
                .execute(postRequest)
                .then(response => response.body));
        });
    }
    updateByIdAndVersion(id, version, actions) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateRequest = {
                uri: this.request[this.entityType].byId(id).build(),
                method: 'POST',
                headers: this.headers,
                body: { version, actions },
            };
            return this.client.execute(updateRequest);
        });
    }
    updateByIdOnly(id, actions) {
        return __awaiter(this, void 0, void 0, function* () {
            const entry = yield this.fetchById(id);
            return this.updateByIdAndVersion(id, entry.version, actions);
        });
    }
    updateByKeyOnly(key, actions) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, version } = yield this.resolveKeyAndVersion(key, this.fetchByKey.bind(this));
            return this.updateByIdAndVersion(id, version, actions);
        });
    }
    resolveKeyAndVersion(keyOrEntity, fetchByKey) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (typeof keyOrEntity) {
                case 'object':
                    return new Promise(resolve => {
                        const entity = keyOrEntity;
                        resolve({
                            id: entity.id,
                            key: entity.key,
                            version: entity.version,
                        });
                    });
                case 'string':
                    return fetchByKey(keyOrEntity)
                        .then((entity) => ({
                        id: entity.id,
                        key: entity.key,
                        version: entity.version,
                    }));
                default:
                    throw new Error(`Invalid value for keyOrEntity: ${JSON.stringify(keyOrEntity)}`);
            }
        });
    }
}
exports.CommonModule = CommonModule;
