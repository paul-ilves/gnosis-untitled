/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface GnosisUntitledInterface extends utils.Interface {
  functions: {
    "confirmTransaction(uint256)": FunctionFragment;
    "executeTransaction(uint256)": FunctionFragment;
    "getTransaction(uint256)": FunctionFragment;
    "getTransactionCount()": FunctionFragment;
    "isConfirmed(uint256,address)": FunctionFragment;
    "isSigner(address)": FunctionFragment;
    "nonce()": FunctionFragment;
    "quorum()": FunctionFragment;
    "revokeConfirmation(uint256)": FunctionFragment;
    "signerCount()": FunctionFragment;
    "submitNewSigner(address)": FunctionFragment;
    "submitSendBytecode(address,uint256,bytes)": FunctionFragment;
    "submitValueTransfer(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "confirmTransaction"
      | "executeTransaction"
      | "getTransaction"
      | "getTransactionCount"
      | "isConfirmed"
      | "isSigner"
      | "nonce"
      | "quorum"
      | "revokeConfirmation"
      | "signerCount"
      | "submitNewSigner"
      | "submitSendBytecode"
      | "submitValueTransfer"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "confirmTransaction",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "executeTransaction",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTransaction",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTransactionCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isConfirmed",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isSigner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "nonce", values?: undefined): string;
  encodeFunctionData(functionFragment: "quorum", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "revokeConfirmation",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "signerCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "submitNewSigner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "submitSendBytecode",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "submitValueTransfer",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "confirmTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTransactionCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isConfirmed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isSigner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nonce", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "quorum", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "revokeConfirmation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signerCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitNewSigner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitSendBytecode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitValueTransfer",
    data: BytesLike
  ): Result;

  events: {
    "ConfirmTransaction(address,uint256)": EventFragment;
    "Deposit(address,uint256,uint256)": EventFragment;
    "ExecuteTransaction(address,uint256)": EventFragment;
    "RevokeConfirmation(address,uint256)": EventFragment;
    "SubmitTransaction(address,uint256,address,uint256,uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ConfirmTransaction"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExecuteTransaction"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RevokeConfirmation"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SubmitTransaction"): EventFragment;
}

export interface ConfirmTransactionEventObject {
  sender: string;
  txIndex: BigNumber;
}
export type ConfirmTransactionEvent = TypedEvent<
  [string, BigNumber],
  ConfirmTransactionEventObject
>;

export type ConfirmTransactionEventFilter =
  TypedEventFilter<ConfirmTransactionEvent>;

export interface DepositEventObject {
  sender: string;
  amount: BigNumber;
  balance: BigNumber;
}
export type DepositEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  DepositEventObject
>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export interface ExecuteTransactionEventObject {
  sender: string;
  txIndex: BigNumber;
}
export type ExecuteTransactionEvent = TypedEvent<
  [string, BigNumber],
  ExecuteTransactionEventObject
>;

export type ExecuteTransactionEventFilter =
  TypedEventFilter<ExecuteTransactionEvent>;

export interface RevokeConfirmationEventObject {
  sender: string;
  txIndex: BigNumber;
}
export type RevokeConfirmationEvent = TypedEvent<
  [string, BigNumber],
  RevokeConfirmationEventObject
>;

export type RevokeConfirmationEventFilter =
  TypedEventFilter<RevokeConfirmationEvent>;

export interface SubmitTransactionEventObject {
  sender: string;
  txIndex: BigNumber;
  to: string;
  value: BigNumber;
  txType: number;
}
export type SubmitTransactionEvent = TypedEvent<
  [string, BigNumber, string, BigNumber, number],
  SubmitTransactionEventObject
>;

export type SubmitTransactionEventFilter =
  TypedEventFilter<SubmitTransactionEvent>;

export interface GnosisUntitled extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GnosisUntitledInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    confirmTransaction(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeTransaction(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getTransaction(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, boolean, BigNumber] & {
        to: string;
        value: BigNumber;
        data: string;
        executed: boolean;
        numConfirmations: BigNumber;
      }
    >;

    getTransactionCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    isConfirmed(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isSigner(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    nonce(overrides?: CallOverrides): Promise<[BigNumber]>;

    quorum(overrides?: CallOverrides): Promise<[BigNumber]>;

    revokeConfirmation(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    signerCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    submitNewSigner(
      _newSigner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    submitSendBytecode(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    submitValueTransfer(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  confirmTransaction(
    _txIndex: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeTransaction(
    _txIndex: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getTransaction(
    _txIndex: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, string, boolean, BigNumber] & {
      to: string;
      value: BigNumber;
      data: string;
      executed: boolean;
      numConfirmations: BigNumber;
    }
  >;

  getTransactionCount(overrides?: CallOverrides): Promise<BigNumber>;

  isConfirmed(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isSigner(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  nonce(overrides?: CallOverrides): Promise<BigNumber>;

  quorum(overrides?: CallOverrides): Promise<BigNumber>;

  revokeConfirmation(
    _txIndex: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  signerCount(overrides?: CallOverrides): Promise<BigNumber>;

  submitNewSigner(
    _newSigner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  submitSendBytecode(
    _to: PromiseOrValue<string>,
    _value: PromiseOrValue<BigNumberish>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  submitValueTransfer(
    _to: PromiseOrValue<string>,
    _value: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    confirmTransaction(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    executeTransaction(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getTransaction(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, boolean, BigNumber] & {
        to: string;
        value: BigNumber;
        data: string;
        executed: boolean;
        numConfirmations: BigNumber;
      }
    >;

    getTransactionCount(overrides?: CallOverrides): Promise<BigNumber>;

    isConfirmed(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isSigner(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    nonce(overrides?: CallOverrides): Promise<BigNumber>;

    quorum(overrides?: CallOverrides): Promise<BigNumber>;

    revokeConfirmation(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    signerCount(overrides?: CallOverrides): Promise<BigNumber>;

    submitNewSigner(
      _newSigner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    submitSendBytecode(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    submitValueTransfer(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ConfirmTransaction(address,uint256)"(
      sender?: PromiseOrValue<string> | null,
      txIndex?: PromiseOrValue<BigNumberish> | null
    ): ConfirmTransactionEventFilter;
    ConfirmTransaction(
      sender?: PromiseOrValue<string> | null,
      txIndex?: PromiseOrValue<BigNumberish> | null
    ): ConfirmTransactionEventFilter;

    "Deposit(address,uint256,uint256)"(
      sender?: PromiseOrValue<string> | null,
      amount?: null,
      balance?: null
    ): DepositEventFilter;
    Deposit(
      sender?: PromiseOrValue<string> | null,
      amount?: null,
      balance?: null
    ): DepositEventFilter;

    "ExecuteTransaction(address,uint256)"(
      sender?: PromiseOrValue<string> | null,
      txIndex?: PromiseOrValue<BigNumberish> | null
    ): ExecuteTransactionEventFilter;
    ExecuteTransaction(
      sender?: PromiseOrValue<string> | null,
      txIndex?: PromiseOrValue<BigNumberish> | null
    ): ExecuteTransactionEventFilter;

    "RevokeConfirmation(address,uint256)"(
      sender?: PromiseOrValue<string> | null,
      txIndex?: PromiseOrValue<BigNumberish> | null
    ): RevokeConfirmationEventFilter;
    RevokeConfirmation(
      sender?: PromiseOrValue<string> | null,
      txIndex?: PromiseOrValue<BigNumberish> | null
    ): RevokeConfirmationEventFilter;

    "SubmitTransaction(address,uint256,address,uint256,uint8)"(
      sender?: PromiseOrValue<string> | null,
      txIndex?: PromiseOrValue<BigNumberish> | null,
      to?: PromiseOrValue<string> | null,
      value?: null,
      txType?: null
    ): SubmitTransactionEventFilter;
    SubmitTransaction(
      sender?: PromiseOrValue<string> | null,
      txIndex?: PromiseOrValue<BigNumberish> | null,
      to?: PromiseOrValue<string> | null,
      value?: null,
      txType?: null
    ): SubmitTransactionEventFilter;
  };

  estimateGas: {
    confirmTransaction(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeTransaction(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getTransaction(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTransactionCount(overrides?: CallOverrides): Promise<BigNumber>;

    isConfirmed(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isSigner(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nonce(overrides?: CallOverrides): Promise<BigNumber>;

    quorum(overrides?: CallOverrides): Promise<BigNumber>;

    revokeConfirmation(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    signerCount(overrides?: CallOverrides): Promise<BigNumber>;

    submitNewSigner(
      _newSigner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    submitSendBytecode(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    submitValueTransfer(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    confirmTransaction(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeTransaction(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getTransaction(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTransactionCount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isConfirmed(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isSigner(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    quorum(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    revokeConfirmation(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    signerCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    submitNewSigner(
      _newSigner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    submitSendBytecode(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    submitValueTransfer(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}