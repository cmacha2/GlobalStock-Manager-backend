import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    auth(...values: string[] | number[]): this;
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    server(url: string, variables?: {}): void;
    /**
     * Get a single merchant
     *
     */
    merchantGetMerchant(metadata: types.MerchantGetMerchantMetadataParam): Promise<FetchResponse<200, types.MerchantGetMerchantResponse200>>;
    /**
     * Update a merchant
     *
     */
    merchantUpdateMerchant(body: types.MerchantUpdateMerchantBodyParam, metadata: types.MerchantUpdateMerchantMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get a merchant's address
     *
     */
    merchantGetMerchantAddress(metadata: types.MerchantGetMerchantAddressMetadataParam): Promise<FetchResponse<200, types.MerchantGetMerchantAddressResponse200>>;
    /**
     * Get a merchant's payment gateway configuration
     *
     */
    merchantGetMerchantGateway(metadata: types.MerchantGetMerchantGatewayMetadataParam): Promise<FetchResponse<200, types.MerchantGetMerchantGatewayResponse200>>;
    /**
     * Get a merchant's properties
     *
     */
    merchantGetMerchantProperties(metadata: types.MerchantGetMerchantPropertiesMetadataParam): Promise<FetchResponse<200, types.MerchantGetMerchantPropertiesResponse200>>;
    /**
     * Update merchant properties
     *
     */
    merchantUpdateMerchantProperties(body: types.MerchantUpdateMerchantPropertiesBodyParam, metadata: types.MerchantUpdateMerchantPropertiesMetadataParam): Promise<FetchResponse<number, unknown>>;
    merchantUpdateMerchantProperties(metadata: types.MerchantUpdateMerchantPropertiesMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * The Merchant's default service charge, set via the Setup App
     * (https://www.clover.com/setupapp).
     *
     * @summary Get default service charge for a merchant
     */
    merchantGetDefaultServiceCharge(metadata: types.MerchantGetDefaultServiceChargeMetadataParam): Promise<FetchResponse<200, types.MerchantGetDefaultServiceChargeResponse200>>;
    /**
     * Get a sync token (deprecated)
     *
     */
    syncGetSyncToken(metadata: types.SyncGetSyncTokenMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Retrieves all tip suggestions for a merchant, for example: flat tip or percentage.
     *
     * @summary Get all tip suggestions for a merchant
     */
    merchantGetTipSuggestions(metadata: types.MerchantGetTipSuggestionsMetadataParam): Promise<FetchResponse<200, types.MerchantGetTipSuggestionsResponse200>>;
    /**
     * Get a single tip suggestion
     *
     */
    merchantGetTipSuggestion(metadata: types.MerchantGetTipSuggestionMetadataParam): Promise<FetchResponse<200, types.MerchantGetTipSuggestionResponse200>>;
    /**
     * Update a single tip suggestion
     *
     */
    merchantUpdateTipSuggestion(body: types.MerchantUpdateTipSuggestionBodyParam, metadata: types.MerchantUpdateTipSuggestionMetadataParam): Promise<FetchResponse<number, unknown>>;
    merchantUpdateTipSuggestion(metadata: types.MerchantUpdateTipSuggestionMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Retrieves all order types for a merchant.
     *  Merchants can create custom order types using the [Clover Setup
     * App](https://www.clover.com/setupapp). These custom order types can be associated with a
     * system order type. See [Return a list of system order
     * types](https://docs.clover.com/reference/merchantgetsystemordertypes).
     *  Custom order types can support items in:
     * - all categories (filterCategories=false). To view the categories, send a GET request to
     * [Get all categories](https://docs.clover.com/reference/categorygetcategories).
     * - a subset of the merchant’s categories (filterCategories=true and categories property
     * contains the list of supported categories). Categories display when an order type that
     * supports a subset of the categories is expanded.
     *
     * @summary Get all order types for a merchant
     */
    merchantGetOrderTypes(metadata: types.MerchantGetOrderTypesMetadataParam): Promise<FetchResponse<200, types.MerchantGetOrderTypesResponse200>>;
    /**
     * Create Order Type For Merchant
     *
     */
    merchantCreateOrderType(body: types.MerchantCreateOrderTypeBodyParam, metadata: types.MerchantCreateOrderTypeMetadataParam): Promise<FetchResponse<number, unknown>>;
    merchantCreateOrderType(metadata: types.MerchantCreateOrderTypeMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get a single order type
     *
     */
    merchantGetOrderType(metadata: types.MerchantGetOrderTypeMetadataParam): Promise<FetchResponse<200, types.MerchantGetOrderTypeResponse200>>;
    /**
     * Update a single order type
     *
     */
    merchantUpdateOrderType(body: types.MerchantUpdateOrderTypeBodyParam, metadata: types.MerchantUpdateOrderTypeMetadataParam): Promise<FetchResponse<number, unknown>>;
    merchantUpdateOrderType(metadata: types.MerchantUpdateOrderTypeMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Delete an order type
     *
     */
    merchantDeleteOrderType(metadata: types.MerchantDeleteOrderTypeMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Create or delete associations between order types and categories
     *
     */
    orderCreateOrDeleteOrderTypeCategories(metadata: types.OrderCreateOrDeleteOrderTypeCategoriesMetadataParam): Promise<FetchResponse<200, types.OrderCreateOrDeleteOrderTypeCategoriesResponse200>>;
    /**
     * Merchants can create custom Order Types via "/v3/merchants/{mId}/order_types". It is
     * useful to associate these custom order types with particular system order types in order
     * to group things functionally. For example, a merchant may have a "Lunch Take-Out" order
     * type and a "Dinner Take-Out" order type. These two order types can be associated with
     * the "TAKE-OUT-TYPE" system order type so that applications can understand that they are
     * both take-out order types.
     *
     * @summary Return a list of system order types
     */
    merchantGetSystemOrderTypes(metadata: types.MerchantGetSystemOrderTypesMetadataParam): Promise<FetchResponse<200, types.MerchantGetSystemOrderTypesResponse200>>;
    /**
     * Retrieves all system and employee roles for a merchant's business.
     *
     * @summary Get all roles for a merchant
     */
    roleGetRoles(metadata: types.RoleGetRolesMetadataParam): Promise<FetchResponse<200, types.RoleGetRolesResponse200>>;
    /**
     * Create a role
     *
     */
    roleCreateRole(body: types.RoleCreateRoleBodyParam, metadata: types.RoleCreateRoleMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get a single role
     *
     */
    roleGetRole(metadata: types.RoleGetRoleMetadataParam): Promise<FetchResponse<200, types.RoleGetRoleResponse200>>;
    /**
     * Update a single role
     *
     */
    roleUpdateRole(body: types.RoleUpdateRoleBodyParam, metadata: types.RoleUpdateRoleMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Delete a role
     *
     */
    roleDeleteRole(metadata: types.RoleDeleteRoleMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Retrieves all tenders for a merchant.
     *
     * @summary Get all tenders for a merchant
     */
    payGetMerchantTenders(metadata: types.PayGetMerchantTendersMetadataParam): Promise<FetchResponse<200, types.PayGetMerchantTendersResponse200>>;
    /**
     * Returns an object representing newly added merchant tender, with a generated ID.
     *
     * @summary Adds a new tender
     */
    payCreateMerchantTender(body: types.PayCreateMerchantTenderBodyParam, metadata: types.PayCreateMerchantTenderMetadataParam): Promise<FetchResponse<200, types.PayCreateMerchantTenderResponse200>>;
    /**
     * Get a single merchant tender
     *
     */
    payGetMerchantTender(metadata: types.PayGetMerchantTenderMetadataParam): Promise<FetchResponse<200, types.PayGetMerchantTenderResponse200>>;
    /**
     * Returns an object representing updated merchant tender.
     *
     * @summary Updates an existing tender
     */
    payUpdateMerchantTender(body: types.PayUpdateMerchantTenderBodyParam, metadata: types.PayUpdateMerchantTenderMetadataParam): Promise<FetchResponse<number, unknown>>;
    payUpdateMerchantTender(metadata: types.PayUpdateMerchantTenderMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Deletes an existing tender
     *
     */
    payDeleteMerchantTender(metadata: types.PayDeleteMerchantTenderMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get a list this merchant opening hours
     *
     */
    merchantGetAllMerchantOpeningHours(metadata: types.MerchantGetAllMerchantOpeningHoursMetadataParam): Promise<FetchResponse<200, types.MerchantGetAllMerchantOpeningHoursResponse200>>;
    /**
     * Create a set of merchant opening hours
     *
     */
    merchantCreateMerchantOpeningHours(body: types.MerchantCreateMerchantOpeningHoursBodyParam, metadata: types.MerchantCreateMerchantOpeningHoursMetadataParam): Promise<FetchResponse<200, types.MerchantCreateMerchantOpeningHoursResponse200>>;
    merchantCreateMerchantOpeningHours(metadata: types.MerchantCreateMerchantOpeningHoursMetadataParam): Promise<FetchResponse<200, types.MerchantCreateMerchantOpeningHoursResponse200>>;
    /**
     * Get a specific set of merchant opening hours
     *
     */
    merchantGetMerchantOpeningHours(metadata: types.MerchantGetMerchantOpeningHoursMetadataParam): Promise<FetchResponse<200, types.MerchantGetMerchantOpeningHoursResponse200>>;
    /**
     * Update a set of merchant opening hours
     *
     */
    merchantUpdateMerchantOpeningHours(body: types.MerchantUpdateMerchantOpeningHoursBodyParam, metadata: types.MerchantUpdateMerchantOpeningHoursMetadataParam): Promise<FetchResponse<200, types.MerchantUpdateMerchantOpeningHoursResponse200>>;
    merchantUpdateMerchantOpeningHours(metadata: types.MerchantUpdateMerchantOpeningHoursMetadataParam): Promise<FetchResponse<200, types.MerchantUpdateMerchantOpeningHoursResponse200>>;
    /**
     * Delete a set of merchant opening hours
     *
     */
    merchantDeleteMerchantOpeningHours(metadata: types.MerchantDeleteMerchantOpeningHoursMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Returns a list of all devices that are provisioned to the a merchant. This list can be
     * viewed from the Setup App on the merchant's device or web dashboard
     * (https://www.clover.com/setupapp/m/{mId}/devices).
     *
     * @summary Get all devices provisioned to a merchant
     */
    deviceGetMerchantDevices(metadata: types.DeviceGetMerchantDevicesMetadataParam): Promise<FetchResponse<200, types.DeviceGetMerchantDevicesResponse200>>;
    /**
     * Returns a single device that is provisioned to a merchant.
     *
     * @summary Get a single device provisioned to a merchant
     */
    deviceGetMerchantDevice(metadata: types.DeviceGetMerchantDeviceMetadataParam): Promise<FetchResponse<200, types.DeviceGetMerchantDeviceResponse200>>;
    /**
     * Retrieve all cash events for this merchant. Cash events can also be consumed by
     * registering a Webhook callback. See https://docs.clover.com/build/webhooks/
     *
     * @summary Get all cash events
     */
    cashGetAllCashEvents(metadata: types.CashGetAllCashEventsMetadataParam): Promise<FetchResponse<200, types.CashGetAllCashEventsResponse200>>;
    /**
     * Retrieve cash events filtered by employee ID. Cash events can also be consumed by
     * registering a Webhook callback. See https://docs.clover.com/build/webhooks/
     *
     * @summary Get all cash events for an employee
     */
    cashGetEmployeeCashEvents(metadata: types.CashGetEmployeeCashEventsMetadataParam): Promise<FetchResponse<200, types.CashGetEmployeeCashEventsResponse200>>;
    /**
     * Retrieve cash events filtered by device ID. Cash events can also be consumed by
     * registering a Webhook callback. See https://docs.clover.com/build/webhooks/
     *
     * @summary Get all cash events for a device
     */
    cashGetDeviceCashEvents(metadata: types.CashGetDeviceCashEventsMetadataParam): Promise<FetchResponse<200, types.CashGetDeviceCashEventsResponse200>>;
    /**
     * Gives information for every customer of a merchant by default.
     *
     * @summary Get a list of customers in CSV format
     */
    handlersGetCustomersCsv(metadata: types.HandlersGetCustomersCsvMetadataParam): Promise<FetchResponse<200, types.HandlersGetCustomersCsvResponse200>>;
    /**
     * Gives information for every customer of a merchant by default.
     *
     * @summary Get a list of customers
     */
    customersGetCustomers(metadata: types.CustomersGetCustomersMetadataParam): Promise<FetchResponse<200, types.CustomersGetCustomersResponse200>>;
    /**
     * Creates customer record for a merchant. Note that the request body cannot be null.
     *
     * @summary Create a customer
     */
    customersCreateCustomer(body: types.CustomersCreateCustomerBodyParam, metadata: types.CustomersCreateCustomerMetadataParam): Promise<FetchResponse<200, types.CustomersCreateCustomerResponse200>>;
    customersCreateCustomer(metadata: types.CustomersCreateCustomerMetadataParam): Promise<FetchResponse<200, types.CustomersCreateCustomerResponse200>>;
    /**
     * Returns information for a single customer.
     *
     * @summary Get a single customer
     */
    customersGetCustomer(metadata: types.CustomersGetCustomerMetadataParam): Promise<FetchResponse<200, types.CustomersGetCustomerResponse200>>;
    /**
     * Updates information for a single customer.
     *
     * @summary Update a customer
     */
    customersUpdateCustomer(body: types.CustomersUpdateCustomerBodyParam, metadata: types.CustomersUpdateCustomerMetadataParam): Promise<FetchResponse<200, types.CustomersUpdateCustomerResponse200>>;
    customersUpdateCustomer(metadata: types.CustomersUpdateCustomerMetadataParam): Promise<FetchResponse<200, types.CustomersUpdateCustomerResponse200>>;
    /**
     * Deletes a single customer from a merchant.
     *
     * @summary Delete a customer
     */
    customersDeleteCustomer(metadata: types.CustomersDeleteCustomerMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Creates a phone number associated to a merchant's customer.
     *
     * @summary Create a phone number for a customer
     */
    customersCreateCustomerPhoneNumber(body: types.CustomersCreateCustomerPhoneNumberBodyParam, metadata: types.CustomersCreateCustomerPhoneNumberMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Updates a merchant's customer's phone number.
     *
     * @summary Update a phone number for a customer
     */
    customersUpdateCustomerPhoneNumber(body: types.CustomersUpdateCustomerPhoneNumberBodyParam, metadata: types.CustomersUpdateCustomerPhoneNumberMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Deletes a merchant's customer's phone number.
     *
     * @summary Delete a customer phone number
     */
    customersDeleteCustomerPhoneNumber(metadata: types.CustomersDeleteCustomerPhoneNumberMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Creates an email address associated to a merchant's customer.
     *
     * @summary Create an email address for a customer
     */
    customersCreateCustomerEmailAddress(body: types.CustomersCreateCustomerEmailAddressBodyParam, metadata: types.CustomersCreateCustomerEmailAddressMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Updates a merchant's customer's email address.
     *
     * @summary Update an email address for a customer
     */
    customersUpdateCustomerEmailAddress(body: types.CustomersUpdateCustomerEmailAddressBodyParam, metadata: types.CustomersUpdateCustomerEmailAddressMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Deletes a merchant's customer's email address.
     *
     * @summary Delete a customer email address
     */
    customersDeleteCustomerEmailAddress(metadata: types.CustomersDeleteCustomerEmailAddressMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Creates an address associated to a merchant's customer.
     *
     * @summary Create an address for a customer
     */
    customersCreateCustomerAddress(body: types.CustomersCreateCustomerAddressBodyParam, metadata: types.CustomersCreateCustomerAddressMetadataParam): Promise<FetchResponse<number, unknown>>;
    customersCreateCustomerAddress(metadata: types.CustomersCreateCustomerAddressMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Updates a merchant's customer's address.
     *
     * @summary Update an address for a customer
     */
    customersUpdateCustomerAddress(body: types.CustomersUpdateCustomerAddressBodyParam, metadata: types.CustomersUpdateCustomerAddressMetadataParam): Promise<FetchResponse<number, unknown>>;
    customersUpdateCustomerAddress(metadata: types.CustomersUpdateCustomerAddressMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Deletes a merchant's customer's address.
     *
     * @summary Delete a customer address
     */
    customersDeleteCustomerAddress(metadata: types.CustomersDeleteCustomerAddressMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * "first6" and "last4" fields are required.
     *
     * @summary Create a credit/debit card entry for a customer
     */
    customersCreateCustomerCard(body: types.CustomersCreateCustomerCardBodyParam, metadata: types.CustomersCreateCustomerCardMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Update a credit/debit card record for a customer
     *
     */
    customersUpdateCustomerCard(body: types.CustomersUpdateCustomerCardBodyParam, metadata: types.CustomersUpdateCustomerCardMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Delete a customer card
     *
     */
    customersDeleteCustomerCard(metadata: types.CustomersDeleteCustomerCardMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Creates note, birthday, business name associated to a merchant's customer.
     *
     * @summary Create note, birthday, business name for a customer
     */
    customersCreateOrUpdateCustomerMetadata(body: types.CustomersCreateOrUpdateCustomerMetadataBodyParam, metadata: types.CustomersCreateOrUpdateCustomerMetadataMetadataParam): Promise<FetchResponse<number, unknown>>;
    customersCreateOrUpdateCustomerMetadata(metadata: types.CustomersCreateOrUpdateCustomerMetadataMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Retrieves information about employees associated with a merchant.
     *
     * @summary Get all employees
     */
    employeeGetEmployees(metadata: types.EmployeeGetEmployeesMetadataParam): Promise<FetchResponse<200, types.EmployeeGetEmployeesResponse200>>;
    /**
     * Creates an employee for a merchant. Accepts optional expand parameters.
     *
     * @summary Create an employee
     */
    employeeCreateEmployee(body: types.EmployeeCreateEmployeeBodyParam, metadata: types.EmployeeCreateEmployeeMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Returns information for a single employee.  Accepts optional expand query parameters
     *
     * @summary Get a single employee
     */
    employeeGetEmployee(metadata: types.EmployeeGetEmployeeMetadataParam): Promise<FetchResponse<200, types.EmployeeGetEmployeeResponse200>>;
    /**
     * Updates information for a single employee. Accepts optional expand query params.
     *
     * @summary Update an employee
     */
    employeeUpdateEmployee(body: types.EmployeeUpdateEmployeeBodyParam, metadata: types.EmployeeUpdateEmployeeMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Deletes a single employee from a merchant, also can't delete the 'owner' employee.
     *
     * @summary Delete an employee
     */
    employeeDeleteEmployee(metadata: types.EmployeeDeleteEmployeeMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get all shifts
     *
     */
    merchantGetAllShifts(metadata: types.MerchantGetAllShiftsMetadataParam): Promise<FetchResponse<200, types.MerchantGetAllShiftsResponse200>>;
    /**
     * Get a single shift
     *
     */
    merchantGetShift(metadata: types.MerchantGetShiftMetadataParam): Promise<FetchResponse<200, types.MerchantGetShiftResponse200>>;
    /**
     * Get .csv of all shifts
     *
     */
    merchantGetAllShiftsCSV(metadata: types.MerchantGetAllShiftsCsvMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get all shifts for an employee
     *
     */
    employeeGetEmployeeShifts(metadata: types.EmployeeGetEmployeeShiftsMetadataParam): Promise<FetchResponse<200, types.EmployeeGetEmployeeShiftsResponse200>>;
    /**
     * Create shift for an employee
     *
     */
    employeeCreateShift(body: types.EmployeeCreateShiftBodyParam, metadata: types.EmployeeCreateShiftMetadataParam): Promise<FetchResponse<number, unknown>>;
    employeeCreateShift(metadata: types.EmployeeCreateShiftMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get a single shift
     *
     */
    employeeGetEmployeeShift(metadata: types.EmployeeGetEmployeeShiftMetadataParam): Promise<FetchResponse<200, types.EmployeeGetEmployeeShiftResponse200>>;
    /**
     * Update a single shift
     *
     */
    employeeUpdateShift(body: types.EmployeeUpdateShiftBodyParam, metadata: types.EmployeeUpdateShiftMetadataParam): Promise<FetchResponse<number, unknown>>;
    employeeUpdateShift(metadata: types.EmployeeUpdateShiftMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * When sending a request, you must include an X-Clover-Account-Id header. The value of the
     * header must be the ID of an employee with the permission to edit shifts.
     *
     * @summary Delete a single shift
     */
    employeeDeleteShift(metadata: types.EmployeeDeleteShiftMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get all orders for an employee
     *
     */
    employeeGetEmployeeOrders(metadata: types.EmployeeGetEmployeeOrdersMetadataParam): Promise<FetchResponse<200, types.EmployeeGetEmployeeOrdersResponse200>>;
    /**
     * Displays line items for each category in the inventory for an order.
     *
     * @summary Get all inventory items
     */
    inventoryGetItems(metadata: types.InventoryGetItemsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Creates an inventory item.
     *
     * @summary Create an inventory item
     */
    inventoryCreateItem(body: types.InventoryCreateItemBodyParam, metadata: types.InventoryCreateItemMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Deletes multiple inventory items in a single request. Add a query string with the
     * parameter `itemIds` and a comma-separated list of one or more `itemId` values.
     *
     * Use this example to create a request to delete three items:
     *  {merchantId}/items?itemIds={itemId},{itemId},{itemId}
     *
     * @summary Delete multiple inventory items
     */
    inventoryBulkDeleteItems(metadata: types.InventoryBulkDeleteItemsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Retrieves inventory items without a tag or revenue class.
     *  `Note:` A revenue class tracks and compares revenue streams and sales of items taxed at
     * variable rates. Tag items you want to track as part of a revenue class.
     *
     * @summary Get all inventory without a revenue class
     */
    inventoryGetItemsNoRevenueClass(metadata: types.InventoryGetItemsNoRevenueClassMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get a single inventory item
     *
     */
    inventoryGetItem(metadata: types.InventoryGetItemMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Updates an existing inventory item. Use the POST HTTP method to [create an inventory
     * item](https://docs.clover.com/reference/inventorycreateitem).
     *
     * @summary Update an existing inventory item
     */
    inventoryUpdateItem(body: types.InventoryUpdateItemBodyParam, metadata: types.InventoryUpdateItemMetadataParam): Promise<FetchResponse<200, types.InventoryUpdateItemResponse200>>;
    inventoryUpdateItem(metadata: types.InventoryUpdateItemMetadataParam): Promise<FetchResponse<200, types.InventoryUpdateItemResponse200>>;
    /**
     * Delete an inventory item
     *
     */
    inventoryDeleteItem(metadata: types.InventoryDeleteItemMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Updates only the changes in the payload without replacing existing inventory items. Use
     * the POST HTTP method to [create multiple inventory
     * items](https://docs.clover.com/reference/inventorybulkcreateinventoryitems).
     *
     * @summary Update existing inventory items
     */
    inventoryBulkPatchInventoryItems(body: types.InventoryBulkPatchInventoryItemsBodyParam, metadata: types.InventoryBulkPatchInventoryItemsMetadataParam): Promise<FetchResponse<200, types.InventoryBulkPatchInventoryItemsResponse200>>;
    /**
     * Creates multiple inventory items in a single request. Use the PUT HTTP method to [update
     * existing inventory
     * items](https://docs.clover.com/reference/inventorybulkpatchinventoryitems).
     *
     * @summary Create multiple inventory items
     */
    inventoryBulkCreateInventoryItems(body: types.InventoryBulkCreateInventoryItemsBodyParam, metadata: types.InventoryBulkCreateInventoryItemsMetadataParam): Promise<FetchResponse<200, types.InventoryBulkCreateInventoryItemsResponse200>>;
    /**
     * Get the stock of all inventory items
     *
     */
    inventoryGetItemStocks(metadata: types.InventoryGetItemStocksMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get the stock of an inventory item
     *
     */
    inventoryGetItemStock(metadata: types.InventoryGetItemStockMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Update the stock of an inventory item
     *
     */
    inventoryUpdateItemStock(body: types.InventoryUpdateItemStockBodyParam, metadata: types.InventoryUpdateItemStockMetadataParam): Promise<FetchResponse<number, unknown>>;
    inventoryUpdateItemStock(metadata: types.InventoryUpdateItemStockMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Delete the stock of an inventory item
     *
     */
    inventoryDeleteItemStock(metadata: types.InventoryDeleteItemStockMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Retrieves item groups that allow merchants to create and manage large groups of related
     * items, also known as **Item with variants**.
     *  `For example:` A merchant sells a T-shirt that is available in various sizes and
     * colors. Each of the T-shirt variations is an item within the T-shirt item group. When an
     * item group is created, it appears in the Register app as a single button, and tapping it
     * displays a choice of variations for sale.
     *  Before adding items to an item group, you need to create the:
     * 1. Item group.
     * 2. Attributes, such as size and color.
     * 3. Options for each attribute, such as small and blue.
     * 4. Individual items and include the item group ID to associate the items with the group.
     * 5. Associate the options with an item.
     *  - An item can only belong to an item group if the item group ID is entered when the
     * item is created.
     *  - An item can only be a member of a single item group, and once it is part of an item
     * group, it can never be removed or moved to another item group; it can only be deleted.
     *  `Note:` The item number of the item group is automatically generated by the Clover
     * server as a combination of the item group name and the names of all the options
     * associated with that item. This item number is not editable. If the item group name or
     * option name is changed, then the item names are automatically regenerated.
     *
     * @summary Get all item groups
     */
    inventoryGetItemGroups(metadata: types.InventoryGetItemGroupsMetadataParam): Promise<FetchResponse<200, types.InventoryGetItemGroupsResponse200>>;
    /**
     * Create an item group
     *
     */
    inventoryCreateItemGroup(body: types.InventoryCreateItemGroupBodyParam, metadata: types.InventoryCreateItemGroupMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get a single item group
     *
     */
    inventoryGetItemGroup(metadata: types.InventoryGetItemGroupMetadataParam): Promise<FetchResponse<200, types.InventoryGetItemGroupResponse200>>;
    /**
     * Update an item group
     *
     */
    inventoryUpdateItemGroup(body: types.InventoryUpdateItemGroupBodyParam, metadata: types.InventoryUpdateItemGroupMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Delete an item group
     *
     */
    inventoryDeleteItemGroup(metadata: types.InventoryDeleteItemGroupMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Retrieves all tags for an order.
     *  `Note:` In the REST API, a merchant uses two types of tags:
     * 1. Tags, also known as item labels, are used to keep track of these items in reports.
     * 2. Tags associated with the printer work as a printer label.
     *  `Example:` If a tag is associated with both an item and a printer, when the order is
     * printed, the tagged items are printed only on the associated printer.
     *
     * @summary Get all tags
     */
    tagGetTags(metadata: types.TagGetTagsMetadataParam): Promise<FetchResponse<200, types.TagGetTagsResponse200>>;
    /**
     * Create a tag
     *
     */
    tagCreateTag(body: types.TagCreateTagBodyParam, metadata: types.TagCreateTagMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Deletes multiple tags in a single request. Add a query string with the parameter
     * `tagIds` and a comma-separated list of one or more `tagIds` values.
     *
     * Use this example to create a request to delete three tags:
     * {merchantId}/tags?tagIds={tagId1},{tagId2},{tagId3}
     *
     * @summary Delete tags
     */
    tagBulkDeleteTags(metadata: types.TagBulkDeleteTagsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get a single tag
     *
     */
    tagGetTag(metadata: types.TagGetTagMetadataParam): Promise<FetchResponse<200, types.TagGetTagResponse200>>;
    /**
     * Update a single tag
     *
     */
    tagUpdateTag(body: types.TagUpdateTagBodyParam, metadata: types.TagUpdateTagMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Delete a tag
     *
     */
    tagDeleteTag(metadata: types.TagDeleteTagMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get tags for a single item
     *
     */
    tagGetItemTags(metadata: types.TagGetItemTagsMetadataParam): Promise<FetchResponse<200, types.TagGetItemTagsResponse200>>;
    /**
     * Get all items for a single tag
     *
     */
    tagGetTaggedItems(metadata: types.TagGetTaggedItemsMetadataParam): Promise<FetchResponse<200, types.TagGetTaggedItemsResponse200>>;
    /**
     * Get a list of all tag to item mappings
     *
     */
    tagGetTagItems(metadata: types.TagGetTagItemsMetadataParam): Promise<FetchResponse<200, types.TagGetTagItemsResponse200>>;
    /**
     * Create or delete associations between tags and items
     *
     */
    tagCreateOrDeleteTagItems(metadata: types.TagCreateOrDeleteTagItemsMetadataParam): Promise<FetchResponse<200, types.TagCreateOrDeleteTagItemsResponse200>>;
    /**
     * Retrieves all tax rates applicable on an order. A tax rate is a percentage or a flat fee
     * at which an item is taxed.
     *
     * @summary Get all tax rates
     */
    taxrateGetTaxRates(metadata: types.TaxrateGetTaxRatesMetadataParam): Promise<FetchResponse<200, types.TaxrateGetTaxRatesResponse200>>;
    /**
     * Create a tax rate for a merchant
     *
     */
    taxrateCreateTaxRate(body: types.TaxrateCreateTaxRateBodyParam, metadata: types.TaxrateCreateTaxRateMetadataParam): Promise<FetchResponse<200, types.TaxrateCreateTaxRateResponse200>>;
    /**
     * Get a single tax rate
     *
     */
    taxrateGetTaxRate(metadata: types.TaxrateGetTaxRateMetadataParam): Promise<FetchResponse<200, types.TaxrateGetTaxRateResponse200>>;
    /**
     * Update a single tax rate
     *
     */
    taxrateUpdateTaxRate(body: types.TaxrateUpdateTaxRateBodyParam, metadata: types.TaxrateUpdateTaxRateMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Delete a single tax rate
     *
     */
    taxrateDeleteTaxRate(metadata: types.TaxrateDeleteTaxRateMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Retrieves all categories. Items display on the Register app within categories in the
     * order in which they are added to a category. Items may be associated with one or more
     * categories or may not be associated with any category. Categories display in the
     * Register app based on the sort order value for each category.
     *
     * @summary Get all categories
     */
    categoryGetCategories(metadata: types.CategoryGetCategoriesMetadataParam): Promise<FetchResponse<200, types.CategoryGetCategoriesResponse200>>;
    /**
     * Create an item category
     *
     */
    categoryCreateCategory(body: types.CategoryCreateCategoryBodyParam, metadata: types.CategoryCreateCategoryMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Deletes multiple categories in a single request. Add a query string with the parameter
     * `categoryIds` and a comma-separated list of one or more `categoryIds` values.
     *
     * Use this example to create a request to delete three categories:
     *  {merchantId}/categories?categoryIds={categoryId},{categoryId},{categoryId}
     *
     * @summary Delete categories
     */
    categoryBulkDeleteCategories(metadata: types.CategoryBulkDeleteCategoriesMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get a category
     *
     */
    categoryGetCategory(metadata: types.CategoryGetCategoryMetadataParam): Promise<FetchResponse<200, types.CategoryGetCategoryResponse200>>;
    /**
     * Update a category
     *
     */
    categoryUpdateCategory(body: types.CategoryUpdateCategoryBodyParam, metadata: types.CategoryUpdateCategoryMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Delete a single item category
     *
     */
    categoryDeleteCategory(metadata: types.CategoryDeleteCategoryMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Update the order for categories on the menu at a time, up to 1000 categories.
     *
     */
    categoryUpdateCategorySortOrders(body: types.CategoryUpdateCategorySortOrdersBodyParam, metadata: types.CategoryUpdateCategorySortOrdersMetadataParam): Promise<FetchResponse<number, unknown>>;
    categoryUpdateCategorySortOrders(metadata: types.CategoryUpdateCategorySortOrdersMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Retrieves all items in a category.
     *
     * @summary Get all items in a single category
     */
    categoryGetCategoryItems(metadata: types.CategoryGetCategoryItemsMetadataParam): Promise<FetchResponse<200, types.CategoryGetCategoryItemsResponse200>>;
    /**
     * Retrieves all categories of an item.
     *
     * @summary Get all categories of a single item
     */
    categoryGetItemCategories(metadata: types.CategoryGetItemCategoriesMetadataParam): Promise<FetchResponse<200, types.CategoryGetItemCategoriesResponse200>>;
    /**
     * Create or delete associations between items and categories
     *
     */
    categoryCreateOrDeleteCategoryItems(metadata: types.CategoryCreateOrDeleteCategoryItemsMetadataParam): Promise<FetchResponse<200, types.CategoryCreateOrDeleteCategoryItemsResponse200>>;
    /**
     * Creates or deletes association between line items and tax rates. For more information,
     * see [Use object associations](https://docs.clover.com/docs/using-object-associations).
     *
     * @summary Create or delete association between items and tax rates
     */
    taxrateCreateOrDeleteTaxRateItems(body: types.TaxrateCreateOrDeleteTaxRateItemsBodyParam, metadata: types.TaxrateCreateOrDeleteTaxRateItemsMetadataParam): Promise<FetchResponse<200, types.TaxrateCreateOrDeleteTaxRateItemsResponse200>>;
    /**
     * Get items by tax rate
     *
     */
    taxrateGetItemsByTaxRate(metadata: types.TaxrateGetItemsByTaxRateMetadataParam): Promise<FetchResponse<200, types.TaxrateGetItemsByTaxRateResponse200>>;
    /**
     * Retrieves all modifier groups. Modifier groupings are the categories to which different
     * modifiers belong. Modifier groups can be made available for specific inventory Items by
     * creating an item to a modifier group association.
     *
     * @summary Get all modifier groups
     */
    modifierGetModifierGroups(metadata: types.ModifierGetModifierGroupsMetadataParam): Promise<FetchResponse<200, types.ModifierGetModifierGroupsResponse200>>;
    /**
     * Creates a new modifier group. After you create a modifier group, you can associate
     * modifiers with the group.
     *
     * @summary Create a modifier group
     */
    modifierCreateModifierGroup(body: types.ModifierCreateModifierGroupBodyParam, metadata: types.ModifierCreateModifierGroupMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Deletes multiple modifier groups in a single request. Add a query string with the
     * parameter `modifierGroupIds` and a comma-separated list of one or more `modifierGroupId`
     * values.
     *
     * Use this example to create a request to delete three modifierGroups:
     *  {merchantId}/modifierGroups?modifierGroupIds={modifierGroupId},{modifierGroupId},{modifierGroupId}
     *
     * @summary Delete modifier groups
     */
    modifierBulkDeleteModifierGroups(metadata: types.ModifierBulkDeleteModifierGroupsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get a single modifier group by it's UUID
     *
     * @summary Get a modifier group
     */
    modifierGetModifierGroup(metadata: types.ModifierGetModifierGroupMetadataParam): Promise<FetchResponse<200, types.ModifierGetModifierGroupResponse200>>;
    /**
     * Update a modifier group. In order to add modifiers use the create modifiers endpoint.
     *
     * @summary Update a modifier group
     */
    modifierUpdateModifierGroup(body: types.ModifierUpdateModifierGroupBodyParam, metadata: types.ModifierUpdateModifierGroupMetadataParam): Promise<FetchResponse<number, unknown>>;
    modifierUpdateModifierGroup(metadata: types.ModifierUpdateModifierGroupMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Delete an existing modifier group, identified by UUID. This also deletes all modifiers
     * within that group.
     *
     * @summary Delete a modifier group
     */
    modifierDeleteModifierGroup(metadata: types.ModifierDeleteModifierGroupMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Creates or deletes the association between inventory items and modifier groups.
     * Modifiers can only be applied to inventory items associated with that modifier group.
     * For more information, see [Use object
     * associations](https://docs.clover.com/docs/using-object-associations).
     *
     * @summary Create or delete associations between inventory items and modifier groups
     */
    modifierCreateOrDeleteItemModifierGroups(body: types.ModifierCreateOrDeleteItemModifierGroupsBodyParam, metadata: types.ModifierCreateOrDeleteItemModifierGroupsMetadataParam): Promise<FetchResponse<200, types.ModifierCreateOrDeleteItemModifierGroupsResponse200>>;
    modifierCreateOrDeleteItemModifierGroups(metadata: types.ModifierCreateOrDeleteItemModifierGroupsMetadataParam): Promise<FetchResponse<200, types.ModifierCreateOrDeleteItemModifierGroupsResponse200>>;
    /**
     * Update the priorities for a collection of up to 200 modifier groups at a time
     *
     */
    modifierUpdateModifierGroupSortOrders(body: types.ModifierUpdateModifierGroupSortOrdersBodyParam, metadata: types.ModifierUpdateModifierGroupSortOrdersMetadataParam): Promise<FetchResponse<number, unknown>>;
    modifierUpdateModifierGroupSortOrders(metadata: types.ModifierUpdateModifierGroupSortOrdersMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Reorder modifiers in the modifier group based on the ordering of the incoming modifier
     * id list. Remove deleted modifiers. Add missing modifiers.
     *
     */
    modifierReorderModifiers(body: types.ModifierReorderModifiersBodyParam, metadata: types.ModifierReorderModifiersMetadataParam): Promise<FetchResponse<200, types.ModifierReorderModifiersResponse200>>;
    modifierReorderModifiers(metadata: types.ModifierReorderModifiersMetadataParam): Promise<FetchResponse<200, types.ModifierReorderModifiersResponse200>>;
    /**
     * Retrieves a list of all items in a single modifier group.
     *
     * @summary Get all items in a single modifier group
     */
    modifierGetModifierGroupItems(metadata: types.ModifierGetModifierGroupItemsMetadataParam): Promise<FetchResponse<200, types.ModifierGetModifierGroupItemsResponse200>>;
    /**
     * Retrieves all modifiers from all modifier groups.
     *
     * @summary Get all modifiers
     */
    modifierGetModifiers(metadata: types.ModifierGetModifiersMetadataParam): Promise<FetchResponse<200, types.ModifierGetModifiersResponse200>>;
    /**
     * Retrieves a list of modifiers in a single modifier group.
     *
     * @summary Get all modifiers in a single modifier group
     */
    modifierGetModifiersByGroup(metadata: types.ModifierGetModifiersByGroupMetadataParam): Promise<FetchResponse<200, types.ModifierGetModifiersByGroupResponse200>>;
    /**
     * Create a modifier object belonging to the modifier group identified in the URL.
     *
     * @summary Create a modifier
     */
    modifierCreateModifier(body: types.ModifierCreateModifierBodyParam, metadata: types.ModifierCreateModifierMetadataParam): Promise<FetchResponse<number, unknown>>;
    modifierCreateModifier(metadata: types.ModifierCreateModifierMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get a single modifier by it's group, and it's UUID
     *
     * @summary Get a single modifier
     */
    modifierGetModifier(metadata: types.ModifierGetModifierMetadataParam): Promise<FetchResponse<200, types.ModifierGetModifierResponse200>>;
    /**
     * Update a modifier. Note that once it has been created, it is not possible to change a
     * modifier's group.
     *
     * @summary Update a single modifier
     */
    modifierUpdateModifier(body: types.ModifierUpdateModifierBodyParam, metadata: types.ModifierUpdateModifierMetadataParam): Promise<FetchResponse<number, unknown>>;
    modifierUpdateModifier(metadata: types.ModifierUpdateModifierMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Delete a single modifier by it's UUID
     *
     * @summary Delete a single modifier
     */
    modifierDeleteModifier(metadata: types.ModifierDeleteModifierMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Retrieves item attributes, for example: size and color of a t-shirt.
     *
     * @summary Get all attributes
     */
    inventoryGetAttributes(metadata: types.InventoryGetAttributesMetadataParam): Promise<FetchResponse<200, types.InventoryGetAttributesResponse200>>;
    /**
     * Create an attribute
     *
     */
    inventoryCreateAttribute(body: types.InventoryCreateAttributeBodyParam, metadata: types.InventoryCreateAttributeMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get a single attribute
     *
     */
    inventoryGetAttribute(metadata: types.InventoryGetAttributeMetadataParam): Promise<FetchResponse<200, types.InventoryGetAttributeResponse200>>;
    /**
     * Update a single attribute
     *
     */
    inventoryUpdateAttribute(body: types.InventoryUpdateAttributeBodyParam, metadata: types.InventoryUpdateAttributeMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Delete a single attribute
     *
     */
    inventoryDeleteAttribute(metadata: types.InventoryDeleteAttributeMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Retrieves all available item variants or options. For more information, see [Get all
     * item groups](https://docs.clover.com/reference/inventorygetitemgroups).
     *
     * @summary Get all options
     */
    inventoryGetOptions(metadata: types.InventoryGetOptionsMetadataParam): Promise<FetchResponse<200, types.InventoryGetOptionsResponse200>>;
    /**
     * Retrieves all available variants or options associated with an attribute.
     *
     * @summary Get all options for an attribute
     */
    inventoryGetOptionsByAttribute(metadata: types.InventoryGetOptionsByAttributeMetadataParam): Promise<FetchResponse<200, types.InventoryGetOptionsByAttributeResponse200>>;
    /**
     * Create an option
     *
     */
    inventoryCreateOption(body: types.InventoryCreateOptionBodyParam, metadata: types.InventoryCreateOptionMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get an attribute and option by ID
     *
     */
    inventoryGetOptionById(metadata: types.InventoryGetOptionByIdMetadataParam): Promise<FetchResponse<200, types.InventoryGetOptionByIdResponse200>>;
    /**
     * Update an option
     *
     */
    inventoryUpdateOption(body: types.InventoryUpdateOptionBodyParam, metadata: types.InventoryUpdateOptionMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Delete an option
     *
     */
    inventoryDeleteOption(metadata: types.InventoryDeleteOptionMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * See the description for 'get all item groups'.
     *
     * @summary Create or delete item/option association
     */
    inventoryCreateOrDeleteOptionItems(metadata: types.InventoryCreateOrDeleteOptionItemsMetadataParam): Promise<FetchResponse<200, types.InventoryCreateOrDeleteOptionItemsResponse200>>;
    /**
     * Retrieves all discounts associated with an inventory item.
     *
     * @summary Get all discounts
     */
    inventoryGetDiscounts(metadata: types.InventoryGetDiscountsMetadataParam): Promise<FetchResponse<200, types.InventoryGetDiscountsResponse200>>;
    /**
     * Create a discount
     *
     */
    inventoryCreateDiscount(body: types.InventoryCreateDiscountBodyParam, metadata: types.InventoryCreateDiscountMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get a single discount
     *
     */
    inventoryGetDiscount(metadata: types.InventoryGetDiscountMetadataParam): Promise<FetchResponse<200, types.InventoryGetDiscountResponse200>>;
    /**
     * Update an discount
     *
     */
    inventoryUpdateDiscount(body: types.InventoryUpdateDiscountBodyParam, metadata: types.InventoryUpdateDiscountMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Delete a discount
     *
     */
    inventoryDeleteDiscount(metadata: types.InventoryDeleteDiscountMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get a list of tax exemption rules which links order types to items in an order to
     * exclude certain tax rates from those items
     *
     * @summary Get all tax exemption rules
     */
    taxrulesGetTaxRules(metadata: types.TaxrulesGetTaxRulesMetadataParam): Promise<FetchResponse<200, types.TaxrulesGetTaxRulesResponse200>>;
    /**
     * Returns the tax exemption rule specified in the request
     *
     * @summary Get an individual tax exemption rule
     */
    taxrulesGetTaxRule(metadata: types.TaxrulesGetTaxRuleMetadataParam): Promise<FetchResponse<200, types.TaxrulesGetTaxRuleResponse200>>;
    /**
     * Send a message to a device that has your app installed and is listening for
     * notifications. For details on how to use Clover's Android SDK to receive notifications,
     * see: https://github.com/clover/android-examples/tree/master/pushnotificationexample.
     *
     * @summary Create a notification for an app
     */
    appsCreateMerchantAppNotification(body: types.AppsCreateMerchantAppNotificationBodyParam, metadata: types.AppsCreateMerchantAppNotificationMetadataParam): Promise<FetchResponse<number, unknown>>;
    appsCreateMerchantAppNotification(metadata: types.AppsCreateMerchantAppNotificationMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Push a message to a device that has your app installed and is listening for
     * notifications.  For details on how to use Clover's Android SDK to receive notifications
     * see: https://github.com/clover/android-examples/tree/master/pushnotificationexample
     *
     * @summary Create a notification for a device
     */
    appsCreateDeviceAppNotification(body: types.AppsCreateDeviceAppNotificationBodyParam, metadata: types.AppsCreateDeviceAppNotificationMetadataParam): Promise<FetchResponse<number, unknown>>;
    appsCreateDeviceAppNotification(metadata: types.AppsCreateDeviceAppNotificationMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Creates a complete order—including line items, modifiers, discounts, and service
     * charges—with a single API call. If you need to create an order with custom or ad-hoc
     * line items, then you must use the `/v3/orders` endpoint. See the documentation for
     * [Working with orders](https://docs.clover.com/docs/working-with-orders).
     *
     * See the documentation for [400 Bad Request
     * errors](https://docs.clover.com/docs/working-with-orders#handling-400-bad-request-errors).
     *
     * @summary Create an atomic order
     */
    orderCreateAtomicOrder(body: types.OrderCreateAtomicOrderBodyParam, metadata: types.OrderCreateAtomicOrderMetadataParam): Promise<FetchResponse<200, types.OrderCreateAtomicOrderResponse200>>;
    orderCreateAtomicOrder(metadata: types.OrderCreateAtomicOrderMetadataParam): Promise<FetchResponse<200, types.OrderCreateAtomicOrderResponse200>>;
    /**
     * Build an order; calculate totals, taxes, discounts, and service charges, and display
     * summary information. The response includes order cart information, the order total, and
     * taxes. See the documentation for [Working with
     * orders](https://docs.clover.com/docs/working-with-orders).
     *
     * See the documentation for [400 Bad Request
     * errors](https://docs.clover.com/docs/working-with-orders#handling-400-bad-request-errors).
     *
     * @summary Checkout an atomic order
     */
    orderCheckoutAtomicOrder(body: types.OrderCheckoutAtomicOrderBodyParam, metadata: types.OrderCheckoutAtomicOrderMetadataParam): Promise<FetchResponse<200, types.OrderCheckoutAtomicOrderResponse200>>;
    orderCheckoutAtomicOrder(metadata: types.OrderCheckoutAtomicOrderMetadataParam): Promise<FetchResponse<200, types.OrderCheckoutAtomicOrderResponse200>>;
    /**
     * Displays a list of orders. See [Manage orders
     * data](https://docs.clover.com/build/working-with-orders/) for more details.
     *
     * @summary Gets a list of orders
     */
    orderGetOrders(metadata: types.OrderGetOrdersMetadataParam): Promise<FetchResponse<200, types.OrderGetOrdersResponse200>>;
    /**
     * Creates or updates orders with a non-Clover inventory and dynamically calculates taxes.
     * Valid fields are: taxRemoved, note, title, state, testMode, manualTransaction,
     * groupLineItems, and orderType. Use separate API calls to add line items. See the
     * tutorial [Create custom orders](https://docs.clover.com/docs/creating-custom-orders).
     *  To create orders with Clover inventory and leverage real-time totals and tax
     * calculation features, use the [Create an atomic
     * order](https://docs.clover.com/docs/creating-custom-orders) endpoint and see the
     * tutorial to [Manage orders data](https://docs.clover.com/docs/working-with-orders).
     *
     * @summary Create custom orders
     */
    orderCreateOrder(body: types.OrderCreateOrderBodyParam, metadata: types.OrderCreateOrderMetadataParam): Promise<FetchResponse<number, unknown>>;
    orderCreateOrder(metadata: types.OrderCreateOrderMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Returns a single order. See https://docs.clover.com/build/working-with-orders/ for more
     * details.
     *
     * @summary Get a single order
     */
    orderGetOrder(metadata: types.OrderGetOrderMetadataParam): Promise<FetchResponse<200, types.OrderGetOrderResponse200>>;
    /**
     * Updates a single order. See
     * [working-with-orders](https://docs.clover.com/build/working-with-orders/) for more
     * details.
     *
     * @summary Update an order
     */
    orderUpdateOrder(body: types.OrderUpdateOrderBodyParam, metadata: types.OrderUpdateOrderMetadataParam): Promise<FetchResponse<number, unknown>>;
    orderUpdateOrder(metadata: types.OrderUpdateOrderMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Deletes a single order. See https://docs.clover.com/build/working-with-orders/ for more
     * details.
     *
     * @summary Delete an order
     */
    orderDeleteOrder(metadata: types.OrderDeleteOrderMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Deletes an order. See https://docs.clover.com/build/working-with-orders/ for more
     * details.
     *
     * @summary Delete an order
     */
    orderDeleteOrderWithReasonHandler(metadata: types.OrderDeleteOrderWithReasonHandlerMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Returns all discount details for an `orderid`.
     *
     * @summary Get all discounts for an order
     */
    orderGetOrderDiscounts(metadata: types.OrderGetOrderDiscountsMetadataParam): Promise<FetchResponse<200, types.OrderGetOrderDiscountsResponse200>>;
    /**
     * Creates a discount for an order.
     *
     * @summary Create a discount on an order
     */
    orderCreateDiscount(body: types.OrderCreateDiscountBodyParam, metadata: types.OrderCreateDiscountMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Deletes discount on an order.
     *
     * @summary Delete an order discount
     */
    orderRemoveOrderDiscount(metadata: types.OrderRemoveOrderDiscountMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Returns all line items for an order.
     *
     * @summary Get all line items for an order
     */
    orderGetOrderLineItems(metadata: types.OrderGetOrderLineItemsMetadataParam): Promise<FetchResponse<200, types.OrderGetOrderLineItemsResponse200>>;
    /**
     * Creates a new item list for an order. However, requests must include a price or
     * inventory item id.
     *
     * @summary Create a new line item
     */
    orderCreateLineItem(body: types.OrderCreateLineItemBodyParam, metadata: types.OrderCreateLineItemMetadataParam): Promise<FetchResponse<number, unknown>>;
    orderCreateLineItem(metadata: types.OrderCreateLineItemMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Deletes all line items for an order.
     *
     * @summary Delete all the line items in an order
     */
    orderDeleteLineItems(metadata: types.OrderDeleteLineItemsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Returns a line item for an order.
     *
     * @summary Get a line item
     */
    orderGetOrderLineItem(metadata: types.OrderGetOrderLineItemMetadataParam): Promise<FetchResponse<200, types.OrderGetOrderLineItemResponse200>>;
    /**
     * Updates a line item for an order.
     *
     * @summary Update a line item
     */
    orderUpdateOrderLineItem(body: types.OrderUpdateOrderLineItemBodyParam, metadata: types.OrderUpdateOrderLineItemMetadataParam): Promise<FetchResponse<number, unknown>>;
    orderUpdateOrderLineItem(metadata: types.OrderUpdateOrderLineItemMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Deletes a line item for an order.
     *
     * @summary Void a line item
     */
    orderDeleteOrderLineItem(metadata: types.OrderDeleteOrderLineItemMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Creates a discount on a line item for an order.
     *
     * @summary Create a discount on a line item
     */
    orderCreateLineItemDiscount(body: types.OrderCreateLineItemDiscountBodyParam, metadata: types.OrderCreateLineItemDiscountMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Deletes a discount on a line item for an order.
     *
     * @summary Delete a discount
     */
    orderRemoveDiscount(metadata: types.OrderRemoveDiscountMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Creates a modification, a record of a modifier as it exists at the time it is applied to
     * the lineItem. To view current modifications, use the 'expand=modifications' query
     * parameter on the lineItem. To learn more about applying a modification, see:
     * https://docs.clover.com/build/working-with-orders/#add-item-modifiers.
     *
     * @summary Apply a modification to a line item
     */
    orderApplyModification(body: types.OrderApplyModificationBodyParam, metadata: types.OrderApplyModificationMetadataParam): Promise<FetchResponse<number, unknown>>;
    orderApplyModification(metadata: types.OrderApplyModificationMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Deletes a modification by UUID, removing the record of an applied modification.
     *
     * @summary Remove a modification from a line item
     */
    orderRemoveModification(metadata: types.OrderRemoveModificationMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Creates multiple line items in a single request. Each item must include a price for the
     * request to succeed. The maximum number of line items per request is 100. See [Create
     * multiple
     * lineitems](https://docs.clover.com/docs/creating-custom-orders#create-multiple-line-items)
     * tutorial.
     *
     * @summary Create multiple line items
     */
    orderBulkCreateLineItems(body: types.OrderBulkCreateLineItemsBodyParam, metadata: types.OrderBulkCreateLineItemsMetadataParam): Promise<FetchResponse<200, types.OrderBulkCreateLineItemsResponse200>>;
    orderBulkCreateLineItems(metadata: types.OrderBulkCreateLineItemsMetadataParam): Promise<FetchResponse<200, types.OrderBulkCreateLineItemsResponse200>>;
    /**
     * Displays payment information, including the total amount, tip amount, tax amount, and
     * result status for an `order`.
     *
     * @summary Get all payments for an order
     */
    payGetOrderPayments(metadata: types.PayGetOrderPaymentsMetadataParam): Promise<FetchResponse<200, types.PayGetOrderPaymentsResponse200>>;
    /**
     * Payment must include a `positive amount` and a valid `tender ID`.
     *  `Note`: This endpoint references external tenders and logs them for bookkeeping
     * purposes. This is not for Clover credits/debit tenders. A merchant's tenders and their
     * IDs can be retrieved from /v3/merchants/mId/tenders.
     *
     * @summary Create a payment record on an order
     */
    orderCreatePaymentForOrder(body: types.OrderCreatePaymentForOrderBodyParam, metadata: types.OrderCreatePaymentForOrderMetadataParam): Promise<FetchResponse<number, unknown>>;
    orderCreatePaymentForOrder(metadata: types.OrderCreatePaymentForOrderMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Request body must include the merchant's `service charge ID`. This ID can be retrieved
     * from /v3/merchants/mId/default_service_charge. Each request can set a different name and
     * percentageDecimal as needed for an order.
     *
     * @summary Apply a service charge to an order
     */
    orderApplyServiceCharge(body: types.OrderApplyServiceChargeBodyParam, metadata: types.OrderApplyServiceChargeMetadataParam): Promise<FetchResponse<number, unknown>>;
    orderApplyServiceCharge(metadata: types.OrderApplyServiceChargeMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Removes service charge from an order. Request body must include the merchant's `service
     * charge ID`. This ID can be retrieved from /v3/merchants/mId/default_service_charge. Each
     * request can set a `different name` and `percentageDecimal` as needed for an order.
     *
     * @summary Remove service charge from an order
     */
    orderRemoveServiceCharge(metadata: types.OrderRemoveServiceChargeMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Creates a list of voided line items for an order.
     *
     * @summary Create a list of voided line items
     */
    orderVoidOrderLineItem(body: types.OrderVoidOrderLineItemBodyParam, metadata: types.OrderVoidOrderLineItemMetadataParam): Promise<FetchResponse<number, unknown>>;
    orderVoidOrderLineItem(metadata: types.OrderVoidOrderLineItemMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Retrieves a list of line items from voided orders, along with the reason for the void.
     *
     * @summary Get a list of line items from voided orders
     */
    lineitemGetVoidedOrderLineItems(metadata: types.LineitemGetVoidedOrderLineItemsMetadataParam): Promise<FetchResponse<200, types.LineitemGetVoidedOrderLineItemsResponse200>>;
    /**
     * Returns detailed information about line items and orders which were deleted.
     *
     * @summary Get summary about line items and orders which were deleted
     */
    handlerGetVoidedLineItemsTotals(metadata: types.HandlerGetVoidedLineItemsTotalsMetadataParam): Promise<FetchResponse<200, types.HandlerGetVoidedLineItemsTotalsResponse200>>;
    /**
     * Creates or exchange line items for an order.
     *
     * @summary Create or exchange a line item
     */
    orderSetOrderLineItem(body: types.OrderSetOrderLineItemBodyParam, metadata: types.OrderSetOrderLineItemMetadataParam): Promise<FetchResponse<number, unknown>>;
    orderSetOrderLineItem(metadata: types.OrderSetOrderLineItemMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * An authorization is a permission by a card issuer that a merchant can charge the
     * customer in the future up to the specified amount. An authorization is created when a
     * merchant uses the Bar Tabs and Authorizations apps.
     *
     * @summary Get all authorizations
     */
    payGetAuthorizations(metadata: types.PayGetAuthorizationsMetadataParam): Promise<FetchResponse<200, types.PayGetAuthorizationsResponse200>>;
    /**
     * An authorization must reference a payment, have an amount greater than 0, and have a
     * type.
     *
     * @summary Create an authorization on a Payment
     */
    payCreateAuthorization(body: types.PayCreateAuthorizationBodyParam, metadata: types.PayCreateAuthorizationMetadataParam): Promise<FetchResponse<200, types.PayCreateAuthorizationResponse200>>;
    payCreateAuthorization(metadata: types.PayCreateAuthorizationMetadataParam): Promise<FetchResponse<200, types.PayCreateAuthorizationResponse200>>;
    /**
     * Retrieve an authorization for a payment, have an amount greater than 0, and have a type.
     *
     * @summary Get a single authorization
     */
    payGetAuthorization(metadata: types.PayGetAuthorizationMetadataParam): Promise<FetchResponse<200, types.PayGetAuthorizationResponse200>>;
    /**
     * Creates an authorization for a payment, have an amount greater than 0, and have a type.
     *
     * @summary Update an authorization
     */
    payUpdateAuthorization(body: types.PayUpdateAuthorizationBodyParam, metadata: types.PayUpdateAuthorizationMetadataParam): Promise<FetchResponse<number, unknown>>;
    payUpdateAuthorization(metadata: types.PayUpdateAuthorizationMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Deletes an authorization for a payment, have an amount greater than 0, and have a type.
     *
     * @summary Delete an authorization
     */
    payDeleteAuthorization(metadata: types.PayDeleteAuthorizationMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Displays payment information, including the total amount, tip amount, tax amount, and
     * result status.
     *
     * @summary Get all payments
     */
    payGetPayments(metadata: types.PayGetPaymentsMetadataParam): Promise<FetchResponse<200, types.PayGetPaymentsResponse200>>;
    /**
     * Retrieve a single payment information, including the total amount, tip amount, tax
     * amount, and result status.
     *
     * @summary Get a single payment
     */
    payGetPayment(metadata: types.PayGetPaymentMetadataParam): Promise<FetchResponse<200, types.PayGetPaymentResponse200>>;
    /**
     * This endpoint can only be used to update the following information:
     * 1. `lineItemPayments`
     * 2. `employee.id` (if the payment is a preauth with `captured` currently set to `null)`.
     *
     * All other properties in the request are ignored.
     *
     * @summary Update a payment
     */
    payUpdatePayment(body: types.PayUpdatePaymentBodyParam, metadata: types.PayUpdatePaymentMetadataParam): Promise<FetchResponse<number, unknown>>;
    payUpdatePayment(metadata: types.PayUpdatePaymentMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Displays payment information, including the total amount, tip amount, tax amount, and
     * result status for an `employee`.
     *
     * @summary Get all payments under an employee
     */
    payGetEmployeePayments(metadata: types.PayGetEmployeePaymentsMetadataParam): Promise<FetchResponse<200, types.PayGetEmployeePaymentsResponse200>>;
    /**
     * Displays refunds for a merchant associated with a payment, including taxes and tips.
     *
     * @summary Get all refunds for a merchant
     */
    payGetRefunds(metadata: types.PayGetRefundsMetadataParam): Promise<FetchResponse<200, types.PayGetRefundsResponse200>>;
    /**
     * Displays a single refund associated with a payment, including taxes and tips.
     *
     * @summary Get a single refund
     */
    payGetRefund(metadata: types.PayGetRefundMetadataParam): Promise<FetchResponse<200, types.PayGetRefundResponse200>>;
    /**
     * Get a list of credits
     *
     */
    payGetCredits(metadata: types.PayGetCreditsMetadataParam): Promise<FetchResponse<200, types.PayGetCreditsResponse200>>;
    /**
     * Get a single credit
     *
     */
    payGetCredit(metadata: types.PayGetCreditMetadataParam): Promise<FetchResponse<200, types.PayGetCreditResponse200>>;
    /**
     * Displays a list of credit refunds associated with a payment, including taxes and tips.
     *
     * @summary Get a list of credit refunds
     */
    payGetCreditRefunds(metadata: types.PayGetCreditRefundsMetadataParam): Promise<FetchResponse<200, types.PayGetCreditRefundsResponse200>>;
    /**
     * Displays a credit refund associated with a payment, including taxes and tips.
     *
     * @summary Get a credit refund
     */
    payGetCreditRefund(metadata: types.PayGetCreditRefundMetadataParam): Promise<FetchResponse<200, types.PayGetCreditRefundResponse200>>;
    payGetStatus(metadata: types.PayGetStatusMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Retrieves the status of a merchant's app billing, including the current subscription
     * tier and trial status. Requires an [OAuth-generated
     * token](https://docs.clover.com/docs/using-oauth-20).
     *
     * @summary Get merchant app billing information
     */
    appsGetMerchantBillingInfo(metadata: types.AppsGetMerchantBillingInfoMetadataParam): Promise<FetchResponse<200, types.AppsGetMerchantBillingInfoResponse200>>;
    /**
     * Retrieves all billing events for app metered event types such as `reservation`. Requires
     * an OAuth-generated token. See [Set up
     * pricing](https://docs.clover.com/docs/configuring-billing#metered-pricing).
     *
     * @summary Get all events for an app metered event type
     */
    appsGetMerchantAppMeteredEvents(metadata: types.AppsGetMerchantAppMeteredEventsMetadataParam): Promise<FetchResponse<200, types.AppsGetMerchantAppMeteredEventsResponse200>>;
    /**
     * Creates an app billing metered event. Clover charges the merchant for each action they
     * take on the app based on the amount specified on the app's [Pricing &
     * Distribution](https://docs.clover.com/docs/configuring-billing#subscription-pricing)
     * page. Pass `count` as a query parameter to bill the merchant for the number of metered
     * events. `count` is ignored if you pass it in the request body. Otherwise, `count`
     * defaults to 1. Requires an OAuth-generated token. See [Set up pricing
     * tiers](https://docs.clover.com/docs/configuring-billing#metered-pricing).
     *
     * @summary Create an app billing metered event
     */
    appsCreateMerchantAppMeteredEvent(metadata: types.AppsCreateMerchantAppMeteredEventMetadataParam): Promise<FetchResponse<200, types.AppsCreateMerchantAppMeteredEventResponse200>>;
    /**
     * Retrieves the event details on a merchant's app billing metered event. Requires an
     * OAuth-generated token. See [Set up pricing
     * tiers](https://docs.clover.com/docs/configuring-billing#metered-pricing).
     *
     * @summary Get an app billing metered event
     */
    appsGetMerchantAppMeteredEvent(metadata: types.AppsGetMerchantAppMeteredEventMetadataParam): Promise<FetchResponse<200, types.AppsGetMerchantAppMeteredEventResponse200>>;
    /**
     * Deletes an app metered event if the event was not already billed. Requires an
     * [OAuth-generated token](https://docs.clover.com/docs/using-oauth-20).
     *
     * @summary Delete app billing metered event
     */
    appsDeleteMerchantAppMeteredEvent(metadata: types.AppsDeleteMerchantAppMeteredEventMetadataParam): Promise<FetchResponse<200, types.AppsDeleteMerchantAppMeteredEventResponse200>>;
    /**
     * Submits the `Printrequest` associated with the specific `merchantid`.
     *
     * @summary Submit a print request to the merchant's default order printer
     */
    orderCreatePrintEvent(body: types.OrderCreatePrintEventBodyParam, metadata: types.OrderCreatePrintEventMetadataParam): Promise<FetchResponse<200, types.OrderCreatePrintEventResponse200>>;
    orderCreatePrintEvent(metadata: types.OrderCreatePrintEventMetadataParam): Promise<FetchResponse<200, types.OrderCreatePrintEventResponse200>>;
    /**
     * Returns the `PrintOrder` associated with the specified `eventId`. A complete response,
     * which contains the printing device, print category, and job state, is returned If the
     * state of the print event is CREATED, PRINTING, or FAILED. Once the job is successfully
     * printed, it is discarded and cannot be replayed.
     *
     * @summary Get a print event by its ID
     */
    orderGetPrintEvent(metadata: types.OrderGetPrintEventMetadataParam): Promise<FetchResponse<200, types.OrderGetPrintEventResponse200>>;
}
declare const createSDK: SDK;
export = createSDK;
