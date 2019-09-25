"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PublishUpdateActionScope;
(function (PublishUpdateActionScope) {
    PublishUpdateActionScope["All"] = "All";
    PublishUpdateActionScope["Prices"] = "Prices";
})(PublishUpdateActionScope = exports.PublishUpdateActionScope || (exports.PublishUpdateActionScope = {}));
var AttributeConstraint;
(function (AttributeConstraint) {
    AttributeConstraint["None"] = "None";
    AttributeConstraint["Unique"] = "Unique";
    AttributeConstraint["CombinationUnique"] = "CombinationUnique";
    AttributeConstraint["SameForAll"] = "SameForAll";
})(AttributeConstraint = exports.AttributeConstraint || (exports.AttributeConstraint = {}));
var ChannelRole;
(function (ChannelRole) {
    ChannelRole["InventorySupply"] = "InventorySupply";
    ChannelRole["ProductDistribution"] = "ProductDistribution";
    ChannelRole["OrderExport"] = "OrderExport";
    ChannelRole["OrderImport"] = "OrderImport";
    ChannelRole["Primary"] = "Primary";
})(ChannelRole = exports.ChannelRole || (exports.ChannelRole = {}));
var TextInputHint;
(function (TextInputHint) {
    TextInputHint["SingleLine"] = "SingleLine";
    TextInputHint["MultiLine"] = "MultiLine";
})(TextInputHint = exports.TextInputHint || (exports.TextInputHint = {}));
var SubscriptionHealthStatus;
(function (SubscriptionHealthStatus) {
    SubscriptionHealthStatus["Healthy"] = "Healthy";
    SubscriptionHealthStatus["ConfigurationError"] = "ConfigurationError";
    SubscriptionHealthStatus["ConfigurationErrorDeliveryStopped"] = "ConfigurationErrorDeliveryStopped";
    SubscriptionHealthStatus["TemporaryError"] = "TemporaryError";
})(SubscriptionHealthStatus = exports.SubscriptionHealthStatus || (exports.SubscriptionHealthStatus = {}));
var OrderState;
(function (OrderState) {
    OrderState["Open"] = "Open";
    OrderState["Confirmed"] = "Confirmed";
    OrderState["Complete"] = "Complete";
    OrderState["Cancelled"] = "Cancelled";
})(OrderState = exports.OrderState || (exports.OrderState = {}));
var TaxMode;
(function (TaxMode) {
    TaxMode["Platform"] = "Platform";
    TaxMode["External"] = "External";
    TaxMode["ExternalAmount"] = "ExternalAmount";
    TaxMode["Disabled"] = "Disabled";
})(TaxMode = exports.TaxMode || (exports.TaxMode = {}));
var RoundingMode;
(function (RoundingMode) {
    RoundingMode["HalfEven"] = "HalfEven";
    RoundingMode["HalfUp"] = "HalfUp";
    RoundingMode["HalfDown"] = "HalfDown";
})(RoundingMode = exports.RoundingMode || (exports.RoundingMode = {}));
var TaxCalculationMode;
(function (TaxCalculationMode) {
    TaxCalculationMode["LineItemLevel"] = "LineItemLevel";
    TaxCalculationMode["UnitPriceLevel"] = "UnitPriceLevel";
})(TaxCalculationMode = exports.TaxCalculationMode || (exports.TaxCalculationMode = {}));
var ShipmentState;
(function (ShipmentState) {
    ShipmentState["Shipped"] = "Shipped";
    ShipmentState["Ready"] = "Ready";
    ShipmentState["Pending"] = "Pending";
    ShipmentState["Delayed"] = "Delayed";
    ShipmentState["Partial"] = "Partial";
    ShipmentState["Backorder"] = "Backorder";
})(ShipmentState = exports.ShipmentState || (exports.ShipmentState = {}));
var PaymentState;
(function (PaymentState) {
    PaymentState["BalanceDue"] = "BalanceDue";
    PaymentState["Failed"] = "Failed";
    PaymentState["Pending"] = "Pending";
    PaymentState["CreditOwed"] = "CreditOwed";
    PaymentState["Paid"] = "Paid";
})(PaymentState = exports.PaymentState || (exports.PaymentState = {}));
var InventoryMode;
(function (InventoryMode) {
    InventoryMode["TrackOnly"] = "TrackOnly";
    InventoryMode["ReserveOnOrder"] = "ReserveOnOrder";
    InventoryMode["None"] = "None";
})(InventoryMode = exports.InventoryMode || (exports.InventoryMode = {}));
var CartOrigin;
(function (CartOrigin) {
    CartOrigin["Customer"] = "Customer";
    CartOrigin["Merchant"] = "Merchant";
})(CartOrigin = exports.CartOrigin || (exports.CartOrigin = {}));
var LineItemPriceMode;
(function (LineItemPriceMode) {
    LineItemPriceMode["Standard"] = "Standard";
    LineItemPriceMode["GiftLineItem"] = "GiftLineItem";
})(LineItemPriceMode = exports.LineItemPriceMode || (exports.LineItemPriceMode = {}));
var LineItemMode;
(function (LineItemMode) {
    LineItemMode["Standard"] = "Standard";
    LineItemMode["GiftLineItem"] = "GiftLineItem";
})(LineItemMode = exports.LineItemMode || (exports.LineItemMode = {}));
var ShippingMethodState;
(function (ShippingMethodState) {
    ShippingMethodState["DoesNotMatchCart"] = "DoesNotMatchCart";
    ShippingMethodState["MatchesCart"] = "MatchesCart";
})(ShippingMethodState = exports.ShippingMethodState || (exports.ShippingMethodState = {}));
var DiscountCodeState;
(function (DiscountCodeState) {
    DiscountCodeState["NotActive"] = "NotActive";
    DiscountCodeState["NotValid"] = "NotValid";
    DiscountCodeState["DoesNotMatchCart"] = "DoesNotMatchCart";
    DiscountCodeState["MatchesCart"] = "MatchesCart";
    DiscountCodeState["MaxApplicationReached"] = "MaxApplicationReached";
    DiscountCodeState["ApplicationStoppedByPreviousDiscount"] = "ApplicationStoppedByPreviousDiscount";
})(DiscountCodeState = exports.DiscountCodeState || (exports.DiscountCodeState = {}));
var ReturnShipmentState;
(function (ReturnShipmentState) {
    ReturnShipmentState["Advised"] = "Advised";
    ReturnShipmentState["Returned"] = "Returned";
    ReturnShipmentState["BackInStock"] = "BackInStock";
    ReturnShipmentState["Unusable"] = "Unusable";
})(ReturnShipmentState = exports.ReturnShipmentState || (exports.ReturnShipmentState = {}));
var ReturnPaymentState;
(function (ReturnPaymentState) {
    ReturnPaymentState["NonRefundable"] = "NonRefundable";
    ReturnPaymentState["Initial"] = "Initial";
    ReturnPaymentState["Refunded"] = "Refunded";
    ReturnPaymentState["NotRefunded"] = "NotRefunded";
})(ReturnPaymentState = exports.ReturnPaymentState || (exports.ReturnPaymentState = {}));
