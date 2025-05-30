"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._connect = exports._connectByChainId = exports._connectToDeployment = exports.UnsupportedNetworkError = exports._usingStore = exports._requireFrontendAddress = exports._requireAddress = exports._getProvider = exports._requireSigner = exports._getBlockTimestamp = exports._getContracts = void 0;
const abstract_signer_1 = require("@ethersproject/abstract-signer");
const lib_base_1 = require("@liquity/lib-base");
const dev_json_1 = __importDefault(require("../deployments/dev.json"));
const goerli_json_1 = __importDefault(require("../deployments/goerli.json"));
const kovan_json_1 = __importDefault(require("../deployments/kovan.json"));
const rinkeby_json_1 = __importDefault(require("../deployments/rinkeby.json"));
const ropsten_json_1 = __importDefault(require("../deployments/ropsten.json"));
const mainnet_json_1 = __importDefault(require("../deployments/mainnet.json"));
const kiln_json_1 = __importDefault(require("../deployments/kiln.json"));
const sepolia_json_1 = __importDefault(require("../deployments/sepolia.json"));
const _utils_1 = require("./_utils");
const contracts_1 = require("./contracts");
const _Multicall_1 = require("./_Multicall");
const dev = dev_json_1.default;
const deployments = {
    [mainnet_json_1.default.chainId]: mainnet_json_1.default,
    [ropsten_json_1.default.chainId]: ropsten_json_1.default,
    [rinkeby_json_1.default.chainId]: rinkeby_json_1.default,
    [goerli_json_1.default.chainId]: goerli_json_1.default,
    [kovan_json_1.default.chainId]: kovan_json_1.default,
    [kiln_json_1.default.chainId]: kiln_json_1.default,
    [sepolia_json_1.default.chainId]: sepolia_json_1.default,
    ...(dev !== null ? { [dev.chainId]: dev } : {})
};
const branded = (t) => t;
const connectionFrom = (provider, signer, _contracts, _multicall, { deploymentDate, totalStabilityPoolLQTYReward, liquidityMiningLQTYRewardRate, ...deployment }, optionalParams) => {
    if (optionalParams &&
        optionalParams.useStore !== undefined &&
        !validStoreOptions.includes(optionalParams.useStore)) {
        throw new Error(`Invalid useStore value ${optionalParams.useStore}`);
    }
    return branded({
        provider,
        signer,
        _contracts,
        _multicall,
        deploymentDate: new Date(deploymentDate),
        totalStabilityPoolLQTYReward: lib_base_1.Decimal.from(totalStabilityPoolLQTYReward),
        liquidityMiningLQTYRewardRate: lib_base_1.Decimal.from(liquidityMiningLQTYRewardRate),
        ...deployment,
        ...optionalParams
    });
};
/** @internal */
const _getContracts = (connection) => connection._contracts;
exports._getContracts = _getContracts;
const getMulticall = (connection) => connection._multicall;
const getTimestampFromBlock = ({ timestamp }) => timestamp;
/** @internal */
const _getBlockTimestamp = (connection, blockTag = "latest") => { var _a, _b; return (_b = (_a = 
// Get the timestamp via a contract call whenever possible, to make it batchable with other calls
getMulticall(connection)) === null || _a === void 0 ? void 0 : _a.getCurrentBlockTimestamp({ blockTag }).then(_utils_1.numberify)) !== null && _b !== void 0 ? _b : exports._getProvider(connection).getBlock(blockTag).then(getTimestampFromBlock); };
exports._getBlockTimestamp = _getBlockTimestamp;
/** @internal */
const _requireSigner = (connection) => { var _a; return (_a = connection.signer) !== null && _a !== void 0 ? _a : _utils_1.panic(new Error("Must be connected through a Signer")); };
exports._requireSigner = _requireSigner;
/** @internal */
const _getProvider = (connection) => connection.provider;
exports._getProvider = _getProvider;
// TODO parameterize error message?
/** @internal */
const _requireAddress = (connection, overrides) => { var _a, _b; return (_b = (_a = overrides === null || overrides === void 0 ? void 0 : overrides.from) !== null && _a !== void 0 ? _a : connection.userAddress) !== null && _b !== void 0 ? _b : _utils_1.panic(new Error("A user address is required")); };
exports._requireAddress = _requireAddress;
/** @internal */
const _requireFrontendAddress = (connection) => { var _a; return (_a = connection.frontendTag) !== null && _a !== void 0 ? _a : _utils_1.panic(new Error("A frontend address is required")); };
exports._requireFrontendAddress = _requireFrontendAddress;
/** @internal */
const _usingStore = (connection) => connection.useStore !== undefined;
exports._usingStore = _usingStore;
/**
 * Thrown when trying to connect to a network where Liquity is not deployed.
 *
 * @remarks
 * Thrown by {@link ReadableEthersLiquity.(connect:2)} and {@link EthersLiquity.(connect:2)}.
 *
 * @public
 */
class UnsupportedNetworkError extends Error {
    /** @internal */
    constructor(chainId) {
        super(`Unsupported network (chainId = ${chainId})`);
        this.name = "UnsupportedNetworkError";
        this.chainId = chainId;
    }
}
exports.UnsupportedNetworkError = UnsupportedNetworkError;
const getProviderAndSigner = (signerOrProvider) => {
    var _a;
    const provider = abstract_signer_1.Signer.isSigner(signerOrProvider)
        ? (_a = signerOrProvider.provider) !== null && _a !== void 0 ? _a : _utils_1.panic(new Error("Signer must have a Provider")) : signerOrProvider;
    const signer = abstract_signer_1.Signer.isSigner(signerOrProvider) ? signerOrProvider : undefined;
    return [provider, signer];
};
/** @internal */
const _connectToDeployment = (deployment, signerOrProvider, optionalParams) => connectionFrom(...getProviderAndSigner(signerOrProvider), contracts_1._connectToContracts(signerOrProvider, deployment), undefined, deployment, optionalParams);
exports._connectToDeployment = _connectToDeployment;
const validStoreOptions = ["blockPolled"];
/** @internal */
function _connectByChainId(provider, signer, chainId, optionalParams) {
    var _a;
    const deployment = (_a = deployments[chainId]) !== null && _a !== void 0 ? _a : _utils_1.panic(new UnsupportedNetworkError(chainId));
    return connectionFrom(provider, signer, contracts_1._connectToContracts(provider, deployment), _Multicall_1._connectToMulticall(provider, chainId), deployment, optionalParams);
}
exports._connectByChainId = _connectByChainId;
/** @internal */
const _connect = async (signerOrProvider, optionalParams) => {
    const [provider, signer] = getProviderAndSigner(signerOrProvider);
    if (signer) {
        if ((optionalParams === null || optionalParams === void 0 ? void 0 : optionalParams.userAddress) !== undefined) {
            throw new Error("Can't override userAddress when connecting through Signer");
        }
        optionalParams = {
            ...optionalParams,
            userAddress: await signer.getAddress()
        };
    }
    return _connectByChainId(provider, signer, (await provider.getNetwork()).chainId, optionalParams);
};
exports._connect = _connect;
//# sourceMappingURL=EthersLiquityConnection.js.map