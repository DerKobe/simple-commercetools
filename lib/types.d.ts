export interface CommercetoolsConfig {
    projectKey: string;
    clientId: string;
    clientSecret: string;
    locale: string;
    concurrency: number;
    authHost: string;
    apiHost: string;
}
export interface Entity {
    id: string;
    key?: string;
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
    categories?: Array<ResourceIdentifier>;
    categoryOrderHints?: CategoryOrderHints;
    metaTitle?: LocalizedString;
    metaDescription?: LocalizedString;
    metaKeywords?: LocalizedString;
    masterVariant?: ProductVariantDraft;
    variants?: Array<ProductVariantDraft>;
    taxCategory?: ResourceIdentifier;
    searchKeywords?: SearchKeywords;
    state?: Reference;
    publish?: boolean;
}
export interface ProductVariantDraft {
    sku?: string;
    key?: string;
    prices?: Array<PriceDraft>;
    images?: Array<Image>;
    assets?: Array<AssetDraft>;
    attributes?: Array<Attribute>;
}
export interface Asset {
    id: string;
    key?: string;
    sources: Array<AssetSource>;
    name: LocalizedString;
    description?: LocalizedString;
    tags?: Array<string>;
    custom?: CustomFields;
}
export interface AssetDraft {
    key?: string;
    sources: Array<AssetSource>;
    name: LocalizedString;
    description?: LocalizedString;
    tags?: Array<string>;
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
    tiers?: Array<PriceTier>;
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
    inputs: Array<string>;
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
    obj?: any;
}
export interface IdReference {
    typeId: string;
    id: string;
    obj?: any;
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
    categories: Array<Reference>;
    description?: LocalizedString;
    slug: LocalizedString;
    masterVariant: ProductVariant;
    variants: Array<ProductVariant>;
}
export interface ProductVariant {
    id: number;
    sku?: string;
    key?: string;
    prices?: Array<Price>;
    attributes?: Array<Attribute>;
    price?: Price;
    images?: Array<Image>;
    assets?: Array<Asset>;
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
    centAmount?: number;
    preciseAmount?: number;
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
    attributes: Array<AttributeDefinition>;
}
export interface ProductTypeDraft {
    name: string;
    key?: string;
    description: string;
    attributes: Array<AttributeDefinitionDraft>;
}
export declare type UpdateAction = AddAssetUpdateAction | RemoveAssetByIdUpdateAction | RemoveAssetByKeyUpdateAction | AddExternalImageImageUpdateAction | RemoveImageUpdateAction | SetSkuUpdateAction | ChangePriceUpdateAction | SetPricesUpdateAction | ChangeSlugUpdateAction | ChangeProductNameUpdateAction | AddAttributeUpdateAction | RemoveAttributeUpdateAction | AddFieldUpdateAction | RemoveFieldUpdateAction | ChangeOrderStateUpdateAction | SetAttributeUpdateAction | UnpublishUpdateAction | SetKeyUpdateAction | ChangeNameUpdateAction | ChangeDescriptionUpdateAction | AddAttributeDefinitionUpdateAction | RemoveAttributeDefinitionUpdateAction | ChangeAttributeNameUpdateAction | ChangeLabelUpdateAction | SetInputTipUpdateAction | AddPlainEnumValueUpdateAction | AddLocalizedEnumValueUpdateAction | RemoveEnumValuesUpdateAction | ChangeAttributeOrderByNameUpdateAction | ChangePlainEnumValueOrderUpdateAction | ChangeLocalizedEnumValueOrderUpdateAction | ChangeEnumKeyUpdateAction | ChangePlainEnumValueLabelUpdateAction | ChangeLocalizedEnumValueLabelUpdateAction | ChangeIsSearchableUpdateAction | ChangeInputHintUpdateAction | AttributeConstraintUpdateAction | PublishUpdateAction;
export interface SetKeyUpdateAction {
    action: 'setKey';
    key?: string;
}
export interface ChangeNameUpdateAction {
    action: 'changeName';
    name: string;
}
export interface ChangeDescriptionUpdateAction {
    action: 'changeDescription';
    description: string;
}
export interface AddAttributeDefinitionUpdateAction {
    action: 'addAttributeDefinition';
    attribute: AttributeDefinitionDraft;
}
export interface RemoveAttributeDefinitionUpdateAction {
    action: 'removeAttributeDefinition';
    name: string;
}
export interface ChangeAttributeNameUpdateAction {
    action: 'changeAttributeName';
    attributeName: string;
    newAttributeName: string;
}
export interface ChangeLabelUpdateAction {
    action: 'changeLabel';
    attributeName: string;
    label: LocalizedString;
}
export interface SetInputTipUpdateAction {
    action: 'setInputTip';
    attributeName: string;
    inputTip: LocalizedString;
}
export interface AddPlainEnumValueUpdateAction {
    action: 'addPlainEnumValue';
    attributeName: string;
    value: PlainEnumValue;
}
export interface AddLocalizedEnumValueUpdateAction {
    action: 'addLocalizedEnumValue';
    attributeName: string;
    value: LocalizedEnumValue;
}
export interface RemoveEnumValuesUpdateAction {
    action: 'removeEnumValues';
    attributeName: string;
    keys: Array<string>;
}
export interface ChangeAttributeOrderByNameUpdateAction {
    action: 'changeAttributeOrderByName';
    attributeNames: Array<string>;
}
export interface ChangePlainEnumValueOrderUpdateAction {
    action: 'changePlainEnumValueOrder';
    attributeName: string;
    values: Array<PlainEnumValue>;
}
export interface ChangeLocalizedEnumValueOrderUpdateAction {
    action: 'changeLocalizedEnumValueOrder';
    attributeName: string;
    values: Array<LocalizedEnumValue>;
}
export interface ChangeEnumKeyUpdateAction {
    action: 'changeEnumKey';
    attributeName: string;
    key: string;
    newKey: string;
}
export interface ChangePlainEnumValueLabelUpdateAction {
    action: 'changePlainEnumValueLabel';
    attributeName: string;
    newValue: PlainEnumValue;
}
export interface ChangeLocalizedEnumValueLabelUpdateAction {
    action: 'changeLocalizedEnumValueLabel';
    attributeName: string;
    newValue: LocalizedEnumValue;
}
export interface ChangeIsSearchableUpdateAction {
    action: 'changeIsSearchable';
    attributeName: string;
    isSearchable: boolean;
}
export interface ChangeInputHintUpdateAction {
    action: 'changeInputHint';
    attributeName: string;
    newValue: TextInputHint;
}
export interface AttributeConstraintUpdateAction {
    action: 'attributeConstraint';
    attributeName: string;
    newValue: AttributeConstraint.None;
}
export interface ChangeTaxCategoryNameUpdateAction {
    action: 'changeName';
    name: string;
}
export interface SetKeyUpdateAction {
    action: 'setKey';
    key?: string;
}
export interface SetDescriptionUpdateAction {
    action: 'setDescription';
    description?: string;
}
export interface RemoveTaxRateUpdateAction {
    action: 'removeTaxRate';
    taxRateId: string;
}
export interface AddTaxRateUpdateAction {
    action: 'addTaxRate';
    taxRate: TaxRate;
}
export interface ReplaceTaxRateUpdateAction {
    action: 'replaceTaxRate';
    taxRateId: string;
    taxRate: TaxRate;
}
export interface PublishUpdateAction {
    action: 'publish';
    scope?: PublishUpdateActionScope;
}
export declare enum PublishUpdateActionScope {
    All = "All",
    Prices = "Prices"
}
export interface UnpublishUpdateAction {
    action: 'unpublish';
}
export interface SetAttributeUpdateAction {
    action: 'setAttribute';
    variantId: number | string;
    name: string;
    value?: any;
    staged?: boolean;
}
export interface AddAssetUpdateAction {
    action: 'addAsset';
    variantId: number | string;
    position?: string;
    asset: AssetDraft;
    staged?: boolean;
}
export interface RemoveAssetByIdUpdateAction {
    action: 'removeAsset';
    variantId: number | string;
    assetId: string;
    staged?: boolean;
}
export interface RemoveAssetByKeyUpdateAction {
    action: 'removeAsset';
    variantId: number | string;
    assetKey: string;
    staged?: boolean;
}
export interface AddExternalImageImageUpdateAction {
    action: 'addExternalImage';
    variantId: number | string;
    image: Image;
    staged?: boolean;
}
export interface RemoveImageUpdateAction {
    action: 'removeImage';
    variantId: number | string;
    imageUrl: string;
    staged?: boolean;
}
export interface SetSkuUpdateAction {
    action: 'setSku';
    variantId: number | string;
    sku: string;
    staged?: boolean;
}
export interface ChangePriceUpdateAction {
    action: 'changePrice';
    priceId: string;
    price: PriceDraft;
    staged?: boolean;
}
export interface SetPricesUpdateAction {
    action: 'setPrices';
    variantId: number | string;
    prices: Array<PriceDraft>;
    staged?: boolean;
}
export interface ChangeProductNameUpdateAction {
    action: 'changeName';
    name: LocalizedString;
    staged?: boolean;
}
export interface ChangeSlugUpdateAction {
    action: 'changeSlug';
    slug: LocalizedString;
    staged?: boolean;
}
export interface AddAttributeUpdateAction {
    action: 'addAttributeDefinition';
    attribute: AttributeDefinitionDraft;
}
export interface RemoveAttributeUpdateAction {
    action: 'removeAttributeDefinition';
    name: string;
}
export interface AddFieldUpdateAction {
    action: 'addFieldDefinition';
    fieldDefinition: FieldDefinition;
}
export interface RemoveFieldUpdateAction {
    action: 'removeFieldDefinition';
    fieldName: string;
}
export interface ChangeOrderStateUpdateAction {
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
    results: Array<T>;
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
    rates: Array<TaxRate>;
}
export interface TaxCategoryDraft {
    name: string;
    key?: string;
    description?: string;
    rates: Array<TaxRateDraft>;
}
export interface TaxRateDraft {
    name: string;
    amount?: number;
    includedInPrice: boolean;
    country: string;
    state?: string;
    subRates?: Array<SubRate>;
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
    roles: Array<ChannelRole>;
    name?: LocalizedString;
    description?: LocalizedString;
    address?: Address;
    reviewRatingStatistics?: ReviewRatingStatistics;
    custom?: CustomFields;
}
export interface ChannelDraft {
    key: string;
    roles?: Array<ChannelRole>;
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
    ancestors: Array<Reference>;
    parent?: Reference;
    orderHint: string;
    externalId?: string;
    metaTitle?: LocalizedString;
    metaDescription?: LocalizedString;
    metaKeywords?: LocalizedString;
    custom?: CustomFields;
    assets?: Array<Asset>;
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
    resourceTypeIds: Array<string>;
    fieldDefinitions?: Array<FieldDefinition>;
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
    resourceTypeIds: Array<string>;
    fieldDefinitions: Array<FieldDefinition>;
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
    values?: Array<any>;
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
    triggers: Array<Trigger>;
    timeoutInMs?: number;
}
export interface ExtensionDraft {
    key?: string;
    destination: Destination;
    triggers: Array<Trigger>;
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
    messages?: Array<MessageSubscription>;
    changes?: Array<ChangeSubscription>;
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
    messages: Array<MessageSubscription>;
    changes: Array<ChangeSubscription>;
    format: Format;
    status: SubscriptionHealthStatus;
}
export interface MessageSubscription {
    resourceTypeId: string;
    types?: Array<string>;
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
    Complete = "Complete",
    Cancelled = "Cancelled"
}
export interface ChangeOrderStateAction {
    action: "changeOrderState";
    orderState: OrderState;
}
export declare type Sort = Array<SortStatement>;
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
    lineItems: Array<LineItem>;
    customLineItems: Array<CustomLineItem>;
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
    discountCodes: Array<DiscountCodeInfo>;
    refusedGifts: Array<Reference>;
    lastMessageSequenceNumber: number;
    cart?: Reference;
    custom?: CustomFields;
    paymentInfo?: PaymentInfo;
    locale?: string;
    inventoryMode: InventoryMode;
    shippingRateInput?: ShippingRateInput;
    origin: CartOrigin;
    itemShippingAddresses: Array<Address>;
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
    state: Array<ItemState>;
    taxRate?: TaxRate;
    supplyChannel?: Reference;
    distributionChannel: Reference;
    discountedPricePerQuantity: Array<DiscountedLineItemPriceForQuantity>;
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
    state: Array<ItemState>;
    taxCategory?: Reference;
    taxRate?: TaxRate;
    discountedPricePerQuantit: Array<DiscountedLineItemPriceForQuantity>;
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
    taxPortions: Array<TaxPortion>;
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
    deliveries: Array<Delivery>;
    discountedPrice?: DiscountedLineItemPrice;
    shippingMethodState: ShippingMethodState;
}
export declare type Set<T> = Array<T>;
export interface SyncInfo {
    channel: Reference;
    externalId?: string;
    syncedAt: DateTime;
}
export interface ReturnInfo {
    items: Array<ReturnItem>;
    returnTrackingId: string;
    returnDate: DateTime;
}
export interface DiscountCodeInfo {
    discountCode: Reference;
    state?: DiscountCodeState;
}
export interface PaymentInfo {
    payments: Array<Reference>;
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
    targets: Array<ItemShippingTarget>;
    valid: boolean;
}
export interface ShippingRate {
    price: Money;
    freeAbove?: Money;
    tiers: Array<ShippingRatePriceTier>;
    isMatching: boolean;
}
export interface Delivery {
    id: string;
    createdAt: DateTime;
    items: Array<DeliveryItem>;
    parcels: Array<Parcel>;
    address?: Address;
}
export interface DiscountedLineItemPrice {
    value: BaseMoney;
    includedDiscounts: Array<DiscountedLineItemPortion>;
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
export interface PlainEnumValue {
    key: string;
    label: string;
}
export interface LocalizedEnumValue {
    key: string;
    label: LocalizedString;
}
export interface OrderImportDraft {
    orderNumber?: string;
    customerId: string;
    customerEmail?: string;
    store?: KeyReference;
    lineItems?: Array<LineItemImportDraft>;
    customLineItems?: Array<CustomLineItem>;
    totalPrice: Money;
    taxedPrice?: TaxedPrice;
    shippingAddress?: Address;
    billingAddress?: Address;
    customerGroup?: Reference;
    country?: string;
    orderState?: OrderState;
    shipmentState?: ShipmentState;
    paymentState?: PaymentState;
    shippingInfo?: ShippingInfoImportDraft;
    completedAt?: DateTime;
    custom?: CustomFieldsDraft;
    inventoryMode?: InventoryMode;
    taxRoundingMode?: RoundingMode;
    taxCalculationMode?: TaxCalculationMode;
    origin?: CartOrigin;
    itemShippingAddresses?: Array<Address>;
}
export interface LineItemImportDraft {
    productId?: string;
    name: LocalizedString;
    variant: ProductVariantImportDraft;
    price: Price;
    quantity: number;
    state?: Array<ItemState>;
    supplyChannel?: ResourceIdentifier;
    distributionChannel?: ResourceIdentifier;
    taxRate?: TaxRate;
    custom?: CustomFieldsDraft;
    shippingDetails?: ItemShippingDetailsDraft;
}
export interface ShippingInfoImportDraft {
    shippingMethodName: string;
    price: Money;
    shippingRate: ShippingRate;
    taxRate?: TaxRate;
    taxCategory?: ResourceIdentifier;
    shippingMethod?: ResourceIdentifier;
    deliveries: Array<Delivery>;
    discountedPrice?: DiscountedLineItemPrice;
    shippingMethodState: ShippingMethodState;
}
export interface ProductVariantImportDraft {
    id?: number;
    sku?: string;
    prices?: Array<Price>;
    attributes?: Array<Attribute>;
    images?: Array<Image>;
}
export interface ItemShippingDetailsDraft {
    targets: Array<ItemShippingTargets>;
}
export interface ItemShippingTargets {
    addressKey: string;
    quantity: number;
}
