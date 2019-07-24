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
class InventoryEntries extends CommonModule_1.CommonModule {
    constructor() {
        super(...arguments);
        this.entityType = 'inventory';
    }
    fetchAllByChannelId(channelId) {
        const condition = `supplyChannel(typeId="channel" and id="${channelId}")`;
        return this.fetchAll(1, 500, condition);
    }
    fetchBySkuAndSupplyChannelKey(sku, supplyChannelKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const channel = yield this.commercetools.channels.fetchByKey(supplyChannelKey);
            const fetchRequest = {
                uri: this.request.inventory.where(`sku="${sku}" and supplyChannel(typeId="channel" and id="${channel.id}")`).build(),
                method: 'GET',
                headers: this.headers,
            };
            return (this.client
                .execute(fetchRequest)
                .then(({ body: { results } }) => results[0]));
        });
    }
}
exports.InventoryEntries = InventoryEntries;
