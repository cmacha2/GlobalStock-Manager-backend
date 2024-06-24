"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'clover-platform/3.0 (api/6.1.1)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
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
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
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
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * Get a single merchant
     *
     */
    SDK.prototype.merchantGetMerchant = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}', 'get', metadata);
    };
    /**
     * Update a merchant
     *
     */
    SDK.prototype.merchantUpdateMerchant = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}', 'post', body, metadata);
    };
    /**
     * Get a merchant's address
     *
     */
    SDK.prototype.merchantGetMerchantAddress = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/address', 'get', metadata);
    };
    /**
     * Get a merchant's payment gateway configuration
     *
     */
    SDK.prototype.merchantGetMerchantGateway = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/gateway', 'get', metadata);
    };
    /**
     * Get a merchant's properties
     *
     */
    SDK.prototype.merchantGetMerchantProperties = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/properties', 'get', metadata);
    };
    SDK.prototype.merchantUpdateMerchantProperties = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/properties', 'post', body, metadata);
    };
    /**
     * The Merchant's default service charge, set via the Setup App
     * (https://www.clover.com/setupapp).
     *
     * @summary Get default service charge for a merchant
     */
    SDK.prototype.merchantGetDefaultServiceCharge = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/default_service_charge', 'get', metadata);
    };
    /**
     * Get a sync token (deprecated)
     *
     */
    SDK.prototype.syncGetSyncToken = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/sync/{table}', 'get', metadata);
    };
    /**
     * Retrieves all tip suggestions for a merchant, for example: flat tip or percentage.
     *
     * @summary Get all tip suggestions for a merchant
     */
    SDK.prototype.merchantGetTipSuggestions = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/tip_suggestions', 'get', metadata);
    };
    /**
     * Get a single tip suggestion
     *
     */
    SDK.prototype.merchantGetTipSuggestion = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/tip_suggestions/{tId}', 'get', metadata);
    };
    SDK.prototype.merchantUpdateTipSuggestion = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/tip_suggestions/{tId}', 'post', body, metadata);
    };
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
    SDK.prototype.merchantGetOrderTypes = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/order_types', 'get', metadata);
    };
    SDK.prototype.merchantCreateOrderType = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/order_types', 'post', body, metadata);
    };
    /**
     * Get a single order type
     *
     */
    SDK.prototype.merchantGetOrderType = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/order_types/{orderTypeId}', 'get', metadata);
    };
    SDK.prototype.merchantUpdateOrderType = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/order_types/{orderTypeId}', 'post', body, metadata);
    };
    /**
     * Delete an order type
     *
     */
    SDK.prototype.merchantDeleteOrderType = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/order_types/{orderTypeId}', 'delete', metadata);
    };
    /**
     * Create or delete associations between order types and categories
     *
     */
    SDK.prototype.orderCreateOrDeleteOrderTypeCategories = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/order_type_categories', 'post', metadata);
    };
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
    SDK.prototype.merchantGetSystemOrderTypes = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/system_order_types', 'get', metadata);
    };
    /**
     * Retrieves all system and employee roles for a merchant's business.
     *
     * @summary Get all roles for a merchant
     */
    SDK.prototype.roleGetRoles = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/roles', 'get', metadata);
    };
    /**
     * Create a role
     *
     */
    SDK.prototype.roleCreateRole = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/roles', 'post', body, metadata);
    };
    /**
     * Get a single role
     *
     */
    SDK.prototype.roleGetRole = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/roles/{roleId}', 'get', metadata);
    };
    /**
     * Update a single role
     *
     */
    SDK.prototype.roleUpdateRole = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/roles/{roleId}', 'post', body, metadata);
    };
    /**
     * Delete a role
     *
     */
    SDK.prototype.roleDeleteRole = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/roles/{roleId}', 'delete', metadata);
    };
    /**
     * Retrieves all tenders for a merchant.
     *
     * @summary Get all tenders for a merchant
     */
    SDK.prototype.payGetMerchantTenders = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/tenders', 'get', metadata);
    };
    /**
     * Returns an object representing newly added merchant tender, with a generated ID.
     *
     * @summary Adds a new tender
     */
    SDK.prototype.payCreateMerchantTender = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/tenders', 'post', body, metadata);
    };
    /**
     * Get a single merchant tender
     *
     */
    SDK.prototype.payGetMerchantTender = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/tenders/{tenderId}', 'get', metadata);
    };
    SDK.prototype.payUpdateMerchantTender = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/tenders/{tenderId}', 'post', body, metadata);
    };
    /**
     * Deletes an existing tender
     *
     */
    SDK.prototype.payDeleteMerchantTender = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/tenders/{tenderId}', 'delete', metadata);
    };
    /**
     * Get a list this merchant opening hours
     *
     */
    SDK.prototype.merchantGetAllMerchantOpeningHours = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/opening_hours', 'get', metadata);
    };
    SDK.prototype.merchantCreateMerchantOpeningHours = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/opening_hours', 'post', body, metadata);
    };
    /**
     * Get a specific set of merchant opening hours
     *
     */
    SDK.prototype.merchantGetMerchantOpeningHours = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/opening_hours/{hId}', 'get', metadata);
    };
    SDK.prototype.merchantUpdateMerchantOpeningHours = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/opening_hours/{hId}', 'post', body, metadata);
    };
    /**
     * Delete a set of merchant opening hours
     *
     */
    SDK.prototype.merchantDeleteMerchantOpeningHours = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/opening_hours/{hId}', 'delete', metadata);
    };
    /**
     * Returns a list of all devices that are provisioned to the a merchant. This list can be
     * viewed from the Setup App on the merchant's device or web dashboard
     * (https://www.clover.com/setupapp/m/{mId}/devices).
     *
     * @summary Get all devices provisioned to a merchant
     */
    SDK.prototype.deviceGetMerchantDevices = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/devices', 'get', metadata);
    };
    /**
     * Returns a single device that is provisioned to a merchant.
     *
     * @summary Get a single device provisioned to a merchant
     */
    SDK.prototype.deviceGetMerchantDevice = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/devices/{deviceId}', 'get', metadata);
    };
    /**
     * Retrieve all cash events for this merchant. Cash events can also be consumed by
     * registering a Webhook callback. See https://docs.clover.com/build/webhooks/
     *
     * @summary Get all cash events
     */
    SDK.prototype.cashGetAllCashEvents = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/cash_events', 'get', metadata);
    };
    /**
     * Retrieve cash events filtered by employee ID. Cash events can also be consumed by
     * registering a Webhook callback. See https://docs.clover.com/build/webhooks/
     *
     * @summary Get all cash events for an employee
     */
    SDK.prototype.cashGetEmployeeCashEvents = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/employees/{empId}/cash_events', 'get', metadata);
    };
    /**
     * Retrieve cash events filtered by device ID. Cash events can also be consumed by
     * registering a Webhook callback. See https://docs.clover.com/build/webhooks/
     *
     * @summary Get all cash events for a device
     */
    SDK.prototype.cashGetDeviceCashEvents = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/devices/{deviceId}/cash_events', 'get', metadata);
    };
    /**
     * Gives information for every customer of a merchant by default.
     *
     * @summary Get a list of customers in CSV format
     */
    SDK.prototype.handlersGetCustomersCsv = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/customers.csv', 'get', metadata);
    };
    /**
     * Gives information for every customer of a merchant by default.
     *
     * @summary Get a list of customers
     */
    SDK.prototype.customersGetCustomers = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/customers', 'get', metadata);
    };
    SDK.prototype.customersCreateCustomer = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/customers', 'post', body, metadata);
    };
    /**
     * Returns information for a single customer.
     *
     * @summary Get a single customer
     */
    SDK.prototype.customersGetCustomer = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/customers/{customerId}', 'get', metadata);
    };
    SDK.prototype.customersUpdateCustomer = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/customers/{customerId}', 'post', body, metadata);
    };
    /**
     * Deletes a single customer from a merchant.
     *
     * @summary Delete a customer
     */
    SDK.prototype.customersDeleteCustomer = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/customers/{customerId}', 'delete', metadata);
    };
    /**
     * Creates a phone number associated to a merchant's customer.
     *
     * @summary Create a phone number for a customer
     */
    SDK.prototype.customersCreateCustomerPhoneNumber = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/customers/{customerId}/phone_numbers', 'post', body, metadata);
    };
    /**
     * Updates a merchant's customer's phone number.
     *
     * @summary Update a phone number for a customer
     */
    SDK.prototype.customersUpdateCustomerPhoneNumber = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/customers/{customerId}/phone_numbers/{phoneId}', 'post', body, metadata);
    };
    /**
     * Deletes a merchant's customer's phone number.
     *
     * @summary Delete a customer phone number
     */
    SDK.prototype.customersDeleteCustomerPhoneNumber = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/customers/{customerId}/phone_numbers/{phoneId}', 'delete', metadata);
    };
    /**
     * Creates an email address associated to a merchant's customer.
     *
     * @summary Create an email address for a customer
     */
    SDK.prototype.customersCreateCustomerEmailAddress = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/customers/{customerId}/email_addresses', 'post', body, metadata);
    };
    /**
     * Updates a merchant's customer's email address.
     *
     * @summary Update an email address for a customer
     */
    SDK.prototype.customersUpdateCustomerEmailAddress = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/customers/{customerId}/email_addresses/{emailId}', 'post', body, metadata);
    };
    /**
     * Deletes a merchant's customer's email address.
     *
     * @summary Delete a customer email address
     */
    SDK.prototype.customersDeleteCustomerEmailAddress = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/customers/{customerId}/email_addresses/{emailId}', 'delete', metadata);
    };
    SDK.prototype.customersCreateCustomerAddress = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/customers/{customerId}/addresses', 'post', body, metadata);
    };
    SDK.prototype.customersUpdateCustomerAddress = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/customers/{customerId}/addresses/{addressId}', 'post', body, metadata);
    };
    /**
     * Deletes a merchant's customer's address.
     *
     * @summary Delete a customer address
     */
    SDK.prototype.customersDeleteCustomerAddress = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/customers/{customerId}/addresses/{addressId}', 'delete', metadata);
    };
    /**
     * "first6" and "last4" fields are required.
     *
     * @summary Create a credit/debit card entry for a customer
     */
    SDK.prototype.customersCreateCustomerCard = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/customers/{customerId}/cards', 'post', body, metadata);
    };
    /**
     * Update a credit/debit card record for a customer
     *
     */
    SDK.prototype.customersUpdateCustomerCard = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/customers/{customerId}/cards/{cardId}', 'post', body, metadata);
    };
    /**
     * Delete a customer card
     *
     */
    SDK.prototype.customersDeleteCustomerCard = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/customers/{customerId}/cards/{cardId}', 'delete', metadata);
    };
    SDK.prototype.customersCreateOrUpdateCustomerMetadata = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/customers/{customerId}/metadata', 'post', body, metadata);
    };
    /**
     * Retrieves information about employees associated with a merchant.
     *
     * @summary Get all employees
     */
    SDK.prototype.employeeGetEmployees = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/employees', 'get', metadata);
    };
    /**
     * Creates an employee for a merchant. Accepts optional expand parameters.
     *
     * @summary Create an employee
     */
    SDK.prototype.employeeCreateEmployee = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/employees', 'post', body, metadata);
    };
    /**
     * Returns information for a single employee.  Accepts optional expand query parameters
     *
     * @summary Get a single employee
     */
    SDK.prototype.employeeGetEmployee = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/employees/{empId}', 'get', metadata);
    };
    /**
     * Updates information for a single employee. Accepts optional expand query params.
     *
     * @summary Update an employee
     */
    SDK.prototype.employeeUpdateEmployee = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/employees/{empId}', 'post', body, metadata);
    };
    /**
     * Deletes a single employee from a merchant, also can't delete the 'owner' employee.
     *
     * @summary Delete an employee
     */
    SDK.prototype.employeeDeleteEmployee = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/employees/{empId}', 'delete', metadata);
    };
    /**
     * Get all shifts
     *
     */
    SDK.prototype.merchantGetAllShifts = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/shifts', 'get', metadata);
    };
    /**
     * Get a single shift
     *
     */
    SDK.prototype.merchantGetShift = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/shifts/{shiftId}', 'get', metadata);
    };
    /**
     * Get .csv of all shifts
     *
     */
    SDK.prototype.merchantGetAllShiftsCSV = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/shifts.csv', 'get', metadata);
    };
    /**
     * Get all shifts for an employee
     *
     */
    SDK.prototype.employeeGetEmployeeShifts = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/employees/{empId}/shifts', 'get', metadata);
    };
    SDK.prototype.employeeCreateShift = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/employees/{empId}/shifts', 'post', body, metadata);
    };
    /**
     * Get a single shift
     *
     */
    SDK.prototype.employeeGetEmployeeShift = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/employees/{empId}/shifts/{shiftId}', 'get', metadata);
    };
    SDK.prototype.employeeUpdateShift = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/employees/{empId}/shifts/{shiftId}', 'post', body, metadata);
    };
    /**
     * When sending a request, you must include an X-Clover-Account-Id header. The value of the
     * header must be the ID of an employee with the permission to edit shifts.
     *
     * @summary Delete a single shift
     */
    SDK.prototype.employeeDeleteShift = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/employees/{empId}/shifts/{shiftId}', 'delete', metadata);
    };
    /**
     * Get all orders for an employee
     *
     */
    SDK.prototype.employeeGetEmployeeOrders = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/employees/{empId}/orders', 'get', metadata);
    };
    /**
     * Displays line items for each category in the inventory for an order.
     *
     * @summary Get all inventory items
     */
    SDK.prototype.inventoryGetItems = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/items', 'get', metadata);
    };
    /**
     * Creates an inventory item.
     *
     * @summary Create an inventory item
     */
    SDK.prototype.inventoryCreateItem = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/items', 'post', body, metadata);
    };
    /**
     * Deletes multiple inventory items in a single request. Add a query string with the
     * parameter `itemIds` and a comma-separated list of one or more `itemId` values.
     *
     * Use this example to create a request to delete three items:
     *  {merchantId}/items?itemIds={itemId},{itemId},{itemId}
     *
     * @summary Delete multiple inventory items
     */
    SDK.prototype.inventoryBulkDeleteItems = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/items', 'delete', metadata);
    };
    /**
     * Retrieves inventory items without a tag or revenue class.
     *  `Note:` A revenue class tracks and compares revenue streams and sales of items taxed at
     * variable rates. Tag items you want to track as part of a revenue class.
     *
     * @summary Get all inventory without a revenue class
     */
    SDK.prototype.inventoryGetItemsNoRevenueClass = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/items_no_revenue_class', 'get', metadata);
    };
    /**
     * Get a single inventory item
     *
     */
    SDK.prototype.inventoryGetItem = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/items/{itemId}', 'get', metadata);
    };
    SDK.prototype.inventoryUpdateItem = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/items/{itemId}', 'post', body, metadata);
    };
    /**
     * Delete an inventory item
     *
     */
    SDK.prototype.inventoryDeleteItem = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/items/{itemId}', 'delete', metadata);
    };
    /**
     * Updates only the changes in the payload without replacing existing inventory items. Use
     * the POST HTTP method to [create multiple inventory
     * items](https://docs.clover.com/reference/inventorybulkcreateinventoryitems).
     *
     * @summary Update existing inventory items
     */
    SDK.prototype.inventoryBulkPatchInventoryItems = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/bulk_items', 'put', body, metadata);
    };
    /**
     * Creates multiple inventory items in a single request. Use the PUT HTTP method to [update
     * existing inventory
     * items](https://docs.clover.com/reference/inventorybulkpatchinventoryitems).
     *
     * @summary Create multiple inventory items
     */
    SDK.prototype.inventoryBulkCreateInventoryItems = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/bulk_items', 'post', body, metadata);
    };
    /**
     * Get the stock of all inventory items
     *
     */
    SDK.prototype.inventoryGetItemStocks = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/item_stocks', 'get', metadata);
    };
    /**
     * Get the stock of an inventory item
     *
     */
    SDK.prototype.inventoryGetItemStock = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/item_stocks/{itemId}', 'get', metadata);
    };
    SDK.prototype.inventoryUpdateItemStock = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/item_stocks/{itemId}', 'post', body, metadata);
    };
    /**
     * Delete the stock of an inventory item
     *
     */
    SDK.prototype.inventoryDeleteItemStock = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/item_stocks/{itemId}', 'delete', metadata);
    };
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
    SDK.prototype.inventoryGetItemGroups = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/item_groups', 'get', metadata);
    };
    /**
     * Create an item group
     *
     */
    SDK.prototype.inventoryCreateItemGroup = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/item_groups', 'post', body, metadata);
    };
    /**
     * Get a single item group
     *
     */
    SDK.prototype.inventoryGetItemGroup = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/item_groups/{itemGroupId}', 'get', metadata);
    };
    /**
     * Update an item group
     *
     */
    SDK.prototype.inventoryUpdateItemGroup = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/item_groups/{itemGroupId}', 'post', body, metadata);
    };
    /**
     * Delete an item group
     *
     */
    SDK.prototype.inventoryDeleteItemGroup = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/item_groups/{itemGroupId}', 'delete', metadata);
    };
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
    SDK.prototype.tagGetTags = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/tags', 'get', metadata);
    };
    /**
     * Create a tag
     *
     */
    SDK.prototype.tagCreateTag = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/tags', 'post', body, metadata);
    };
    /**
     * Deletes multiple tags in a single request. Add a query string with the parameter
     * `tagIds` and a comma-separated list of one or more `tagIds` values.
     *
     * Use this example to create a request to delete three tags:
     * {merchantId}/tags?tagIds={tagId1},{tagId2},{tagId3}
     *
     * @summary Delete tags
     */
    SDK.prototype.tagBulkDeleteTags = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/tags', 'delete', metadata);
    };
    /**
     * Get a single tag
     *
     */
    SDK.prototype.tagGetTag = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/tags/{tagId}', 'get', metadata);
    };
    /**
     * Update a single tag
     *
     */
    SDK.prototype.tagUpdateTag = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/tags/{tagId}', 'post', body, metadata);
    };
    /**
     * Delete a tag
     *
     */
    SDK.prototype.tagDeleteTag = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/tags/{tagId}', 'delete', metadata);
    };
    /**
     * Get tags for a single item
     *
     */
    SDK.prototype.tagGetItemTags = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/items/{itemId}/tags', 'get', metadata);
    };
    /**
     * Get all items for a single tag
     *
     */
    SDK.prototype.tagGetTaggedItems = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/tags/{tagId}/items', 'get', metadata);
    };
    /**
     * Get a list of all tag to item mappings
     *
     */
    SDK.prototype.tagGetTagItems = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/tag_items', 'get', metadata);
    };
    /**
     * Create or delete associations between tags and items
     *
     */
    SDK.prototype.tagCreateOrDeleteTagItems = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/tag_items', 'post', metadata);
    };
    /**
     * Retrieves all tax rates applicable on an order. A tax rate is a percentage or a flat fee
     * at which an item is taxed.
     *
     * @summary Get all tax rates
     */
    SDK.prototype.taxrateGetTaxRates = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/tax_rates', 'get', metadata);
    };
    /**
     * Create a tax rate for a merchant
     *
     */
    SDK.prototype.taxrateCreateTaxRate = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/tax_rates', 'post', body, metadata);
    };
    /**
     * Get a single tax rate
     *
     */
    SDK.prototype.taxrateGetTaxRate = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/tax_rates/{taxId}', 'get', metadata);
    };
    /**
     * Update a single tax rate
     *
     */
    SDK.prototype.taxrateUpdateTaxRate = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/tax_rates/{taxId}', 'post', body, metadata);
    };
    /**
     * Delete a single tax rate
     *
     */
    SDK.prototype.taxrateDeleteTaxRate = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/tax_rates/{taxId}', 'delete', metadata);
    };
    /**
     * Retrieves all categories. Items display on the Register app within categories in the
     * order in which they are added to a category. Items may be associated with one or more
     * categories or may not be associated with any category. Categories display in the
     * Register app based on the sort order value for each category.
     *
     * @summary Get all categories
     */
    SDK.prototype.categoryGetCategories = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/categories', 'get', metadata);
    };
    /**
     * Create an item category
     *
     */
    SDK.prototype.categoryCreateCategory = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/categories', 'post', body, metadata);
    };
    /**
     * Deletes multiple categories in a single request. Add a query string with the parameter
     * `categoryIds` and a comma-separated list of one or more `categoryIds` values.
     *
     * Use this example to create a request to delete three categories:
     *  {merchantId}/categories?categoryIds={categoryId},{categoryId},{categoryId}
     *
     * @summary Delete categories
     */
    SDK.prototype.categoryBulkDeleteCategories = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/categories', 'delete', metadata);
    };
    /**
     * Get a category
     *
     */
    SDK.prototype.categoryGetCategory = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/categories/{catId}', 'get', metadata);
    };
    /**
     * Update a category
     *
     */
    SDK.prototype.categoryUpdateCategory = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/categories/{catId}', 'post', body, metadata);
    };
    /**
     * Delete a single item category
     *
     */
    SDK.prototype.categoryDeleteCategory = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/categories/{catId}', 'delete', metadata);
    };
    SDK.prototype.categoryUpdateCategorySortOrders = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/categories/bulk_sort_orders', 'post', body, metadata);
    };
    /**
     * Retrieves all items in a category.
     *
     * @summary Get all items in a single category
     */
    SDK.prototype.categoryGetCategoryItems = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/categories/{catId}/items', 'get', metadata);
    };
    /**
     * Retrieves all categories of an item.
     *
     * @summary Get all categories of a single item
     */
    SDK.prototype.categoryGetItemCategories = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/items/{itemId}/categories', 'get', metadata);
    };
    /**
     * Create or delete associations between items and categories
     *
     */
    SDK.prototype.categoryCreateOrDeleteCategoryItems = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/category_items', 'post', metadata);
    };
    /**
     * Creates or deletes association between line items and tax rates. For more information,
     * see [Use object associations](https://docs.clover.com/docs/using-object-associations).
     *
     * @summary Create or delete association between items and tax rates
     */
    SDK.prototype.taxrateCreateOrDeleteTaxRateItems = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/tax_rate_items', 'post', body, metadata);
    };
    /**
     * Get items by tax rate
     *
     */
    SDK.prototype.taxrateGetItemsByTaxRate = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/tax_rates/{taxId}/items', 'get', metadata);
    };
    /**
     * Retrieves all modifier groups. Modifier groupings are the categories to which different
     * modifiers belong. Modifier groups can be made available for specific inventory Items by
     * creating an item to a modifier group association.
     *
     * @summary Get all modifier groups
     */
    SDK.prototype.modifierGetModifierGroups = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/modifier_groups', 'get', metadata);
    };
    /**
     * Creates a new modifier group. After you create a modifier group, you can associate
     * modifiers with the group.
     *
     * @summary Create a modifier group
     */
    SDK.prototype.modifierCreateModifierGroup = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/modifier_groups', 'post', body, metadata);
    };
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
    SDK.prototype.modifierBulkDeleteModifierGroups = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/modifier_groups', 'delete', metadata);
    };
    /**
     * Get a single modifier group by it's UUID
     *
     * @summary Get a modifier group
     */
    SDK.prototype.modifierGetModifierGroup = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/modifier_groups/{modGroupId}', 'get', metadata);
    };
    SDK.prototype.modifierUpdateModifierGroup = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/modifier_groups/{modGroupId}', 'post', body, metadata);
    };
    /**
     * Delete an existing modifier group, identified by UUID. This also deletes all modifiers
     * within that group.
     *
     * @summary Delete a modifier group
     */
    SDK.prototype.modifierDeleteModifierGroup = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/modifier_groups/{modGroupId}', 'delete', metadata);
    };
    SDK.prototype.modifierCreateOrDeleteItemModifierGroups = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/item_modifier_groups', 'post', body, metadata);
    };
    SDK.prototype.modifierUpdateModifierGroupSortOrders = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/modifier_group_sort_orders', 'post', body, metadata);
    };
    SDK.prototype.modifierReorderModifiers = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/modifier_groups/{modGroupId}/layout', 'put', body, metadata);
    };
    /**
     * Retrieves a list of all items in a single modifier group.
     *
     * @summary Get all items in a single modifier group
     */
    SDK.prototype.modifierGetModifierGroupItems = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/modifier_groups/{modGroupId}/items', 'get', metadata);
    };
    /**
     * Retrieves all modifiers from all modifier groups.
     *
     * @summary Get all modifiers
     */
    SDK.prototype.modifierGetModifiers = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/modifiers', 'get', metadata);
    };
    /**
     * Retrieves a list of modifiers in a single modifier group.
     *
     * @summary Get all modifiers in a single modifier group
     */
    SDK.prototype.modifierGetModifiersByGroup = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/modifier_groups/{modGroupId}/modifiers', 'get', metadata);
    };
    SDK.prototype.modifierCreateModifier = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/modifier_groups/{modGroupId}/modifiers', 'post', body, metadata);
    };
    /**
     * Get a single modifier by it's group, and it's UUID
     *
     * @summary Get a single modifier
     */
    SDK.prototype.modifierGetModifier = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/modifier_groups/{modGroupId}/modifiers/{modId}', 'get', metadata);
    };
    SDK.prototype.modifierUpdateModifier = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/modifier_groups/{modGroupId}/modifiers/{modId}', 'post', body, metadata);
    };
    /**
     * Delete a single modifier by it's UUID
     *
     * @summary Delete a single modifier
     */
    SDK.prototype.modifierDeleteModifier = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/modifier_groups/{modGroupId}/modifiers/{modId}', 'delete', metadata);
    };
    /**
     * Retrieves item attributes, for example: size and color of a t-shirt.
     *
     * @summary Get all attributes
     */
    SDK.prototype.inventoryGetAttributes = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/attributes', 'get', metadata);
    };
    /**
     * Create an attribute
     *
     */
    SDK.prototype.inventoryCreateAttribute = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/attributes', 'post', body, metadata);
    };
    /**
     * Get a single attribute
     *
     */
    SDK.prototype.inventoryGetAttribute = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/attributes/{attributeId}', 'get', metadata);
    };
    /**
     * Update a single attribute
     *
     */
    SDK.prototype.inventoryUpdateAttribute = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/attributes/{attributeId}', 'post', body, metadata);
    };
    /**
     * Delete a single attribute
     *
     */
    SDK.prototype.inventoryDeleteAttribute = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/attributes/{attributeId}', 'delete', metadata);
    };
    /**
     * Retrieves all available item variants or options. For more information, see [Get all
     * item groups](https://docs.clover.com/reference/inventorygetitemgroups).
     *
     * @summary Get all options
     */
    SDK.prototype.inventoryGetOptions = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/options', 'get', metadata);
    };
    /**
     * Retrieves all available variants or options associated with an attribute.
     *
     * @summary Get all options for an attribute
     */
    SDK.prototype.inventoryGetOptionsByAttribute = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/attributes/{attributeId}/options', 'get', metadata);
    };
    /**
     * Create an option
     *
     */
    SDK.prototype.inventoryCreateOption = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/attributes/{attributeId}/options', 'post', body, metadata);
    };
    /**
     * Get an attribute and option by ID
     *
     */
    SDK.prototype.inventoryGetOptionById = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/attributes/{attributeId}/options/{optionId}', 'get', metadata);
    };
    /**
     * Update an option
     *
     */
    SDK.prototype.inventoryUpdateOption = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/attributes/{attributeId}/options/{optionId}', 'post', body, metadata);
    };
    /**
     * Delete an option
     *
     */
    SDK.prototype.inventoryDeleteOption = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/attributes/{attributeId}/options/{optionId}', 'delete', metadata);
    };
    /**
     * See the description for 'get all item groups'.
     *
     * @summary Create or delete item/option association
     */
    SDK.prototype.inventoryCreateOrDeleteOptionItems = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/option_items', 'post', metadata);
    };
    /**
     * Retrieves all discounts associated with an inventory item.
     *
     * @summary Get all discounts
     */
    SDK.prototype.inventoryGetDiscounts = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/discounts', 'get', metadata);
    };
    /**
     * Create a discount
     *
     */
    SDK.prototype.inventoryCreateDiscount = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/discounts', 'post', body, metadata);
    };
    /**
     * Get a single discount
     *
     */
    SDK.prototype.inventoryGetDiscount = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/discounts/{discountId}', 'get', metadata);
    };
    /**
     * Update an discount
     *
     */
    SDK.prototype.inventoryUpdateDiscount = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/discounts/{discountId}', 'post', body, metadata);
    };
    /**
     * Delete a discount
     *
     */
    SDK.prototype.inventoryDeleteDiscount = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/discounts/{discountId}', 'delete', metadata);
    };
    /**
     * Get a list of tax exemption rules which links order types to items in an order to
     * exclude certain tax rates from those items
     *
     * @summary Get all tax exemption rules
     */
    SDK.prototype.taxrulesGetTaxRules = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/tax_rules', 'get', metadata);
    };
    /**
     * Returns the tax exemption rule specified in the request
     *
     * @summary Get an individual tax exemption rule
     */
    SDK.prototype.taxrulesGetTaxRule = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/tax_rules/{taxRuleId}', 'get', metadata);
    };
    SDK.prototype.appsCreateMerchantAppNotification = function (body, metadata) {
        return this.core.fetch('/v3/apps/{appId}/merchants/{mId}/notifications', 'post', body, metadata);
    };
    SDK.prototype.appsCreateDeviceAppNotification = function (body, metadata) {
        return this.core.fetch('/v3/apps/{appId}/devices/{deviceId}/notifications', 'post', body, metadata);
    };
    SDK.prototype.orderCreateAtomicOrder = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/atomic_order/orders', 'post', body, metadata);
    };
    SDK.prototype.orderCheckoutAtomicOrder = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/atomic_order/checkouts', 'post', body, metadata);
    };
    /**
     * Displays a list of orders. See [Manage orders
     * data](https://docs.clover.com/build/working-with-orders/) for more details.
     *
     * @summary Gets a list of orders
     */
    SDK.prototype.orderGetOrders = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/orders', 'get', metadata);
    };
    SDK.prototype.orderCreateOrder = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/orders', 'post', body, metadata);
    };
    /**
     * Returns a single order. See https://docs.clover.com/build/working-with-orders/ for more
     * details.
     *
     * @summary Get a single order
     */
    SDK.prototype.orderGetOrder = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/orders/{orderId}', 'get', metadata);
    };
    SDK.prototype.orderUpdateOrder = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/orders/{orderId}', 'post', body, metadata);
    };
    /**
     * Deletes a single order. See https://docs.clover.com/build/working-with-orders/ for more
     * details.
     *
     * @summary Delete an order
     */
    SDK.prototype.orderDeleteOrder = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/orders/{orderId}', 'delete', metadata);
    };
    /**
     * Deletes an order. See https://docs.clover.com/build/working-with-orders/ for more
     * details.
     *
     * @summary Delete an order
     */
    SDK.prototype.orderDeleteOrderWithReasonHandler = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/orders_v2/{orderId}', 'delete', metadata);
    };
    /**
     * Returns all discount details for an `orderid`.
     *
     * @summary Get all discounts for an order
     */
    SDK.prototype.orderGetOrderDiscounts = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/orders/{orderId}/discounts', 'get', metadata);
    };
    /**
     * Creates a discount for an order.
     *
     * @summary Create a discount on an order
     */
    SDK.prototype.orderCreateDiscount = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/orders/{orderId}/discounts', 'post', body, metadata);
    };
    /**
     * Deletes discount on an order.
     *
     * @summary Delete an order discount
     */
    SDK.prototype.orderRemoveOrderDiscount = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/orders/{orderId}/discounts/{discountId}', 'delete', metadata);
    };
    /**
     * Returns all line items for an order.
     *
     * @summary Get all line items for an order
     */
    SDK.prototype.orderGetOrderLineItems = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/orders/{orderId}/line_items', 'get', metadata);
    };
    SDK.prototype.orderCreateLineItem = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/orders/{orderId}/line_items', 'post', body, metadata);
    };
    /**
     * Deletes all line items for an order.
     *
     * @summary Delete all the line items in an order
     */
    SDK.prototype.orderDeleteLineItems = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/orders/{orderId}/line_items', 'delete', metadata);
    };
    /**
     * Returns a line item for an order.
     *
     * @summary Get a line item
     */
    SDK.prototype.orderGetOrderLineItem = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/orders/{orderId}/line_items/{lineItemId}', 'get', metadata);
    };
    SDK.prototype.orderUpdateOrderLineItem = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/orders/{orderId}/line_items/{lineItemId}', 'post', body, metadata);
    };
    /**
     * Deletes a line item for an order.
     *
     * @summary Void a line item
     */
    SDK.prototype.orderDeleteOrderLineItem = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/orders/{orderId}/line_items/{lineItemId}', 'delete', metadata);
    };
    /**
     * Creates a discount on a line item for an order.
     *
     * @summary Create a discount on a line item
     */
    SDK.prototype.orderCreateLineItemDiscount = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/orders/{orderId}/line_items/{lineItemId}/discounts', 'post', body, metadata);
    };
    /**
     * Deletes a discount on a line item for an order.
     *
     * @summary Delete a discount
     */
    SDK.prototype.orderRemoveDiscount = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/orders/{orderId}/line_items/{lineItemId}/discounts/{discountId}', 'delete', metadata);
    };
    SDK.prototype.orderApplyModification = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/orders/{orderId}/line_items/{lineItemId}/modifications', 'post', body, metadata);
    };
    /**
     * Deletes a modification by UUID, removing the record of an applied modification.
     *
     * @summary Remove a modification from a line item
     */
    SDK.prototype.orderRemoveModification = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/orders/{orderId}/line_items/{lineItemId}/modifications/{modificationId}', 'delete', metadata);
    };
    SDK.prototype.orderBulkCreateLineItems = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/orders/{orderId}/bulk_line_items', 'post', body, metadata);
    };
    /**
     * Displays payment information, including the total amount, tip amount, tax amount, and
     * result status for an `order`.
     *
     * @summary Get all payments for an order
     */
    SDK.prototype.payGetOrderPayments = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/orders/{orderId}/payments', 'get', metadata);
    };
    SDK.prototype.orderCreatePaymentForOrder = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/orders/{orderId}/payments', 'post', body, metadata);
    };
    SDK.prototype.orderApplyServiceCharge = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/orders/{orderId}/service_charge/', 'post', body, metadata);
    };
    /**
     * Removes service charge from an order. Request body must include the merchant's `service
     * charge ID`. This ID can be retrieved from /v3/merchants/mId/default_service_charge. Each
     * request can set a `different name` and `percentageDecimal` as needed for an order.
     *
     * @summary Remove service charge from an order
     */
    SDK.prototype.orderRemoveServiceCharge = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/orders/{orderId}/service_charge/{chargeId}', 'delete', metadata);
    };
    SDK.prototype.orderVoidOrderLineItem = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/orders/{orderId}/voided_line_items', 'post', body, metadata);
    };
    /**
     * Retrieves a list of line items from voided orders, along with the reason for the void.
     *
     * @summary Get a list of line items from voided orders
     */
    SDK.prototype.lineitemGetVoidedOrderLineItems = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/voided_line_items', 'get', metadata);
    };
    /**
     * Returns detailed information about line items and orders which were deleted.
     *
     * @summary Get summary about line items and orders which were deleted
     */
    SDK.prototype.handlerGetVoidedLineItemsTotals = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/voided_line_items/totals', 'get', metadata);
    };
    SDK.prototype.orderSetOrderLineItem = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/orders/{orderId}/line_items/{oldLineItemId}/exchange/{lineItemId}', 'post', body, metadata);
    };
    /**
     * An authorization is a permission by a card issuer that a merchant can charge the
     * customer in the future up to the specified amount. An authorization is created when a
     * merchant uses the Bar Tabs and Authorizations apps.
     *
     * @summary Get all authorizations
     */
    SDK.prototype.payGetAuthorizations = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/authorizations', 'get', metadata);
    };
    SDK.prototype.payCreateAuthorization = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/authorizations', 'post', body, metadata);
    };
    /**
     * Retrieve an authorization for a payment, have an amount greater than 0, and have a type.
     *
     * @summary Get a single authorization
     */
    SDK.prototype.payGetAuthorization = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/authorizations/{authId}', 'get', metadata);
    };
    SDK.prototype.payUpdateAuthorization = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/authorizations/{authId}', 'post', body, metadata);
    };
    /**
     * Deletes an authorization for a payment, have an amount greater than 0, and have a type.
     *
     * @summary Delete an authorization
     */
    SDK.prototype.payDeleteAuthorization = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/authorizations/{authId}', 'delete', metadata);
    };
    /**
     * Displays payment information, including the total amount, tip amount, tax amount, and
     * result status.
     *
     * @summary Get all payments
     */
    SDK.prototype.payGetPayments = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/payments', 'get', metadata);
    };
    /**
     * Retrieve a single payment information, including the total amount, tip amount, tax
     * amount, and result status.
     *
     * @summary Get a single payment
     */
    SDK.prototype.payGetPayment = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/payments/{payId}', 'get', metadata);
    };
    SDK.prototype.payUpdatePayment = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/payments/{payId}', 'post', body, metadata);
    };
    /**
     * Displays payment information, including the total amount, tip amount, tax amount, and
     * result status for an `employee`.
     *
     * @summary Get all payments under an employee
     */
    SDK.prototype.payGetEmployeePayments = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/employees/{empId}/payments', 'get', metadata);
    };
    /**
     * Displays refunds for a merchant associated with a payment, including taxes and tips.
     *
     * @summary Get all refunds for a merchant
     */
    SDK.prototype.payGetRefunds = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/refunds', 'get', metadata);
    };
    /**
     * Displays a single refund associated with a payment, including taxes and tips.
     *
     * @summary Get a single refund
     */
    SDK.prototype.payGetRefund = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/refunds/{refundId}', 'get', metadata);
    };
    /**
     * Get a list of credits
     *
     */
    SDK.prototype.payGetCredits = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/credits', 'get', metadata);
    };
    /**
     * Get a single credit
     *
     */
    SDK.prototype.payGetCredit = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/credits/{creditId}', 'get', metadata);
    };
    /**
     * Displays a list of credit refunds associated with a payment, including taxes and tips.
     *
     * @summary Get a list of credit refunds
     */
    SDK.prototype.payGetCreditRefunds = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/credit_refunds', 'get', metadata);
    };
    /**
     * Displays a credit refund associated with a payment, including taxes and tips.
     *
     * @summary Get a credit refund
     */
    SDK.prototype.payGetCreditRefund = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/credit_refunds/{crId}', 'get', metadata);
    };
    SDK.prototype.payGetStatus = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/payments/{payId}/status', 'get', metadata);
    };
    /**
     * Retrieves the status of a merchant's app billing, including the current subscription
     * tier and trial status. Requires an [OAuth-generated
     * token](https://docs.clover.com/docs/using-oauth-20).
     *
     * @summary Get merchant app billing information
     */
    SDK.prototype.appsGetMerchantBillingInfo = function (metadata) {
        return this.core.fetch('/v3/apps/{appId}/merchants/{mId}/billing_info', 'get', metadata);
    };
    /**
     * Retrieves all billing events for app metered event types such as `reservation`. Requires
     * an OAuth-generated token. See [Set up
     * pricing](https://docs.clover.com/docs/configuring-billing#metered-pricing).
     *
     * @summary Get all events for an app metered event type
     */
    SDK.prototype.appsGetMerchantAppMeteredEvents = function (metadata) {
        return this.core.fetch('/v3/apps/{appId}/merchants/{mId}/metereds/{meteredId}', 'get', metadata);
    };
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
    SDK.prototype.appsCreateMerchantAppMeteredEvent = function (metadata) {
        return this.core.fetch('/v3/apps/{appId}/merchants/{mId}/metereds/{meteredId}', 'post', metadata);
    };
    /**
     * Retrieves the event details on a merchant's app billing metered event. Requires an
     * OAuth-generated token. See [Set up pricing
     * tiers](https://docs.clover.com/docs/configuring-billing#metered-pricing).
     *
     * @summary Get an app billing metered event
     */
    SDK.prototype.appsGetMerchantAppMeteredEvent = function (metadata) {
        return this.core.fetch('/v3/apps/{appId}/merchants/{mId}/metereds/{meteredId}/events/{eventId}', 'get', metadata);
    };
    /**
     * Deletes an app metered event if the event was not already billed. Requires an
     * [OAuth-generated token](https://docs.clover.com/docs/using-oauth-20).
     *
     * @summary Delete app billing metered event
     */
    SDK.prototype.appsDeleteMerchantAppMeteredEvent = function (metadata) {
        return this.core.fetch('/v3/apps/{appId}/merchants/{mId}/metereds/{meteredId}/events/{eventId}', 'delete', metadata);
    };
    SDK.prototype.orderCreatePrintEvent = function (body, metadata) {
        return this.core.fetch('/v3/merchants/{mId}/print_event', 'post', body, metadata);
    };
    /**
     * Returns the `PrintOrder` associated with the specified `eventId`. A complete response,
     * which contains the printing device, print category, and job state, is returned If the
     * state of the print event is CREATED, PRINTING, or FAILED. Once the job is successfully
     * printed, it is discarded and cannot be replayed.
     *
     * @summary Get a print event by its ID
     */
    SDK.prototype.orderGetPrintEvent = function (metadata) {
        return this.core.fetch('/v3/merchants/{mId}/print_event/{eventId}', 'get', metadata);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
