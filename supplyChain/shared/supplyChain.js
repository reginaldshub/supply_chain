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
         * @property {supplyChainPackage.ICreatePackageParams|null} [createPackage] PayLoad createPackage
         * @property {supplyChainPackage.ITransferPackageParams|null} [transferPackage] PayLoad transferPackage
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
         * PayLoad createPackage.
         * @member {supplyChainPackage.ICreatePackageParams|null|undefined} createPackage
         * @memberof supplyChainPackage.PayLoad
         * @instance
         */
        PayLoad.prototype.createPackage = null;

        /**
         * PayLoad transferPackage.
         * @member {supplyChainPackage.ITransferPackageParams|null|undefined} transferPackage
         * @memberof supplyChainPackage.PayLoad
         * @instance
         */
        PayLoad.prototype.transferPackage = null;

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
            if (message.createPackage != null && message.hasOwnProperty("createPackage"))
                $root.supplyChainPackage.CreatePackageParams.encode(message.createPackage, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.transferPackage != null && message.hasOwnProperty("transferPackage"))
                $root.supplyChainPackage.TransferPackageParams.encode(message.transferPackage, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
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
                    message.createPackage = $root.supplyChainPackage.CreatePackageParams.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.transferPackage = $root.supplyChainPackage.TransferPackageParams.decode(reader, reader.uint32());
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
            if (message.createPackage != null && message.hasOwnProperty("createPackage")) {
                var error = $root.supplyChainPackage.CreatePackageParams.verify(message.createPackage);
                if (error)
                    return "createPackage." + error;
            }
            if (message.transferPackage != null && message.hasOwnProperty("transferPackage")) {
                var error = $root.supplyChainPackage.TransferPackageParams.verify(message.transferPackage);
                if (error)
                    return "transferPackage." + error;
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
            case "CREATE_PACKAGE":
            case 4:
                message.action = 4;
                break;
            case "TRANSFER_PACKAGE":
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
            if (object.createPackage != null) {
                if (typeof object.createPackage !== "object")
                    throw TypeError(".supplyChainPackage.PayLoad.createPackage: object expected");
                message.createPackage = $root.supplyChainPackage.CreatePackageParams.fromObject(object.createPackage);
            }
            if (object.transferPackage != null) {
                if (typeof object.transferPackage !== "object")
                    throw TypeError(".supplyChainPackage.PayLoad.transferPackage: object expected");
                message.transferPackage = $root.supplyChainPackage.TransferPackageParams.fromObject(object.transferPackage);
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
                object.createPackage = null;
                object.transferPackage = null;
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
            if (message.createPackage != null && message.hasOwnProperty("createPackage"))
                object.createPackage = $root.supplyChainPackage.CreatePackageParams.toObject(message.createPackage, options);
            if (message.transferPackage != null && message.hasOwnProperty("transferPackage"))
                object.transferPackage = $root.supplyChainPackage.TransferPackageParams.toObject(message.transferPackage, options);
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
         * @property {number} CREATE_PACKAGE=4 CREATE_PACKAGE value
         * @property {number} TRANSFER_PACKAGE=5 TRANSFER_PACKAGE value
         * @property {number} UPDATE_PROCESS_DETAILS=6 UPDATE_PROCESS_DETAILS value
         */
        PayLoad.Action = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "LAND_REGISTRATION"] = 0;
            values[valuesById[1] = "START_CULTIVATION"] = 1;
            values[valuesById[2] = "INSPECTION"] = 2;
            values[valuesById[3] = "PERFORM_HARVEST"] = 3;
            values[valuesById[4] = "CREATE_PACKAGE"] = 4;
            values[valuesById[5] = "TRANSFER_PACKAGE"] = 5;
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

    supplyChainPackage.LandRegistrationParameters = (function() {

        /**
         * Properties of a LandRegistrationParameters.
         * @memberof supplyChainPackage
         * @interface ILandRegistrationParameters
         * @property {string|null} [FarmAddress] LandRegistrationParameters FarmAddress
         * @property {string|null} [State] LandRegistrationParameters State
         * @property {string|null} [Country] LandRegistrationParameters Country
         * @property {string|null} [ExporterName] LandRegistrationParameters ExporterName
         * @property {string|null} [ImporterName] LandRegistrationParameters ImporterName
         * @property {string|null} [DateofRegistration] LandRegistrationParameters DateofRegistration
         */

        /**
         * Constructs a new LandRegistrationParameters.
         * @memberof supplyChainPackage
         * @classdesc Represents a LandRegistrationParameters.
         * @implements ILandRegistrationParameters
         * @constructor
         * @param {supplyChainPackage.ILandRegistrationParameters=} [properties] Properties to set
         */
        function LandRegistrationParameters(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LandRegistrationParameters FarmAddress.
         * @member {string} FarmAddress
         * @memberof supplyChainPackage.LandRegistrationParameters
         * @instance
         */
        LandRegistrationParameters.prototype.FarmAddress = "";

        /**
         * LandRegistrationParameters State.
         * @member {string} State
         * @memberof supplyChainPackage.LandRegistrationParameters
         * @instance
         */
        LandRegistrationParameters.prototype.State = "";

        /**
         * LandRegistrationParameters Country.
         * @member {string} Country
         * @memberof supplyChainPackage.LandRegistrationParameters
         * @instance
         */
        LandRegistrationParameters.prototype.Country = "";

        /**
         * LandRegistrationParameters ExporterName.
         * @member {string} ExporterName
         * @memberof supplyChainPackage.LandRegistrationParameters
         * @instance
         */
        LandRegistrationParameters.prototype.ExporterName = "";

        /**
         * LandRegistrationParameters ImporterName.
         * @member {string} ImporterName
         * @memberof supplyChainPackage.LandRegistrationParameters
         * @instance
         */
        LandRegistrationParameters.prototype.ImporterName = "";

        /**
         * LandRegistrationParameters DateofRegistration.
         * @member {string} DateofRegistration
         * @memberof supplyChainPackage.LandRegistrationParameters
         * @instance
         */
        LandRegistrationParameters.prototype.DateofRegistration = "";

        /**
         * Creates a new LandRegistrationParameters instance using the specified properties.
         * @function create
         * @memberof supplyChainPackage.LandRegistrationParameters
         * @static
         * @param {supplyChainPackage.ILandRegistrationParameters=} [properties] Properties to set
         * @returns {supplyChainPackage.LandRegistrationParameters} LandRegistrationParameters instance
         */
        LandRegistrationParameters.create = function create(properties) {
            return new LandRegistrationParameters(properties);
        };

        /**
         * Encodes the specified LandRegistrationParameters message. Does not implicitly {@link supplyChainPackage.LandRegistrationParameters.verify|verify} messages.
         * @function encode
         * @memberof supplyChainPackage.LandRegistrationParameters
         * @static
         * @param {supplyChainPackage.ILandRegistrationParameters} message LandRegistrationParameters message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LandRegistrationParameters.encode = function encode(message, writer) {
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
            return writer;
        };

        /**
         * Encodes the specified LandRegistrationParameters message, length delimited. Does not implicitly {@link supplyChainPackage.LandRegistrationParameters.verify|verify} messages.
         * @function encodeDelimited
         * @memberof supplyChainPackage.LandRegistrationParameters
         * @static
         * @param {supplyChainPackage.ILandRegistrationParameters} message LandRegistrationParameters message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LandRegistrationParameters.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LandRegistrationParameters message from the specified reader or buffer.
         * @function decode
         * @memberof supplyChainPackage.LandRegistrationParameters
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {supplyChainPackage.LandRegistrationParameters} LandRegistrationParameters
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LandRegistrationParameters.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.supplyChainPackage.LandRegistrationParameters();
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
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LandRegistrationParameters message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof supplyChainPackage.LandRegistrationParameters
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {supplyChainPackage.LandRegistrationParameters} LandRegistrationParameters
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LandRegistrationParameters.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LandRegistrationParameters message.
         * @function verify
         * @memberof supplyChainPackage.LandRegistrationParameters
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LandRegistrationParameters.verify = function verify(message) {
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
            return null;
        };

        /**
         * Creates a LandRegistrationParameters message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof supplyChainPackage.LandRegistrationParameters
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {supplyChainPackage.LandRegistrationParameters} LandRegistrationParameters
         */
        LandRegistrationParameters.fromObject = function fromObject(object) {
            if (object instanceof $root.supplyChainPackage.LandRegistrationParameters)
                return object;
            var message = new $root.supplyChainPackage.LandRegistrationParameters();
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
            return message;
        };

        /**
         * Creates a plain object from a LandRegistrationParameters message. Also converts values to other types if specified.
         * @function toObject
         * @memberof supplyChainPackage.LandRegistrationParameters
         * @static
         * @param {supplyChainPackage.LandRegistrationParameters} message LandRegistrationParameters
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LandRegistrationParameters.toObject = function toObject(message, options) {
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
            return object;
        };

        /**
         * Converts this LandRegistrationParameters to JSON.
         * @function toJSON
         * @memberof supplyChainPackage.LandRegistrationParameters
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LandRegistrationParameters.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LandRegistrationParameters;
    })();

    supplyChainPackage.TransferPackageParameters = (function() {

        /**
         * Properties of a TransferPackageParameters.
         * @memberof supplyChainPackage
         * @interface ITransferPackageParameters
         * @property {string|null} [retailAgentPublicKey] TransferPackageParameters retailAgentPublicKey
         * @property {number|null} [internalBatchNo] TransferPackageParameters internalBatchNo
         */

        /**
         * Constructs a new TransferPackageParameters.
         * @memberof supplyChainPackage
         * @classdesc Represents a TransferPackageParameters.
         * @implements ITransferPackageParameters
         * @constructor
         * @param {supplyChainPackage.ITransferPackageParameters=} [properties] Properties to set
         */
        function TransferPackageParameters(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TransferPackageParameters retailAgentPublicKey.
         * @member {string} retailAgentPublicKey
         * @memberof supplyChainPackage.TransferPackageParameters
         * @instance
         */
        TransferPackageParameters.prototype.retailAgentPublicKey = "";

        /**
         * TransferPackageParameters internalBatchNo.
         * @member {number} internalBatchNo
         * @memberof supplyChainPackage.TransferPackageParameters
         * @instance
         */
        TransferPackageParameters.prototype.internalBatchNo = 0;

        /**
         * Creates a new TransferPackageParameters instance using the specified properties.
         * @function create
         * @memberof supplyChainPackage.TransferPackageParameters
         * @static
         * @param {supplyChainPackage.ITransferPackageParameters=} [properties] Properties to set
         * @returns {supplyChainPackage.TransferPackageParameters} TransferPackageParameters instance
         */
        TransferPackageParameters.create = function create(properties) {
            return new TransferPackageParameters(properties);
        };

        /**
         * Encodes the specified TransferPackageParameters message. Does not implicitly {@link supplyChainPackage.TransferPackageParameters.verify|verify} messages.
         * @function encode
         * @memberof supplyChainPackage.TransferPackageParameters
         * @static
         * @param {supplyChainPackage.ITransferPackageParameters} message TransferPackageParameters message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TransferPackageParameters.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.retailAgentPublicKey != null && message.hasOwnProperty("retailAgentPublicKey"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.retailAgentPublicKey);
            if (message.internalBatchNo != null && message.hasOwnProperty("internalBatchNo"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.internalBatchNo);
            return writer;
        };

        /**
         * Encodes the specified TransferPackageParameters message, length delimited. Does not implicitly {@link supplyChainPackage.TransferPackageParameters.verify|verify} messages.
         * @function encodeDelimited
         * @memberof supplyChainPackage.TransferPackageParameters
         * @static
         * @param {supplyChainPackage.ITransferPackageParameters} message TransferPackageParameters message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TransferPackageParameters.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TransferPackageParameters message from the specified reader or buffer.
         * @function decode
         * @memberof supplyChainPackage.TransferPackageParameters
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {supplyChainPackage.TransferPackageParameters} TransferPackageParameters
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TransferPackageParameters.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.supplyChainPackage.TransferPackageParameters();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.retailAgentPublicKey = reader.string();
                    break;
                case 2:
                    message.internalBatchNo = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TransferPackageParameters message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof supplyChainPackage.TransferPackageParameters
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {supplyChainPackage.TransferPackageParameters} TransferPackageParameters
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TransferPackageParameters.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TransferPackageParameters message.
         * @function verify
         * @memberof supplyChainPackage.TransferPackageParameters
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TransferPackageParameters.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.retailAgentPublicKey != null && message.hasOwnProperty("retailAgentPublicKey"))
                if (!$util.isString(message.retailAgentPublicKey))
                    return "retailAgentPublicKey: string expected";
            if (message.internalBatchNo != null && message.hasOwnProperty("internalBatchNo"))
                if (!$util.isInteger(message.internalBatchNo))
                    return "internalBatchNo: integer expected";
            return null;
        };

        /**
         * Creates a TransferPackageParameters message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof supplyChainPackage.TransferPackageParameters
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {supplyChainPackage.TransferPackageParameters} TransferPackageParameters
         */
        TransferPackageParameters.fromObject = function fromObject(object) {
            if (object instanceof $root.supplyChainPackage.TransferPackageParameters)
                return object;
            var message = new $root.supplyChainPackage.TransferPackageParameters();
            if (object.retailAgentPublicKey != null)
                message.retailAgentPublicKey = String(object.retailAgentPublicKey);
            if (object.internalBatchNo != null)
                message.internalBatchNo = object.internalBatchNo | 0;
            return message;
        };

        /**
         * Creates a plain object from a TransferPackageParameters message. Also converts values to other types if specified.
         * @function toObject
         * @memberof supplyChainPackage.TransferPackageParameters
         * @static
         * @param {supplyChainPackage.TransferPackageParameters} message TransferPackageParameters
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TransferPackageParameters.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.retailAgentPublicKey = "";
                object.internalBatchNo = 0;
            }
            if (message.retailAgentPublicKey != null && message.hasOwnProperty("retailAgentPublicKey"))
                object.retailAgentPublicKey = message.retailAgentPublicKey;
            if (message.internalBatchNo != null && message.hasOwnProperty("internalBatchNo"))
                object.internalBatchNo = message.internalBatchNo;
            return object;
        };

        /**
         * Converts this TransferPackageParameters to JSON.
         * @function toJSON
         * @memberof supplyChainPackage.TransferPackageParameters
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TransferPackageParameters.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TransferPackageParameters;
    })();

    supplyChainPackage.StartCultivationParameters = (function() {

        /**
         * Properties of a StartCultivationParameters.
         * @memberof supplyChainPackage
         * @interface IStartCultivationParameters
         * @property {string|null} [CropVariety] StartCultivationParameters CropVariety
         * @property {string|null} [Dateofstart] StartCultivationParameters Dateofstart
         */

        /**
         * Constructs a new StartCultivationParameters.
         * @memberof supplyChainPackage
         * @classdesc Represents a StartCultivationParameters.
         * @implements IStartCultivationParameters
         * @constructor
         * @param {supplyChainPackage.IStartCultivationParameters=} [properties] Properties to set
         */
        function StartCultivationParameters(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StartCultivationParameters CropVariety.
         * @member {string} CropVariety
         * @memberof supplyChainPackage.StartCultivationParameters
         * @instance
         */
        StartCultivationParameters.prototype.CropVariety = "";

        /**
         * StartCultivationParameters Dateofstart.
         * @member {string} Dateofstart
         * @memberof supplyChainPackage.StartCultivationParameters
         * @instance
         */
        StartCultivationParameters.prototype.Dateofstart = "";

        /**
         * Creates a new StartCultivationParameters instance using the specified properties.
         * @function create
         * @memberof supplyChainPackage.StartCultivationParameters
         * @static
         * @param {supplyChainPackage.IStartCultivationParameters=} [properties] Properties to set
         * @returns {supplyChainPackage.StartCultivationParameters} StartCultivationParameters instance
         */
        StartCultivationParameters.create = function create(properties) {
            return new StartCultivationParameters(properties);
        };

        /**
         * Encodes the specified StartCultivationParameters message. Does not implicitly {@link supplyChainPackage.StartCultivationParameters.verify|verify} messages.
         * @function encode
         * @memberof supplyChainPackage.StartCultivationParameters
         * @static
         * @param {supplyChainPackage.IStartCultivationParameters} message StartCultivationParameters message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartCultivationParameters.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.CropVariety != null && message.hasOwnProperty("CropVariety"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.CropVariety);
            if (message.Dateofstart != null && message.hasOwnProperty("Dateofstart"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Dateofstart);
            return writer;
        };

        /**
         * Encodes the specified StartCultivationParameters message, length delimited. Does not implicitly {@link supplyChainPackage.StartCultivationParameters.verify|verify} messages.
         * @function encodeDelimited
         * @memberof supplyChainPackage.StartCultivationParameters
         * @static
         * @param {supplyChainPackage.IStartCultivationParameters} message StartCultivationParameters message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartCultivationParameters.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StartCultivationParameters message from the specified reader or buffer.
         * @function decode
         * @memberof supplyChainPackage.StartCultivationParameters
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {supplyChainPackage.StartCultivationParameters} StartCultivationParameters
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartCultivationParameters.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.supplyChainPackage.StartCultivationParameters();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.CropVariety = reader.string();
                    break;
                case 2:
                    message.Dateofstart = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StartCultivationParameters message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof supplyChainPackage.StartCultivationParameters
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {supplyChainPackage.StartCultivationParameters} StartCultivationParameters
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartCultivationParameters.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StartCultivationParameters message.
         * @function verify
         * @memberof supplyChainPackage.StartCultivationParameters
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StartCultivationParameters.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.CropVariety != null && message.hasOwnProperty("CropVariety"))
                if (!$util.isString(message.CropVariety))
                    return "CropVariety: string expected";
            if (message.Dateofstart != null && message.hasOwnProperty("Dateofstart"))
                if (!$util.isString(message.Dateofstart))
                    return "Dateofstart: string expected";
            return null;
        };

        /**
         * Creates a StartCultivationParameters message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof supplyChainPackage.StartCultivationParameters
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {supplyChainPackage.StartCultivationParameters} StartCultivationParameters
         */
        StartCultivationParameters.fromObject = function fromObject(object) {
            if (object instanceof $root.supplyChainPackage.StartCultivationParameters)
                return object;
            var message = new $root.supplyChainPackage.StartCultivationParameters();
            if (object.CropVariety != null)
                message.CropVariety = String(object.CropVariety);
            if (object.Dateofstart != null)
                message.Dateofstart = String(object.Dateofstart);
            return message;
        };

        /**
         * Creates a plain object from a StartCultivationParameters message. Also converts values to other types if specified.
         * @function toObject
         * @memberof supplyChainPackage.StartCultivationParameters
         * @static
         * @param {supplyChainPackage.StartCultivationParameters} message StartCultivationParameters
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StartCultivationParameters.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.CropVariety = "";
                object.Dateofstart = "";
            }
            if (message.CropVariety != null && message.hasOwnProperty("CropVariety"))
                object.CropVariety = message.CropVariety;
            if (message.Dateofstart != null && message.hasOwnProperty("Dateofstart"))
                object.Dateofstart = message.Dateofstart;
            return object;
        };

        /**
         * Converts this StartCultivationParameters to JSON.
         * @function toJSON
         * @memberof supplyChainPackage.StartCultivationParameters
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StartCultivationParameters.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StartCultivationParameters;
    })();

    supplyChainPackage.InspectParameters = (function() {

        /**
         * Properties of an InspectParameters.
         * @memberof supplyChainPackage
         * @interface IInspectParameters
         * @property {string|null} [InspectionReport] InspectParameters InspectionReport
         * @property {string|null} [DateofInspection] InspectParameters DateofInspection
         * @property {string|null} [InspectorName] InspectParameters InspectorName
         * @property {string|null} [FarmersPublicKey] InspectParameters FarmersPublicKey
         */

        /**
         * Constructs a new InspectParameters.
         * @memberof supplyChainPackage
         * @classdesc Represents an InspectParameters.
         * @implements IInspectParameters
         * @constructor
         * @param {supplyChainPackage.IInspectParameters=} [properties] Properties to set
         */
        function InspectParameters(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InspectParameters InspectionReport.
         * @member {string} InspectionReport
         * @memberof supplyChainPackage.InspectParameters
         * @instance
         */
        InspectParameters.prototype.InspectionReport = "";

        /**
         * InspectParameters DateofInspection.
         * @member {string} DateofInspection
         * @memberof supplyChainPackage.InspectParameters
         * @instance
         */
        InspectParameters.prototype.DateofInspection = "";

        /**
         * InspectParameters InspectorName.
         * @member {string} InspectorName
         * @memberof supplyChainPackage.InspectParameters
         * @instance
         */
        InspectParameters.prototype.InspectorName = "";

        /**
         * InspectParameters FarmersPublicKey.
         * @member {string} FarmersPublicKey
         * @memberof supplyChainPackage.InspectParameters
         * @instance
         */
        InspectParameters.prototype.FarmersPublicKey = "";

        /**
         * Creates a new InspectParameters instance using the specified properties.
         * @function create
         * @memberof supplyChainPackage.InspectParameters
         * @static
         * @param {supplyChainPackage.IInspectParameters=} [properties] Properties to set
         * @returns {supplyChainPackage.InspectParameters} InspectParameters instance
         */
        InspectParameters.create = function create(properties) {
            return new InspectParameters(properties);
        };

        /**
         * Encodes the specified InspectParameters message. Does not implicitly {@link supplyChainPackage.InspectParameters.verify|verify} messages.
         * @function encode
         * @memberof supplyChainPackage.InspectParameters
         * @static
         * @param {supplyChainPackage.IInspectParameters} message InspectParameters message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InspectParameters.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.InspectionReport != null && message.hasOwnProperty("InspectionReport"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.InspectionReport);
            if (message.DateofInspection != null && message.hasOwnProperty("DateofInspection"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.DateofInspection);
            if (message.InspectorName != null && message.hasOwnProperty("InspectorName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.InspectorName);
            if (message.FarmersPublicKey != null && message.hasOwnProperty("FarmersPublicKey"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.FarmersPublicKey);
            return writer;
        };

        /**
         * Encodes the specified InspectParameters message, length delimited. Does not implicitly {@link supplyChainPackage.InspectParameters.verify|verify} messages.
         * @function encodeDelimited
         * @memberof supplyChainPackage.InspectParameters
         * @static
         * @param {supplyChainPackage.IInspectParameters} message InspectParameters message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InspectParameters.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InspectParameters message from the specified reader or buffer.
         * @function decode
         * @memberof supplyChainPackage.InspectParameters
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {supplyChainPackage.InspectParameters} InspectParameters
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InspectParameters.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.supplyChainPackage.InspectParameters();
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
                    message.FarmersPublicKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an InspectParameters message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof supplyChainPackage.InspectParameters
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {supplyChainPackage.InspectParameters} InspectParameters
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InspectParameters.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an InspectParameters message.
         * @function verify
         * @memberof supplyChainPackage.InspectParameters
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InspectParameters.verify = function verify(message) {
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
            if (message.FarmersPublicKey != null && message.hasOwnProperty("FarmersPublicKey"))
                if (!$util.isString(message.FarmersPublicKey))
                    return "FarmersPublicKey: string expected";
            return null;
        };

        /**
         * Creates an InspectParameters message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof supplyChainPackage.InspectParameters
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {supplyChainPackage.InspectParameters} InspectParameters
         */
        InspectParameters.fromObject = function fromObject(object) {
            if (object instanceof $root.supplyChainPackage.InspectParameters)
                return object;
            var message = new $root.supplyChainPackage.InspectParameters();
            if (object.InspectionReport != null)
                message.InspectionReport = String(object.InspectionReport);
            if (object.DateofInspection != null)
                message.DateofInspection = String(object.DateofInspection);
            if (object.InspectorName != null)
                message.InspectorName = String(object.InspectorName);
            if (object.FarmersPublicKey != null)
                message.FarmersPublicKey = String(object.FarmersPublicKey);
            return message;
        };

        /**
         * Creates a plain object from an InspectParameters message. Also converts values to other types if specified.
         * @function toObject
         * @memberof supplyChainPackage.InspectParameters
         * @static
         * @param {supplyChainPackage.InspectParameters} message InspectParameters
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InspectParameters.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.InspectionReport = "";
                object.DateofInspection = "";
                object.InspectorName = "";
                object.FarmersPublicKey = "";
            }
            if (message.InspectionReport != null && message.hasOwnProperty("InspectionReport"))
                object.InspectionReport = message.InspectionReport;
            if (message.DateofInspection != null && message.hasOwnProperty("DateofInspection"))
                object.DateofInspection = message.DateofInspection;
            if (message.InspectorName != null && message.hasOwnProperty("InspectorName"))
                object.InspectorName = message.InspectorName;
            if (message.FarmersPublicKey != null && message.hasOwnProperty("FarmersPublicKey"))
                object.FarmersPublicKey = message.FarmersPublicKey;
            return object;
        };

        /**
         * Converts this InspectParameters to JSON.
         * @function toJSON
         * @memberof supplyChainPackage.InspectParameters
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InspectParameters.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return InspectParameters;
    })();

    supplyChainPackage.PerformHarvestParameters = (function() {

        /**
         * Properties of a PerformHarvestParameters.
         * @memberof supplyChainPackage
         * @interface IPerformHarvestParameters
         * @property {string|null} [CropVariety] PerformHarvestParameters CropVariety
         * @property {string|null} [Temperature] PerformHarvestParameters Temperature
         * @property {string|null} [Humidity] PerformHarvestParameters Humidity
         * @property {string|null} [Dateofharvest] PerformHarvestParameters Dateofharvest
         * @property {string|null} [Quantity] PerformHarvestParameters Quantity
         */

        /**
         * Constructs a new PerformHarvestParameters.
         * @memberof supplyChainPackage
         * @classdesc Represents a PerformHarvestParameters.
         * @implements IPerformHarvestParameters
         * @constructor
         * @param {supplyChainPackage.IPerformHarvestParameters=} [properties] Properties to set
         */
        function PerformHarvestParameters(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PerformHarvestParameters CropVariety.
         * @member {string} CropVariety
         * @memberof supplyChainPackage.PerformHarvestParameters
         * @instance
         */
        PerformHarvestParameters.prototype.CropVariety = "";

        /**
         * PerformHarvestParameters Temperature.
         * @member {string} Temperature
         * @memberof supplyChainPackage.PerformHarvestParameters
         * @instance
         */
        PerformHarvestParameters.prototype.Temperature = "";

        /**
         * PerformHarvestParameters Humidity.
         * @member {string} Humidity
         * @memberof supplyChainPackage.PerformHarvestParameters
         * @instance
         */
        PerformHarvestParameters.prototype.Humidity = "";

        /**
         * PerformHarvestParameters Dateofharvest.
         * @member {string} Dateofharvest
         * @memberof supplyChainPackage.PerformHarvestParameters
         * @instance
         */
        PerformHarvestParameters.prototype.Dateofharvest = "";

        /**
         * PerformHarvestParameters Quantity.
         * @member {string} Quantity
         * @memberof supplyChainPackage.PerformHarvestParameters
         * @instance
         */
        PerformHarvestParameters.prototype.Quantity = "";

        /**
         * Creates a new PerformHarvestParameters instance using the specified properties.
         * @function create
         * @memberof supplyChainPackage.PerformHarvestParameters
         * @static
         * @param {supplyChainPackage.IPerformHarvestParameters=} [properties] Properties to set
         * @returns {supplyChainPackage.PerformHarvestParameters} PerformHarvestParameters instance
         */
        PerformHarvestParameters.create = function create(properties) {
            return new PerformHarvestParameters(properties);
        };

        /**
         * Encodes the specified PerformHarvestParameters message. Does not implicitly {@link supplyChainPackage.PerformHarvestParameters.verify|verify} messages.
         * @function encode
         * @memberof supplyChainPackage.PerformHarvestParameters
         * @static
         * @param {supplyChainPackage.IPerformHarvestParameters} message PerformHarvestParameters message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PerformHarvestParameters.encode = function encode(message, writer) {
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
            return writer;
        };

        /**
         * Encodes the specified PerformHarvestParameters message, length delimited. Does not implicitly {@link supplyChainPackage.PerformHarvestParameters.verify|verify} messages.
         * @function encodeDelimited
         * @memberof supplyChainPackage.PerformHarvestParameters
         * @static
         * @param {supplyChainPackage.IPerformHarvestParameters} message PerformHarvestParameters message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PerformHarvestParameters.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PerformHarvestParameters message from the specified reader or buffer.
         * @function decode
         * @memberof supplyChainPackage.PerformHarvestParameters
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {supplyChainPackage.PerformHarvestParameters} PerformHarvestParameters
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PerformHarvestParameters.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.supplyChainPackage.PerformHarvestParameters();
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
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PerformHarvestParameters message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof supplyChainPackage.PerformHarvestParameters
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {supplyChainPackage.PerformHarvestParameters} PerformHarvestParameters
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PerformHarvestParameters.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PerformHarvestParameters message.
         * @function verify
         * @memberof supplyChainPackage.PerformHarvestParameters
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PerformHarvestParameters.verify = function verify(message) {
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
            return null;
        };

        /**
         * Creates a PerformHarvestParameters message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof supplyChainPackage.PerformHarvestParameters
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {supplyChainPackage.PerformHarvestParameters} PerformHarvestParameters
         */
        PerformHarvestParameters.fromObject = function fromObject(object) {
            if (object instanceof $root.supplyChainPackage.PerformHarvestParameters)
                return object;
            var message = new $root.supplyChainPackage.PerformHarvestParameters();
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
            return message;
        };

        /**
         * Creates a plain object from a PerformHarvestParameters message. Also converts values to other types if specified.
         * @function toObject
         * @memberof supplyChainPackage.PerformHarvestParameters
         * @static
         * @param {supplyChainPackage.PerformHarvestParameters} message PerformHarvestParameters
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PerformHarvestParameters.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.CropVariety = "";
                object.Temperature = "";
                object.Humidity = "";
                object.Dateofharvest = "";
                object.Quantity = "";
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
            return object;
        };

        /**
         * Converts this PerformHarvestParameters to JSON.
         * @function toJSON
         * @memberof supplyChainPackage.PerformHarvestParameters
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PerformHarvestParameters.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PerformHarvestParameters;
    })();

    supplyChainPackage.CreatePackageParameters = (function() {

        /**
         * Properties of a CreatePackageParameters.
         * @memberof supplyChainPackage
         * @interface ICreatePackageParameters
         * @property {number|null} [Quantity] CreatePackageParameters Quantity
         * @property {string|null} [RostingDuration] CreatePackageParameters RostingDuration
         * @property {string|null} [PackageDateTime] CreatePackageParameters PackageDateTime
         * @property {string|null} [Temperature] CreatePackageParameters Temperature
         * @property {string|null} [InternalBatchNo] CreatePackageParameters InternalBatchNo
         * @property {string|null} [ProcessorName] CreatePackageParameters ProcessorName
         * @property {string|null} [ProcessorAddress] CreatePackageParameters ProcessorAddress
         */

        /**
         * Constructs a new CreatePackageParameters.
         * @memberof supplyChainPackage
         * @classdesc Represents a CreatePackageParameters.
         * @implements ICreatePackageParameters
         * @constructor
         * @param {supplyChainPackage.ICreatePackageParameters=} [properties] Properties to set
         */
        function CreatePackageParameters(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreatePackageParameters Quantity.
         * @member {number} Quantity
         * @memberof supplyChainPackage.CreatePackageParameters
         * @instance
         */
        CreatePackageParameters.prototype.Quantity = 0;

        /**
         * CreatePackageParameters RostingDuration.
         * @member {string} RostingDuration
         * @memberof supplyChainPackage.CreatePackageParameters
         * @instance
         */
        CreatePackageParameters.prototype.RostingDuration = "";

        /**
         * CreatePackageParameters PackageDateTime.
         * @member {string} PackageDateTime
         * @memberof supplyChainPackage.CreatePackageParameters
         * @instance
         */
        CreatePackageParameters.prototype.PackageDateTime = "";

        /**
         * CreatePackageParameters Temperature.
         * @member {string} Temperature
         * @memberof supplyChainPackage.CreatePackageParameters
         * @instance
         */
        CreatePackageParameters.prototype.Temperature = "";

        /**
         * CreatePackageParameters InternalBatchNo.
         * @member {string} InternalBatchNo
         * @memberof supplyChainPackage.CreatePackageParameters
         * @instance
         */
        CreatePackageParameters.prototype.InternalBatchNo = "";

        /**
         * CreatePackageParameters ProcessorName.
         * @member {string} ProcessorName
         * @memberof supplyChainPackage.CreatePackageParameters
         * @instance
         */
        CreatePackageParameters.prototype.ProcessorName = "";

        /**
         * CreatePackageParameters ProcessorAddress.
         * @member {string} ProcessorAddress
         * @memberof supplyChainPackage.CreatePackageParameters
         * @instance
         */
        CreatePackageParameters.prototype.ProcessorAddress = "";

        /**
         * Creates a new CreatePackageParameters instance using the specified properties.
         * @function create
         * @memberof supplyChainPackage.CreatePackageParameters
         * @static
         * @param {supplyChainPackage.ICreatePackageParameters=} [properties] Properties to set
         * @returns {supplyChainPackage.CreatePackageParameters} CreatePackageParameters instance
         */
        CreatePackageParameters.create = function create(properties) {
            return new CreatePackageParameters(properties);
        };

        /**
         * Encodes the specified CreatePackageParameters message. Does not implicitly {@link supplyChainPackage.CreatePackageParameters.verify|verify} messages.
         * @function encode
         * @memberof supplyChainPackage.CreatePackageParameters
         * @static
         * @param {supplyChainPackage.ICreatePackageParameters} message CreatePackageParameters message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreatePackageParameters.encode = function encode(message, writer) {
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
         * Encodes the specified CreatePackageParameters message, length delimited. Does not implicitly {@link supplyChainPackage.CreatePackageParameters.verify|verify} messages.
         * @function encodeDelimited
         * @memberof supplyChainPackage.CreatePackageParameters
         * @static
         * @param {supplyChainPackage.ICreatePackageParameters} message CreatePackageParameters message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreatePackageParameters.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreatePackageParameters message from the specified reader or buffer.
         * @function decode
         * @memberof supplyChainPackage.CreatePackageParameters
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {supplyChainPackage.CreatePackageParameters} CreatePackageParameters
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreatePackageParameters.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.supplyChainPackage.CreatePackageParameters();
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
         * Decodes a CreatePackageParameters message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof supplyChainPackage.CreatePackageParameters
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {supplyChainPackage.CreatePackageParameters} CreatePackageParameters
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreatePackageParameters.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreatePackageParameters message.
         * @function verify
         * @memberof supplyChainPackage.CreatePackageParameters
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreatePackageParameters.verify = function verify(message) {
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
         * Creates a CreatePackageParameters message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof supplyChainPackage.CreatePackageParameters
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {supplyChainPackage.CreatePackageParameters} CreatePackageParameters
         */
        CreatePackageParameters.fromObject = function fromObject(object) {
            if (object instanceof $root.supplyChainPackage.CreatePackageParameters)
                return object;
            var message = new $root.supplyChainPackage.CreatePackageParameters();
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
         * Creates a plain object from a CreatePackageParameters message. Also converts values to other types if specified.
         * @function toObject
         * @memberof supplyChainPackage.CreatePackageParameters
         * @static
         * @param {supplyChainPackage.CreatePackageParameters} message CreatePackageParameters
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreatePackageParameters.toObject = function toObject(message, options) {
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
         * Converts this CreatePackageParameters to JSON.
         * @function toJSON
         * @memberof supplyChainPackage.CreatePackageParameters
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreatePackageParameters.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreatePackageParameters;
    })();

    supplyChainPackage.UpdateProcessDetailsParameters = (function() {

        /**
         * Properties of an UpdateProcessDetailsParameters.
         * @memberof supplyChainPackage
         * @interface IUpdateProcessDetailsParameters
         * @property {number|null} [setPrice] UpdateProcessDetailsParameters setPrice
         * @property {string|null} [ProcessorName] UpdateProcessDetailsParameters ProcessorName
         */

        /**
         * Constructs a new UpdateProcessDetailsParameters.
         * @memberof supplyChainPackage
         * @classdesc Represents an UpdateProcessDetailsParameters.
         * @implements IUpdateProcessDetailsParameters
         * @constructor
         * @param {supplyChainPackage.IUpdateProcessDetailsParameters=} [properties] Properties to set
         */
        function UpdateProcessDetailsParameters(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateProcessDetailsParameters setPrice.
         * @member {number} setPrice
         * @memberof supplyChainPackage.UpdateProcessDetailsParameters
         * @instance
         */
        UpdateProcessDetailsParameters.prototype.setPrice = 0;

        /**
         * UpdateProcessDetailsParameters ProcessorName.
         * @member {string} ProcessorName
         * @memberof supplyChainPackage.UpdateProcessDetailsParameters
         * @instance
         */
        UpdateProcessDetailsParameters.prototype.ProcessorName = "";

        /**
         * Creates a new UpdateProcessDetailsParameters instance using the specified properties.
         * @function create
         * @memberof supplyChainPackage.UpdateProcessDetailsParameters
         * @static
         * @param {supplyChainPackage.IUpdateProcessDetailsParameters=} [properties] Properties to set
         * @returns {supplyChainPackage.UpdateProcessDetailsParameters} UpdateProcessDetailsParameters instance
         */
        UpdateProcessDetailsParameters.create = function create(properties) {
            return new UpdateProcessDetailsParameters(properties);
        };

        /**
         * Encodes the specified UpdateProcessDetailsParameters message. Does not implicitly {@link supplyChainPackage.UpdateProcessDetailsParameters.verify|verify} messages.
         * @function encode
         * @memberof supplyChainPackage.UpdateProcessDetailsParameters
         * @static
         * @param {supplyChainPackage.IUpdateProcessDetailsParameters} message UpdateProcessDetailsParameters message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateProcessDetailsParameters.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.setPrice != null && message.hasOwnProperty("setPrice"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.setPrice);
            if (message.ProcessorName != null && message.hasOwnProperty("ProcessorName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.ProcessorName);
            return writer;
        };

        /**
         * Encodes the specified UpdateProcessDetailsParameters message, length delimited. Does not implicitly {@link supplyChainPackage.UpdateProcessDetailsParameters.verify|verify} messages.
         * @function encodeDelimited
         * @memberof supplyChainPackage.UpdateProcessDetailsParameters
         * @static
         * @param {supplyChainPackage.IUpdateProcessDetailsParameters} message UpdateProcessDetailsParameters message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateProcessDetailsParameters.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateProcessDetailsParameters message from the specified reader or buffer.
         * @function decode
         * @memberof supplyChainPackage.UpdateProcessDetailsParameters
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {supplyChainPackage.UpdateProcessDetailsParameters} UpdateProcessDetailsParameters
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateProcessDetailsParameters.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.supplyChainPackage.UpdateProcessDetailsParameters();
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
         * Decodes an UpdateProcessDetailsParameters message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof supplyChainPackage.UpdateProcessDetailsParameters
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {supplyChainPackage.UpdateProcessDetailsParameters} UpdateProcessDetailsParameters
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateProcessDetailsParameters.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateProcessDetailsParameters message.
         * @function verify
         * @memberof supplyChainPackage.UpdateProcessDetailsParameters
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateProcessDetailsParameters.verify = function verify(message) {
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
         * Creates an UpdateProcessDetailsParameters message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof supplyChainPackage.UpdateProcessDetailsParameters
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {supplyChainPackage.UpdateProcessDetailsParameters} UpdateProcessDetailsParameters
         */
        UpdateProcessDetailsParameters.fromObject = function fromObject(object) {
            if (object instanceof $root.supplyChainPackage.UpdateProcessDetailsParameters)
                return object;
            var message = new $root.supplyChainPackage.UpdateProcessDetailsParameters();
            if (object.setPrice != null)
                message.setPrice = object.setPrice | 0;
            if (object.ProcessorName != null)
                message.ProcessorName = String(object.ProcessorName);
            return message;
        };

        /**
         * Creates a plain object from an UpdateProcessDetailsParameters message. Also converts values to other types if specified.
         * @function toObject
         * @memberof supplyChainPackage.UpdateProcessDetailsParameters
         * @static
         * @param {supplyChainPackage.UpdateProcessDetailsParameters} message UpdateProcessDetailsParameters
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateProcessDetailsParameters.toObject = function toObject(message, options) {
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
         * Converts this UpdateProcessDetailsParameters to JSON.
         * @function toJSON
         * @memberof supplyChainPackage.UpdateProcessDetailsParameters
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateProcessDetailsParameters.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateProcessDetailsParameters;
    })();

    supplyChainPackage.LandRegistrationParams = (function() {

        /**
         * Properties of a LandRegistrationParams.
         * @memberof supplyChainPackage
         * @interface ILandRegistrationParams
         * @property {supplyChainPackage.ILandRegistrationParameters|null} [landregistrationparameters] LandRegistrationParams landregistrationparameters
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
         * LandRegistrationParams landregistrationparameters.
         * @member {supplyChainPackage.ILandRegistrationParameters|null|undefined} landregistrationparameters
         * @memberof supplyChainPackage.LandRegistrationParams
         * @instance
         */
        LandRegistrationParams.prototype.landregistrationparameters = null;

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
            if (message.landregistrationparameters != null && message.hasOwnProperty("landregistrationparameters"))
                $root.supplyChainPackage.LandRegistrationParameters.encode(message.landregistrationparameters, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.addressparameters != null && message.hasOwnProperty("addressparameters"))
                $root.supplyChainPackage.AddressParams.encode(message.addressparameters, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                    message.landregistrationparameters = $root.supplyChainPackage.LandRegistrationParameters.decode(reader, reader.uint32());
                    break;
                case 2:
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
            if (message.landregistrationparameters != null && message.hasOwnProperty("landregistrationparameters")) {
                var error = $root.supplyChainPackage.LandRegistrationParameters.verify(message.landregistrationparameters);
                if (error)
                    return "landregistrationparameters." + error;
            }
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
            if (object.landregistrationparameters != null) {
                if (typeof object.landregistrationparameters !== "object")
                    throw TypeError(".supplyChainPackage.LandRegistrationParams.landregistrationparameters: object expected");
                message.landregistrationparameters = $root.supplyChainPackage.LandRegistrationParameters.fromObject(object.landregistrationparameters);
            }
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
                object.landregistrationparameters = null;
                object.addressparameters = null;
            }
            if (message.landregistrationparameters != null && message.hasOwnProperty("landregistrationparameters"))
                object.landregistrationparameters = $root.supplyChainPackage.LandRegistrationParameters.toObject(message.landregistrationparameters, options);
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
         * @property {supplyChainPackage.IStartCultivationParameters|null} [startcultivationparameters] StartCultivationParams startcultivationparameters
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
         * StartCultivationParams startcultivationparameters.
         * @member {supplyChainPackage.IStartCultivationParameters|null|undefined} startcultivationparameters
         * @memberof supplyChainPackage.StartCultivationParams
         * @instance
         */
        StartCultivationParams.prototype.startcultivationparameters = null;

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
            if (message.startcultivationparameters != null && message.hasOwnProperty("startcultivationparameters"))
                $root.supplyChainPackage.StartCultivationParameters.encode(message.startcultivationparameters, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.addressparameters != null && message.hasOwnProperty("addressparameters"))
                $root.supplyChainPackage.AddressParams.encode(message.addressparameters, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                    message.startcultivationparameters = $root.supplyChainPackage.StartCultivationParameters.decode(reader, reader.uint32());
                    break;
                case 2:
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
            if (message.startcultivationparameters != null && message.hasOwnProperty("startcultivationparameters")) {
                var error = $root.supplyChainPackage.StartCultivationParameters.verify(message.startcultivationparameters);
                if (error)
                    return "startcultivationparameters." + error;
            }
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
            if (object.startcultivationparameters != null) {
                if (typeof object.startcultivationparameters !== "object")
                    throw TypeError(".supplyChainPackage.StartCultivationParams.startcultivationparameters: object expected");
                message.startcultivationparameters = $root.supplyChainPackage.StartCultivationParameters.fromObject(object.startcultivationparameters);
            }
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
                object.startcultivationparameters = null;
                object.addressparameters = null;
            }
            if (message.startcultivationparameters != null && message.hasOwnProperty("startcultivationparameters"))
                object.startcultivationparameters = $root.supplyChainPackage.StartCultivationParameters.toObject(message.startcultivationparameters, options);
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
         * @property {supplyChainPackage.IInspectParameters|null} [inspectparameters] InspectParams inspectparameters
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
         * InspectParams inspectparameters.
         * @member {supplyChainPackage.IInspectParameters|null|undefined} inspectparameters
         * @memberof supplyChainPackage.InspectParams
         * @instance
         */
        InspectParams.prototype.inspectparameters = null;

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
            if (message.inspectparameters != null && message.hasOwnProperty("inspectparameters"))
                $root.supplyChainPackage.InspectParameters.encode(message.inspectparameters, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.addressparameters != null && message.hasOwnProperty("addressparameters"))
                $root.supplyChainPackage.AddressParams.encode(message.addressparameters, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                    message.inspectparameters = $root.supplyChainPackage.InspectParameters.decode(reader, reader.uint32());
                    break;
                case 2:
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
            if (message.inspectparameters != null && message.hasOwnProperty("inspectparameters")) {
                var error = $root.supplyChainPackage.InspectParameters.verify(message.inspectparameters);
                if (error)
                    return "inspectparameters." + error;
            }
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
            if (object.inspectparameters != null) {
                if (typeof object.inspectparameters !== "object")
                    throw TypeError(".supplyChainPackage.InspectParams.inspectparameters: object expected");
                message.inspectparameters = $root.supplyChainPackage.InspectParameters.fromObject(object.inspectparameters);
            }
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
                object.inspectparameters = null;
                object.addressparameters = null;
            }
            if (message.inspectparameters != null && message.hasOwnProperty("inspectparameters"))
                object.inspectparameters = $root.supplyChainPackage.InspectParameters.toObject(message.inspectparameters, options);
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
         * @property {supplyChainPackage.IPerformHarvestParameters|null} [performharvestparameters] PerformHarvestParams performharvestparameters
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
         * PerformHarvestParams performharvestparameters.
         * @member {supplyChainPackage.IPerformHarvestParameters|null|undefined} performharvestparameters
         * @memberof supplyChainPackage.PerformHarvestParams
         * @instance
         */
        PerformHarvestParams.prototype.performharvestparameters = null;

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
            if (message.performharvestparameters != null && message.hasOwnProperty("performharvestparameters"))
                $root.supplyChainPackage.PerformHarvestParameters.encode(message.performharvestparameters, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.addressparameters != null && message.hasOwnProperty("addressparameters"))
                $root.supplyChainPackage.AddressParams.encode(message.addressparameters, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                    message.performharvestparameters = $root.supplyChainPackage.PerformHarvestParameters.decode(reader, reader.uint32());
                    break;
                case 2:
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
            if (message.performharvestparameters != null && message.hasOwnProperty("performharvestparameters")) {
                var error = $root.supplyChainPackage.PerformHarvestParameters.verify(message.performharvestparameters);
                if (error)
                    return "performharvestparameters." + error;
            }
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
            if (object.performharvestparameters != null) {
                if (typeof object.performharvestparameters !== "object")
                    throw TypeError(".supplyChainPackage.PerformHarvestParams.performharvestparameters: object expected");
                message.performharvestparameters = $root.supplyChainPackage.PerformHarvestParameters.fromObject(object.performharvestparameters);
            }
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
                object.performharvestparameters = null;
                object.addressparameters = null;
            }
            if (message.performharvestparameters != null && message.hasOwnProperty("performharvestparameters"))
                object.performharvestparameters = $root.supplyChainPackage.PerformHarvestParameters.toObject(message.performharvestparameters, options);
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

    supplyChainPackage.CreatePackageParams = (function() {

        /**
         * Properties of a CreatePackageParams.
         * @memberof supplyChainPackage
         * @interface ICreatePackageParams
         * @property {supplyChainPackage.ICreatePackageParameters|null} [createpackageparameters] CreatePackageParams createpackageparameters
         */

        /**
         * Constructs a new CreatePackageParams.
         * @memberof supplyChainPackage
         * @classdesc Represents a CreatePackageParams.
         * @implements ICreatePackageParams
         * @constructor
         * @param {supplyChainPackage.ICreatePackageParams=} [properties] Properties to set
         */
        function CreatePackageParams(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreatePackageParams createpackageparameters.
         * @member {supplyChainPackage.ICreatePackageParameters|null|undefined} createpackageparameters
         * @memberof supplyChainPackage.CreatePackageParams
         * @instance
         */
        CreatePackageParams.prototype.createpackageparameters = null;

        /**
         * Creates a new CreatePackageParams instance using the specified properties.
         * @function create
         * @memberof supplyChainPackage.CreatePackageParams
         * @static
         * @param {supplyChainPackage.ICreatePackageParams=} [properties] Properties to set
         * @returns {supplyChainPackage.CreatePackageParams} CreatePackageParams instance
         */
        CreatePackageParams.create = function create(properties) {
            return new CreatePackageParams(properties);
        };

        /**
         * Encodes the specified CreatePackageParams message. Does not implicitly {@link supplyChainPackage.CreatePackageParams.verify|verify} messages.
         * @function encode
         * @memberof supplyChainPackage.CreatePackageParams
         * @static
         * @param {supplyChainPackage.ICreatePackageParams} message CreatePackageParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreatePackageParams.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.createpackageparameters != null && message.hasOwnProperty("createpackageparameters"))
                $root.supplyChainPackage.CreatePackageParameters.encode(message.createpackageparameters, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CreatePackageParams message, length delimited. Does not implicitly {@link supplyChainPackage.CreatePackageParams.verify|verify} messages.
         * @function encodeDelimited
         * @memberof supplyChainPackage.CreatePackageParams
         * @static
         * @param {supplyChainPackage.ICreatePackageParams} message CreatePackageParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreatePackageParams.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreatePackageParams message from the specified reader or buffer.
         * @function decode
         * @memberof supplyChainPackage.CreatePackageParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {supplyChainPackage.CreatePackageParams} CreatePackageParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreatePackageParams.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.supplyChainPackage.CreatePackageParams();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.createpackageparameters = $root.supplyChainPackage.CreatePackageParameters.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreatePackageParams message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof supplyChainPackage.CreatePackageParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {supplyChainPackage.CreatePackageParams} CreatePackageParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreatePackageParams.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreatePackageParams message.
         * @function verify
         * @memberof supplyChainPackage.CreatePackageParams
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreatePackageParams.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.createpackageparameters != null && message.hasOwnProperty("createpackageparameters")) {
                var error = $root.supplyChainPackage.CreatePackageParameters.verify(message.createpackageparameters);
                if (error)
                    return "createpackageparameters." + error;
            }
            return null;
        };

        /**
         * Creates a CreatePackageParams message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof supplyChainPackage.CreatePackageParams
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {supplyChainPackage.CreatePackageParams} CreatePackageParams
         */
        CreatePackageParams.fromObject = function fromObject(object) {
            if (object instanceof $root.supplyChainPackage.CreatePackageParams)
                return object;
            var message = new $root.supplyChainPackage.CreatePackageParams();
            if (object.createpackageparameters != null) {
                if (typeof object.createpackageparameters !== "object")
                    throw TypeError(".supplyChainPackage.CreatePackageParams.createpackageparameters: object expected");
                message.createpackageparameters = $root.supplyChainPackage.CreatePackageParameters.fromObject(object.createpackageparameters);
            }
            return message;
        };

        /**
         * Creates a plain object from a CreatePackageParams message. Also converts values to other types if specified.
         * @function toObject
         * @memberof supplyChainPackage.CreatePackageParams
         * @static
         * @param {supplyChainPackage.CreatePackageParams} message CreatePackageParams
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreatePackageParams.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.createpackageparameters = null;
            if (message.createpackageparameters != null && message.hasOwnProperty("createpackageparameters"))
                object.createpackageparameters = $root.supplyChainPackage.CreatePackageParameters.toObject(message.createpackageparameters, options);
            return object;
        };

        /**
         * Converts this CreatePackageParams to JSON.
         * @function toJSON
         * @memberof supplyChainPackage.CreatePackageParams
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreatePackageParams.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreatePackageParams;
    })();

    supplyChainPackage.UpdateProcessDetailsParams = (function() {

        /**
         * Properties of an UpdateProcessDetailsParams.
         * @memberof supplyChainPackage
         * @interface IUpdateProcessDetailsParams
         * @property {supplyChainPackage.IUpdateProcessDetailsParameters|null} [updateprocessdetailsparameters] UpdateProcessDetailsParams updateprocessdetailsparameters
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
         * UpdateProcessDetailsParams updateprocessdetailsparameters.
         * @member {supplyChainPackage.IUpdateProcessDetailsParameters|null|undefined} updateprocessdetailsparameters
         * @memberof supplyChainPackage.UpdateProcessDetailsParams
         * @instance
         */
        UpdateProcessDetailsParams.prototype.updateprocessdetailsparameters = null;

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
            if (message.updateprocessdetailsparameters != null && message.hasOwnProperty("updateprocessdetailsparameters"))
                $root.supplyChainPackage.UpdateProcessDetailsParameters.encode(message.updateprocessdetailsparameters, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                    message.updateprocessdetailsparameters = $root.supplyChainPackage.UpdateProcessDetailsParameters.decode(reader, reader.uint32());
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
            if (message.updateprocessdetailsparameters != null && message.hasOwnProperty("updateprocessdetailsparameters")) {
                var error = $root.supplyChainPackage.UpdateProcessDetailsParameters.verify(message.updateprocessdetailsparameters);
                if (error)
                    return "updateprocessdetailsparameters." + error;
            }
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
            if (object.updateprocessdetailsparameters != null) {
                if (typeof object.updateprocessdetailsparameters !== "object")
                    throw TypeError(".supplyChainPackage.UpdateProcessDetailsParams.updateprocessdetailsparameters: object expected");
                message.updateprocessdetailsparameters = $root.supplyChainPackage.UpdateProcessDetailsParameters.fromObject(object.updateprocessdetailsparameters);
            }
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
            if (options.defaults)
                object.updateprocessdetailsparameters = null;
            if (message.updateprocessdetailsparameters != null && message.hasOwnProperty("updateprocessdetailsparameters"))
                object.updateprocessdetailsparameters = $root.supplyChainPackage.UpdateProcessDetailsParameters.toObject(message.updateprocessdetailsparameters, options);
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

    supplyChainPackage.TransferPackageParams = (function() {

        /**
         * Properties of a TransferPackageParams.
         * @memberof supplyChainPackage
         * @interface ITransferPackageParams
         * @property {supplyChainPackage.ITransferPackageParameters|null} [transferpackageparameters] TransferPackageParams transferpackageparameters
         */

        /**
         * Constructs a new TransferPackageParams.
         * @memberof supplyChainPackage
         * @classdesc Represents a TransferPackageParams.
         * @implements ITransferPackageParams
         * @constructor
         * @param {supplyChainPackage.ITransferPackageParams=} [properties] Properties to set
         */
        function TransferPackageParams(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TransferPackageParams transferpackageparameters.
         * @member {supplyChainPackage.ITransferPackageParameters|null|undefined} transferpackageparameters
         * @memberof supplyChainPackage.TransferPackageParams
         * @instance
         */
        TransferPackageParams.prototype.transferpackageparameters = null;

        /**
         * Creates a new TransferPackageParams instance using the specified properties.
         * @function create
         * @memberof supplyChainPackage.TransferPackageParams
         * @static
         * @param {supplyChainPackage.ITransferPackageParams=} [properties] Properties to set
         * @returns {supplyChainPackage.TransferPackageParams} TransferPackageParams instance
         */
        TransferPackageParams.create = function create(properties) {
            return new TransferPackageParams(properties);
        };

        /**
         * Encodes the specified TransferPackageParams message. Does not implicitly {@link supplyChainPackage.TransferPackageParams.verify|verify} messages.
         * @function encode
         * @memberof supplyChainPackage.TransferPackageParams
         * @static
         * @param {supplyChainPackage.ITransferPackageParams} message TransferPackageParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TransferPackageParams.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.transferpackageparameters != null && message.hasOwnProperty("transferpackageparameters"))
                $root.supplyChainPackage.TransferPackageParameters.encode(message.transferpackageparameters, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TransferPackageParams message, length delimited. Does not implicitly {@link supplyChainPackage.TransferPackageParams.verify|verify} messages.
         * @function encodeDelimited
         * @memberof supplyChainPackage.TransferPackageParams
         * @static
         * @param {supplyChainPackage.ITransferPackageParams} message TransferPackageParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TransferPackageParams.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TransferPackageParams message from the specified reader or buffer.
         * @function decode
         * @memberof supplyChainPackage.TransferPackageParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {supplyChainPackage.TransferPackageParams} TransferPackageParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TransferPackageParams.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.supplyChainPackage.TransferPackageParams();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.transferpackageparameters = $root.supplyChainPackage.TransferPackageParameters.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TransferPackageParams message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof supplyChainPackage.TransferPackageParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {supplyChainPackage.TransferPackageParams} TransferPackageParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TransferPackageParams.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TransferPackageParams message.
         * @function verify
         * @memberof supplyChainPackage.TransferPackageParams
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TransferPackageParams.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.transferpackageparameters != null && message.hasOwnProperty("transferpackageparameters")) {
                var error = $root.supplyChainPackage.TransferPackageParameters.verify(message.transferpackageparameters);
                if (error)
                    return "transferpackageparameters." + error;
            }
            return null;
        };

        /**
         * Creates a TransferPackageParams message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof supplyChainPackage.TransferPackageParams
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {supplyChainPackage.TransferPackageParams} TransferPackageParams
         */
        TransferPackageParams.fromObject = function fromObject(object) {
            if (object instanceof $root.supplyChainPackage.TransferPackageParams)
                return object;
            var message = new $root.supplyChainPackage.TransferPackageParams();
            if (object.transferpackageparameters != null) {
                if (typeof object.transferpackageparameters !== "object")
                    throw TypeError(".supplyChainPackage.TransferPackageParams.transferpackageparameters: object expected");
                message.transferpackageparameters = $root.supplyChainPackage.TransferPackageParameters.fromObject(object.transferpackageparameters);
            }
            return message;
        };

        /**
         * Creates a plain object from a TransferPackageParams message. Also converts values to other types if specified.
         * @function toObject
         * @memberof supplyChainPackage.TransferPackageParams
         * @static
         * @param {supplyChainPackage.TransferPackageParams} message TransferPackageParams
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TransferPackageParams.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.transferpackageparameters = null;
            if (message.transferpackageparameters != null && message.hasOwnProperty("transferpackageparameters"))
                object.transferpackageparameters = $root.supplyChainPackage.TransferPackageParameters.toObject(message.transferpackageparameters, options);
            return object;
        };

        /**
         * Converts this TransferPackageParams to JSON.
         * @function toJSON
         * @memberof supplyChainPackage.TransferPackageParams
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TransferPackageParams.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TransferPackageParams;
    })();

    return supplyChainPackage;
})();

module.exports = $root;
