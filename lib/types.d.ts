export interface Entity {
    key: string;
    version: number;
}
export interface Product {
    id: string;
    key?: string;
    version: number;
    createdAt: DateTime;
    lastModifiedAt: DateTime;
    productType: Reference;
    masterData: ProductCatalogData;
    taxCategory?: Reference;
    state?: Reference;
}
export interface ProductDraft {
    key?: string;
    name: LocalizedString;
    productType: ResourceIdentifier;
    slug: LocalizedString;
    description?: LocalizedString;
    categories?: ResourceIdentifier[];
    categoryOrderHints?: CategoryOrderHints;
    metaTitle?: LocalizedString;
    metaDescription?: LocalizedString;
    metaKeywords?: LocalizedString;
    masterVariant?: ProductVariantDraft;
    variants?: ProductVariantDraft[];
    taxCategory?: ResourceIdentifier;
    searchKeywords?: SearchKeywords;
    state?: Reference;
    publish?: boolean;
}
export interface ProductVariantDraft {
    sku?: string;
    key?: string;
    prices?: PriceDraft[];
    images?: Image[];
    assets?: AssetDraft[];
    attributes?: Attribute[];
}
export interface Asset {
    id: string;
    key?: string;
    sources: AssetSource[];
    name: LocalizedString;
    description?: LocalizedString;
    tags?: string[];
    custom?: CustomFields;
}
export interface AssetDraft {
    key?: string;
    sources: AssetSource[];
    name: LocalizedString;
    description?: LocalizedString;
    tags?: string[];
    custom?: CustomFieldsDraft;
}
export interface AssetSource {
    uri: string;
    key?: string;
    dimensions?: AssetDimensions;
    contentType?: string;
}
export interface CustomFieldsDraft {
    type: ResourceIdentifier;
    fields?: any;
}
export interface PriceDraft {
    value: BaseMoney;
    country?: string;
    customerGroup?: Reference;
    channel?: ResourceIdentifier;
    validFrom?: DateTime;
    validUntil?: DateTime;
    tiers?: PriceTier[];
    custom?: CustomFieldsDraft;
}
export interface PriceTier {
    minimumQuantity: number;
    value: BaseMoney;
}
export interface SearchKeywords {
    text: string;
    suggestTokenizer?: SuggestTokenizer;
}
export declare type SuggestTokenizer = WhitespaceTokenizer | CustomTokenizer;
export interface WhitespaceTokenizer {
    type: 'whitespace';
}
export interface CustomTokenizer {
    type: 'custom';
    inputs: string[];
}
export declare type CategoryOrderHints = any;
export declare type ResourceIdentifier = ResourceIdentifierById | ResourceIdentifierByKey;
export interface ResourceIdentifierById {
    id: string;
    typeId?: string;
}
export interface ResourceIdentifierByKey {
    key: string;
    typeId?: string;
}
export interface KeyReference {
    typeId: string;
    key: string;
}
export interface IdReference {
    typeId: string;
    id: string;
}
export declare type Reference = KeyReference | IdReference;
export interface ProductCatalogData {
    published: Boolean;
    current: ProductData;
    staged: ProductData;
    hasStagedChanges: Boolean;
}
export interface ProductData {
    name: LocalizedString;
    categories: Reference[];
    description?: LocalizedString;
    slug: LocalizedString;
    masterVariant: ProductVariant;
    variants: ProductVariant[];
}
export interface ProductVariant {
    id: number;
    sku?: string;
    key?: string;
    prices?: Price[];
    attributes?: Attribute[];
    price?: Price;
    images?: Image[];
    assets?: Asset[];
    availability?: ProductVariantAvailability;
    isMatchingVariant?: Boolean;
    scopedPrice?: ScopedPrice;
    scopedPriceDiscounted?: Boolean;
}
export declare type DateTime = string;
export interface Price {
    id: string;
    value: BaseMoney;
    country?: string;
    customerGroup?: Reference;
    channel?: Reference;
    validFrom?: DateTime;
    validUntil?: DateTime;
    discounted?: DiscountedPrice;
    custom?: CustomFields;
}
export interface BaseMoney {
    type: string;
    currencyCode: string;
    centAmount: number;
    fractionDigits: number;
}
export interface DiscountedPrice {
    value: Money;
    discount: Reference;
}
export interface Money {
    type: string;
    currencyCode: string;
    centAmount: number;
    fractionDigits: number;
}
export interface CustomFields {
    type: Reference;
    fields: any;
}
export interface Attribute {
    name: string;
    value: any;
}
export interface Image {
    url: string;
    dimensions: AssetDimensions;
    label?: string;
}
export interface AssetDimensions {
    w: number;
    h: number;
}
export interface ProductVariantAvailability {
    isOnStock?: Boolean;
    restockableInDays?: number;
    availableQuantity?: number;
    channels?: any;
}
export interface ScopedPrice {
    id: string;
    value: BaseMoney;
    currentValue: BaseMoney;
    country?: string;
    customerGroup?: Reference;
    channel?: Reference;
    validFrom?: DateTime;
    validUntil?: DateTime;
    discounted?: DiscountedPrice;
    custom?: CustomFields;
}
export interface LocalizedString {
    [locale: string]: string;
}
export interface ProductType {
    id: string;
    key?: string;
    version: number;
    createdAt: DateTime;
    createdBy: CreatedBy;
    lastModifiedAt: DateTime;
    lastModifiedBy: LastModifiedBy;
    name: string;
    description: string;
    attributes: AttributeDefinition[];
}
export interface ProductTypeDraft {
    name: string;
    key?: string;
    description: string;
    attributes: AttributeDefinitionDraft[];
}
export declare type UpdateAction = AddAttributeDefinition | RemoveAttributeDefinition | AddFieldDefinition | RemoveFieldDefinition;
export interface AddAttributeDefinition {
    action: 'addAttributeDefinition';
    attribute: AttributeDefinitionDraft;
}
export interface RemoveAttributeDefinition {
    action: 'removeAttributeDefinition';
    name: string;
}
export interface AddFieldDefinition {
    action: 'addFieldDefinition';
    fieldDefinition: FieldDefinition;
}
export interface RemoveFieldDefinition {
    action: 'removeFieldDefinition';
    fieldName: string;
}
export interface ChangeOrderStateDefinition {
    action: 'changeOrderState';
    orderState: OrderState;
}
export interface AttributeDefinitionDraft {
    type: AttributeType;
    name: string;
    label: LocalizedString;
    isRequired: boolean;
    isSearchable?: boolean;
}
export interface AttributeDefinition {
    type: AttributeType;
    name: string;
    label: LocalizedString;
    isRequired: boolean;
    attributeConstraint: AttributeConstraint;
    inputTip?: LocalizedString;
    inputHint: TextInputHint;
    isSearchable: boolean;
}
export declare enum AttributeConstraint {
    None = "None",
    Unique = "Unique",
    CombinationUnique = "CombinationUnique",
    SameForAll = "SameForAll"
}
export interface AttributeType {
    name: string;
}
export interface PagedQueryResult<T> {
    offset: number;
    limit: number;
    count: number;
    total?: number;
    results: T[];
    meta?: any;
}
export interface TaxCategory {
    id: string;
    key?: string;
    version: number;
    createdAt: DateTime;
    lastModifiedAt: DateTime;
    name: string;
    description?: string;
    rates: TaxRate[];
}
export interface TaxCategoryDraft {
    name: string;
    key?: string;
    description?: string;
    rates: TaxRateDraft[];
}
export interface TaxRateDraft {
    name: string;
    amount?: number;
    includedInPrice: boolean;
    country: string;
    state?: string;
    subRates?: SubRate[];
}
export interface SubRate {
    name: string;
    amount: number;
}
export interface TaxRate {
    id?: string;
    name: string;
    amount: number;
    includedInPrice: boolean;
    country: string;
    state?: string;
}
export interface CustomObjectDraft {
    container: string;
    key: string;
    value: any;
    version?: number;
}
export interface CustomObject {
    id: string;
    createdAt: DateTime;
    lastModifiedAt: DateTime;
    container: string;
    key: string;
    value: any;
    version: number;
}
export interface InventoryEntry {
    id: string;
    version: number;
    createdAt: DateTime;
    lastModifiedAt: DateTime;
    sku: string;
    supplyChannel?: Reference;
    quantityOnStock: number;
    availableQuantity: number;
    restockableInDays?: number;
    expectedDelivery?: DateTime;
    custom?: CustomFields;
}
export interface InventoryEntryDraft {
    sku: string;
    quantityOnStock: number;
    restockableInDays?: number;
    expectedDelivery?: DateTime;
    supplyChannel?: ResourceIdentifier;
    custom?: CustomFieldsDraft;
}
export interface Channel {
    id: string;
    version: number;
    createdAt: DateTime;
    lastModifiedAt: DateTime;
    key: string;
    roles: ChannelRole[];
    name?: LocalizedString;
    description?: LocalizedString;
    address?: Address;
    reviewRatingStatistics?: ReviewRatingStatistics;
    custom?: CustomFields;
}
export interface ChannelDraft {
    key: string;
    roles?: ChannelRole[];
    name?: LocalizedString;
    description?: LocalizedString;
    address?: Address;
    custom?: CustomFieldsDraft;
}
export declare enum ChannelRole {
    InventorySupply = "InventorySupply",
    ProductDistribution = "ProductDistribution",
    OrderExport = "OrderExport",
    OrderImport = "OrderImport",
    Primary = "Primary"
}
export interface Address {
    country: string;
    id?: string;
    key?: string;
    title?: string;
    salutation?: string;
    firstName?: string;
    lastName?: string;
    streetName?: string;
    streetNumber?: string;
    additionalStreetInfo?: string;
    postalCode?: string;
    city?: string;
    region?: string;
    state?: string;
    company?: string;
    department?: string;
    building?: string;
    apartment?: string;
    pOBox?: string;
    phone?: string;
    mobile?: string;
    email?: string;
    fax?: string;
    additionalAddressInfo?: string;
    externalId?: string;
}
export interface ReviewRatingStatistics {
    averageRating: number;
    highestRating: number;
    lowestRating: number;
    count: number;
    ratingsDistribution: any;
}
export interface Category {
    id: string;
    key?: string;
    version: number;
    createdAt: DateTime;
    createdBy: CreatedBy;
    lastModifiedAt: DateTime;
    lastModifiedBy: LastModifiedBy;
    name: LocalizedString;
    slug: LocalizedString;
    description?: LocalizedString;
    ancestors: Reference[];
    parent?: Reference;
    orderHint: string;
    externalId?: string;
    metaTitle?: LocalizedString;
    metaDescription?: LocalizedString;
    metaKeywords?: LocalizedString;
    custom?: CustomFields;
    assets?: Asset[];
}
export interface CreatedBy {
    clientId?: string;
    externalUserId?: string;
    customer?: Reference;
    anonymousId?: string;
}
export interface LastModifiedBy {
    clientId?: string;
    externalUserId?: string;
    customer?: Reference;
    anonymousId?: string;
}
export interface CustomTypeDraft {
    key: string;
    name: LocalizedString;
    description?: LocalizedString;
    resourceTypeIds: string[];
    fieldDefinitions?: FieldDefinition[];
}
export interface CustomType {
    id: string;
    key: string;
    version: number;
    createdAt: DateTime;
    createdBy: CreatedBy;
    lastModifiedAt: DateTime;
    lastModifiedBy: LastModifiedBy;
    name: LocalizedString;
    description?: LocalizedString;
    resourceTypeIds: string[];
    fieldDefinitions: FieldDefinition[];
}
export interface FieldDefinition {
    type: FieldType;
    name: string;
    label: LocalizedString;
    required: boolean;
    inputHint: TextInputHint;
}
export interface FieldType {
    name: string;
    values?: any[];
    elementType?: FieldType;
    referenceTypeId?: 'cart' | 'category' | 'channel' | 'customer' | 'key-value-document' | 'order' | 'product' | 'product-type' | 'review' | 'state' | 'shipping-method' | 'zone';
}
export declare enum TextInputHint {
    SingleLine = "SingleLine",
    MultiLine = "MultiLine"
}
export interface Extension {
    id: string;
    key?: string;
    version: number;
    createdAt: DateTime;
    createdBy: CreatedBy;
    lastModifiedAt: DateTime;
    lastModifiedBy: LastModifiedBy;
    destination: Destination;
    triggers: Trigger[];
    timeoutInMs?: number;
}
export interface ExtensionDraft {
    key?: string;
    destination: Destination;
    triggers: Trigger[];
    timeoutInMs?: number;
}
export declare type Destination = HttpDestination | AzureServiceBusDestination | AwsLambdaDestination;
export interface HttpDestination {
    type: "HTTP";
    url: string;
    authentication?: HttpDestinationAuthentication;
}
export interface AzureServiceBusDestination {
    type: "AzureServiceBus";
    connectionString: string;
}
export interface AwsLambdaDestination {
    type: "AWSLambda";
    arn: string;
    accessKey: string;
    accessSecret: string;
}
export declare type HttpDestinationAuthentication = AuthorizationHeader | AzureFunctionsAuthentication;
export interface AuthorizationHeader {
    type: 'AuthorizationHeader';
    headerValue: string;
}
export interface AzureFunctionsAuthentication {
    type: 'AzureFunctions';
    key: string;
}
export interface Trigger {
    resourceTypeId: 'cart' | 'order' | 'payment' | 'customer';
    actions: Array<'Create' | 'Update'>;
}
export interface SubscriptionDraft {
    key?: string;
    destination: Destination;
    messages?: MessageSubscription[];
    changes?: ChangeSubscription[];
    format?: Format;
}
export interface Subscription {
    id: string;
    key?: string;
    version: number;
    createdAt: DateTime;
    createdBy: CreatedBy;
    lastModifiedAt: DateTime;
    lastModifiedBy: LastModifiedBy;
    destination: Destination;
    messages: MessageSubscription[];
    changes: ChangeSubscription[];
    format: Format;
    status: SubscriptionHealthStatus;
}
export interface MessageSubscription {
    resourceTypeId: string;
    types?: string[];
}
export interface ChangeSubscription {
    resourceTypeId: 'cart' | 'cart-discount' | 'category' | 'channel' | 'customer' | 'customer-group' | 'discount-code' | 'extension' | 'inventory-entry' | 'order' | 'payment' | 'product' | 'product-discount' | 'product-type' | 'review' | 'shopping-list' | 'subscription' | 'state' | 'tax-category' | 'type';
}
export declare type Format = PlatformFormat | CloudEventsFormat;
export interface PlatformFormat {
    type: 'Platform';
}
export interface CloudEventsFormat {
    type: 'CloudEvents';
    cloudEventsVersion: '0.1';
}
export declare enum SubscriptionHealthStatus {
    Healthy = "Healthy",
    ConfigurationError = "ConfigurationError",
    ConfigurationErrorDeliveryStopped = "ConfigurationErrorDeliveryStopped",
    TemporaryError = "TemporaryError"
}
export declare type UpdateOrderAction = ChangeOrderStateAction;
export declare enum OrderState {
    Open = "Open",
    Confirmed = "Confirmed",
    Completed = "Completed",
    Cancelled = "Cancelled"
}
export interface ChangeOrderStateAction {
    action: "changeOrderState";
    orderState: OrderState;
}
export declare type Sort = SortStatement[];
export interface SortStatement {
    by: string;
    direction: 'asc' | 'desc';
}
export interface Order {
    id: string;
    version: number;
    createdAt: DateTime;
    createdBy?: CreatedBy;
    lastModifiedAt: DateTime;
    lastModifiedBy?: LastModifiedBy;
    completedAt?: DateTime;
    orderNumber?: string;
    customerId?: string;
    customerEmail?: string;
    anonymousId?: string;
    store?: KeyReference;
    lineItems: LineItem[];
    customLineItems: CustomLineItem[];
    totalPrice: Money;
    taxedPrice?: TaxedPrice;
    shippingAddress?: Address;
    billingAddress?: Address;
    taxMode: TaxMode;
    taxRoundingMode: RoundingMode;
    taxCalculationMode: TaxCalculationMode;
    customerGroup?: Reference;
    country?: string;
    orderState: OrderState;
    state?: Reference;
    shipmentState?: ShipmentState;
    paymentState?: PaymentState;
    shippingInfo?: ShippingInfo;
    syncInfo: Set<SyncInfo>;
    returnInfo: Set<ReturnInfo>;
    discountCodes: DiscountCodeInfo[];
    refusedGifts: Reference[];
    lastMessageSequenceNumber: number;
    cart?: Reference;
    custom?: CustomFields;
    paymentInfo?: PaymentInfo;
    locale?: string;
    inventoryMode: InventoryMode;
    shippingRateInput?: ShippingRateInput;
    origin: CartOrigin;
    itemShippingAddresses: Address[];
}
export interface LineItem {
    id: string;
    productId: string;
    name: LocalizedString;
    productSlug?: LocalizedString;
    productType?: Reference;
    variant: ProductVariant;
    price: Price;
    taxedPrice?: TaxedItemPrice;
    totalPrice: Money;
    quantity: Number;
    state: ItemState[];
    taxRate?: TaxRate;
    supplyChannel?: Reference;
    distributionChannel: Reference;
    discountedPricePerQuantity: DiscountedLineItemPriceForQuantity[];
    priceMode: LineItemPriceMode;
    lineItemMode: LineItemMode;
    custom?: CustomFields;
    shippingDetails?: ItemShippingDetails;
}
export interface CustomLineItem {
    id: string;
    name: LocalizedString;
    money: BaseMoney;
    taxedPrice?: TaxedItemPrice;
    totalPrice: Money;
    slug: string;
    quantity: Number;
    state: ItemState[];
    taxCategory?: Reference;
    taxRate?: TaxRate;
    discountedPricePerQuantit: DiscountedLineItemPriceForQuantity[];
    custom?: CustomFields;
    shippingDetails?: ItemShippingDetails;
}
export declare enum TaxMode {
    Platform = "Platform",
    External = "External",
    ExternalAmount = "ExternalAmount",
    Disabled = "Disabled"
}
export interface TaxedPrice {
    totalNet: Money;
    totalGross: Money;
    taxPortions: TaxPortion[];
}
export interface TaxPortion {
    name?: string;
    rate: Number;
    amount: Money;
}
export declare enum RoundingMode {
    HalfEven = "HalfEven",
    HalfUp = "HalfUp",
    HalfDown = "HalfDown"
}
export declare enum TaxCalculationMode {
    LineItemLevel = "LineItemLevel",
    UnitPriceLevel = "UnitPriceLevel"
}
export declare enum ShipmentState {
    Shipped = "Shipped",
    Ready = "Ready",
    Pending = "Pending",
    Delayed = "Delayed",
    Partial = "Partial",
    Backorder = "Backorder"
}
export declare enum PaymentState {
    BalanceDue = "BalanceDue",
    Failed = "Failed",
    Pending = "Pending",
    CreditOwed = "CreditOwed",
    Paid = "Paid"
}
export interface ShippingInfo {
    shippingMethodName: string;
    price: Money;
    shippingRate: ShippingRate;
    taxedPrice?: TaxedItemPrice;
    taxRate?: TaxRate;
    taxCategory?: Reference;
    shippingMethod?: Reference;
    deliveries: Delivery[];
    discountedPrice?: DiscountedLineItemPrice;
    shippingMethodState: ShippingMethodState;
}
export declare type Set<T> = T[];
export interface SyncInfo {
    channel: Reference;
    externalId?: string;
    syncedAt: DateTime;
}
export interface ReturnInfo {
    items: ReturnItem[];
    returnTrackingId: string;
    returnDate: DateTime;
}
export interface DiscountCodeInfo {
    discountCode: Reference;
    state?: DiscountCodeState;
}
export interface PaymentInfo {
    payments: Reference[];
}
export declare enum InventoryMode {
    TrackOnly = "TrackOnly",
    ReserveOnOrder = "ReserveOnOrder",
    None = "None"
}
export declare type ShippingRateInput = ClassificationShippingRateInput | ScoreShippingRateInput;
export interface ClassificationShippingRateInput {
    type: "Classification";
    key: string;
    label: LocalizedString;
}
export interface ScoreShippingRateInput {
    type: "Score";
    score: Number;
}
export declare enum CartOrigin {
    Customer = "Customer",
    Merchant = "Merchant"
}
export interface TaxedItemPrice {
    totalNet: Money;
    totalGross: Money;
}
export interface ItemState {
    quantity: number;
    state: Reference;
}
export interface DiscountedLineItemPriceForQuantity {
    quantity: number;
    discountedPrice: DiscountedLineItemPrice;
}
export declare enum LineItemPriceMode {
    Standard = "Standard",
    GiftLineItem = "GiftLineItem"
}
export declare enum LineItemMode {
    Standard = "Standard",
    GiftLineItem = "GiftLineItem"
}
export interface ItemShippingDetails {
    targets: ItemShippingTarget[];
    valid: boolean;
}
export interface ShippingRate {
    price: Money;
    freeAbove?: Money;
    tiers: ShippingRatePriceTier[];
    isMatching: boolean;
}
export interface Delivery {
    id: string;
    createdAt: DateTime;
    items: DeliveryItem[];
    parcels: Parcel[];
    address?: Address;
}
export interface DiscountedLineItemPrice {
    value: BaseMoney;
    includedDiscounts: DiscountedLineItemPortion[];
}
export interface DiscountedLineItemPortion {
    discount: Reference;
    discountedAmount: BaseMoney;
}
export declare enum ShippingMethodState {
    DoesNotMatchCart = "DoesNotMatchCart",
    MatchesCart = "MatchesCart"
}
export declare type ReturnItem = LineItemReturnItem | CustomLineItemReturnItem;
export interface LineItemReturnItem {
    id: string;
    type: LineItemReturnItem;
    quantity: number;
    lineItemId: string;
    comment: string;
    shipmentState: ReturnShipmentState;
    paymentState: ReturnPaymentState;
    lastModifiedAt: DateTime;
    createdAt: DateTime;
}
export interface CustomLineItemReturnItem {
    id: string;
    type: CustomLineItemReturnItem;
    quantity: number;
    customLineItemId: string;
    comment: string;
    shipmentState: ReturnShipmentState;
    paymentState: ReturnPaymentState;
    lastModifiedAt: DateTime;
    createdAt: DateTime;
}
export declare enum DiscountCodeState {
    NotActive = "NotActive",
    NotValid = "NotValid",
    DoesNotMatchCart = "DoesNotMatchCart",
    MatchesCart = "MatchesCart",
    MaxApplicationReached = "MaxApplicationReached",
    ApplicationStoppedByPreviousDiscount = "ApplicationStoppedByPreviousDiscount"
}
export interface ItemShippingTarget {
    addressKey: string;
    quantity: number;
}
export declare type ShippingRatePriceTier = CartValue | CartClassification | CartScore;
export interface CartValue {
    type: "CartValue";
    minimumCentAmount: number;
    price: Money;
    isMatching?: boolean;
}
export interface CartClassification {
    type: "CartClassification";
    value: string;
    price: Money;
    isMatching?: boolean;
}
export interface CartScore {
    type: "CartScore";
    score: number;
    price: Money;
    isMatching?: boolean;
}
export interface DeliveryItem {
    id: string;
    quantity: number;
}
export interface Parcel {
    id: string;
    createdAt: DateTime;
    measurements?: ParcelMeasurements;
    trackingData?: TrackingData;
    items?: DeliveryItem;
}
export declare enum ReturnShipmentState {
    Advised = "Advised",
    Returned = "Returned",
    BackInStock = "BackInStock",
    Unusable = "Unusable"
}
export declare enum ReturnPaymentState {
    NonRefundable = "NonRefundable",
    Initial = "Initial",
    Refunded = "Refunded",
    NotRefunded = "NotRefunded"
}
export interface ParcelMeasurements {
    heightInMillimeter: number;
    lengthInMillimeter: number;
    widthInMillimeter: number;
    weightInGram: number;
}
export interface TrackingData {
    trackingId?: string;
    carrier?: string;
    provider?: string;
    providerTransaction?: string;
    isReturn?: boolean;
}
