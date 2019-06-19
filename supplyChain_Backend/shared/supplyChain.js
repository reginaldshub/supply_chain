/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.supplyChainPackage = (function() {

    /**
     * Namespace supplyChainPackage.
     * @exports supplyChainPackage
     * @namespace
     */
    var supplyChainPackage = {};

    supplyChainPackage.PayLoad = (function() {

        /**
         * Properties of a PayLoad.
         * @memberof supplyChainPackage
         * @interface IPayLoad
         * @property {supplyChainPackage.PayLoad.Action|null} [action] PayLoad action
         * @property {supplyChainPackage.ILandRegistrationParams|null} [landRegistration] PayLoad landRegistration
         * @property {supplyChainPackage.IStartCultivationParams|null} [startCultivation] PayLoad startCultivation
         * @property {supplyChainPackage.IInspectParams|null} [inspection] PayLoad inspection
         * @property {supplyChainPackage.IPerformHarvestParams|null} [performHarvest] PayLoad performHarvest
         * @property {supplyChainPackage.IProcessHarvestParams|null} [processHarvest] PayLoad processHarvest
         * @property {supplyChainPackage.IPurchaseGrainsParams|null} [purchaseGrains] PayLoad purchaseGrains
         * @property {supplyChainPackage.IUpdateProcessDetailsParams|null} [updateProcessDetails] PayLoad updateProcessDetails
         */

        /**
         * Constructs a new PayLoad.
         * @memberof supplyChainPackage
         * @classdesc Represents a PayLoad.
         * @implements IPayLoad
         * @constructor
         * @param {supplyChainPackage.IPayLoad=} [properties] Properties to set
         */
        function PayLoad(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PayLoad action.
         * @member {supplyChainPackage.PayLoad.Action} action
         * @memberof supplyChainPackage.PayLoad
         * @instance
         */
        PayLoad.prototype.action = 0;

        /**
         * PayLoad landRegistration.
         * @member {supplyChainPackage.ILandRegistrationParams|null|undefined} landRegistration
         * @memberof supplyChainPackage.PayLoad
         * @instance
         */
        PayLoad.prototype.landRegistration = null;

        /**
         * PayLoad startCultivation.
         * @member {supplyChainPackage.IStartCultivationParams|null|undefined} startCultivation
         * @memberof supplyChainPackage.PayLoad
         * @instance
         */
        PayLoad.prototype.startCultivation = null;

        /**
         * PayLoad inspection.
         * @member {supplyChainPackage.IInspectParams|null|undefined} inspection
         * @memberof supplyChainPackage.PayLoad
         * @instance
         */
        PayLoad.prototype.inspection = null;

        /**
         * PayLoad performHarvest.
         * @member {supplyChainPackage.IPerformHarvestParams|null|undefined} performHarvest
         * @memberof supplyChainPackage.PayLoad
         * @instance
         */
        PayLoad.prototype.performHarvest = null;

        /**
         * PayLoad processHarvest.
         * @member {supplyChainPackage.IProcessHarvestParams|null|undefined} processHarvest
         * @memberof supplyChainPackage.PayLoad
         * @instance
         */
        PayLoad.prototype.processHarvest = null;

        /**
         * PayLoad purchaseGrains.
         * @member {supplyChainPackage.IPurchaseGrainsParams|null|undefined} purchaseGrains
         * @memberof supplyChainPackage.PayLoad
         * @instance
         */
        PayLoad.prototype.purchaseGrains = null;

        /**
         * PayLoad updateProcessDetails.
         * @member {supplyChainPackage.IUpdateProcessDetailsParams|null|undefined} updateProcessDetails
         * @memberof supplyChainPackage.PayLoad
         * @instance
         */
        PayLoad.prototype.updateProcessDetails = null;

        /**
         * Creates a new PayLoad instance using the specified properties.
         * @function create
         * @memberof supplyChainPackage.PayLoad
         * @static
         * @param {supplyChainPackage.IPayLoad=} [properties] Properties to set
         * @returns {supplyChainPackage.PayLoad} PayLoad instance
         */
        PayLoad.create = function create(properties) {
            return new PayLoad(properties);
        };

        /**
         * Encodes the specified PayLoad message. Does not implicitly {@link supplyChainPackage.PayLoad.verify|verify} messages.
         * @function encode
         * @memberof supplyChainPackage.PayLoad
         * @static
         * @param {supplyChainPackage.IPayLoad} message PayLoad message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PayLoad.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.action != null && message.hasOwnProperty("action"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.action);
            if (message.landRegistration != null && message.hasOwnProperty("landRegistration"))
                $root.supplyChainPackage.LandRegistrationParams.encode(message.landRegistration, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.startCultivation != null && message.hasOwnProperty("startCultivation"))
                $root.supplyChainPackage.StartCultivationParams.encode(message.startCultivation, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.inspection != null && message.hasOwnProperty("inspection"))
                $root.supplyChainPackage.InspectParams.encode(message.inspection, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.performHarvest != null && message.hasOwnProperty("performHarvest"))
                $root.supplyChainPackage.PerformHarvestParams.encode(message.performHarvest, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.processHarvest != null && message.hasOwnProperty("processHarvest"))
                $root.supplyChainPackage.ProcessHarvestParams.encode(message.processHarvest, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.purchaseGrains != null && message.hasOwnProperty("purchaseGrains"))
                $root.supplyChainPackage.PurchaseGrainsParams.encode(message.purchaseGrains, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.updateProcessDetails != null && message.hasOwnProperty("updateProcessDetails"))
                $root.supplyChainPackage.UpdateProcessDetailsParams.encode(message.updateProcessDetails, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PayLoad message, length delimited. Does not implicitly {@link supplyChainPackage.PayLoad.verify|verify} messages.
         * @function encodeDelimited
         * @memberof supplyChainPackage.PayLoad
         * @static
         * @param {supplyChainPackage.IPayLoad} message PayLoad message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PayLoad.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PayLoad message from the specified reader or buffer.
         * @function decode
         * @memberof supplyChainPackage.PayLoad
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {supplyChainPackage.PayLoad} PayLoad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PayLoad.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.supplyChainPackage.PayLoad();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.action = reader.int32();
                    break;
                case 2:
                    message.landRegistration = $root.supplyChainPackage.LandRegistrationParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.startCultivation = $root.supplyChainPackage.StartCultivationParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.inspection = $root.supplyChainPackage.InspectParams.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.performHarvest = $root.supplyChainPackage.PerformHarvestParams.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.processHarvest = $root.supplyChainPackage.ProcessHarvestParams.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.purchaseGrains = $root.supplyChainPackage.PurchaseGrainsParams.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.updateProcessDetails = $root.supplyChainPackage.UpdateProcessDetailsParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PayLoad message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof supplyChainPackage.PayLoad
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {supplyChainPackage.PayLoad} PayLoad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PayLoad.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PayLoad message.
         * @function verify
         * @memberof supplyChainPackage.PayLoad
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PayLoad.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.action != null && message.hasOwnProperty("action"))
                switch (message.action) {
                default:
                    return "action: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            if (message.landRegistration != null && message.hasOwnProperty("landRegistration")) {
                var error = $root.supplyChainPackage.LandRegistrationParams.verify(message.landRegistration);
                if (error)
                    return "landRegistration." + error;
            }
            if (message.startCultivation != null && message.hasOwnProperty("startCultivation")) {
                var error = $root.supplyChainPackage.StartCultivationParams.verify(message.startCultivation);
                if (error)
                    return "startCultivation." + error;
            }
            if (message.inspection != null && message.hasOwnProperty("inspection")) {
                var error = $root.supplyChainPackage.InspectParams.verify(message.inspection);
                if (error)
                    return "inspection." + error;
            }
            if (message.performHarvest != null && message.hasOwnProperty("performHarvest")) {
                var error = $root.supplyChainPackage.PerformHarvestParams.verify(message.performHarvest);
                if (error)
                    return "performHarvest." + error;
            }
            if (message.processHarvest != null && message.hasOwnProperty("processHarvest")) {
                var error = $root.supplyChainPackage.ProcessHarvestParams.verify(message.processHarvest);
                if (error)
                    return "processHarvest." + error;
            }
            if (message.purchaseGrains != null && message.hasOwnProperty("purchaseGrains")) {
                var error = $root.supplyChainPackage.PurchaseGrainsParams.verify(message.purchaseGrains);
                if (error)
                    return "purchaseGrains." + error;
            }
            if (message.updateProcessDetails != null && message.hasOwnProperty("updateProcessDetails")) {
                var error = $root.supplyChainPackage.UpdateProcessDetailsParams.verify(message.updateProcessDetails);
                if (error)
                    return "updateProcessDetails." + error;
            }
            return null;
        };

        /**
         * Creates a PayLoad message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof supplyChainPackage.PayLoad
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {supplyChainPackage.PayLoad} PayLoad
         */
        PayLoad.fromObject = function fromObject(object) {
            if (object instanceof $root.supplyChainPackage.PayLoad)
                return object;
            var message = new $root.supplyChainPackage.PayLoad();
            switch (object.action) {
            case "LAND_REGISTRATION":
            case 0:
                message.action = 0;
                break;
            case "START_CULTIVATION":
            case 1:
                message.action = 1;
                break;
            case "INSPECTION":
            case 2:
                message.action = 2;
                break;
            case "PERFORM_HARVEST":
            case 3:
                message.action = 3;
                break;
            case "PROCESS_HARVEST":
            case 4:
                message.action = 4;
                break;
            case "PURCHASE_GRAINS":
            case 5:
                message.action = 5;
                break;
            case "UPDATE_PROCESS_DETAILS":
            case 6:
                message.action = 6;
                break;
            }
            if (object.landRegistration != null) {
                if (typeof object.landRegistration !== "object")
                    throw TypeError(".supplyChainPackage.PayLoad.landRegistration: object expected");
                message.landRegistration = $root.supplyChainPackage.LandRegistrationParams.fromObject(object.landRegistration);
            }
            if (object.startCultivation != null) {
                if (typeof object.startCultivation !== "object")
                    throw TypeError(".supplyChainPackage.PayLoad.startCultivation: object expected");
                message.startCultivation = $root.supplyChainPackage.StartCultivationParams.fromObject(object.startCultivation);
            }
            if (object.inspection != null) {
                if (typeof object.inspection !== "object")
                    throw TypeError(".supplyChainPackage.PayLoad.inspection: object expected");
                message.inspection = $root.supplyChainPackage.InspectParams.fromObject(object.inspection);
            }
            if (object.performHarvest != null) {
                if (typeof object.performHarvest !== "object")
                    throw TypeError(".supplyChainPackage.PayLoad.performHarvest: object expected");
                message.performHarvest = $root.supplyChainPackage.PerformHarvestParams.fromObject(object.performHarvest);
            }
            if (object.processHarvest != null) {
                if (typeof object.processHarvest !== "object")
                    throw TypeError(".supplyChainPackage.PayLoad.processHarvest: object expected");
                message.processHarvest = $root.supplyChainPackage.ProcessHarvestParams.fromObject(object.processHarvest);
            }
            if (object.purchaseGrains != null) {
                if (typeof object.purchaseGrains !== "object")
                    throw TypeError(".supplyChainPackage.PayLoad.purchaseGrains: object expected");
                message.purchaseGrains = $root.supplyChainPackage.PurchaseGrainsParams.fromObject(object.purchaseGrains);
            }
            if (object.updateProcessDetails != null) {
                if (typeof object.updateProcessDetails !== "object")
                    throw TypeError(".supplyChainPackage.PayLoad.updateProcessDetails: object expected");
                message.updateProcessDetails = $root.supplyChainPackage.UpdateProcessDetailsParams.fromObject(object.updateProcessDetails);
            }
            return message;
        };

        /**
         * Creates a plain object from a PayLoad message. Also converts values to other types if specified.
         * @function toObject
         * @memberof supplyChainPackage.PayLoad
         * @static
         * @param {supplyChainPackage.PayLoad} message PayLoad
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PayLoad.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.action = options.enums === String ? "LAND_REGISTRATION" : 0;
                object.landRegistration = null;
                object.startCultivation = null;
                object.inspection = null;
                object.performHarvest = null;
                object.processHarvest = null;
                object.purchaseGrains = null;
                object.updateProcessDetails = null;
            }
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = options.enums === String ? $root.supplyChainPackage.PayLoad.Action[message.action] : message.action;
            if (message.landRegistration != null && message.hasOwnProperty("landRegistration"))
                object.landRegistration = $root.supplyChainPackage.LandRegistrationParams.toObject(message.landRegistration, options);
            if (message.startCultivation != null && message.hasOwnProperty("startCultivation"))
                object.startCultivation = $root.supplyChainPackage.StartCultivationParams.toObject(message.startCultivation, options);
            if (message.inspection != null && message.hasOwnProperty("inspection"))
                object.inspection = $root.supplyChainPackage.InspectParams.toObject(message.inspection, options);
            if (message.performHarvest != null && message.hasOwnProperty("performHarvest"))
                object.performHarvest = $root.supplyChainPackage.PerformHarvestParams.toObject(message.performHarvest, options);
            if (message.processHarvest != null && message.hasOwnProperty("processHarvest"))
                object.processHarvest = $root.supplyChainPackage.ProcessHarvestParams.toObject(message.processHarvest, options);
            if (message.purchaseGrains != null && message.hasOwnProperty("purchaseGrains"))
                object.purchaseGrains = $root.supplyChainPackage.PurchaseGrainsParams.toObject(message.purchaseGrains, options);
            if (message.updateProcessDetails != null && message.hasOwnProperty("updateProcessDetails"))
                object.updateProcessDetails = $root.supplyChainPackage.UpdateProcessDetailsParams.toObject(message.updateProcessDetails, options);
            return object;
        };

        /**
         * Converts this PayLoad to JSON.
         * @function toJSON
         * @memberof supplyChainPackage.PayLoad
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PayLoad.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Action enum.
         * @name supplyChainPackage.PayLoad.Action
         * @enum {string}
         * @property {number} LAND_REGISTRATION=0 LAND_REGISTRATION value
         * @property {number} START_CULTIVATION=1 START_CULTIVATION value
         * @property {number} INSPECTION=2 INSPECTION value
         * @property {number} PERFORM_HARVEST=3 PERFORM_HARVEST value
         * @property {number} PROCESS_HARVEST=4 PROCESS_HARVEST value
         * @property {number} PURCHASE_GRAINS=5 PURCHASE_GRAINS value
         * @property {number} UPDATE_PROCESS_DETAILS=6 UPDATE_PROCESS_DETAILS value
         */
        PayLoad.Action = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "LAND_REGISTRATION"] = 0;
            values[valuesById[1] = "START_CULTIVATION"] = 1;
            values[valuesById[2] = "INSPECTION"] = 2;
            values[valuesById[3] = "PERFORM_HARVEST"] = 3;
            values[valuesById[4] = "PROCESS_HARVEST"] = 4;
            values[valuesById[5] = "PURCHASE_GRAINS"] = 5;
            values[valuesById[6] = "UPDATE_PROCESS_DETAILS"] = 6;
            return values;
        })();

        return PayLoad;
    })();

    supplyChainPackage.AddressParams = (function() {

        /**
         * Properties of an AddressParams.
         * @memberof supplyChainPackage
         * @interface IAddressParams
         * @property {string|null} [RegistrationNo] AddressParams RegistrationNo
         * @property {string|null} [FarmerName] AddressParams FarmerName
         */

        /**
         * Constructs a new AddressParams.
         * @memberof supplyChainPackage
         * @classdesc Represents an AddressParams.
         * @implements IAddressParams
         * @constructor
         * @param {supplyChainPackage.IAddressParams=} [properties] Properties to set
         */
        function AddressParams(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddressParams RegistrationNo.
         * @member {string} RegistrationNo
         * @memberof supplyChainPackage.AddressParams
         * @instance
         */
        AddressParams.prototype.RegistrationNo = "";

        /**
         * AddressParams FarmerName.
         * @member {string} FarmerName
         * @memberof supplyChainPackage.AddressParams
         * @instance
         */
        AddressParams.prototype.FarmerName = "";

        /**
         * Creates a new AddressParams instance using the specified properties.
         * @function create
         * @memberof supplyChainPackage.AddressParams
         * @static
         * @param {supplyChainPackage.IAddressParams=} [properties] Properties to set
         * @returns {supplyChainPackage.AddressParams} AddressParams instance
         */
        AddressParams.create = function create(properties) {
            return new AddressParams(properties);
        };

        /**
         * Encodes the specified AddressParams message. Does not implicitly {@link supplyChainPackage.AddressParams.verify|verify} messages.
         * @function encode
         * @memberof supplyChainPackage.AddressParams
         * @static
         * @param {supplyChainPackage.IAddressParams} message AddressParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddressParams.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RegistrationNo != null && message.hasOwnProperty("RegistrationNo"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.RegistrationNo);
            if (message.FarmerName != null && message.hasOwnProperty("FarmerName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.FarmerName);
            return writer;
        };

        /**
         * Encodes the specified AddressParams message, length delimited. Does not implicitly {@link supplyChainPackage.AddressParams.verify|verify} messages.
         * @function encodeDelimited
         * @memberof supplyChainPackage.AddressParams
         * @static
         * @param {supplyChainPackage.IAddressParams} message AddressParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddressParams.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddressParams message from the specified reader or buffer.
         * @function decode
         * @memberof supplyChainPackage.AddressParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {supplyChainPackage.AddressParams} AddressParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddressParams.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.supplyChainPackage.AddressParams();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.RegistrationNo = reader.string();
                    break;
                case 2:
                    message.FarmerName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddressParams message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof supplyChainPackage.AddressParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {supplyChainPackage.AddressParams} AddressParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddressParams.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddressParams message.
         * @function verify
         * @memberof supplyChainPackage.AddressParams
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddressParams.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RegistrationNo != null && message.hasOwnProperty("RegistrationNo"))
                if (!$util.isString(message.RegistrationNo))
                    return "RegistrationNo: string expected";
            if (message.FarmerName != null && message.hasOwnProperty("FarmerName"))
                if (!$util.isString(message.FarmerName))
                    return "FarmerName: string expected";
            return null;
        };

        /**
         * Creates an AddressParams message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof supplyChainPackage.AddressParams
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {supplyChainPackage.AddressParams} AddressParams
         */
        AddressParams.fromObject = function fromObject(object) {
            if (object instanceof $root.supplyChainPackage.AddressParams)
                return object;
            var message = new $root.supplyChainPackage.AddressParams();
            if (object.RegistrationNo != null)
                message.RegistrationNo = String(object.RegistrationNo);
            if (object.FarmerName != null)
                message.FarmerName = String(object.FarmerName);
            return message;
        };

        /**
         * Creates a plain object from an AddressParams message. Also converts values to other types if specified.
         * @function toObject
         * @memberof supplyChainPackage.AddressParams
         * @static
         * @param {supplyChainPackage.AddressParams} message AddressParams
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddressParams.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.RegistrationNo = "";
                object.FarmerName = "";
            }
            if (message.RegistrationNo != null && message.hasOwnProperty("RegistrationNo"))
                object.RegistrationNo = message.RegistrationNo;
            if (message.FarmerName != null && message.hasOwnProperty("FarmerName"))
                object.FarmerName = message.FarmerName;
            return object;
        };

        /**
         * Converts this AddressParams to JSON.
         * @function toJSON
         * @memberof supplyChainPackage.AddressParams
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddressParams.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AddressParams;
    })();

    supplyChainPackage.LandRegistrationParams = (function() {

        /**
         * Properties of a LandRegistrationParams.
         * @memberof supplyChainPackage
         * @interface ILandRegistrationParams
         * @property {string|null} [FarmAddress] LandRegistrationParams FarmAddress
         * @property {string|null} [State] LandRegistrationParams State
         * @property {string|null} [Country] LandRegistrationParams Country
         * @property {string|null} [ExporterName] LandRegistrationParams ExporterName
         * @property {string|null} [ImporterName] LandRegistrationParams ImporterName
         * @property {string|null} [DateofRegistration] LandRegistrationParams DateofRegistration
         * @property {supplyChainPackage.IAddressParams|null} [addressparameters] LandRegistrationParams addressparameters
         */

        /**
         * Constructs a new LandRegistrationParams.
         * @memberof supplyChainPackage
         * @classdesc Represents a LandRegistrationParams.
         * @implements ILandRegistrationParams
         * @constructor
         * @param {supplyChainPackage.ILandRegistrationParams=} [properties] Properties to set
         */
        function LandRegistrationParams(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LandRegistrationParams FarmAddress.
         * @member {string} FarmAddress
         * @memberof supplyChainPackage.LandRegistrationParams
         * @instance
         */
        LandRegistrationParams.prototype.FarmAddress = "";

        /**
         * LandRegistrationParams State.
         * @member {string} State
         * @memberof supplyChainPackage.LandRegistrationParams
         * @instance
         */
        LandRegistrationParams.prototype.State = "";

        /**
         * LandRegistrationParams Country.
         * @member {string} Country
         * @memberof supplyChainPackage.LandRegistrationParams
         * @instance
         */
        LandRegistrationParams.prototype.Country = "";

        /**
         * LandRegistrationParams ExporterName.
         * @member {string} ExporterName
         * @memberof supplyChainPackage.LandRegistrationParams
         * @instance
         */
        LandRegistrationParams.prototype.ExporterName = "";

        /**
         * LandRegistrationParams ImporterName.
         * @member {string} ImporterName
         * @memberof supplyChainPackage.LandRegistrationParams
         * @instance
         */
        LandRegistrationParams.prototype.ImporterName = "";

        /**
         * LandRegistrationParams DateofRegistration.
         * @member {string} DateofRegistration
         * @memberof supplyChainPackage.LandRegistrationParams
         * @instance
         */
        LandRegistrationParams.prototype.DateofRegistration = "";

        /**
         * LandRegistrationParams addressparameters.
         * @member {supplyChainPackage.IAddressParams|null|undefined} addressparameters
         * @memberof supplyChainPackage.LandRegistrationParams
         * @instance
         */
        LandRegistrationParams.prototype.addressparameters = null;

        /**
         * Creates a new LandRegistrationParams instance using the specified properties.
         * @function create
         * @memberof supplyChainPackage.LandRegistrationParams
         * @static
         * @param {supplyChainPackage.ILandRegistrationParams=} [properties] Properties to set
         * @returns {supplyChainPackage.LandRegistrationParams} LandRegistrationParams instance
         */
        LandRegistrationParams.create = function create(properties) {
            return new LandRegistrationParams(properties);
        };

        /**
         * Encodes the specified LandRegistrationParams message. Does not implicitly {@link supplyChainPackage.LandRegistrationParams.verify|verify} messages.
         * @function encode
         * @memberof supplyChainPackage.LandRegistrationParams
         * @static
         * @param {supplyChainPackage.ILandRegistrationParams} message LandRegistrationParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LandRegistrationParams.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.FarmAddress != null && message.hasOwnProperty("FarmAddress"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.FarmAddress);
            if (message.State != null && message.hasOwnProperty("State"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.State);
            if (message.Country != null && message.hasOwnProperty("Country"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Country);
            if (message.ExporterName != null && message.hasOwnProperty("ExporterName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.ExporterName);
            if (message.ImporterName != null && message.hasOwnProperty("ImporterName"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.ImporterName);
            if (message.DateofRegistration != null && message.hasOwnProperty("DateofRegistration"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.DateofRegistration);
            if (message.addressparameters != null && message.hasOwnProperty("addressparameters"))
                $root.supplyChainPackage.AddressParams.encode(message.addressparameters, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LandRegistrationParams message, length delimited. Does not implicitly {@link supplyChainPackage.LandRegistrationParams.verify|verify} messages.
         * @function encodeDelimited
         * @memberof supplyChainPackage.LandRegistrationParams
         * @static
         * @param {supplyChainPackage.ILandRegistrationParams} message LandRegistrationParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LandRegistrationParams.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LandRegistrationParams message from the specified reader or buffer.
         * @function decode
         * @memberof supplyChainPackage.LandRegistrationParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {supplyChainPackage.LandRegistrationParams} LandRegistrationParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LandRegistrationParams.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.supplyChainPackage.LandRegistrationParams();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.FarmAddress = reader.string();
                    break;
                case 2:
                    message.State = reader.string();
                    break;
                case 3:
                    message.Country = reader.string();
                    break;
                case 4:
                    message.ExporterName = reader.string();
                    break;
                case 5:
                    message.ImporterName = reader.string();
                    break;
                case 6:
                    message.DateofRegistration = reader.string();
                    break;
                case 7:
                    message.addressparameters = $root.supplyChainPackage.AddressParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LandRegistrationParams message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof supplyChainPackage.LandRegistrationParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {supplyChainPackage.LandRegistrationParams} LandRegistrationParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LandRegistrationParams.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LandRegistrationParams message.
         * @function verify
         * @memberof supplyChainPackage.LandRegistrationParams
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LandRegistrationParams.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.FarmAddress != null && message.hasOwnProperty("FarmAddress"))
                if (!$util.isString(message.FarmAddress))
                    return "FarmAddress: string expected";
            if (message.State != null && message.hasOwnProperty("State"))
                if (!$util.isString(message.State))
                    return "State: string expected";
            if (message.Country != null && message.hasOwnProperty("Country"))
                if (!$util.isString(message.Country))
                    return "Country: string expected";
            if (message.ExporterName != null && message.hasOwnProperty("ExporterName"))
                if (!$util.isString(message.ExporterName))
                    return "ExporterName: string expected";
            if (message.ImporterName != null && message.hasOwnProperty("ImporterName"))
                if (!$util.isString(message.ImporterName))
                    return "ImporterName: string expected";
            if (message.DateofRegistration != null && message.hasOwnProperty("DateofRegistration"))
                if (!$util.isString(message.DateofRegistration))
                    return "DateofRegistration: string expected";
            if (message.addressparameters != null && message.hasOwnProperty("addressparameters")) {
                var error = $root.supplyChainPackage.AddressParams.verify(message.addressparameters);
                if (error)
                    return "addressparameters." + error;
            }
            return null;
        };

        /**
         * Creates a LandRegistrationParams message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof supplyChainPackage.LandRegistrationParams
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {supplyChainPackage.LandRegistrationParams} LandRegistrationParams
         */
        LandRegistrationParams.fromObject = function fromObject(object) {
            if (object instanceof $root.supplyChainPackage.LandRegistrationParams)
                return object;
            var message = new $root.supplyChainPackage.LandRegistrationParams();
            if (object.FarmAddress != null)
                message.FarmAddress = String(object.FarmAddress);
            if (object.State != null)
                message.State = String(object.State);
            if (object.Country != null)
                message.Country = String(object.Country);
            if (object.ExporterName != null)
                message.ExporterName = String(object.ExporterName);
            if (object.ImporterName != null)
                message.ImporterName = String(object.ImporterName);
            if (object.DateofRegistration != null)
                message.DateofRegistration = String(object.DateofRegistration);
            if (object.addressparameters != null) {
                if (typeof object.addressparameters !== "object")
                    throw TypeError(".supplyChainPackage.LandRegistrationParams.addressparameters: object expected");
                message.addressparameters = $root.supplyChainPackage.AddressParams.fromObject(object.addressparameters);
            }
            return message;
        };

        /**
         * Creates a plain object from a LandRegistrationParams message. Also converts values to other types if specified.
         * @function toObject
         * @memberof supplyChainPackage.LandRegistrationParams
         * @static
         * @param {supplyChainPackage.LandRegistrationParams} message LandRegistrationParams
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LandRegistrationParams.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.FarmAddress = "";
                object.State = "";
                object.Country = "";
                object.ExporterName = "";
                object.ImporterName = "";
                object.DateofRegistration = "";
                object.addressparameters = null;
            }
            if (message.FarmAddress != null && message.hasOwnProperty("FarmAddress"))
                object.FarmAddress = message.FarmAddress;
            if (message.State != null && message.hasOwnProperty("State"))
                object.State = message.State;
            if (message.Country != null && message.hasOwnProperty("Country"))
                object.Country = message.Country;
            if (message.ExporterName != null && message.hasOwnProperty("ExporterName"))
                object.ExporterName = message.ExporterName;
            if (message.ImporterName != null && message.hasOwnProperty("ImporterName"))
                object.ImporterName = message.ImporterName;
            if (message.DateofRegistration != null && message.hasOwnProperty("DateofRegistration"))
                object.DateofRegistration = message.DateofRegistration;
            if (message.addressparameters != null && message.hasOwnProperty("addressparameters"))
                object.addressparameters = $root.supplyChainPackage.AddressParams.toObject(message.addressparameters, options);
            return object;
        };

        /**
         * Converts this LandRegistrationParams to JSON.
         * @function toJSON
         * @memberof supplyChainPackage.LandRegistrationParams
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LandRegistrationParams.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LandRegistrationParams;
    })();

    supplyChainPackage.StartCultivationParams = (function() {

        /**
         * Properties of a StartCultivationParams.
         * @memberof supplyChainPackage
         * @interface IStartCultivationParams
         * @property {string|null} [CropVariety] StartCultivationParams CropVariety
         * @property {string|null} [Dateofstart] StartCultivationParams Dateofstart
         * @property {supplyChainPackage.IAddressParams|null} [addressparameters] StartCultivationParams addressparameters
         */

        /**
         * Constructs a new StartCultivationParams.
         * @memberof supplyChainPackage
         * @classdesc Represents a StartCultivationParams.
         * @implements IStartCultivationParams
         * @constructor
         * @param {supplyChainPackage.IStartCultivationParams=} [properties] Properties to set
         */
        function StartCultivationParams(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StartCultivationParams CropVariety.
         * @member {string} CropVariety
         * @memberof supplyChainPackage.StartCultivationParams
         * @instance
         */
        StartCultivationParams.prototype.CropVariety = "";

        /**
         * StartCultivationParams Dateofstart.
         * @member {string} Dateofstart
         * @memberof supplyChainPackage.StartCultivationParams
         * @instance
         */
        StartCultivationParams.prototype.Dateofstart = "";

        /**
         * StartCultivationParams addressparameters.
         * @member {supplyChainPackage.IAddressParams|null|undefined} addressparameters
         * @memberof supplyChainPackage.StartCultivationParams
         * @instance
         */
        StartCultivationParams.prototype.addressparameters = null;

        /**
         * Creates a new StartCultivationParams instance using the specified properties.
         * @function create
         * @memberof supplyChainPackage.StartCultivationParams
         * @static
         * @param {supplyChainPackage.IStartCultivationParams=} [properties] Properties to set
         * @returns {supplyChainPackage.StartCultivationParams} StartCultivationParams instance
         */
        StartCultivationParams.create = function create(properties) {
            return new StartCultivationParams(properties);
        };

        /**
         * Encodes the specified StartCultivationParams message. Does not implicitly {@link supplyChainPackage.StartCultivationParams.verify|verify} messages.
         * @function encode
         * @memberof supplyChainPackage.StartCultivationParams
         * @static
         * @param {supplyChainPackage.IStartCultivationParams} message StartCultivationParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartCultivationParams.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.CropVariety != null && message.hasOwnProperty("CropVariety"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.CropVariety);
            if (message.Dateofstart != null && message.hasOwnProperty("Dateofstart"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Dateofstart);
            if (message.addressparameters != null && message.hasOwnProperty("addressparameters"))
                $root.supplyChainPackage.AddressParams.encode(message.addressparameters, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified StartCultivationParams message, length delimited. Does not implicitly {@link supplyChainPackage.StartCultivationParams.verify|verify} messages.
         * @function encodeDelimited
         * @memberof supplyChainPackage.StartCultivationParams
         * @static
         * @param {supplyChainPackage.IStartCultivationParams} message StartCultivationParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartCultivationParams.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StartCultivationParams message from the specified reader or buffer.
         * @function decode
         * @memberof supplyChainPackage.StartCultivationParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {supplyChainPackage.StartCultivationParams} StartCultivationParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartCultivationParams.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.supplyChainPackage.StartCultivationParams();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.CropVariety = reader.string();
                    break;
                case 2:
                    message.Dateofstart = reader.string();
                    break;
                case 3:
                    message.addressparameters = $root.supplyChainPackage.AddressParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StartCultivationParams message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof supplyChainPackage.StartCultivationParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {supplyChainPackage.StartCultivationParams} StartCultivationParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartCultivationParams.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StartCultivationParams message.
         * @function verify
         * @memberof supplyChainPackage.StartCultivationParams
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StartCultivationParams.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.CropVariety != null && message.hasOwnProperty("CropVariety"))
                if (!$util.isString(message.CropVariety))
                    return "CropVariety: string expected";
            if (message.Dateofstart != null && message.hasOwnProperty("Dateofstart"))
                if (!$util.isString(message.Dateofstart))
                    return "Dateofstart: string expected";
            if (message.addressparameters != null && message.hasOwnProperty("addressparameters")) {
                var error = $root.supplyChainPackage.AddressParams.verify(message.addressparameters);
                if (error)
                    return "addressparameters." + error;
            }
            return null;
        };

        /**
         * Creates a StartCultivationParams message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof supplyChainPackage.StartCultivationParams
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {supplyChainPackage.StartCultivationParams} StartCultivationParams
         */
        StartCultivationParams.fromObject = function fromObject(object) {
            if (object instanceof $root.supplyChainPackage.StartCultivationParams)
                return object;
            var message = new $root.supplyChainPackage.StartCultivationParams();
            if (object.CropVariety != null)
                message.CropVariety = String(object.CropVariety);
            if (object.Dateofstart != null)
                message.Dateofstart = String(object.Dateofstart);
            if (object.addressparameters != null) {
                if (typeof object.addressparameters !== "object")
                    throw TypeError(".supplyChainPackage.StartCultivationParams.addressparameters: object expected");
                message.addressparameters = $root.supplyChainPackage.AddressParams.fromObject(object.addressparameters);
            }
            return message;
        };

        /**
         * Creates a plain object from a StartCultivationParams message. Also converts values to other types if specified.
         * @function toObject
         * @memberof supplyChainPackage.StartCultivationParams
         * @static
         * @param {supplyChainPackage.StartCultivationParams} message StartCultivationParams
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StartCultivationParams.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.CropVariety = "";
                object.Dateofstart = "";
                object.addressparameters = null;
            }
            if (message.CropVariety != null && message.hasOwnProperty("CropVariety"))
                object.CropVariety = message.CropVariety;
            if (message.Dateofstart != null && message.hasOwnProperty("Dateofstart"))
                object.Dateofstart = message.Dateofstart;
            if (message.addressparameters != null && message.hasOwnProperty("addressparameters"))
                object.addressparameters = $root.supplyChainPackage.AddressParams.toObject(message.addressparameters, options);
            return object;
        };

        /**
         * Converts this StartCultivationParams to JSON.
         * @function toJSON
         * @memberof supplyChainPackage.StartCultivationParams
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StartCultivationParams.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StartCultivationParams;
    })();

    supplyChainPackage.InspectParams = (function() {

        /**
         * Properties of an InspectParams.
         * @memberof supplyChainPackage
         * @interface IInspectParams
         * @property {string|null} [InspectionReport] InspectParams InspectionReport
         * @property {string|null} [DateofInspection] InspectParams DateofInspection
         * @property {string|null} [InspectorName] InspectParams InspectorName
         * @property {supplyChainPackage.IAddressParams|null} [addressparameters] InspectParams addressparameters
         */

        /**
         * Constructs a new InspectParams.
         * @memberof supplyChainPackage
         * @classdesc Represents an InspectParams.
         * @implements IInspectParams
         * @constructor
         * @param {supplyChainPackage.IInspectParams=} [properties] Properties to set
         */
        function InspectParams(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InspectParams InspectionReport.
         * @member {string} InspectionReport
         * @memberof supplyChainPackage.InspectParams
         * @instance
         */
        InspectParams.prototype.InspectionReport = "";

        /**
         * InspectParams DateofInspection.
         * @member {string} DateofInspection
         * @memberof supplyChainPackage.InspectParams
         * @instance
         */
        InspectParams.prototype.DateofInspection = "";

        /**
         * InspectParams InspectorName.
         * @member {string} InspectorName
         * @memberof supplyChainPackage.InspectParams
         * @instance
         */
        InspectParams.prototype.InspectorName = "";

        /**
         * InspectParams addressparameters.
         * @member {supplyChainPackage.IAddressParams|null|undefined} addressparameters
         * @memberof supplyChainPackage.InspectParams
         * @instance
         */
        InspectParams.prototype.addressparameters = null;

        /**
         * Creates a new InspectParams instance using the specified properties.
         * @function create
         * @memberof supplyChainPackage.InspectParams
         * @static
         * @param {supplyChainPackage.IInspectParams=} [properties] Properties to set
         * @returns {supplyChainPackage.InspectParams} InspectParams instance
         */
        InspectParams.create = function create(properties) {
            return new InspectParams(properties);
        };

        /**
         * Encodes the specified InspectParams message. Does not implicitly {@link supplyChainPackage.InspectParams.verify|verify} messages.
         * @function encode
         * @memberof supplyChainPackage.InspectParams
         * @static
         * @param {supplyChainPackage.IInspectParams} message InspectParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InspectParams.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.InspectionReport != null && message.hasOwnProperty("InspectionReport"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.InspectionReport);
            if (message.DateofInspection != null && message.hasOwnProperty("DateofInspection"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.DateofInspection);
            if (message.InspectorName != null && message.hasOwnProperty("InspectorName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.InspectorName);
            if (message.addressparameters != null && message.hasOwnProperty("addressparameters"))
                $root.supplyChainPackage.AddressParams.encode(message.addressparameters, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified InspectParams message, length delimited. Does not implicitly {@link supplyChainPackage.InspectParams.verify|verify} messages.
         * @function encodeDelimited
         * @memberof supplyChainPackage.InspectParams
         * @static
         * @param {supplyChainPackage.IInspectParams} message InspectParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InspectParams.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InspectParams message from the specified reader or buffer.
         * @function decode
         * @memberof supplyChainPackage.InspectParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {supplyChainPackage.InspectParams} InspectParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InspectParams.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.supplyChainPackage.InspectParams();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.InspectionReport = reader.string();
                    break;
                case 2:
                    message.DateofInspection = reader.string();
                    break;
                case 3:
                    message.InspectorName = reader.string();
                    break;
                case 4:
                    message.addressparameters = $root.supplyChainPackage.AddressParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an InspectParams message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof supplyChainPackage.InspectParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {supplyChainPackage.InspectParams} InspectParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InspectParams.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an InspectParams message.
         * @function verify
         * @memberof supplyChainPackage.InspectParams
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InspectParams.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.InspectionReport != null && message.hasOwnProperty("InspectionReport"))
                if (!$util.isString(message.InspectionReport))
                    return "InspectionReport: string expected";
            if (message.DateofInspection != null && message.hasOwnProperty("DateofInspection"))
                if (!$util.isString(message.DateofInspection))
                    return "DateofInspection: string expected";
            if (message.InspectorName != null && message.hasOwnProperty("InspectorName"))
                if (!$util.isString(message.InspectorName))
                    return "InspectorName: string expected";
            if (message.addressparameters != null && message.hasOwnProperty("addressparameters")) {
                var error = $root.supplyChainPackage.AddressParams.verify(message.addressparameters);
                if (error)
                    return "addressparameters." + error;
            }
            return null;
        };

        /**
         * Creates an InspectParams message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof supplyChainPackage.InspectParams
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {supplyChainPackage.InspectParams} InspectParams
         */
        InspectParams.fromObject = function fromObject(object) {
            if (object instanceof $root.supplyChainPackage.InspectParams)
                return object;
            var message = new $root.supplyChainPackage.InspectParams();
            if (object.InspectionReport != null)
                message.InspectionReport = String(object.InspectionReport);
            if (object.DateofInspection != null)
                message.DateofInspection = String(object.DateofInspection);
            if (object.InspectorName != null)
                message.InspectorName = String(object.InspectorName);
            if (object.addressparameters != null) {
                if (typeof object.addressparameters !== "object")
                    throw TypeError(".supplyChainPackage.InspectParams.addressparameters: object expected");
                message.addressparameters = $root.supplyChainPackage.AddressParams.fromObject(object.addressparameters);
            }
            return message;
        };

        /**
         * Creates a plain object from an InspectParams message. Also converts values to other types if specified.
         * @function toObject
         * @memberof supplyChainPackage.InspectParams
         * @static
         * @param {supplyChainPackage.InspectParams} message InspectParams
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InspectParams.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.InspectionReport = "";
                object.DateofInspection = "";
                object.InspectorName = "";
                object.addressparameters = null;
            }
            if (message.InspectionReport != null && message.hasOwnProperty("InspectionReport"))
                object.InspectionReport = message.InspectionReport;
            if (message.DateofInspection != null && message.hasOwnProperty("DateofInspection"))
                object.DateofInspection = message.DateofInspection;
            if (message.InspectorName != null && message.hasOwnProperty("InspectorName"))
                object.InspectorName = message.InspectorName;
            if (message.addressparameters != null && message.hasOwnProperty("addressparameters"))
                object.addressparameters = $root.supplyChainPackage.AddressParams.toObject(message.addressparameters, options);
            return object;
        };

        /**
         * Converts this InspectParams to JSON.
         * @function toJSON
         * @memberof supplyChainPackage.InspectParams
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InspectParams.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return InspectParams;
    })();

    supplyChainPackage.PerformHarvestParams = (function() {

        /**
         * Properties of a PerformHarvestParams.
         * @memberof supplyChainPackage
         * @interface IPerformHarvestParams
         * @property {string|null} [CropVariety] PerformHarvestParams CropVariety
         * @property {string|null} [Temperature] PerformHarvestParams Temperature
         * @property {string|null} [Humidity] PerformHarvestParams Humidity
         * @property {string|null} [Dateofharvest] PerformHarvestParams Dateofharvest
         * @property {string|null} [Quantity] PerformHarvestParams Quantity
         * @property {supplyChainPackage.IAddressParams|null} [addressparameters] PerformHarvestParams addressparameters
         */

        /**
         * Constructs a new PerformHarvestParams.
         * @memberof supplyChainPackage
         * @classdesc Represents a PerformHarvestParams.
         * @implements IPerformHarvestParams
         * @constructor
         * @param {supplyChainPackage.IPerformHarvestParams=} [properties] Properties to set
         */
        function PerformHarvestParams(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PerformHarvestParams CropVariety.
         * @member {string} CropVariety
         * @memberof supplyChainPackage.PerformHarvestParams
         * @instance
         */
        PerformHarvestParams.prototype.CropVariety = "";

        /**
         * PerformHarvestParams Temperature.
         * @member {string} Temperature
         * @memberof supplyChainPackage.PerformHarvestParams
         * @instance
         */
        PerformHarvestParams.prototype.Temperature = "";

        /**
         * PerformHarvestParams Humidity.
         * @member {string} Humidity
         * @memberof supplyChainPackage.PerformHarvestParams
         * @instance
         */
        PerformHarvestParams.prototype.Humidity = "";

        /**
         * PerformHarvestParams Dateofharvest.
         * @member {string} Dateofharvest
         * @memberof supplyChainPackage.PerformHarvestParams
         * @instance
         */
        PerformHarvestParams.prototype.Dateofharvest = "";

        /**
         * PerformHarvestParams Quantity.
         * @member {string} Quantity
         * @memberof supplyChainPackage.PerformHarvestParams
         * @instance
         */
        PerformHarvestParams.prototype.Quantity = "";

        /**
         * PerformHarvestParams addressparameters.
         * @member {supplyChainPackage.IAddressParams|null|undefined} addressparameters
         * @memberof supplyChainPackage.PerformHarvestParams
         * @instance
         */
        PerformHarvestParams.prototype.addressparameters = null;

        /**
         * Creates a new PerformHarvestParams instance using the specified properties.
         * @function create
         * @memberof supplyChainPackage.PerformHarvestParams
         * @static
         * @param {supplyChainPackage.IPerformHarvestParams=} [properties] Properties to set
         * @returns {supplyChainPackage.PerformHarvestParams} PerformHarvestParams instance
         */
        PerformHarvestParams.create = function create(properties) {
            return new PerformHarvestParams(properties);
        };

        /**
         * Encodes the specified PerformHarvestParams message. Does not implicitly {@link supplyChainPackage.PerformHarvestParams.verify|verify} messages.
         * @function encode
         * @memberof supplyChainPackage.PerformHarvestParams
         * @static
         * @param {supplyChainPackage.IPerformHarvestParams} message PerformHarvestParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PerformHarvestParams.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.CropVariety != null && message.hasOwnProperty("CropVariety"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.CropVariety);
            if (message.Temperature != null && message.hasOwnProperty("Temperature"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Temperature);
            if (message.Humidity != null && message.hasOwnProperty("Humidity"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Humidity);
            if (message.Dateofharvest != null && message.hasOwnProperty("Dateofharvest"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Dateofharvest);
            if (message.Quantity != null && message.hasOwnProperty("Quantity"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Quantity);
            if (message.addressparameters != null && message.hasOwnProperty("addressparameters"))
                $root.supplyChainPackage.AddressParams.encode(message.addressparameters, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PerformHarvestParams message, length delimited. Does not implicitly {@link supplyChainPackage.PerformHarvestParams.verify|verify} messages.
         * @function encodeDelimited
         * @memberof supplyChainPackage.PerformHarvestParams
         * @static
         * @param {supplyChainPackage.IPerformHarvestParams} message PerformHarvestParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PerformHarvestParams.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PerformHarvestParams message from the specified reader or buffer.
         * @function decode
         * @memberof supplyChainPackage.PerformHarvestParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {supplyChainPackage.PerformHarvestParams} PerformHarvestParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PerformHarvestParams.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.supplyChainPackage.PerformHarvestParams();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.CropVariety = reader.string();
                    break;
                case 2:
                    message.Temperature = reader.string();
                    break;
                case 3:
                    message.Humidity = reader.string();
                    break;
                case 4:
                    message.Dateofharvest = reader.string();
                    break;
                case 5:
                    message.Quantity = reader.string();
                    break;
                case 6:
                    message.addressparameters = $root.supplyChainPackage.AddressParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PerformHarvestParams message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof supplyChainPackage.PerformHarvestParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {supplyChainPackage.PerformHarvestParams} PerformHarvestParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PerformHarvestParams.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PerformHarvestParams message.
         * @function verify
         * @memberof supplyChainPackage.PerformHarvestParams
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PerformHarvestParams.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.CropVariety != null && message.hasOwnProperty("CropVariety"))
                if (!$util.isString(message.CropVariety))
                    return "CropVariety: string expected";
            if (message.Temperature != null && message.hasOwnProperty("Temperature"))
                if (!$util.isString(message.Temperature))
                    return "Temperature: string expected";
            if (message.Humidity != null && message.hasOwnProperty("Humidity"))
                if (!$util.isString(message.Humidity))
                    return "Humidity: string expected";
            if (message.Dateofharvest != null && message.hasOwnProperty("Dateofharvest"))
                if (!$util.isString(message.Dateofharvest))
                    return "Dateofharvest: string expected";
            if (message.Quantity != null && message.hasOwnProperty("Quantity"))
                if (!$util.isString(message.Quantity))
                    return "Quantity: string expected";
            if (message.addressparameters != null && message.hasOwnProperty("addressparameters")) {
                var error = $root.supplyChainPackage.AddressParams.verify(message.addressparameters);
                if (error)
                    return "addressparameters." + error;
            }
            return null;
        };

        /**
         * Creates a PerformHarvestParams message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof supplyChainPackage.PerformHarvestParams
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {supplyChainPackage.PerformHarvestParams} PerformHarvestParams
         */
        PerformHarvestParams.fromObject = function fromObject(object) {
            if (object instanceof $root.supplyChainPackage.PerformHarvestParams)
                return object;
            var message = new $root.supplyChainPackage.PerformHarvestParams();
            if (object.CropVariety != null)
                message.CropVariety = String(object.CropVariety);
            if (object.Temperature != null)
                message.Temperature = String(object.Temperature);
            if (object.Humidity != null)
                message.Humidity = String(object.Humidity);
            if (object.Dateofharvest != null)
                message.Dateofharvest = String(object.Dateofharvest);
            if (object.Quantity != null)
                message.Quantity = String(object.Quantity);
            if (object.addressparameters != null) {
                if (typeof object.addressparameters !== "object")
                    throw TypeError(".supplyChainPackage.PerformHarvestParams.addressparameters: object expected");
                message.addressparameters = $root.supplyChainPackage.AddressParams.fromObject(object.addressparameters);
            }
            return message;
        };

        /**
         * Creates a plain object from a PerformHarvestParams message. Also converts values to other types if specified.
         * @function toObject
         * @memberof supplyChainPackage.PerformHarvestParams
         * @static
         * @param {supplyChainPackage.PerformHarvestParams} message PerformHarvestParams
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PerformHarvestParams.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.CropVariety = "";
                object.Temperature = "";
                object.Humidity = "";
                object.Dateofharvest = "";
                object.Quantity = "";
                object.addressparameters = null;
            }
            if (message.CropVariety != null && message.hasOwnProperty("CropVariety"))
                object.CropVariety = message.CropVariety;
            if (message.Temperature != null && message.hasOwnProperty("Temperature"))
                object.Temperature = message.Temperature;
            if (message.Humidity != null && message.hasOwnProperty("Humidity"))
                object.Humidity = message.Humidity;
            if (message.Dateofharvest != null && message.hasOwnProperty("Dateofharvest"))
                object.Dateofharvest = message.Dateofharvest;
            if (message.Quantity != null && message.hasOwnProperty("Quantity"))
                object.Quantity = message.Quantity;
            if (message.addressparameters != null && message.hasOwnProperty("addressparameters"))
                object.addressparameters = $root.supplyChainPackage.AddressParams.toObject(message.addressparameters, options);
            return object;
        };

        /**
         * Converts this PerformHarvestParams to JSON.
         * @function toJSON
         * @memberof supplyChainPackage.PerformHarvestParams
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PerformHarvestParams.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PerformHarvestParams;
    })();

    supplyChainPackage.ProcessHarvestParams = (function() {

        /**
         * Properties of a ProcessHarvestParams.
         * @memberof supplyChainPackage
         * @interface IProcessHarvestParams
         * @property {number|null} [Quantity] ProcessHarvestParams Quantity
         * @property {string|null} [RostingDuration] ProcessHarvestParams RostingDuration
         * @property {string|null} [PackageDateTime] ProcessHarvestParams PackageDateTime
         * @property {string|null} [Temperature] ProcessHarvestParams Temperature
         * @property {string|null} [InternalBatchNo] ProcessHarvestParams InternalBatchNo
         * @property {string|null} [ProcessorName] ProcessHarvestParams ProcessorName
         * @property {string|null} [ProcessorAddress] ProcessHarvestParams ProcessorAddress
         */

        /**
         * Constructs a new ProcessHarvestParams.
         * @memberof supplyChainPackage
         * @classdesc Represents a ProcessHarvestParams.
         * @implements IProcessHarvestParams
         * @constructor
         * @param {supplyChainPackage.IProcessHarvestParams=} [properties] Properties to set
         */
        function ProcessHarvestParams(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProcessHarvestParams Quantity.
         * @member {number} Quantity
         * @memberof supplyChainPackage.ProcessHarvestParams
         * @instance
         */
        ProcessHarvestParams.prototype.Quantity = 0;

        /**
         * ProcessHarvestParams RostingDuration.
         * @member {string} RostingDuration
         * @memberof supplyChainPackage.ProcessHarvestParams
         * @instance
         */
        ProcessHarvestParams.prototype.RostingDuration = "";

        /**
         * ProcessHarvestParams PackageDateTime.
         * @member {string} PackageDateTime
         * @memberof supplyChainPackage.ProcessHarvestParams
         * @instance
         */
        ProcessHarvestParams.prototype.PackageDateTime = "";

        /**
         * ProcessHarvestParams Temperature.
         * @member {string} Temperature
         * @memberof supplyChainPackage.ProcessHarvestParams
         * @instance
         */
        ProcessHarvestParams.prototype.Temperature = "";

        /**
         * ProcessHarvestParams InternalBatchNo.
         * @member {string} InternalBatchNo
         * @memberof supplyChainPackage.ProcessHarvestParams
         * @instance
         */
        ProcessHarvestParams.prototype.InternalBatchNo = "";

        /**
         * ProcessHarvestParams ProcessorName.
         * @member {string} ProcessorName
         * @memberof supplyChainPackage.ProcessHarvestParams
         * @instance
         */
        ProcessHarvestParams.prototype.ProcessorName = "";

        /**
         * ProcessHarvestParams ProcessorAddress.
         * @member {string} ProcessorAddress
         * @memberof supplyChainPackage.ProcessHarvestParams
         * @instance
         */
        ProcessHarvestParams.prototype.ProcessorAddress = "";

        /**
         * Creates a new ProcessHarvestParams instance using the specified properties.
         * @function create
         * @memberof supplyChainPackage.ProcessHarvestParams
         * @static
         * @param {supplyChainPackage.IProcessHarvestParams=} [properties] Properties to set
         * @returns {supplyChainPackage.ProcessHarvestParams} ProcessHarvestParams instance
         */
        ProcessHarvestParams.create = function create(properties) {
            return new ProcessHarvestParams(properties);
        };

        /**
         * Encodes the specified ProcessHarvestParams message. Does not implicitly {@link supplyChainPackage.ProcessHarvestParams.verify|verify} messages.
         * @function encode
         * @memberof supplyChainPackage.ProcessHarvestParams
         * @static
         * @param {supplyChainPackage.IProcessHarvestParams} message ProcessHarvestParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProcessHarvestParams.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Quantity != null && message.hasOwnProperty("Quantity"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Quantity);
            if (message.RostingDuration != null && message.hasOwnProperty("RostingDuration"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.RostingDuration);
            if (message.PackageDateTime != null && message.hasOwnProperty("PackageDateTime"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.PackageDateTime);
            if (message.Temperature != null && message.hasOwnProperty("Temperature"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Temperature);
            if (message.InternalBatchNo != null && message.hasOwnProperty("InternalBatchNo"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.InternalBatchNo);
            if (message.ProcessorName != null && message.hasOwnProperty("ProcessorName"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.ProcessorName);
            if (message.ProcessorAddress != null && message.hasOwnProperty("ProcessorAddress"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.ProcessorAddress);
            return writer;
        };

        /**
         * Encodes the specified ProcessHarvestParams message, length delimited. Does not implicitly {@link supplyChainPackage.ProcessHarvestParams.verify|verify} messages.
         * @function encodeDelimited
         * @memberof supplyChainPackage.ProcessHarvestParams
         * @static
         * @param {supplyChainPackage.IProcessHarvestParams} message ProcessHarvestParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProcessHarvestParams.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProcessHarvestParams message from the specified reader or buffer.
         * @function decode
         * @memberof supplyChainPackage.ProcessHarvestParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {supplyChainPackage.ProcessHarvestParams} ProcessHarvestParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProcessHarvestParams.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.supplyChainPackage.ProcessHarvestParams();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Quantity = reader.int32();
                    break;
                case 2:
                    message.RostingDuration = reader.string();
                    break;
                case 3:
                    message.PackageDateTime = reader.string();
                    break;
                case 4:
                    message.Temperature = reader.string();
                    break;
                case 5:
                    message.InternalBatchNo = reader.string();
                    break;
                case 6:
                    message.ProcessorName = reader.string();
                    break;
                case 7:
                    message.ProcessorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ProcessHarvestParams message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof supplyChainPackage.ProcessHarvestParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {supplyChainPackage.ProcessHarvestParams} ProcessHarvestParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProcessHarvestParams.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProcessHarvestParams message.
         * @function verify
         * @memberof supplyChainPackage.ProcessHarvestParams
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProcessHarvestParams.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Quantity != null && message.hasOwnProperty("Quantity"))
                if (!$util.isInteger(message.Quantity))
                    return "Quantity: integer expected";
            if (message.RostingDuration != null && message.hasOwnProperty("RostingDuration"))
                if (!$util.isString(message.RostingDuration))
                    return "RostingDuration: string expected";
            if (message.PackageDateTime != null && message.hasOwnProperty("PackageDateTime"))
                if (!$util.isString(message.PackageDateTime))
                    return "PackageDateTime: string expected";
            if (message.Temperature != null && message.hasOwnProperty("Temperature"))
                if (!$util.isString(message.Temperature))
                    return "Temperature: string expected";
            if (message.InternalBatchNo != null && message.hasOwnProperty("InternalBatchNo"))
                if (!$util.isString(message.InternalBatchNo))
                    return "InternalBatchNo: string expected";
            if (message.ProcessorName != null && message.hasOwnProperty("ProcessorName"))
                if (!$util.isString(message.ProcessorName))
                    return "ProcessorName: string expected";
            if (message.ProcessorAddress != null && message.hasOwnProperty("ProcessorAddress"))
                if (!$util.isString(message.ProcessorAddress))
                    return "ProcessorAddress: string expected";
            return null;
        };

        /**
         * Creates a ProcessHarvestParams message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof supplyChainPackage.ProcessHarvestParams
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {supplyChainPackage.ProcessHarvestParams} ProcessHarvestParams
         */
        ProcessHarvestParams.fromObject = function fromObject(object) {
            if (object instanceof $root.supplyChainPackage.ProcessHarvestParams)
                return object;
            var message = new $root.supplyChainPackage.ProcessHarvestParams();
            if (object.Quantity != null)
                message.Quantity = object.Quantity | 0;
            if (object.RostingDuration != null)
                message.RostingDuration = String(object.RostingDuration);
            if (object.PackageDateTime != null)
                message.PackageDateTime = String(object.PackageDateTime);
            if (object.Temperature != null)
                message.Temperature = String(object.Temperature);
            if (object.InternalBatchNo != null)
                message.InternalBatchNo = String(object.InternalBatchNo);
            if (object.ProcessorName != null)
                message.ProcessorName = String(object.ProcessorName);
            if (object.ProcessorAddress != null)
                message.ProcessorAddress = String(object.ProcessorAddress);
            return message;
        };

        /**
         * Creates a plain object from a ProcessHarvestParams message. Also converts values to other types if specified.
         * @function toObject
         * @memberof supplyChainPackage.ProcessHarvestParams
         * @static
         * @param {supplyChainPackage.ProcessHarvestParams} message ProcessHarvestParams
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProcessHarvestParams.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Quantity = 0;
                object.RostingDuration = "";
                object.PackageDateTime = "";
                object.Temperature = "";
                object.InternalBatchNo = "";
                object.ProcessorName = "";
                object.ProcessorAddress = "";
            }
            if (message.Quantity != null && message.hasOwnProperty("Quantity"))
                object.Quantity = message.Quantity;
            if (message.RostingDuration != null && message.hasOwnProperty("RostingDuration"))
                object.RostingDuration = message.RostingDuration;
            if (message.PackageDateTime != null && message.hasOwnProperty("PackageDateTime"))
                object.PackageDateTime = message.PackageDateTime;
            if (message.Temperature != null && message.hasOwnProperty("Temperature"))
                object.Temperature = message.Temperature;
            if (message.InternalBatchNo != null && message.hasOwnProperty("InternalBatchNo"))
                object.InternalBatchNo = message.InternalBatchNo;
            if (message.ProcessorName != null && message.hasOwnProperty("ProcessorName"))
                object.ProcessorName = message.ProcessorName;
            if (message.ProcessorAddress != null && message.hasOwnProperty("ProcessorAddress"))
                object.ProcessorAddress = message.ProcessorAddress;
            return object;
        };

        /**
         * Converts this ProcessHarvestParams to JSON.
         * @function toJSON
         * @memberof supplyChainPackage.ProcessHarvestParams
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProcessHarvestParams.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ProcessHarvestParams;
    })();

    supplyChainPackage.UpdateProcessDetailsParams = (function() {

        /**
         * Properties of an UpdateProcessDetailsParams.
         * @memberof supplyChainPackage
         * @interface IUpdateProcessDetailsParams
         * @property {number|null} [setPrice] UpdateProcessDetailsParams setPrice
         * @property {string|null} [ProcessorName] UpdateProcessDetailsParams ProcessorName
         */

        /**
         * Constructs a new UpdateProcessDetailsParams.
         * @memberof supplyChainPackage
         * @classdesc Represents an UpdateProcessDetailsParams.
         * @implements IUpdateProcessDetailsParams
         * @constructor
         * @param {supplyChainPackage.IUpdateProcessDetailsParams=} [properties] Properties to set
         */
        function UpdateProcessDetailsParams(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateProcessDetailsParams setPrice.
         * @member {number} setPrice
         * @memberof supplyChainPackage.UpdateProcessDetailsParams
         * @instance
         */
        UpdateProcessDetailsParams.prototype.setPrice = 0;

        /**
         * UpdateProcessDetailsParams ProcessorName.
         * @member {string} ProcessorName
         * @memberof supplyChainPackage.UpdateProcessDetailsParams
         * @instance
         */
        UpdateProcessDetailsParams.prototype.ProcessorName = "";

        /**
         * Creates a new UpdateProcessDetailsParams instance using the specified properties.
         * @function create
         * @memberof supplyChainPackage.UpdateProcessDetailsParams
         * @static
         * @param {supplyChainPackage.IUpdateProcessDetailsParams=} [properties] Properties to set
         * @returns {supplyChainPackage.UpdateProcessDetailsParams} UpdateProcessDetailsParams instance
         */
        UpdateProcessDetailsParams.create = function create(properties) {
            return new UpdateProcessDetailsParams(properties);
        };

        /**
         * Encodes the specified UpdateProcessDetailsParams message. Does not implicitly {@link supplyChainPackage.UpdateProcessDetailsParams.verify|verify} messages.
         * @function encode
         * @memberof supplyChainPackage.UpdateProcessDetailsParams
         * @static
         * @param {supplyChainPackage.IUpdateProcessDetailsParams} message UpdateProcessDetailsParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateProcessDetailsParams.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.setPrice != null && message.hasOwnProperty("setPrice"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.setPrice);
            if (message.ProcessorName != null && message.hasOwnProperty("ProcessorName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.ProcessorName);
            return writer;
        };

        /**
         * Encodes the specified UpdateProcessDetailsParams message, length delimited. Does not implicitly {@link supplyChainPackage.UpdateProcessDetailsParams.verify|verify} messages.
         * @function encodeDelimited
         * @memberof supplyChainPackage.UpdateProcessDetailsParams
         * @static
         * @param {supplyChainPackage.IUpdateProcessDetailsParams} message UpdateProcessDetailsParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateProcessDetailsParams.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateProcessDetailsParams message from the specified reader or buffer.
         * @function decode
         * @memberof supplyChainPackage.UpdateProcessDetailsParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {supplyChainPackage.UpdateProcessDetailsParams} UpdateProcessDetailsParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateProcessDetailsParams.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.supplyChainPackage.UpdateProcessDetailsParams();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.setPrice = reader.int32();
                    break;
                case 2:
                    message.ProcessorName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateProcessDetailsParams message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof supplyChainPackage.UpdateProcessDetailsParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {supplyChainPackage.UpdateProcessDetailsParams} UpdateProcessDetailsParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateProcessDetailsParams.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateProcessDetailsParams message.
         * @function verify
         * @memberof supplyChainPackage.UpdateProcessDetailsParams
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateProcessDetailsParams.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.setPrice != null && message.hasOwnProperty("setPrice"))
                if (!$util.isInteger(message.setPrice))
                    return "setPrice: integer expected";
            if (message.ProcessorName != null && message.hasOwnProperty("ProcessorName"))
                if (!$util.isString(message.ProcessorName))
                    return "ProcessorName: string expected";
            return null;
        };

        /**
         * Creates an UpdateProcessDetailsParams message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof supplyChainPackage.UpdateProcessDetailsParams
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {supplyChainPackage.UpdateProcessDetailsParams} UpdateProcessDetailsParams
         */
        UpdateProcessDetailsParams.fromObject = function fromObject(object) {
            if (object instanceof $root.supplyChainPackage.UpdateProcessDetailsParams)
                return object;
            var message = new $root.supplyChainPackage.UpdateProcessDetailsParams();
            if (object.setPrice != null)
                message.setPrice = object.setPrice | 0;
            if (object.ProcessorName != null)
                message.ProcessorName = String(object.ProcessorName);
            return message;
        };

        /**
         * Creates a plain object from an UpdateProcessDetailsParams message. Also converts values to other types if specified.
         * @function toObject
         * @memberof supplyChainPackage.UpdateProcessDetailsParams
         * @static
         * @param {supplyChainPackage.UpdateProcessDetailsParams} message UpdateProcessDetailsParams
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateProcessDetailsParams.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.setPrice = 0;
                object.ProcessorName = "";
            }
            if (message.setPrice != null && message.hasOwnProperty("setPrice"))
                object.setPrice = message.setPrice;
            if (message.ProcessorName != null && message.hasOwnProperty("ProcessorName"))
                object.ProcessorName = message.ProcessorName;
            return object;
        };

        /**
         * Converts this UpdateProcessDetailsParams to JSON.
         * @function toJSON
         * @memberof supplyChainPackage.UpdateProcessDetailsParams
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateProcessDetailsParams.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateProcessDetailsParams;
    })();

    supplyChainPackage.PurchaseGrainsParams = (function() {

        /**
         * Properties of a PurchaseGrainsParams.
         * @memberof supplyChainPackage
         * @interface IPurchaseGrainsParams
         * @property {number|null} [Quantity] PurchaseGrainsParams Quantity
         * @property {string|null} [RostingDuration] PurchaseGrainsParams RostingDuration
         * @property {string|null} [PackageDateTime] PurchaseGrainsParams PackageDateTime
         * @property {string|null} [Temperature] PurchaseGrainsParams Temperature
         * @property {string|null} [InternalBatchNo] PurchaseGrainsParams InternalBatchNo
         * @property {string|null} [ProcessorName] PurchaseGrainsParams ProcessorName
         * @property {string|null} [ProcessorAddress] PurchaseGrainsParams ProcessorAddress
         * @property {Array.<supplyChainPackage.IAddressParams>|null} [addressparameters] PurchaseGrainsParams addressparameters
         */

        /**
         * Constructs a new PurchaseGrainsParams.
         * @memberof supplyChainPackage
         * @classdesc Represents a PurchaseGrainsParams.
         * @implements IPurchaseGrainsParams
         * @constructor
         * @param {supplyChainPackage.IPurchaseGrainsParams=} [properties] Properties to set
         */
        function PurchaseGrainsParams(properties) {
            this.addressparameters = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PurchaseGrainsParams Quantity.
         * @member {number} Quantity
         * @memberof supplyChainPackage.PurchaseGrainsParams
         * @instance
         */
        PurchaseGrainsParams.prototype.Quantity = 0;

        /**
         * PurchaseGrainsParams RostingDuration.
         * @member {string} RostingDuration
         * @memberof supplyChainPackage.PurchaseGrainsParams
         * @instance
         */
        PurchaseGrainsParams.prototype.RostingDuration = "";

        /**
         * PurchaseGrainsParams PackageDateTime.
         * @member {string} PackageDateTime
         * @memberof supplyChainPackage.PurchaseGrainsParams
         * @instance
         */
        PurchaseGrainsParams.prototype.PackageDateTime = "";

        /**
         * PurchaseGrainsParams Temperature.
         * @member {string} Temperature
         * @memberof supplyChainPackage.PurchaseGrainsParams
         * @instance
         */
        PurchaseGrainsParams.prototype.Temperature = "";

        /**
         * PurchaseGrainsParams InternalBatchNo.
         * @member {string} InternalBatchNo
         * @memberof supplyChainPackage.PurchaseGrainsParams
         * @instance
         */
        PurchaseGrainsParams.prototype.InternalBatchNo = "";

        /**
         * PurchaseGrainsParams ProcessorName.
         * @member {string} ProcessorName
         * @memberof supplyChainPackage.PurchaseGrainsParams
         * @instance
         */
        PurchaseGrainsParams.prototype.ProcessorName = "";

        /**
         * PurchaseGrainsParams ProcessorAddress.
         * @member {string} ProcessorAddress
         * @memberof supplyChainPackage.PurchaseGrainsParams
         * @instance
         */
        PurchaseGrainsParams.prototype.ProcessorAddress = "";

        /**
         * PurchaseGrainsParams addressparameters.
         * @member {Array.<supplyChainPackage.IAddressParams>} addressparameters
         * @memberof supplyChainPackage.PurchaseGrainsParams
         * @instance
         */
        PurchaseGrainsParams.prototype.addressparameters = $util.emptyArray;

        /**
         * Creates a new PurchaseGrainsParams instance using the specified properties.
         * @function create
         * @memberof supplyChainPackage.PurchaseGrainsParams
         * @static
         * @param {supplyChainPackage.IPurchaseGrainsParams=} [properties] Properties to set
         * @returns {supplyChainPackage.PurchaseGrainsParams} PurchaseGrainsParams instance
         */
        PurchaseGrainsParams.create = function create(properties) {
            return new PurchaseGrainsParams(properties);
        };

        /**
         * Encodes the specified PurchaseGrainsParams message. Does not implicitly {@link supplyChainPackage.PurchaseGrainsParams.verify|verify} messages.
         * @function encode
         * @memberof supplyChainPackage.PurchaseGrainsParams
         * @static
         * @param {supplyChainPackage.IPurchaseGrainsParams} message PurchaseGrainsParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PurchaseGrainsParams.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Quantity != null && message.hasOwnProperty("Quantity"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Quantity);
            if (message.RostingDuration != null && message.hasOwnProperty("RostingDuration"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.RostingDuration);
            if (message.PackageDateTime != null && message.hasOwnProperty("PackageDateTime"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.PackageDateTime);
            if (message.Temperature != null && message.hasOwnProperty("Temperature"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Temperature);
            if (message.InternalBatchNo != null && message.hasOwnProperty("InternalBatchNo"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.InternalBatchNo);
            if (message.ProcessorName != null && message.hasOwnProperty("ProcessorName"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.ProcessorName);
            if (message.ProcessorAddress != null && message.hasOwnProperty("ProcessorAddress"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.ProcessorAddress);
            if (message.addressparameters != null && message.addressparameters.length)
                for (var i = 0; i < message.addressparameters.length; ++i)
                    $root.supplyChainPackage.AddressParams.encode(message.addressparameters[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PurchaseGrainsParams message, length delimited. Does not implicitly {@link supplyChainPackage.PurchaseGrainsParams.verify|verify} messages.
         * @function encodeDelimited
         * @memberof supplyChainPackage.PurchaseGrainsParams
         * @static
         * @param {supplyChainPackage.IPurchaseGrainsParams} message PurchaseGrainsParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PurchaseGrainsParams.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PurchaseGrainsParams message from the specified reader or buffer.
         * @function decode
         * @memberof supplyChainPackage.PurchaseGrainsParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {supplyChainPackage.PurchaseGrainsParams} PurchaseGrainsParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PurchaseGrainsParams.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.supplyChainPackage.PurchaseGrainsParams();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Quantity = reader.int32();
                    break;
                case 2:
                    message.RostingDuration = reader.string();
                    break;
                case 3:
                    message.PackageDateTime = reader.string();
                    break;
                case 4:
                    message.Temperature = reader.string();
                    break;
                case 5:
                    message.InternalBatchNo = reader.string();
                    break;
                case 6:
                    message.ProcessorName = reader.string();
                    break;
                case 7:
                    message.ProcessorAddress = reader.string();
                    break;
                case 8:
                    if (!(message.addressparameters && message.addressparameters.length))
                        message.addressparameters = [];
                    message.addressparameters.push($root.supplyChainPackage.AddressParams.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PurchaseGrainsParams message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof supplyChainPackage.PurchaseGrainsParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {supplyChainPackage.PurchaseGrainsParams} PurchaseGrainsParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PurchaseGrainsParams.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PurchaseGrainsParams message.
         * @function verify
         * @memberof supplyChainPackage.PurchaseGrainsParams
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PurchaseGrainsParams.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Quantity != null && message.hasOwnProperty("Quantity"))
                if (!$util.isInteger(message.Quantity))
                    return "Quantity: integer expected";
            if (message.RostingDuration != null && message.hasOwnProperty("RostingDuration"))
                if (!$util.isString(message.RostingDuration))
                    return "RostingDuration: string expected";
            if (message.PackageDateTime != null && message.hasOwnProperty("PackageDateTime"))
                if (!$util.isString(message.PackageDateTime))
                    return "PackageDateTime: string expected";
            if (message.Temperature != null && message.hasOwnProperty("Temperature"))
                if (!$util.isString(message.Temperature))
                    return "Temperature: string expected";
            if (message.InternalBatchNo != null && message.hasOwnProperty("InternalBatchNo"))
                if (!$util.isString(message.InternalBatchNo))
                    return "InternalBatchNo: string expected";
            if (message.ProcessorName != null && message.hasOwnProperty("ProcessorName"))
                if (!$util.isString(message.ProcessorName))
                    return "ProcessorName: string expected";
            if (message.ProcessorAddress != null && message.hasOwnProperty("ProcessorAddress"))
                if (!$util.isString(message.ProcessorAddress))
                    return "ProcessorAddress: string expected";
            if (message.addressparameters != null && message.hasOwnProperty("addressparameters")) {
                if (!Array.isArray(message.addressparameters))
                    return "addressparameters: array expected";
                for (var i = 0; i < message.addressparameters.length; ++i) {
                    var error = $root.supplyChainPackage.AddressParams.verify(message.addressparameters[i]);
                    if (error)
                        return "addressparameters." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PurchaseGrainsParams message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof supplyChainPackage.PurchaseGrainsParams
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {supplyChainPackage.PurchaseGrainsParams} PurchaseGrainsParams
         */
        PurchaseGrainsParams.fromObject = function fromObject(object) {
            if (object instanceof $root.supplyChainPackage.PurchaseGrainsParams)
                return object;
            var message = new $root.supplyChainPackage.PurchaseGrainsParams();
            if (object.Quantity != null)
                message.Quantity = object.Quantity | 0;
            if (object.RostingDuration != null)
                message.RostingDuration = String(object.RostingDuration);
            if (object.PackageDateTime != null)
                message.PackageDateTime = String(object.PackageDateTime);
            if (object.Temperature != null)
                message.Temperature = String(object.Temperature);
            if (object.InternalBatchNo != null)
                message.InternalBatchNo = String(object.InternalBatchNo);
            if (object.ProcessorName != null)
                message.ProcessorName = String(object.ProcessorName);
            if (object.ProcessorAddress != null)
                message.ProcessorAddress = String(object.ProcessorAddress);
            if (object.addressparameters) {
                if (!Array.isArray(object.addressparameters))
                    throw TypeError(".supplyChainPackage.PurchaseGrainsParams.addressparameters: array expected");
                message.addressparameters = [];
                for (var i = 0; i < object.addressparameters.length; ++i) {
                    if (typeof object.addressparameters[i] !== "object")
                        throw TypeError(".supplyChainPackage.PurchaseGrainsParams.addressparameters: object expected");
                    message.addressparameters[i] = $root.supplyChainPackage.AddressParams.fromObject(object.addressparameters[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PurchaseGrainsParams message. Also converts values to other types if specified.
         * @function toObject
         * @memberof supplyChainPackage.PurchaseGrainsParams
         * @static
         * @param {supplyChainPackage.PurchaseGrainsParams} message PurchaseGrainsParams
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PurchaseGrainsParams.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.addressparameters = [];
            if (options.defaults) {
                object.Quantity = 0;
                object.RostingDuration = "";
                object.PackageDateTime = "";
                object.Temperature = "";
                object.InternalBatchNo = "";
                object.ProcessorName = "";
                object.ProcessorAddress = "";
            }
            if (message.Quantity != null && message.hasOwnProperty("Quantity"))
                object.Quantity = message.Quantity;
            if (message.RostingDuration != null && message.hasOwnProperty("RostingDuration"))
                object.RostingDuration = message.RostingDuration;
            if (message.PackageDateTime != null && message.hasOwnProperty("PackageDateTime"))
                object.PackageDateTime = message.PackageDateTime;
            if (message.Temperature != null && message.hasOwnProperty("Temperature"))
                object.Temperature = message.Temperature;
            if (message.InternalBatchNo != null && message.hasOwnProperty("InternalBatchNo"))
                object.InternalBatchNo = message.InternalBatchNo;
            if (message.ProcessorName != null && message.hasOwnProperty("ProcessorName"))
                object.ProcessorName = message.ProcessorName;
            if (message.ProcessorAddress != null && message.hasOwnProperty("ProcessorAddress"))
                object.ProcessorAddress = message.ProcessorAddress;
            if (message.addressparameters && message.addressparameters.length) {
                object.addressparameters = [];
                for (var j = 0; j < message.addressparameters.length; ++j)
                    object.addressparameters[j] = $root.supplyChainPackage.AddressParams.toObject(message.addressparameters[j], options);
            }
            return object;
        };

        /**
         * Converts this PurchaseGrainsParams to JSON.
         * @function toJSON
         * @memberof supplyChainPackage.PurchaseGrainsParams
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PurchaseGrainsParams.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PurchaseGrainsParams;
    })();

    return supplyChainPackage;
})();

module.exports = $root;
