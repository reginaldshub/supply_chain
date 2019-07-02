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
         * @property {supplyChainPackage.IUpdatePackageParams|null} [updateProcessDetails] PayLoad updateProcessDetails
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
         * @member {supplyChainPackage.IUpdatePackageParams|null|undefined} updateProcessDetails
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
                $root.supplyChainPackage.UpdatePackageParams.encode(message.updateProcessDetails, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
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
                    message.updateProcessDetails = $root.supplyChainPackage.UpdatePackageParams.decode(reader, reader.uint32());
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
                var error = $root.supplyChainPackage.UpdatePackageParams.verify(message.updateProcessDetails);
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
                message.updateProcessDetails = $root.supplyChainPackage.UpdatePackageParams.fromObject(object.updateProcessDetails);
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
                object.updateProcessDetails = $root.supplyChainPackage.UpdatePackageParams.toObject(message.updateProcessDetails, options);
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

    supplyChainPackage.Land = (function() {

        /**
         * Properties of a Land.
         * @memberof supplyChainPackage
         * @interface ILand
         * @property {string|null} [FarmerName] Land FarmerName
         * @property {string|null} [FarmAddress] Land FarmAddress
         * @property {string|null} [State] Land State
         * @property {string|null} [panchayat] Land panchayat
         * @property {string|null} [landSurveyNumber] Land landSurveyNumber
         * @property {string|null} [ownerName] Land ownerName
         * @property {number|null} [landID] Land landID
         * @property {string|null} [RegistrationNo] Land RegistrationNo
         */

        /**
         * Constructs a new Land.
         * @memberof supplyChainPackage
         * @classdesc Represents a Land.
         * @implements ILand
         * @constructor
         * @param {supplyChainPackage.ILand=} [properties] Properties to set
         */
        function Land(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Land FarmerName.
         * @member {string} FarmerName
         * @memberof supplyChainPackage.Land
         * @instance
         */
        Land.prototype.FarmerName = "";

        /**
         * Land FarmAddress.
         * @member {string} FarmAddress
         * @memberof supplyChainPackage.Land
         * @instance
         */
        Land.prototype.FarmAddress = "";

        /**
         * Land State.
         * @member {string} State
         * @memberof supplyChainPackage.Land
         * @instance
         */
        Land.prototype.State = "";

        /**
         * Land panchayat.
         * @member {string} panchayat
         * @memberof supplyChainPackage.Land
         * @instance
         */
        Land.prototype.panchayat = "";

        /**
         * Land landSurveyNumber.
         * @member {string} landSurveyNumber
         * @memberof supplyChainPackage.Land
         * @instance
         */
        Land.prototype.landSurveyNumber = "";

        /**
         * Land ownerName.
         * @member {string} ownerName
         * @memberof supplyChainPackage.Land
         * @instance
         */
        Land.prototype.ownerName = "";

        /**
         * Land landID.
         * @member {number} landID
         * @memberof supplyChainPackage.Land
         * @instance
         */
        Land.prototype.landID = 0;

        /**
         * Land RegistrationNo.
         * @member {string} RegistrationNo
         * @memberof supplyChainPackage.Land
         * @instance
         */
        Land.prototype.RegistrationNo = "";

        /**
         * Creates a new Land instance using the specified properties.
         * @function create
         * @memberof supplyChainPackage.Land
         * @static
         * @param {supplyChainPackage.ILand=} [properties] Properties to set
         * @returns {supplyChainPackage.Land} Land instance
         */
        Land.create = function create(properties) {
            return new Land(properties);
        };

        /**
         * Encodes the specified Land message. Does not implicitly {@link supplyChainPackage.Land.verify|verify} messages.
         * @function encode
         * @memberof supplyChainPackage.Land
         * @static
         * @param {supplyChainPackage.ILand} message Land message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Land.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.FarmerName != null && message.hasOwnProperty("FarmerName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.FarmerName);
            if (message.FarmAddress != null && message.hasOwnProperty("FarmAddress"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.FarmAddress);
            if (message.State != null && message.hasOwnProperty("State"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.State);
            if (message.panchayat != null && message.hasOwnProperty("panchayat"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.panchayat);
            if (message.landSurveyNumber != null && message.hasOwnProperty("landSurveyNumber"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.landSurveyNumber);
            if (message.ownerName != null && message.hasOwnProperty("ownerName"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.ownerName);
            if (message.landID != null && message.hasOwnProperty("landID"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.landID);
            if (message.RegistrationNo != null && message.hasOwnProperty("RegistrationNo"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.RegistrationNo);
            return writer;
        };

        /**
         * Encodes the specified Land message, length delimited. Does not implicitly {@link supplyChainPackage.Land.verify|verify} messages.
         * @function encodeDelimited
         * @memberof supplyChainPackage.Land
         * @static
         * @param {supplyChainPackage.ILand} message Land message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Land.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Land message from the specified reader or buffer.
         * @function decode
         * @memberof supplyChainPackage.Land
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {supplyChainPackage.Land} Land
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Land.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.supplyChainPackage.Land();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.FarmerName = reader.string();
                    break;
                case 2:
                    message.FarmAddress = reader.string();
                    break;
                case 3:
                    message.State = reader.string();
                    break;
                case 4:
                    message.panchayat = reader.string();
                    break;
                case 5:
                    message.landSurveyNumber = reader.string();
                    break;
                case 6:
                    message.ownerName = reader.string();
                    break;
                case 7:
                    message.landID = reader.int32();
                    break;
                case 8:
                    message.RegistrationNo = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Land message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof supplyChainPackage.Land
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {supplyChainPackage.Land} Land
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Land.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Land message.
         * @function verify
         * @memberof supplyChainPackage.Land
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Land.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.FarmerName != null && message.hasOwnProperty("FarmerName"))
                if (!$util.isString(message.FarmerName))
                    return "FarmerName: string expected";
            if (message.FarmAddress != null && message.hasOwnProperty("FarmAddress"))
                if (!$util.isString(message.FarmAddress))
                    return "FarmAddress: string expected";
            if (message.State != null && message.hasOwnProperty("State"))
                if (!$util.isString(message.State))
                    return "State: string expected";
            if (message.panchayat != null && message.hasOwnProperty("panchayat"))
                if (!$util.isString(message.panchayat))
                    return "panchayat: string expected";
            if (message.landSurveyNumber != null && message.hasOwnProperty("landSurveyNumber"))
                if (!$util.isString(message.landSurveyNumber))
                    return "landSurveyNumber: string expected";
            if (message.ownerName != null && message.hasOwnProperty("ownerName"))
                if (!$util.isString(message.ownerName))
                    return "ownerName: string expected";
            if (message.landID != null && message.hasOwnProperty("landID"))
                if (!$util.isInteger(message.landID))
                    return "landID: integer expected";
            if (message.RegistrationNo != null && message.hasOwnProperty("RegistrationNo"))
                if (!$util.isString(message.RegistrationNo))
                    return "RegistrationNo: string expected";
            return null;
        };

        /**
         * Creates a Land message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof supplyChainPackage.Land
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {supplyChainPackage.Land} Land
         */
        Land.fromObject = function fromObject(object) {
            if (object instanceof $root.supplyChainPackage.Land)
                return object;
            var message = new $root.supplyChainPackage.Land();
            if (object.FarmerName != null)
                message.FarmerName = String(object.FarmerName);
            if (object.FarmAddress != null)
                message.FarmAddress = String(object.FarmAddress);
            if (object.State != null)
                message.State = String(object.State);
            if (object.panchayat != null)
                message.panchayat = String(object.panchayat);
            if (object.landSurveyNumber != null)
                message.landSurveyNumber = String(object.landSurveyNumber);
            if (object.ownerName != null)
                message.ownerName = String(object.ownerName);
            if (object.landID != null)
                message.landID = object.landID | 0;
            if (object.RegistrationNo != null)
                message.RegistrationNo = String(object.RegistrationNo);
            return message;
        };

        /**
         * Creates a plain object from a Land message. Also converts values to other types if specified.
         * @function toObject
         * @memberof supplyChainPackage.Land
         * @static
         * @param {supplyChainPackage.Land} message Land
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Land.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.FarmerName = "";
                object.FarmAddress = "";
                object.State = "";
                object.panchayat = "";
                object.landSurveyNumber = "";
                object.ownerName = "";
                object.landID = 0;
                object.RegistrationNo = "";
            }
            if (message.FarmerName != null && message.hasOwnProperty("FarmerName"))
                object.FarmerName = message.FarmerName;
            if (message.FarmAddress != null && message.hasOwnProperty("FarmAddress"))
                object.FarmAddress = message.FarmAddress;
            if (message.State != null && message.hasOwnProperty("State"))
                object.State = message.State;
            if (message.panchayat != null && message.hasOwnProperty("panchayat"))
                object.panchayat = message.panchayat;
            if (message.landSurveyNumber != null && message.hasOwnProperty("landSurveyNumber"))
                object.landSurveyNumber = message.landSurveyNumber;
            if (message.ownerName != null && message.hasOwnProperty("ownerName"))
                object.ownerName = message.ownerName;
            if (message.landID != null && message.hasOwnProperty("landID"))
                object.landID = message.landID;
            if (message.RegistrationNo != null && message.hasOwnProperty("RegistrationNo"))
                object.RegistrationNo = message.RegistrationNo;
            return object;
        };

        /**
         * Converts this Land to JSON.
         * @function toJSON
         * @memberof supplyChainPackage.Land
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Land.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Land;
    })();

    supplyChainPackage.LandRegistration = (function() {

        /**
         * Properties of a LandRegistration.
         * @memberof supplyChainPackage
         * @interface ILandRegistration
         * @property {string|null} [FarmAddress] LandRegistration FarmAddress
         * @property {string|null} [State] LandRegistration State
         * @property {string|null} [Country] LandRegistration Country
         * @property {string|null} [ExporterName] LandRegistration ExporterName
         * @property {string|null} [ImporterName] LandRegistration ImporterName
         * @property {string|null} [DateofRegistration] LandRegistration DateofRegistration
         */

        /**
         * Constructs a new LandRegistration.
         * @memberof supplyChainPackage
         * @classdesc Represents a LandRegistration.
         * @implements ILandRegistration
         * @constructor
         * @param {supplyChainPackage.ILandRegistration=} [properties] Properties to set
         */
        function LandRegistration(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LandRegistration FarmAddress.
         * @member {string} FarmAddress
         * @memberof supplyChainPackage.LandRegistration
         * @instance
         */
        LandRegistration.prototype.FarmAddress = "";

        /**
         * LandRegistration State.
         * @member {string} State
         * @memberof supplyChainPackage.LandRegistration
         * @instance
         */
        LandRegistration.prototype.State = "";

        /**
         * LandRegistration Country.
         * @member {string} Country
         * @memberof supplyChainPackage.LandRegistration
         * @instance
         */
        LandRegistration.prototype.Country = "";

        /**
         * LandRegistration ExporterName.
         * @member {string} ExporterName
         * @memberof supplyChainPackage.LandRegistration
         * @instance
         */
        LandRegistration.prototype.ExporterName = "";

        /**
         * LandRegistration ImporterName.
         * @member {string} ImporterName
         * @memberof supplyChainPackage.LandRegistration
         * @instance
         */
        LandRegistration.prototype.ImporterName = "";

        /**
         * LandRegistration DateofRegistration.
         * @member {string} DateofRegistration
         * @memberof supplyChainPackage.LandRegistration
         * @instance
         */
        LandRegistration.prototype.DateofRegistration = "";

        /**
         * Creates a new LandRegistration instance using the specified properties.
         * @function create
         * @memberof supplyChainPackage.LandRegistration
         * @static
         * @param {supplyChainPackage.ILandRegistration=} [properties] Properties to set
         * @returns {supplyChainPackage.LandRegistration} LandRegistration instance
         */
        LandRegistration.create = function create(properties) {
            return new LandRegistration(properties);
        };

        /**
         * Encodes the specified LandRegistration message. Does not implicitly {@link supplyChainPackage.LandRegistration.verify|verify} messages.
         * @function encode
         * @memberof supplyChainPackage.LandRegistration
         * @static
         * @param {supplyChainPackage.ILandRegistration} message LandRegistration message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LandRegistration.encode = function encode(message, writer) {
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
         * Encodes the specified LandRegistration message, length delimited. Does not implicitly {@link supplyChainPackage.LandRegistration.verify|verify} messages.
         * @function encodeDelimited
         * @memberof supplyChainPackage.LandRegistration
         * @static
         * @param {supplyChainPackage.ILandRegistration} message LandRegistration message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LandRegistration.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LandRegistration message from the specified reader or buffer.
         * @function decode
         * @memberof supplyChainPackage.LandRegistration
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {supplyChainPackage.LandRegistration} LandRegistration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LandRegistration.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.supplyChainPackage.LandRegistration();
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
         * Decodes a LandRegistration message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof supplyChainPackage.LandRegistration
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {supplyChainPackage.LandRegistration} LandRegistration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LandRegistration.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LandRegistration message.
         * @function verify
         * @memberof supplyChainPackage.LandRegistration
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LandRegistration.verify = function verify(message) {
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
         * Creates a LandRegistration message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof supplyChainPackage.LandRegistration
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {supplyChainPackage.LandRegistration} LandRegistration
         */
        LandRegistration.fromObject = function fromObject(object) {
            if (object instanceof $root.supplyChainPackage.LandRegistration)
                return object;
            var message = new $root.supplyChainPackage.LandRegistration();
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
         * Creates a plain object from a LandRegistration message. Also converts values to other types if specified.
         * @function toObject
         * @memberof supplyChainPackage.LandRegistration
         * @static
         * @param {supplyChainPackage.LandRegistration} message LandRegistration
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LandRegistration.toObject = function toObject(message, options) {
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
         * Converts this LandRegistration to JSON.
         * @function toJSON
         * @memberof supplyChainPackage.LandRegistration
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LandRegistration.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LandRegistration;
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

    supplyChainPackage.CultivationData = (function() {

        /**
         * Properties of a CultivationData.
         * @memberof supplyChainPackage
         * @interface ICultivationData
         * @property {string|null} [CropName] CultivationData CropName
         * @property {string|null} [CropSeason] CultivationData CropSeason
         * @property {string|null} [Dateofstart] CultivationData Dateofstart
         */

        /**
         * Constructs a new CultivationData.
         * @memberof supplyChainPackage
         * @classdesc Represents a CultivationData.
         * @implements ICultivationData
         * @constructor
         * @param {supplyChainPackage.ICultivationData=} [properties] Properties to set
         */
        function CultivationData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CultivationData CropName.
         * @member {string} CropName
         * @memberof supplyChainPackage.CultivationData
         * @instance
         */
        CultivationData.prototype.CropName = "";

        /**
         * CultivationData CropSeason.
         * @member {string} CropSeason
         * @memberof supplyChainPackage.CultivationData
         * @instance
         */
        CultivationData.prototype.CropSeason = "";

        /**
         * CultivationData Dateofstart.
         * @member {string} Dateofstart
         * @memberof supplyChainPackage.CultivationData
         * @instance
         */
        CultivationData.prototype.Dateofstart = "";

        /**
         * Creates a new CultivationData instance using the specified properties.
         * @function create
         * @memberof supplyChainPackage.CultivationData
         * @static
         * @param {supplyChainPackage.ICultivationData=} [properties] Properties to set
         * @returns {supplyChainPackage.CultivationData} CultivationData instance
         */
        CultivationData.create = function create(properties) {
            return new CultivationData(properties);
        };

        /**
         * Encodes the specified CultivationData message. Does not implicitly {@link supplyChainPackage.CultivationData.verify|verify} messages.
         * @function encode
         * @memberof supplyChainPackage.CultivationData
         * @static
         * @param {supplyChainPackage.ICultivationData} message CultivationData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CultivationData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.CropName != null && message.hasOwnProperty("CropName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.CropName);
            if (message.CropSeason != null && message.hasOwnProperty("CropSeason"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.CropSeason);
            if (message.Dateofstart != null && message.hasOwnProperty("Dateofstart"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Dateofstart);
            return writer;
        };

        /**
         * Encodes the specified CultivationData message, length delimited. Does not implicitly {@link supplyChainPackage.CultivationData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof supplyChainPackage.CultivationData
         * @static
         * @param {supplyChainPackage.ICultivationData} message CultivationData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CultivationData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CultivationData message from the specified reader or buffer.
         * @function decode
         * @memberof supplyChainPackage.CultivationData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {supplyChainPackage.CultivationData} CultivationData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CultivationData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.supplyChainPackage.CultivationData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.CropName = reader.string();
                    break;
                case 2:
                    message.CropSeason = reader.string();
                    break;
                case 3:
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
         * Decodes a CultivationData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof supplyChainPackage.CultivationData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {supplyChainPackage.CultivationData} CultivationData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CultivationData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CultivationData message.
         * @function verify
         * @memberof supplyChainPackage.CultivationData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CultivationData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.CropName != null && message.hasOwnProperty("CropName"))
                if (!$util.isString(message.CropName))
                    return "CropName: string expected";
            if (message.CropSeason != null && message.hasOwnProperty("CropSeason"))
                if (!$util.isString(message.CropSeason))
                    return "CropSeason: string expected";
            if (message.Dateofstart != null && message.hasOwnProperty("Dateofstart"))
                if (!$util.isString(message.Dateofstart))
                    return "Dateofstart: string expected";
            return null;
        };

        /**
         * Creates a CultivationData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof supplyChainPackage.CultivationData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {supplyChainPackage.CultivationData} CultivationData
         */
        CultivationData.fromObject = function fromObject(object) {
            if (object instanceof $root.supplyChainPackage.CultivationData)
                return object;
            var message = new $root.supplyChainPackage.CultivationData();
            if (object.CropName != null)
                message.CropName = String(object.CropName);
            if (object.CropSeason != null)
                message.CropSeason = String(object.CropSeason);
            if (object.Dateofstart != null)
                message.Dateofstart = String(object.Dateofstart);
            return message;
        };

        /**
         * Creates a plain object from a CultivationData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof supplyChainPackage.CultivationData
         * @static
         * @param {supplyChainPackage.CultivationData} message CultivationData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CultivationData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.CropName = "";
                object.CropSeason = "";
                object.Dateofstart = "";
            }
            if (message.CropName != null && message.hasOwnProperty("CropName"))
                object.CropName = message.CropName;
            if (message.CropSeason != null && message.hasOwnProperty("CropSeason"))
                object.CropSeason = message.CropSeason;
            if (message.Dateofstart != null && message.hasOwnProperty("Dateofstart"))
                object.Dateofstart = message.Dateofstart;
            return object;
        };

        /**
         * Converts this CultivationData to JSON.
         * @function toJSON
         * @memberof supplyChainPackage.CultivationData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CultivationData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CultivationData;
    })();

    supplyChainPackage.InspectionData = (function() {

        /**
         * Properties of an InspectionData.
         * @memberof supplyChainPackage
         * @interface IInspectionData
         * @property {string|null} [InspectionReport] InspectionData InspectionReport
         * @property {string|null} [InspectionDate] InspectionData InspectionDate
         * @property {string|null} [InspectorName] InspectionData InspectorName
         * @property {string|null} [FarmersPublicKey] InspectionData FarmersPublicKey
         * @property {string|null} [CropVariety] InspectionData CropVariety
         * @property {string|null} [CropSeason] InspectionData CropSeason
         * @property {string|null} [CropName] InspectionData CropName
         * @property {string|null} [Temperature] InspectionData Temperature
         * @property {string|null} [TemerpatureUnit] InspectionData TemerpatureUnit
         * @property {string|null} [Humidity] InspectionData Humidity
         * @property {string|null} [HumidityUnit] InspectionData HumidityUnit
         */

        /**
         * Constructs a new InspectionData.
         * @memberof supplyChainPackage
         * @classdesc Represents an InspectionData.
         * @implements IInspectionData
         * @constructor
         * @param {supplyChainPackage.IInspectionData=} [properties] Properties to set
         */
        function InspectionData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InspectionData InspectionReport.
         * @member {string} InspectionReport
         * @memberof supplyChainPackage.InspectionData
         * @instance
         */
        InspectionData.prototype.InspectionReport = "";

        /**
         * InspectionData InspectionDate.
         * @member {string} InspectionDate
         * @memberof supplyChainPackage.InspectionData
         * @instance
         */
        InspectionData.prototype.InspectionDate = "";

        /**
         * InspectionData InspectorName.
         * @member {string} InspectorName
         * @memberof supplyChainPackage.InspectionData
         * @instance
         */
        InspectionData.prototype.InspectorName = "";

        /**
         * InspectionData FarmersPublicKey.
         * @member {string} FarmersPublicKey
         * @memberof supplyChainPackage.InspectionData
         * @instance
         */
        InspectionData.prototype.FarmersPublicKey = "";

        /**
         * InspectionData CropVariety.
         * @member {string} CropVariety
         * @memberof supplyChainPackage.InspectionData
         * @instance
         */
        InspectionData.prototype.CropVariety = "";

        /**
         * InspectionData CropSeason.
         * @member {string} CropSeason
         * @memberof supplyChainPackage.InspectionData
         * @instance
         */
        InspectionData.prototype.CropSeason = "";

        /**
         * InspectionData CropName.
         * @member {string} CropName
         * @memberof supplyChainPackage.InspectionData
         * @instance
         */
        InspectionData.prototype.CropName = "";

        /**
         * InspectionData Temperature.
         * @member {string} Temperature
         * @memberof supplyChainPackage.InspectionData
         * @instance
         */
        InspectionData.prototype.Temperature = "";

        /**
         * InspectionData TemerpatureUnit.
         * @member {string} TemerpatureUnit
         * @memberof supplyChainPackage.InspectionData
         * @instance
         */
        InspectionData.prototype.TemerpatureUnit = "";

        /**
         * InspectionData Humidity.
         * @member {string} Humidity
         * @memberof supplyChainPackage.InspectionData
         * @instance
         */
        InspectionData.prototype.Humidity = "";

        /**
         * InspectionData HumidityUnit.
         * @member {string} HumidityUnit
         * @memberof supplyChainPackage.InspectionData
         * @instance
         */
        InspectionData.prototype.HumidityUnit = "";

        /**
         * Creates a new InspectionData instance using the specified properties.
         * @function create
         * @memberof supplyChainPackage.InspectionData
         * @static
         * @param {supplyChainPackage.IInspectionData=} [properties] Properties to set
         * @returns {supplyChainPackage.InspectionData} InspectionData instance
         */
        InspectionData.create = function create(properties) {
            return new InspectionData(properties);
        };

        /**
         * Encodes the specified InspectionData message. Does not implicitly {@link supplyChainPackage.InspectionData.verify|verify} messages.
         * @function encode
         * @memberof supplyChainPackage.InspectionData
         * @static
         * @param {supplyChainPackage.IInspectionData} message InspectionData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InspectionData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.InspectionReport != null && message.hasOwnProperty("InspectionReport"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.InspectionReport);
            if (message.InspectionDate != null && message.hasOwnProperty("InspectionDate"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.InspectionDate);
            if (message.InspectorName != null && message.hasOwnProperty("InspectorName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.InspectorName);
            if (message.FarmersPublicKey != null && message.hasOwnProperty("FarmersPublicKey"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.FarmersPublicKey);
            if (message.CropVariety != null && message.hasOwnProperty("CropVariety"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.CropVariety);
            if (message.CropSeason != null && message.hasOwnProperty("CropSeason"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.CropSeason);
            if (message.CropName != null && message.hasOwnProperty("CropName"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.CropName);
            if (message.Temperature != null && message.hasOwnProperty("Temperature"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.Temperature);
            if (message.TemerpatureUnit != null && message.hasOwnProperty("TemerpatureUnit"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.TemerpatureUnit);
            if (message.Humidity != null && message.hasOwnProperty("Humidity"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.Humidity);
            if (message.HumidityUnit != null && message.hasOwnProperty("HumidityUnit"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.HumidityUnit);
            return writer;
        };

        /**
         * Encodes the specified InspectionData message, length delimited. Does not implicitly {@link supplyChainPackage.InspectionData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof supplyChainPackage.InspectionData
         * @static
         * @param {supplyChainPackage.IInspectionData} message InspectionData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InspectionData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InspectionData message from the specified reader or buffer.
         * @function decode
         * @memberof supplyChainPackage.InspectionData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {supplyChainPackage.InspectionData} InspectionData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InspectionData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.supplyChainPackage.InspectionData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.InspectionReport = reader.string();
                    break;
                case 2:
                    message.InspectionDate = reader.string();
                    break;
                case 3:
                    message.InspectorName = reader.string();
                    break;
                case 4:
                    message.FarmersPublicKey = reader.string();
                    break;
                case 5:
                    message.CropVariety = reader.string();
                    break;
                case 6:
                    message.CropSeason = reader.string();
                    break;
                case 7:
                    message.CropName = reader.string();
                    break;
                case 8:
                    message.Temperature = reader.string();
                    break;
                case 9:
                    message.TemerpatureUnit = reader.string();
                    break;
                case 10:
                    message.Humidity = reader.string();
                    break;
                case 11:
                    message.HumidityUnit = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an InspectionData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof supplyChainPackage.InspectionData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {supplyChainPackage.InspectionData} InspectionData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InspectionData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an InspectionData message.
         * @function verify
         * @memberof supplyChainPackage.InspectionData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InspectionData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.InspectionReport != null && message.hasOwnProperty("InspectionReport"))
                if (!$util.isString(message.InspectionReport))
                    return "InspectionReport: string expected";
            if (message.InspectionDate != null && message.hasOwnProperty("InspectionDate"))
                if (!$util.isString(message.InspectionDate))
                    return "InspectionDate: string expected";
            if (message.InspectorName != null && message.hasOwnProperty("InspectorName"))
                if (!$util.isString(message.InspectorName))
                    return "InspectorName: string expected";
            if (message.FarmersPublicKey != null && message.hasOwnProperty("FarmersPublicKey"))
                if (!$util.isString(message.FarmersPublicKey))
                    return "FarmersPublicKey: string expected";
            if (message.CropVariety != null && message.hasOwnProperty("CropVariety"))
                if (!$util.isString(message.CropVariety))
                    return "CropVariety: string expected";
            if (message.CropSeason != null && message.hasOwnProperty("CropSeason"))
                if (!$util.isString(message.CropSeason))
                    return "CropSeason: string expected";
            if (message.CropName != null && message.hasOwnProperty("CropName"))
                if (!$util.isString(message.CropName))
                    return "CropName: string expected";
            if (message.Temperature != null && message.hasOwnProperty("Temperature"))
                if (!$util.isString(message.Temperature))
                    return "Temperature: string expected";
            if (message.TemerpatureUnit != null && message.hasOwnProperty("TemerpatureUnit"))
                if (!$util.isString(message.TemerpatureUnit))
                    return "TemerpatureUnit: string expected";
            if (message.Humidity != null && message.hasOwnProperty("Humidity"))
                if (!$util.isString(message.Humidity))
                    return "Humidity: string expected";
            if (message.HumidityUnit != null && message.hasOwnProperty("HumidityUnit"))
                if (!$util.isString(message.HumidityUnit))
                    return "HumidityUnit: string expected";
            return null;
        };

        /**
         * Creates an InspectionData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof supplyChainPackage.InspectionData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {supplyChainPackage.InspectionData} InspectionData
         */
        InspectionData.fromObject = function fromObject(object) {
            if (object instanceof $root.supplyChainPackage.InspectionData)
                return object;
            var message = new $root.supplyChainPackage.InspectionData();
            if (object.InspectionReport != null)
                message.InspectionReport = String(object.InspectionReport);
            if (object.InspectionDate != null)
                message.InspectionDate = String(object.InspectionDate);
            if (object.InspectorName != null)
                message.InspectorName = String(object.InspectorName);
            if (object.FarmersPublicKey != null)
                message.FarmersPublicKey = String(object.FarmersPublicKey);
            if (object.CropVariety != null)
                message.CropVariety = String(object.CropVariety);
            if (object.CropSeason != null)
                message.CropSeason = String(object.CropSeason);
            if (object.CropName != null)
                message.CropName = String(object.CropName);
            if (object.Temperature != null)
                message.Temperature = String(object.Temperature);
            if (object.TemerpatureUnit != null)
                message.TemerpatureUnit = String(object.TemerpatureUnit);
            if (object.Humidity != null)
                message.Humidity = String(object.Humidity);
            if (object.HumidityUnit != null)
                message.HumidityUnit = String(object.HumidityUnit);
            return message;
        };

        /**
         * Creates a plain object from an InspectionData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof supplyChainPackage.InspectionData
         * @static
         * @param {supplyChainPackage.InspectionData} message InspectionData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InspectionData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.InspectionReport = "";
                object.InspectionDate = "";
                object.InspectorName = "";
                object.FarmersPublicKey = "";
                object.CropVariety = "";
                object.CropSeason = "";
                object.CropName = "";
                object.Temperature = "";
                object.TemerpatureUnit = "";
                object.Humidity = "";
                object.HumidityUnit = "";
            }
            if (message.InspectionReport != null && message.hasOwnProperty("InspectionReport"))
                object.InspectionReport = message.InspectionReport;
            if (message.InspectionDate != null && message.hasOwnProperty("InspectionDate"))
                object.InspectionDate = message.InspectionDate;
            if (message.InspectorName != null && message.hasOwnProperty("InspectorName"))
                object.InspectorName = message.InspectorName;
            if (message.FarmersPublicKey != null && message.hasOwnProperty("FarmersPublicKey"))
                object.FarmersPublicKey = message.FarmersPublicKey;
            if (message.CropVariety != null && message.hasOwnProperty("CropVariety"))
                object.CropVariety = message.CropVariety;
            if (message.CropSeason != null && message.hasOwnProperty("CropSeason"))
                object.CropSeason = message.CropSeason;
            if (message.CropName != null && message.hasOwnProperty("CropName"))
                object.CropName = message.CropName;
            if (message.Temperature != null && message.hasOwnProperty("Temperature"))
                object.Temperature = message.Temperature;
            if (message.TemerpatureUnit != null && message.hasOwnProperty("TemerpatureUnit"))
                object.TemerpatureUnit = message.TemerpatureUnit;
            if (message.Humidity != null && message.hasOwnProperty("Humidity"))
                object.Humidity = message.Humidity;
            if (message.HumidityUnit != null && message.hasOwnProperty("HumidityUnit"))
                object.HumidityUnit = message.HumidityUnit;
            return object;
        };

        /**
         * Converts this InspectionData to JSON.
         * @function toJSON
         * @memberof supplyChainPackage.InspectionData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InspectionData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return InspectionData;
    })();

    supplyChainPackage.HarvestData = (function() {

        /**
         * Properties of a HarvestData.
         * @memberof supplyChainPackage
         * @interface IHarvestData
         * @property {string|null} [CropVariety] HarvestData CropVariety
         * @property {string|null} [CropMeasureCategory] HarvestData CropMeasureCategory
         * @property {string|null} [DateofEnd] HarvestData DateofEnd
         * @property {string|null} [Dateofstart] HarvestData Dateofstart
         * @property {string|null} [Humidity] HarvestData Humidity
         * @property {string|null} [HumidityUnit] HarvestData HumidityUnit
         * @property {string|null} [Quantity] HarvestData Quantity
         * @property {string|null} [QuantityUnit] HarvestData QuantityUnit
         * @property {string|null} [TemerpatureUnit] HarvestData TemerpatureUnit
         * @property {string|null} [Temperature] HarvestData Temperature
         */

        /**
         * Constructs a new HarvestData.
         * @memberof supplyChainPackage
         * @classdesc Represents a HarvestData.
         * @implements IHarvestData
         * @constructor
         * @param {supplyChainPackage.IHarvestData=} [properties] Properties to set
         */
        function HarvestData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HarvestData CropVariety.
         * @member {string} CropVariety
         * @memberof supplyChainPackage.HarvestData
         * @instance
         */
        HarvestData.prototype.CropVariety = "";

        /**
         * HarvestData CropMeasureCategory.
         * @member {string} CropMeasureCategory
         * @memberof supplyChainPackage.HarvestData
         * @instance
         */
        HarvestData.prototype.CropMeasureCategory = "";

        /**
         * HarvestData DateofEnd.
         * @member {string} DateofEnd
         * @memberof supplyChainPackage.HarvestData
         * @instance
         */
        HarvestData.prototype.DateofEnd = "";

        /**
         * HarvestData Dateofstart.
         * @member {string} Dateofstart
         * @memberof supplyChainPackage.HarvestData
         * @instance
         */
        HarvestData.prototype.Dateofstart = "";

        /**
         * HarvestData Humidity.
         * @member {string} Humidity
         * @memberof supplyChainPackage.HarvestData
         * @instance
         */
        HarvestData.prototype.Humidity = "";

        /**
         * HarvestData HumidityUnit.
         * @member {string} HumidityUnit
         * @memberof supplyChainPackage.HarvestData
         * @instance
         */
        HarvestData.prototype.HumidityUnit = "";

        /**
         * HarvestData Quantity.
         * @member {string} Quantity
         * @memberof supplyChainPackage.HarvestData
         * @instance
         */
        HarvestData.prototype.Quantity = "";

        /**
         * HarvestData QuantityUnit.
         * @member {string} QuantityUnit
         * @memberof supplyChainPackage.HarvestData
         * @instance
         */
        HarvestData.prototype.QuantityUnit = "";

        /**
         * HarvestData TemerpatureUnit.
         * @member {string} TemerpatureUnit
         * @memberof supplyChainPackage.HarvestData
         * @instance
         */
        HarvestData.prototype.TemerpatureUnit = "";

        /**
         * HarvestData Temperature.
         * @member {string} Temperature
         * @memberof supplyChainPackage.HarvestData
         * @instance
         */
        HarvestData.prototype.Temperature = "";

        /**
         * Creates a new HarvestData instance using the specified properties.
         * @function create
         * @memberof supplyChainPackage.HarvestData
         * @static
         * @param {supplyChainPackage.IHarvestData=} [properties] Properties to set
         * @returns {supplyChainPackage.HarvestData} HarvestData instance
         */
        HarvestData.create = function create(properties) {
            return new HarvestData(properties);
        };

        /**
         * Encodes the specified HarvestData message. Does not implicitly {@link supplyChainPackage.HarvestData.verify|verify} messages.
         * @function encode
         * @memberof supplyChainPackage.HarvestData
         * @static
         * @param {supplyChainPackage.IHarvestData} message HarvestData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HarvestData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.CropVariety != null && message.hasOwnProperty("CropVariety"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.CropVariety);
            if (message.CropMeasureCategory != null && message.hasOwnProperty("CropMeasureCategory"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.CropMeasureCategory);
            if (message.DateofEnd != null && message.hasOwnProperty("DateofEnd"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.DateofEnd);
            if (message.Dateofstart != null && message.hasOwnProperty("Dateofstart"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Dateofstart);
            if (message.Humidity != null && message.hasOwnProperty("Humidity"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Humidity);
            if (message.HumidityUnit != null && message.hasOwnProperty("HumidityUnit"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.HumidityUnit);
            if (message.Quantity != null && message.hasOwnProperty("Quantity"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.Quantity);
            if (message.QuantityUnit != null && message.hasOwnProperty("QuantityUnit"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.QuantityUnit);
            if (message.TemerpatureUnit != null && message.hasOwnProperty("TemerpatureUnit"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.TemerpatureUnit);
            if (message.Temperature != null && message.hasOwnProperty("Temperature"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.Temperature);
            return writer;
        };

        /**
         * Encodes the specified HarvestData message, length delimited. Does not implicitly {@link supplyChainPackage.HarvestData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof supplyChainPackage.HarvestData
         * @static
         * @param {supplyChainPackage.IHarvestData} message HarvestData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HarvestData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HarvestData message from the specified reader or buffer.
         * @function decode
         * @memberof supplyChainPackage.HarvestData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {supplyChainPackage.HarvestData} HarvestData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HarvestData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.supplyChainPackage.HarvestData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.CropVariety = reader.string();
                    break;
                case 2:
                    message.CropMeasureCategory = reader.string();
                    break;
                case 3:
                    message.DateofEnd = reader.string();
                    break;
                case 4:
                    message.Dateofstart = reader.string();
                    break;
                case 5:
                    message.Humidity = reader.string();
                    break;
                case 6:
                    message.HumidityUnit = reader.string();
                    break;
                case 7:
                    message.Quantity = reader.string();
                    break;
                case 8:
                    message.QuantityUnit = reader.string();
                    break;
                case 9:
                    message.TemerpatureUnit = reader.string();
                    break;
                case 10:
                    message.Temperature = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HarvestData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof supplyChainPackage.HarvestData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {supplyChainPackage.HarvestData} HarvestData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HarvestData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HarvestData message.
         * @function verify
         * @memberof supplyChainPackage.HarvestData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HarvestData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.CropVariety != null && message.hasOwnProperty("CropVariety"))
                if (!$util.isString(message.CropVariety))
                    return "CropVariety: string expected";
            if (message.CropMeasureCategory != null && message.hasOwnProperty("CropMeasureCategory"))
                if (!$util.isString(message.CropMeasureCategory))
                    return "CropMeasureCategory: string expected";
            if (message.DateofEnd != null && message.hasOwnProperty("DateofEnd"))
                if (!$util.isString(message.DateofEnd))
                    return "DateofEnd: string expected";
            if (message.Dateofstart != null && message.hasOwnProperty("Dateofstart"))
                if (!$util.isString(message.Dateofstart))
                    return "Dateofstart: string expected";
            if (message.Humidity != null && message.hasOwnProperty("Humidity"))
                if (!$util.isString(message.Humidity))
                    return "Humidity: string expected";
            if (message.HumidityUnit != null && message.hasOwnProperty("HumidityUnit"))
                if (!$util.isString(message.HumidityUnit))
                    return "HumidityUnit: string expected";
            if (message.Quantity != null && message.hasOwnProperty("Quantity"))
                if (!$util.isString(message.Quantity))
                    return "Quantity: string expected";
            if (message.QuantityUnit != null && message.hasOwnProperty("QuantityUnit"))
                if (!$util.isString(message.QuantityUnit))
                    return "QuantityUnit: string expected";
            if (message.TemerpatureUnit != null && message.hasOwnProperty("TemerpatureUnit"))
                if (!$util.isString(message.TemerpatureUnit))
                    return "TemerpatureUnit: string expected";
            if (message.Temperature != null && message.hasOwnProperty("Temperature"))
                if (!$util.isString(message.Temperature))
                    return "Temperature: string expected";
            return null;
        };

        /**
         * Creates a HarvestData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof supplyChainPackage.HarvestData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {supplyChainPackage.HarvestData} HarvestData
         */
        HarvestData.fromObject = function fromObject(object) {
            if (object instanceof $root.supplyChainPackage.HarvestData)
                return object;
            var message = new $root.supplyChainPackage.HarvestData();
            if (object.CropVariety != null)
                message.CropVariety = String(object.CropVariety);
            if (object.CropMeasureCategory != null)
                message.CropMeasureCategory = String(object.CropMeasureCategory);
            if (object.DateofEnd != null)
                message.DateofEnd = String(object.DateofEnd);
            if (object.Dateofstart != null)
                message.Dateofstart = String(object.Dateofstart);
            if (object.Humidity != null)
                message.Humidity = String(object.Humidity);
            if (object.HumidityUnit != null)
                message.HumidityUnit = String(object.HumidityUnit);
            if (object.Quantity != null)
                message.Quantity = String(object.Quantity);
            if (object.QuantityUnit != null)
                message.QuantityUnit = String(object.QuantityUnit);
            if (object.TemerpatureUnit != null)
                message.TemerpatureUnit = String(object.TemerpatureUnit);
            if (object.Temperature != null)
                message.Temperature = String(object.Temperature);
            return message;
        };

        /**
         * Creates a plain object from a HarvestData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof supplyChainPackage.HarvestData
         * @static
         * @param {supplyChainPackage.HarvestData} message HarvestData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HarvestData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.CropVariety = "";
                object.CropMeasureCategory = "";
                object.DateofEnd = "";
                object.Dateofstart = "";
                object.Humidity = "";
                object.HumidityUnit = "";
                object.Quantity = "";
                object.QuantityUnit = "";
                object.TemerpatureUnit = "";
                object.Temperature = "";
            }
            if (message.CropVariety != null && message.hasOwnProperty("CropVariety"))
                object.CropVariety = message.CropVariety;
            if (message.CropMeasureCategory != null && message.hasOwnProperty("CropMeasureCategory"))
                object.CropMeasureCategory = message.CropMeasureCategory;
            if (message.DateofEnd != null && message.hasOwnProperty("DateofEnd"))
                object.DateofEnd = message.DateofEnd;
            if (message.Dateofstart != null && message.hasOwnProperty("Dateofstart"))
                object.Dateofstart = message.Dateofstart;
            if (message.Humidity != null && message.hasOwnProperty("Humidity"))
                object.Humidity = message.Humidity;
            if (message.HumidityUnit != null && message.hasOwnProperty("HumidityUnit"))
                object.HumidityUnit = message.HumidityUnit;
            if (message.Quantity != null && message.hasOwnProperty("Quantity"))
                object.Quantity = message.Quantity;
            if (message.QuantityUnit != null && message.hasOwnProperty("QuantityUnit"))
                object.QuantityUnit = message.QuantityUnit;
            if (message.TemerpatureUnit != null && message.hasOwnProperty("TemerpatureUnit"))
                object.TemerpatureUnit = message.TemerpatureUnit;
            if (message.Temperature != null && message.hasOwnProperty("Temperature"))
                object.Temperature = message.Temperature;
            return object;
        };

        /**
         * Converts this HarvestData to JSON.
         * @function toJSON
         * @memberof supplyChainPackage.HarvestData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HarvestData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HarvestData;
    })();

    supplyChainPackage.PackageData = (function() {

        /**
         * Properties of a PackageData.
         * @memberof supplyChainPackage
         * @interface IPackageData
         * @property {number|null} [Quantity] PackageData Quantity
         * @property {string|null} [RostingDuration] PackageData RostingDuration
         * @property {string|null} [PackageDateTime] PackageData PackageDateTime
         * @property {string|null} [Temperature] PackageData Temperature
         * @property {string|null} [InternalBatchNo] PackageData InternalBatchNo
         * @property {string|null} [ProcessorName] PackageData ProcessorName
         * @property {string|null} [ProcessorAddress] PackageData ProcessorAddress
         */

        /**
         * Constructs a new PackageData.
         * @memberof supplyChainPackage
         * @classdesc Represents a PackageData.
         * @implements IPackageData
         * @constructor
         * @param {supplyChainPackage.IPackageData=} [properties] Properties to set
         */
        function PackageData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PackageData Quantity.
         * @member {number} Quantity
         * @memberof supplyChainPackage.PackageData
         * @instance
         */
        PackageData.prototype.Quantity = 0;

        /**
         * PackageData RostingDuration.
         * @member {string} RostingDuration
         * @memberof supplyChainPackage.PackageData
         * @instance
         */
        PackageData.prototype.RostingDuration = "";

        /**
         * PackageData PackageDateTime.
         * @member {string} PackageDateTime
         * @memberof supplyChainPackage.PackageData
         * @instance
         */
        PackageData.prototype.PackageDateTime = "";

        /**
         * PackageData Temperature.
         * @member {string} Temperature
         * @memberof supplyChainPackage.PackageData
         * @instance
         */
        PackageData.prototype.Temperature = "";

        /**
         * PackageData InternalBatchNo.
         * @member {string} InternalBatchNo
         * @memberof supplyChainPackage.PackageData
         * @instance
         */
        PackageData.prototype.InternalBatchNo = "";

        /**
         * PackageData ProcessorName.
         * @member {string} ProcessorName
         * @memberof supplyChainPackage.PackageData
         * @instance
         */
        PackageData.prototype.ProcessorName = "";

        /**
         * PackageData ProcessorAddress.
         * @member {string} ProcessorAddress
         * @memberof supplyChainPackage.PackageData
         * @instance
         */
        PackageData.prototype.ProcessorAddress = "";

        /**
         * Creates a new PackageData instance using the specified properties.
         * @function create
         * @memberof supplyChainPackage.PackageData
         * @static
         * @param {supplyChainPackage.IPackageData=} [properties] Properties to set
         * @returns {supplyChainPackage.PackageData} PackageData instance
         */
        PackageData.create = function create(properties) {
            return new PackageData(properties);
        };

        /**
         * Encodes the specified PackageData message. Does not implicitly {@link supplyChainPackage.PackageData.verify|verify} messages.
         * @function encode
         * @memberof supplyChainPackage.PackageData
         * @static
         * @param {supplyChainPackage.IPackageData} message PackageData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PackageData.encode = function encode(message, writer) {
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
         * Encodes the specified PackageData message, length delimited. Does not implicitly {@link supplyChainPackage.PackageData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof supplyChainPackage.PackageData
         * @static
         * @param {supplyChainPackage.IPackageData} message PackageData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PackageData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PackageData message from the specified reader or buffer.
         * @function decode
         * @memberof supplyChainPackage.PackageData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {supplyChainPackage.PackageData} PackageData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PackageData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.supplyChainPackage.PackageData();
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
         * Decodes a PackageData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof supplyChainPackage.PackageData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {supplyChainPackage.PackageData} PackageData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PackageData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PackageData message.
         * @function verify
         * @memberof supplyChainPackage.PackageData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PackageData.verify = function verify(message) {
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
         * Creates a PackageData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof supplyChainPackage.PackageData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {supplyChainPackage.PackageData} PackageData
         */
        PackageData.fromObject = function fromObject(object) {
            if (object instanceof $root.supplyChainPackage.PackageData)
                return object;
            var message = new $root.supplyChainPackage.PackageData();
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
         * Creates a plain object from a PackageData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof supplyChainPackage.PackageData
         * @static
         * @param {supplyChainPackage.PackageData} message PackageData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PackageData.toObject = function toObject(message, options) {
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
         * Converts this PackageData to JSON.
         * @function toJSON
         * @memberof supplyChainPackage.PackageData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PackageData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PackageData;
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
         * @property {supplyChainPackage.ILandRegistration|null} [landregistrationparameters] LandRegistrationParams landregistrationparameters
         * @property {supplyChainPackage.ILand|null} [land] LandRegistrationParams land
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
         * @member {supplyChainPackage.ILandRegistration|null|undefined} landregistrationparameters
         * @memberof supplyChainPackage.LandRegistrationParams
         * @instance
         */
        LandRegistrationParams.prototype.landregistrationparameters = null;

        /**
         * LandRegistrationParams land.
         * @member {supplyChainPackage.ILand|null|undefined} land
         * @memberof supplyChainPackage.LandRegistrationParams
         * @instance
         */
        LandRegistrationParams.prototype.land = null;

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
                $root.supplyChainPackage.LandRegistration.encode(message.landregistrationparameters, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.land != null && message.hasOwnProperty("land"))
                $root.supplyChainPackage.Land.encode(message.land, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                    message.landregistrationparameters = $root.supplyChainPackage.LandRegistration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.land = $root.supplyChainPackage.Land.decode(reader, reader.uint32());
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
                var error = $root.supplyChainPackage.LandRegistration.verify(message.landregistrationparameters);
                if (error)
                    return "landregistrationparameters." + error;
            }
            if (message.land != null && message.hasOwnProperty("land")) {
                var error = $root.supplyChainPackage.Land.verify(message.land);
                if (error)
                    return "land." + error;
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
                message.landregistrationparameters = $root.supplyChainPackage.LandRegistration.fromObject(object.landregistrationparameters);
            }
            if (object.land != null) {
                if (typeof object.land !== "object")
                    throw TypeError(".supplyChainPackage.LandRegistrationParams.land: object expected");
                message.land = $root.supplyChainPackage.Land.fromObject(object.land);
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
                object.land = null;
            }
            if (message.landregistrationparameters != null && message.hasOwnProperty("landregistrationparameters"))
                object.landregistrationparameters = $root.supplyChainPackage.LandRegistration.toObject(message.landregistrationparameters, options);
            if (message.land != null && message.hasOwnProperty("land"))
                object.land = $root.supplyChainPackage.Land.toObject(message.land, options);
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
         * @property {supplyChainPackage.ICultivationData|null} [startcultivationparameters] StartCultivationParams startcultivationparameters
         * @property {supplyChainPackage.ILand|null} [land] StartCultivationParams land
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
         * @member {supplyChainPackage.ICultivationData|null|undefined} startcultivationparameters
         * @memberof supplyChainPackage.StartCultivationParams
         * @instance
         */
        StartCultivationParams.prototype.startcultivationparameters = null;

        /**
         * StartCultivationParams land.
         * @member {supplyChainPackage.ILand|null|undefined} land
         * @memberof supplyChainPackage.StartCultivationParams
         * @instance
         */
        StartCultivationParams.prototype.land = null;

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
                $root.supplyChainPackage.CultivationData.encode(message.startcultivationparameters, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.land != null && message.hasOwnProperty("land"))
                $root.supplyChainPackage.Land.encode(message.land, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                    message.startcultivationparameters = $root.supplyChainPackage.CultivationData.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.land = $root.supplyChainPackage.Land.decode(reader, reader.uint32());
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
                var error = $root.supplyChainPackage.CultivationData.verify(message.startcultivationparameters);
                if (error)
                    return "startcultivationparameters." + error;
            }
            if (message.land != null && message.hasOwnProperty("land")) {
                var error = $root.supplyChainPackage.Land.verify(message.land);
                if (error)
                    return "land." + error;
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
                message.startcultivationparameters = $root.supplyChainPackage.CultivationData.fromObject(object.startcultivationparameters);
            }
            if (object.land != null) {
                if (typeof object.land !== "object")
                    throw TypeError(".supplyChainPackage.StartCultivationParams.land: object expected");
                message.land = $root.supplyChainPackage.Land.fromObject(object.land);
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
                object.land = null;
            }
            if (message.startcultivationparameters != null && message.hasOwnProperty("startcultivationparameters"))
                object.startcultivationparameters = $root.supplyChainPackage.CultivationData.toObject(message.startcultivationparameters, options);
            if (message.land != null && message.hasOwnProperty("land"))
                object.land = $root.supplyChainPackage.Land.toObject(message.land, options);
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
         * @property {supplyChainPackage.IInspectionData|null} [inspectparameters] InspectParams inspectparameters
         * @property {supplyChainPackage.ILand|null} [land] InspectParams land
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
         * @member {supplyChainPackage.IInspectionData|null|undefined} inspectparameters
         * @memberof supplyChainPackage.InspectParams
         * @instance
         */
        InspectParams.prototype.inspectparameters = null;

        /**
         * InspectParams land.
         * @member {supplyChainPackage.ILand|null|undefined} land
         * @memberof supplyChainPackage.InspectParams
         * @instance
         */
        InspectParams.prototype.land = null;

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
                $root.supplyChainPackage.InspectionData.encode(message.inspectparameters, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.land != null && message.hasOwnProperty("land"))
                $root.supplyChainPackage.Land.encode(message.land, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                    message.inspectparameters = $root.supplyChainPackage.InspectionData.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.land = $root.supplyChainPackage.Land.decode(reader, reader.uint32());
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
                var error = $root.supplyChainPackage.InspectionData.verify(message.inspectparameters);
                if (error)
                    return "inspectparameters." + error;
            }
            if (message.land != null && message.hasOwnProperty("land")) {
                var error = $root.supplyChainPackage.Land.verify(message.land);
                if (error)
                    return "land." + error;
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
                message.inspectparameters = $root.supplyChainPackage.InspectionData.fromObject(object.inspectparameters);
            }
            if (object.land != null) {
                if (typeof object.land !== "object")
                    throw TypeError(".supplyChainPackage.InspectParams.land: object expected");
                message.land = $root.supplyChainPackage.Land.fromObject(object.land);
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
                object.land = null;
            }
            if (message.inspectparameters != null && message.hasOwnProperty("inspectparameters"))
                object.inspectparameters = $root.supplyChainPackage.InspectionData.toObject(message.inspectparameters, options);
            if (message.land != null && message.hasOwnProperty("land"))
                object.land = $root.supplyChainPackage.Land.toObject(message.land, options);
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
         * @property {supplyChainPackage.IHarvestData|null} [performharvestparameters] PerformHarvestParams performharvestparameters
         * @property {supplyChainPackage.ILand|null} [land] PerformHarvestParams land
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
         * @member {supplyChainPackage.IHarvestData|null|undefined} performharvestparameters
         * @memberof supplyChainPackage.PerformHarvestParams
         * @instance
         */
        PerformHarvestParams.prototype.performharvestparameters = null;

        /**
         * PerformHarvestParams land.
         * @member {supplyChainPackage.ILand|null|undefined} land
         * @memberof supplyChainPackage.PerformHarvestParams
         * @instance
         */
        PerformHarvestParams.prototype.land = null;

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
                $root.supplyChainPackage.HarvestData.encode(message.performharvestparameters, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.land != null && message.hasOwnProperty("land"))
                $root.supplyChainPackage.Land.encode(message.land, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                    message.performharvestparameters = $root.supplyChainPackage.HarvestData.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.land = $root.supplyChainPackage.Land.decode(reader, reader.uint32());
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
                var error = $root.supplyChainPackage.HarvestData.verify(message.performharvestparameters);
                if (error)
                    return "performharvestparameters." + error;
            }
            if (message.land != null && message.hasOwnProperty("land")) {
                var error = $root.supplyChainPackage.Land.verify(message.land);
                if (error)
                    return "land." + error;
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
                message.performharvestparameters = $root.supplyChainPackage.HarvestData.fromObject(object.performharvestparameters);
            }
            if (object.land != null) {
                if (typeof object.land !== "object")
                    throw TypeError(".supplyChainPackage.PerformHarvestParams.land: object expected");
                message.land = $root.supplyChainPackage.Land.fromObject(object.land);
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
                object.land = null;
            }
            if (message.performharvestparameters != null && message.hasOwnProperty("performharvestparameters"))
                object.performharvestparameters = $root.supplyChainPackage.HarvestData.toObject(message.performharvestparameters, options);
            if (message.land != null && message.hasOwnProperty("land"))
                object.land = $root.supplyChainPackage.Land.toObject(message.land, options);
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
         * @property {supplyChainPackage.IPackageData|null} [createpackageparameters] CreatePackageParams createpackageparameters
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
         * @member {supplyChainPackage.IPackageData|null|undefined} createpackageparameters
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
                $root.supplyChainPackage.PackageData.encode(message.createpackageparameters, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                    message.createpackageparameters = $root.supplyChainPackage.PackageData.decode(reader, reader.uint32());
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
                var error = $root.supplyChainPackage.PackageData.verify(message.createpackageparameters);
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
                message.createpackageparameters = $root.supplyChainPackage.PackageData.fromObject(object.createpackageparameters);
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
                object.createpackageparameters = $root.supplyChainPackage.PackageData.toObject(message.createpackageparameters, options);
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

    supplyChainPackage.UpdatePackageParams = (function() {

        /**
         * Properties of an UpdatePackageParams.
         * @memberof supplyChainPackage
         * @interface IUpdatePackageParams
         * @property {supplyChainPackage.IPackageData|null} [packageDetails] UpdatePackageParams packageDetails
         * @property {number|null} [setPrice] UpdatePackageParams setPrice
         */

        /**
         * Constructs a new UpdatePackageParams.
         * @memberof supplyChainPackage
         * @classdesc Represents an UpdatePackageParams.
         * @implements IUpdatePackageParams
         * @constructor
         * @param {supplyChainPackage.IUpdatePackageParams=} [properties] Properties to set
         */
        function UpdatePackageParams(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdatePackageParams packageDetails.
         * @member {supplyChainPackage.IPackageData|null|undefined} packageDetails
         * @memberof supplyChainPackage.UpdatePackageParams
         * @instance
         */
        UpdatePackageParams.prototype.packageDetails = null;

        /**
         * UpdatePackageParams setPrice.
         * @member {number} setPrice
         * @memberof supplyChainPackage.UpdatePackageParams
         * @instance
         */
        UpdatePackageParams.prototype.setPrice = 0;

        /**
         * Creates a new UpdatePackageParams instance using the specified properties.
         * @function create
         * @memberof supplyChainPackage.UpdatePackageParams
         * @static
         * @param {supplyChainPackage.IUpdatePackageParams=} [properties] Properties to set
         * @returns {supplyChainPackage.UpdatePackageParams} UpdatePackageParams instance
         */
        UpdatePackageParams.create = function create(properties) {
            return new UpdatePackageParams(properties);
        };

        /**
         * Encodes the specified UpdatePackageParams message. Does not implicitly {@link supplyChainPackage.UpdatePackageParams.verify|verify} messages.
         * @function encode
         * @memberof supplyChainPackage.UpdatePackageParams
         * @static
         * @param {supplyChainPackage.IUpdatePackageParams} message UpdatePackageParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdatePackageParams.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.packageDetails != null && message.hasOwnProperty("packageDetails"))
                $root.supplyChainPackage.PackageData.encode(message.packageDetails, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.setPrice != null && message.hasOwnProperty("setPrice"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.setPrice);
            return writer;
        };

        /**
         * Encodes the specified UpdatePackageParams message, length delimited. Does not implicitly {@link supplyChainPackage.UpdatePackageParams.verify|verify} messages.
         * @function encodeDelimited
         * @memberof supplyChainPackage.UpdatePackageParams
         * @static
         * @param {supplyChainPackage.IUpdatePackageParams} message UpdatePackageParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdatePackageParams.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdatePackageParams message from the specified reader or buffer.
         * @function decode
         * @memberof supplyChainPackage.UpdatePackageParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {supplyChainPackage.UpdatePackageParams} UpdatePackageParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdatePackageParams.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.supplyChainPackage.UpdatePackageParams();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.packageDetails = $root.supplyChainPackage.PackageData.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.setPrice = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdatePackageParams message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof supplyChainPackage.UpdatePackageParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {supplyChainPackage.UpdatePackageParams} UpdatePackageParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdatePackageParams.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdatePackageParams message.
         * @function verify
         * @memberof supplyChainPackage.UpdatePackageParams
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdatePackageParams.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.packageDetails != null && message.hasOwnProperty("packageDetails")) {
                var error = $root.supplyChainPackage.PackageData.verify(message.packageDetails);
                if (error)
                    return "packageDetails." + error;
            }
            if (message.setPrice != null && message.hasOwnProperty("setPrice"))
                if (!$util.isInteger(message.setPrice))
                    return "setPrice: integer expected";
            return null;
        };

        /**
         * Creates an UpdatePackageParams message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof supplyChainPackage.UpdatePackageParams
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {supplyChainPackage.UpdatePackageParams} UpdatePackageParams
         */
        UpdatePackageParams.fromObject = function fromObject(object) {
            if (object instanceof $root.supplyChainPackage.UpdatePackageParams)
                return object;
            var message = new $root.supplyChainPackage.UpdatePackageParams();
            if (object.packageDetails != null) {
                if (typeof object.packageDetails !== "object")
                    throw TypeError(".supplyChainPackage.UpdatePackageParams.packageDetails: object expected");
                message.packageDetails = $root.supplyChainPackage.PackageData.fromObject(object.packageDetails);
            }
            if (object.setPrice != null)
                message.setPrice = object.setPrice | 0;
            return message;
        };

        /**
         * Creates a plain object from an UpdatePackageParams message. Also converts values to other types if specified.
         * @function toObject
         * @memberof supplyChainPackage.UpdatePackageParams
         * @static
         * @param {supplyChainPackage.UpdatePackageParams} message UpdatePackageParams
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdatePackageParams.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.packageDetails = null;
                object.setPrice = 0;
            }
            if (message.packageDetails != null && message.hasOwnProperty("packageDetails"))
                object.packageDetails = $root.supplyChainPackage.PackageData.toObject(message.packageDetails, options);
            if (message.setPrice != null && message.hasOwnProperty("setPrice"))
                object.setPrice = message.setPrice;
            return object;
        };

        /**
         * Converts this UpdatePackageParams to JSON.
         * @function toJSON
         * @memberof supplyChainPackage.UpdatePackageParams
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdatePackageParams.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdatePackageParams;
    })();

    supplyChainPackage.TransferPackageParams = (function() {

        /**
         * Properties of a TransferPackageParams.
         * @memberof supplyChainPackage
         * @interface ITransferPackageParams
         * @property {supplyChainPackage.IPackageData|null} [packageDetails] TransferPackageParams packageDetails
         * @property {string|null} [retailAgentPublicKey] TransferPackageParams retailAgentPublicKey
         * @property {number|null} [internalBatchNo] TransferPackageParams internalBatchNo
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
         * TransferPackageParams packageDetails.
         * @member {supplyChainPackage.IPackageData|null|undefined} packageDetails
         * @memberof supplyChainPackage.TransferPackageParams
         * @instance
         */
        TransferPackageParams.prototype.packageDetails = null;

        /**
         * TransferPackageParams retailAgentPublicKey.
         * @member {string} retailAgentPublicKey
         * @memberof supplyChainPackage.TransferPackageParams
         * @instance
         */
        TransferPackageParams.prototype.retailAgentPublicKey = "";

        /**
         * TransferPackageParams internalBatchNo.
         * @member {number} internalBatchNo
         * @memberof supplyChainPackage.TransferPackageParams
         * @instance
         */
        TransferPackageParams.prototype.internalBatchNo = 0;

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
            if (message.packageDetails != null && message.hasOwnProperty("packageDetails"))
                $root.supplyChainPackage.PackageData.encode(message.packageDetails, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.retailAgentPublicKey != null && message.hasOwnProperty("retailAgentPublicKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.retailAgentPublicKey);
            if (message.internalBatchNo != null && message.hasOwnProperty("internalBatchNo"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.internalBatchNo);
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
                    message.packageDetails = $root.supplyChainPackage.PackageData.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.retailAgentPublicKey = reader.string();
                    break;
                case 3:
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
            if (message.packageDetails != null && message.hasOwnProperty("packageDetails")) {
                var error = $root.supplyChainPackage.PackageData.verify(message.packageDetails);
                if (error)
                    return "packageDetails." + error;
            }
            if (message.retailAgentPublicKey != null && message.hasOwnProperty("retailAgentPublicKey"))
                if (!$util.isString(message.retailAgentPublicKey))
                    return "retailAgentPublicKey: string expected";
            if (message.internalBatchNo != null && message.hasOwnProperty("internalBatchNo"))
                if (!$util.isInteger(message.internalBatchNo))
                    return "internalBatchNo: integer expected";
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
            if (object.packageDetails != null) {
                if (typeof object.packageDetails !== "object")
                    throw TypeError(".supplyChainPackage.TransferPackageParams.packageDetails: object expected");
                message.packageDetails = $root.supplyChainPackage.PackageData.fromObject(object.packageDetails);
            }
            if (object.retailAgentPublicKey != null)
                message.retailAgentPublicKey = String(object.retailAgentPublicKey);
            if (object.internalBatchNo != null)
                message.internalBatchNo = object.internalBatchNo | 0;
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
            if (options.defaults) {
                object.packageDetails = null;
                object.retailAgentPublicKey = "";
                object.internalBatchNo = 0;
            }
            if (message.packageDetails != null && message.hasOwnProperty("packageDetails"))
                object.packageDetails = $root.supplyChainPackage.PackageData.toObject(message.packageDetails, options);
            if (message.retailAgentPublicKey != null && message.hasOwnProperty("retailAgentPublicKey"))
                object.retailAgentPublicKey = message.retailAgentPublicKey;
            if (message.internalBatchNo != null && message.hasOwnProperty("internalBatchNo"))
                object.internalBatchNo = message.internalBatchNo;
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
