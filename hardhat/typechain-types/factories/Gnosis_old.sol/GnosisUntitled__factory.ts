/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
  BigNumberish,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  GnosisUntitled,
  GnosisUntitledInterface,
} from "../../Gnosis_old.sol/GnosisUntitled";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "address[]",
        name: "signers",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "_quorum",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ExecutionFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSignatures",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
    ],
    name: "Executed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newQuorum",
        type: "uint256",
      },
    ],
    name: "QuorumUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "signer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "shouldTrust",
        type: "bool",
      },
    ],
    name: "SignerUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "EXECUTE_HASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "QUORUM_HASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SIGNER_HASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "domainSeparator",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        internalType: "struct GnosisUntitled.Signature[]",
        name: "sigs",
        type: "tuple[]",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isSigner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "quorum",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_quorum",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        internalType: "struct GnosisUntitled.Signature[]",
        name: "sigs",
        type: "tuple[]",
      },
    ],
    name: "setQuorum",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
      {
        internalType: "bool",
        name: "shouldTrust",
        type: "bool",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        internalType: "struct GnosisUntitled.Signature[]",
        name: "sigs",
        type: "tuple[]",
      },
    ],
    name: "setSigner",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60a060405260016000556040516200197c3803806200197c83398181016040528101906200002e919062000478565b60005b8251811015620000be5760016002600085848151811062000057576200005662000512565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550808060010191505062000031565b50806001819055507f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f83805190602001206040518060400160405280600181526020017f3100000000000000000000000000000000000000000000000000000000000000815250805190602001204630604051602001620001449594939291906200057e565b6040516020818303038152906040528051906020012060808181525050505050620005db565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620001d38262000188565b810181811067ffffffffffffffff82111715620001f557620001f462000199565b5b80604052505050565b60006200020a6200016a565b9050620002188282620001c8565b919050565b600067ffffffffffffffff8211156200023b576200023a62000199565b5b620002468262000188565b9050602081019050919050565b60005b838110156200027357808201518184015260208101905062000256565b60008484015250505050565b60006200029662000290846200021d565b620001fe565b905082815260208101848484011115620002b557620002b462000183565b5b620002c284828562000253565b509392505050565b600082601f830112620002e257620002e16200017e565b5b8151620002f48482602086016200027f565b91505092915050565b600067ffffffffffffffff8211156200031b576200031a62000199565b5b602082029050602081019050919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200035e8262000331565b9050919050565b620003708162000351565b81146200037c57600080fd5b50565b600081519050620003908162000365565b92915050565b6000620003ad620003a784620002fd565b620001fe565b90508083825260208201905060208402830185811115620003d357620003d26200032c565b5b835b81811015620004005780620003eb88826200037f565b845260208401935050602081019050620003d5565b5050509392505050565b600082601f8301126200042257620004216200017e565b5b81516200043484826020860162000396565b91505092915050565b6000819050919050565b62000452816200043d565b81146200045e57600080fd5b50565b600081519050620004728162000447565b92915050565b60008060006060848603121562000494576200049362000174565b5b600084015167ffffffffffffffff811115620004b557620004b462000179565b5b620004c386828701620002ca565b935050602084015167ffffffffffffffff811115620004e757620004e662000179565b5b620004f5868287016200040a565b9250506040620005088682870162000461565b9150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000819050919050565b620005568162000541565b82525050565b62000567816200043d565b82525050565b620005788162000351565b82525050565b600060a0820190506200059560008301886200054b565b620005a460208301876200054b565b620005b360408301866200054b565b620005c260608301856200055c565b620005d160808301846200056d565b9695505050505050565b6080516113706200060c6000396000818161028601528181610576015281816107fc0152610b5601526113706000f3fe6080604052600436106100955760003560e01c806364810fe41161005957806364810fe41461015a5780637df73e2714610176578063affed0e0146101b3578063f698da25146101de578063f99115fe146102095761009c565b80631703a018146100a15780632ae49a27146100cc57806337a33fc2146100f75780635ab776c4146101225780635c7f4e541461013e5761009c565b3661009c57005b600080fd5b3480156100ad57600080fd5b506100b6610234565b6040516100c39190610bb5565b60405180910390f35b3480156100d857600080fd5b506100e161023a565b6040516100ee9190610be9565b60405180910390f35b34801561010357600080fd5b5061010c61025e565b6040516101199190610be9565b60405180910390f35b61013c60048036038101906101379190610d09565b610282565b005b61015860048036038101906101539190610da9565b610572565b005b610174600480360381019061016f9190610e5f565b6107f8565b005b34801561018257600080fd5b5061019d60048036038101906101989190610f06565b610b2e565b6040516101aa9190610f42565b60405180910390f35b3480156101bf57600080fd5b506101c8610b4e565b6040516101d59190610bb5565b60405180910390f35b3480156101ea57600080fd5b506101f3610b54565b6040516102009190610be9565b60405180910390f35b34801561021557600080fd5b5061021e610b78565b60405161022b9190610be9565b60405180910390f35b60015481565b7fe8215553482e87e79e569510febbad79fcd0cb116418b7ad11fb14951df6821881565b7f2d38a1f0ad75969000ea6dcd51396cdc874f11e8680ec292ed492eefca949dec81565b60007f00000000000000000000000000000000000000000000000000000000000000007fe8215553482e87e79e569510febbad79fcd0cb116418b7ad11fb14951df6821886866000808154809291906102da90610f8c565b919050556040516020016102f19493929190610fe3565b604051602081830303815290604052805190602001206040516020016103189291906110a0565b604051602081830303815290604052805190602001209050600080600090505b6001548110156104c457600060018487878581811061035a576103596110d7565b5b9050606002016000016020810190610372919061113f565b888886818110610385576103846110d7565b5b905060600201602001358989878181106103a2576103a16110d7565b5b90506060020160400135604051600081526020016040526040516103c9949392919061117b565b6020604051602081039080840390855afa1580156103eb573d6000803e3d6000fd5b505050602060405103519050600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16158061047c57508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1610155b156104b3576040517f274cf40100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b809250508080600101915050610338565b508573ffffffffffffffffffffffffffffffffffffffff167ffcaa24b1276bfa7dbf77797c0a984b9df924acbeaabd48cd2f1b0eca379b78fa8660405161050b9190610f42565b60405180910390a284600260008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550505050505050565b60007f00000000000000000000000000000000000000000000000000000000000000007f85bf243ffaa9e85f5c47a8959fc5b10066a057617ae8358d7b990cd2a86e7814856000808154809291906105c990610f8c565b919050556040516020016105df939291906111c0565b604051602081830303815290604052805190602001206040516020016106069291906110a0565b604051602081830303815290604052805190602001209050600080600090505b6001548110156107b2576000600184878785818110610648576106476110d7565b5b9050606002016000016020810190610660919061113f565b888886818110610673576106726110d7565b5b905060600201602001358989878181106106905761068f6110d7565b5b90506060020160400135604051600081526020016040526040516106b7949392919061117b565b6020604051602081039080840390855afa1580156106d9573d6000803e3d6000fd5b505050602060405103519050600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16158061076a57508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1610155b156107a1576040517f274cf40100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b809250508080600101915050610626565b507ff18f88786aae85a652aadb99a82462616489a33370c9bcc7b245906812ef7cd1856040516107e29190610bb5565b60405180910390a1846001819055505050505050565b60007f00000000000000000000000000000000000000000000000000000000000000007f2d38a1f0ad75969000ea6dcd51396cdc874f11e8680ec292ed492eefca949dec8888888860008081548092919061085290610f8c565b9190505560405160200161086b96959493929190611255565b604051602081830303815290604052805190602001206040516020016108929291906110a0565b604051602081830303815290604052805190602001209050600080600090505b600154811015610a3e5760006001848787858181106108d4576108d36110d7565b5b90506060020160000160208101906108ec919061113f565b8888868181106108ff576108fe6110d7565b5b9050606002016020013589898781811061091c5761091b6110d7565b5b9050606002016040013560405160008152602001604052604051610943949392919061117b565b6020604051602081039080840390855afa158015610965573d6000803e3d6000fd5b505050602060405103519050600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615806109f657508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1610155b15610a2d576040517f274cf40100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8092505080806001019150506108b2565b507fcaf938de11c367272220bfd1d2baa99ca46665e7bc4d85f00adb51b90fe1fa9f88888888604051610a7494939291906112b1565b60405180910390a160008873ffffffffffffffffffffffffffffffffffffffff16888888604051610aa6929190611321565b60006040518083038185875af1925050503d8060008114610ae3576040519150601f19603f3d011682016040523d82523d6000602084013e610ae8565b606091505b5050905080610b23576040517facfdb44400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050505050565b60026020528060005260406000206000915054906101000a900460ff1681565b60005481565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f85bf243ffaa9e85f5c47a8959fc5b10066a057617ae8358d7b990cd2a86e781481565b6000819050919050565b610baf81610b9c565b82525050565b6000602082019050610bca6000830184610ba6565b92915050565b6000819050919050565b610be381610bd0565b82525050565b6000602082019050610bfe6000830184610bda565b92915050565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610c3982610c0e565b9050919050565b610c4981610c2e565b8114610c5457600080fd5b50565b600081359050610c6681610c40565b92915050565b60008115159050919050565b610c8181610c6c565b8114610c8c57600080fd5b50565b600081359050610c9e81610c78565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f840112610cc957610cc8610ca4565b5b8235905067ffffffffffffffff811115610ce657610ce5610ca9565b5b602083019150836060820283011115610d0257610d01610cae565b5b9250929050565b60008060008060608587031215610d2357610d22610c04565b5b6000610d3187828801610c57565b9450506020610d4287828801610c8f565b935050604085013567ffffffffffffffff811115610d6357610d62610c09565b5b610d6f87828801610cb3565b925092505092959194509250565b610d8681610b9c565b8114610d9157600080fd5b50565b600081359050610da381610d7d565b92915050565b600080600060408486031215610dc257610dc1610c04565b5b6000610dd086828701610d94565b935050602084013567ffffffffffffffff811115610df157610df0610c09565b5b610dfd86828701610cb3565b92509250509250925092565b60008083601f840112610e1f57610e1e610ca4565b5b8235905067ffffffffffffffff811115610e3c57610e3b610ca9565b5b602083019150836001820283011115610e5857610e57610cae565b5b9250929050565b60008060008060008060808789031215610e7c57610e7b610c04565b5b6000610e8a89828a01610c57565b9650506020610e9b89828a01610d94565b955050604087013567ffffffffffffffff811115610ebc57610ebb610c09565b5b610ec889828a01610e09565b9450945050606087013567ffffffffffffffff811115610eeb57610eea610c09565b5b610ef789828a01610cb3565b92509250509295509295509295565b600060208284031215610f1c57610f1b610c04565b5b6000610f2a84828501610c57565b91505092915050565b610f3c81610c6c565b82525050565b6000602082019050610f576000830184610f33565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610f9782610b9c565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610fc957610fc8610f5d565b5b600182019050919050565b610fdd81610c2e565b82525050565b6000608082019050610ff86000830187610bda565b6110056020830186610fd4565b6110126040830185610f33565b61101f6060830184610ba6565b95945050505050565b600081905092915050565b7f1901000000000000000000000000000000000000000000000000000000000000600082015250565b6000611069600283611028565b915061107482611033565b600282019050919050565b6000819050919050565b61109a61109582610bd0565b61107f565b82525050565b60006110ab8261105c565b91506110b78285611089565b6020820191506110c78284611089565b6020820191508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060ff82169050919050565b61111c81611106565b811461112757600080fd5b50565b60008135905061113981611113565b92915050565b60006020828403121561115557611154610c04565b5b60006111638482850161112a565b91505092915050565b61117581611106565b82525050565b60006080820190506111906000830187610bda565b61119d602083018661116c565b6111aa6040830185610bda565b6111b76060830184610bda565b95945050505050565b60006060820190506111d56000830186610bda565b6111e26020830185610ba6565b6111ef6040830184610ba6565b949350505050565b600082825260208201905092915050565b82818337600083830152505050565b6000601f19601f8301169050919050565b600061123483856111f7565b9350611241838584611208565b61124a83611217565b840190509392505050565b600060a08201905061126a6000830189610bda565b6112776020830188610fd4565b6112846040830187610ba6565b8181036060830152611297818587611228565b90506112a66080830184610ba6565b979650505050505050565b60006060820190506112c66000830187610fd4565b6112d36020830186610ba6565b81810360408301526112e6818486611228565b905095945050505050565b600081905092915050565b600061130883856112f1565b9350611315838584611208565b82840190509392505050565b600061132e8284866112fc565b9150819050939250505056fea26469706673582212203651e1319d4ff690536a098408bfa7121651bd3935b6215dc8db4822bde4467564736f6c63430008120033";

type GnosisUntitledConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GnosisUntitledConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GnosisUntitled__factory extends ContractFactory {
  constructor(...args: GnosisUntitledConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: PromiseOrValue<string>,
    signers: PromiseOrValue<string>[],
    _quorum: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<GnosisUntitled> {
    return super.deploy(
      name,
      signers,
      _quorum,
      overrides || {}
    ) as Promise<GnosisUntitled>;
  }
  override getDeployTransaction(
    name: PromiseOrValue<string>,
    signers: PromiseOrValue<string>[],
    _quorum: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, signers, _quorum, overrides || {});
  }
  override attach(address: string): GnosisUntitled {
    return super.attach(address) as GnosisUntitled;
  }
  override connect(signer: Signer): GnosisUntitled__factory {
    return super.connect(signer) as GnosisUntitled__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GnosisUntitledInterface {
    return new utils.Interface(_abi) as GnosisUntitledInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GnosisUntitled {
    return new Contract(address, _abi, signerOrProvider) as GnosisUntitled;
  }
}