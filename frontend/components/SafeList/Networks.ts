export type Network = {
  chaindId: number;
  name: string;
  blockExplorer?: string;
  factoryContractAddress: string;
  symbol: string;

  shortName: string;
};

export const networks: Network[] = [
  {
    chaindId: 1,
    name: "Mainnet",
    blockExplorer: "https://etherscan.io/",
    factoryContractAddress: "",
    symbol: "eth",
    shortName: "eth",
  },
  {
    chaindId: 5,
    name: "Goerli",
    blockExplorer: "https://goerli.etherscan.io/",
    factoryContractAddress: "0x6943341A2b8d098cf7838bf032a2A4e44644782D",
    symbol: "eth",
    shortName: "gor",
  },
  {
    chaindId: 11155111,
    name: "Sepolia",
    blockExplorer: "https://sepolia.etherscan.io/",
    factoryContractAddress: "0x8583d8b5A1221C34c4a2359c5e3B7e261FD14994",
    symbol: "eth",
    shortName: "sep",
  },
  {
    chaindId: 31337,
    name: "Local Hardhat",
    factoryContractAddress: "0x5fbdb2315678afecb367f032d93f642f64180aa3",
    symbol: "eth",
    shortName: "loc",
  },
  {
    chaindId: 80001,
    name: "Mumbai",
    factoryContractAddress: "0xFa19705AB3BCf9B85B3aE5cf834CbB420fccFb30",
    symbol: "MATIC",
    shortName: "mum",
  },
];

export const undefinedNetwork: Network = {
  chaindId: 0,
  name: "Unknown Network",
  factoryContractAddress: "",
  symbol: "und",
  shortName: "und",
};

export function findNetworkById(chainId: number): Network {
  return (
    networks.find((network) => network.chaindId == chainId) ?? undefinedNetwork
  );
}
