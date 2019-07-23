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

export type SuggestTokenizer = WhitespaceTokenizer | CustomTokenizer;

export interface WhitespaceTokenizer {
  type: 'whitespace';
}

export interface CustomTokenizer {
  type: 'custom';
  inputs: string[];
}

export type CategoryOrderHints = any;

export type ResourceIdentifier = ResourceIdentifierById | ResourceIdentifierByKey;

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

export type Reference = KeyReference | IdReference;

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

export type DateTime = string;

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
  channels?: any; // Map of ProductVariantAvailability per Channel id
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

export type UpdateAction = AddAttributeDefinition | RemoveAttributeDefinition | AddFieldDefinition | RemoveFieldDefinition; // TODO a lot more are not defined yet

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

export enum AttributeConstraint {
  None = 'None',
  Unique = 'Unique',
  CombinationUnique = 'CombinationUnique',
  SameForAll = 'SameForAll'
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
  // facets?: FacetResults;
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
  amount: number; // Percentage in the range of [0..1]
}

export interface TaxRate {
  id?: string;
  name: string;
  amount: number; // Percentage in the range of [0..1]
  includedInPrice: boolean;
  country: string; // A two-digit country code as per ↗ ISO 3166-1 alpha-2
  state?: string; // The state in the country
}

export interface CustomObjectDraft {
  container: string; // matching the pattern [-_~.a-zA-Z0-9]+
  key: string; // matching the pattern [-_~.a-zA-Z0-9]+
  value: any; // JSON types Number, string, Boolean, Array, Object
  version?: number;
}

export interface CustomObject {
  id: string;
  createdAt: DateTime;
  lastModifiedAt: DateTime;
  container: string; // matching the pattern [-_~.a-zA-Z0-9]+
  key: string; // matching the pattern [-_~.a-zA-Z0-9]+
  value: any; // JSON types Number, string, Boolean, Array, Object
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
  key: string; // unique within the project | Any arbitrary string key that uniquely identifies this channel within the project.
  roles: ChannelRole[]; // The roles of this channel. Each channel must have at least one role.
  name?: LocalizedString; // A human-readable name of the channel.
  description?: LocalizedString; // A human-readable description of the channel.
  address?: Address; // The address where this channel is located (e.g. if the channel is a physical store).
  reviewRatingStatistics?: ReviewRatingStatistics; // Statistics about the review ratings taken into account for this channel.
  custom?: CustomFields;
}

export interface ChannelDraft {
  key: string;
  roles?: ChannelRole[]; // If not specified, then channel will get InventorySupply role by default
  name?: LocalizedString;
  description?: LocalizedString;
  address?: Address;
  custom?: CustomFieldsDraft;
}

export enum ChannelRole {
  InventorySupply = 'InventorySupply',
  ProductDistribution = 'ProductDistribution',
  OrderExport = 'OrderExport',
  OrderImport = 'OrderImport',
  Primary = 'Primary'
}

export interface Address {
  country: string; // A two-digit country code as per ↗ ISO 3166-1 alpha-2 .
  id?: string;
  key?: string; // if given it must match [a-zA-Z0-9_\-]{2,256}
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
  averageRating: number; // Average rating of one target. This number is rounded with 5 decimals.
  highestRating: number; // Highest rating of one target
  lowestRating: number; // Lowest rating of one target
  count: number; // Number of ratings taken into account
  ratingsDistribution: any; // JSON object. The full distribution of the ratings. The keys are the different ratings and the values are the count of reviews having this rating. Only the used ratings appear in this object.
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

export enum TextInputHint {
  SingleLine = 'SingleLine',
  MultiLine = 'MultiLine'
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

export type Destination = HttpDestination | AzureServiceBusDestination | AwsLambdaDestination;

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

export type HttpDestinationAuthentication = AuthorizationHeader | AzureFunctionsAuthentication;

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

export type Format = PlatformFormat | CloudEventsFormat;

export interface PlatformFormat {
  type: 'Platform';
}

export interface CloudEventsFormat {
  type: 'CloudEvents';
  cloudEventsVersion: '0.1';
}

export enum SubscriptionHealthStatus {
  Healthy = 'Healthy',
  ConfigurationError = 'ConfigurationError',
  ConfigurationErrorDeliveryStopped = 'ConfigurationErrorDeliveryStopped',
  TemporaryError = 'TemporaryError'
}

// Order update actions

export type UpdateOrderAction = ChangeOrderStateAction;

export enum OrderState {
  Open = 'Open',
  Confirmed = 'Confirmed',
  Completed = 'Completed',
  Cancelled = 'Cancelled'
};

export interface ChangeOrderStateAction {
  action: "changeOrderState"
  orderState: OrderState;
}

export type Sort = SortStatement[];

export interface SortStatement {
  by: string;
  direction: 'asc' | 'desc';
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
  id: string
  productId: string
  name: LocalizedString
  productSlug?: LocalizedString;
  productType?: Reference;
  variant: ProductVariant;
  price: Price;
  taxedPrice?: TaxedItemPrice;
  totalPrice: Money
  quantity: Number
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

export enum TaxMode {
  Platform = 'Platform',
  External = 'External',
  ExternalAmount = 'ExternalAmount',
  Disabled = 'Disabled'
}

export interface TaxedPrice {
  totalNet: Money;
  totalGross: Money;
  taxPortions: TaxPortion[];
}

export interface TaxPortion {
  name?: string;
  rate: Number; // a number in the range [0..1]
  amount: Money;
}

export enum RoundingMode {
  HalfEven = 'HalfEven',
  HalfUp = 'HalfUp',
  HalfDown = 'HalfDown'
}

export enum TaxCalculationMode {
  LineItemLevel = 'LineItemLevel',
  UnitPriceLevel = 'UnitPriceLevel'
}

export enum ShipmentState {
  Shipped = 'Shipped',
  Ready = 'Ready',
  Pending = 'Pending',
  Delayed = 'Delayed',
  Partial = 'Partial',
  Backorder = 'Backorder'
}

export enum PaymentState {
  BalanceDue = 'BalanceDue',
  Failed = 'Failed',
  Pending = 'Pending',
  CreditOwed = 'CreditOwed',
  Paid = 'Paid'
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

export type Set<T> = T[];

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
  payments: Reference[]; // to Payments
}

export enum InventoryMode {
  TrackOnly = 'TrackOnly',
  ReserveOnOrder = 'ReserveOnOrder',
  None = 'None'
}

export type ShippingRateInput = ClassificationShippingRateInput | ScoreShippingRateInput;

export interface ClassificationShippingRateInput {
  type: "Classification";
  key: string;
  label: LocalizedString;
}

export interface ScoreShippingRateInput {
  type: "Score";
  score: Number;
}

export enum CartOrigin {
  Customer = 'Customer',
  Merchant = 'Merchant'
}

export interface TaxedItemPrice {
  totalNet: Money;
  totalGross: Money;
}

export interface ItemState {
  quantity: number;
  state: Reference; // to a State
}

export interface DiscountedLineItemPriceForQuantity {
quantity: number;
discountedPrice: DiscountedLineItemPrice;
}

export enum LineItemPriceMode {
  Standard = 'Standard',
  GiftLineItem = 'GiftLineItem'
}

export enum LineItemMode {
  Standard = 'Standard',
  GiftLineItem = 'GiftLineItem'
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
  discount: Reference; // to a CartDiscount
  discountedAmount: BaseMoney;
}

export enum ShippingMethodState {
  DoesNotMatchCart = 'DoesNotMatchCart',
  MatchesCart = 'MatchesCart'
}

export type ReturnItem = LineItemReturnItem | CustomLineItemReturnItem;

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

export enum DiscountCodeState {
  NotActive = 'NotActive',
  NotValid = 'NotValid',
  DoesNotMatchCart = 'DoesNotMatchCart',
  MatchesCart = 'MatchesCart',
  MaxApplicationReached = 'MaxApplicationReached',
  ApplicationStoppedByPreviousDiscount = 'ApplicationStoppedByPreviousDiscount'
}

export interface ItemShippingTarget {
  addressKey: string;
  quantity: number;
}

export type ShippingRatePriceTier = CartValue | CartClassification | CartScore;

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
  id: string; // ID of a LineItem or a CustomLineItem
  quantity: number;
}

export interface Parcel {
  id: string;
  createdAt: DateTime;
  measurements?: ParcelMeasurements;
  trackingData?: TrackingData;
  items?: DeliveryItem;
}

export enum ReturnShipmentState {
  Advised = 'Advised',
  Returned = 'Returned',
  BackInStock = 'BackInStock',
  Unusable = 'Unusable'
}

export enum ReturnPaymentState {
  NonRefundable = 'NonRefundable',
  Initial = 'Initial',
  Refunded = 'Refunded',
  NotRefunded = 'NotRefunded'
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
