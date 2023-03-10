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
  PayableOverrides,
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

export interface SafeFactoryInterface extends utils.Interface {
  functions: {
    "createSafe(address[],uint256)": FunctionFragment;
    "getNumberOfSafes()": FunctionFragment;
    "getSafe(uint256)": FunctionFragment;
    "safesCount()": FunctionFragment;
    "safesLuT(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "createSafe"
      | "getNumberOfSafes"
      | "getSafe"
      | "safesCount"
      | "safesLuT"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createSafe",
    values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getNumberOfSafes",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSafe",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "safesCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "safesLuT",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "createSafe", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getNumberOfSafes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getSafe", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "safesCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "safesLuT", data: BytesLike): Result;

  events: {
    "SafeCreated(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SafeCreated"): EventFragment;
}

export interface SafeCreatedEventObject {
  safeAddress: string;
  byUser: string;
  index: BigNumber;
}
export type SafeCreatedEvent = TypedEvent<
  [string, string, BigNumber],
  SafeCreatedEventObject
>;

export type SafeCreatedEventFilter = TypedEventFilter<SafeCreatedEvent>;

export interface SafeFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SafeFactoryInterface;

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
    createSafe(
      _signers: PromiseOrValue<string>[],
      _quorum: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getNumberOfSafes(overrides?: CallOverrides): Promise<[BigNumber]>;

    getSafe(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    safesCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    safesLuT(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  createSafe(
    _signers: PromiseOrValue<string>[],
    _quorum: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getNumberOfSafes(overrides?: CallOverrides): Promise<BigNumber>;

  getSafe(
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  safesCount(overrides?: CallOverrides): Promise<BigNumber>;

  safesLuT(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    createSafe(
      _signers: PromiseOrValue<string>[],
      _quorum: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    getNumberOfSafes(overrides?: CallOverrides): Promise<BigNumber>;

    getSafe(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    safesCount(overrides?: CallOverrides): Promise<BigNumber>;

    safesLuT(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "SafeCreated(address,address,uint256)"(
      safeAddress?: PromiseOrValue<string> | null,
      byUser?: PromiseOrValue<string> | null,
      index?: null
    ): SafeCreatedEventFilter;
    SafeCreated(
      safeAddress?: PromiseOrValue<string> | null,
      byUser?: PromiseOrValue<string> | null,
      index?: null
    ): SafeCreatedEventFilter;
  };

  estimateGas: {
    createSafe(
      _signers: PromiseOrValue<string>[],
      _quorum: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getNumberOfSafes(overrides?: CallOverrides): Promise<BigNumber>;

    getSafe(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    safesCount(overrides?: CallOverrides): Promise<BigNumber>;

    safesLuT(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createSafe(
      _signers: PromiseOrValue<string>[],
      _quorum: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getNumberOfSafes(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSafe(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    safesCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    safesLuT(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
