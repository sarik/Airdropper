import logo from "./logo.svg";
import "./App.css";
import blockChainConnector from "./Blockchainconnector";
import Web3 from "web3";
import { useEffect, useState, useRef } from "react";
import readXlsxFile from "read-excel-file";
window.webbb = Web3;
const Tx = require("ethereumjs-tx");
//cointool_eth_233439

//window.webb =  new Web3(window.web3.currentProvider);

function App() {
  const abi = [
    {
      constant: false,
      inputs: [
        {
          name: "_vipList",
          type: "address[]",
        },
      ],
      name: "addToVIPList",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_to",
          type: "address[]",
        },
        {
          name: "_value",
          type: "uint256[]",
        },
      ],
      name: "bulksend",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_tokenAddress",
          type: "address",
        },
        {
          name: "_to",
          type: "address[]",
        },
        {
          name: "_value",
          type: "uint256[]",
        },
      ],
      name: "bulkSendCoinWithDifferentValue",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_tokenAddress",
          type: "address",
        },
        {
          name: "_to",
          type: "address[]",
        },
        {
          name: "_value",
          type: "uint256",
        },
      ],
      name: "bulkSendCoinWithSameValue",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_to",
          type: "address[]",
        },
        {
          name: "_value",
          type: "uint256[]",
        },
      ],
      name: "bulkSendETHWithDifferentValue",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_to",
          type: "address[]",
        },
        {
          name: "_value",
          type: "uint256",
        },
      ],
      name: "bulkSendETHWithSameValue",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_tokenAddress",
          type: "address",
        },
        {
          name: "_to",
          type: "address[]",
        },
        {
          name: "_value",
          type: "uint256[]",
        },
      ],
      name: "bulksendToken",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_tokenAddress",
          type: "address",
        },
        {
          name: "_to",
          type: "address[]",
        },
        {
          name: "_value",
          type: "uint256",
        },
      ],
      name: "drop",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_tokenAddress",
          type: "address",
        },
        {
          name: "_to",
          type: "address[]",
        },
        {
          name: "_value",
          type: "uint256",
        },
      ],
      name: "dropLazyy",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_tokenAddress",
          type: "address",
        },
      ],
      name: "getBalance",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_tokenAddress",
          type: "address",
        },
        {
          name: "_to",
          type: "address[]",
        },
        {
          name: "_value",
          type: "uint256",
        },
      ],
      name: "newe",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "registerVIP",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_vipList",
          type: "address[]",
        },
      ],
      name: "removeFromVIPList",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_to",
          type: "address[]",
        },
        {
          name: "_value",
          type: "uint256",
        },
      ],
      name: "sendEth",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_addr",
          type: "address",
        },
      ],
      name: "setReceiverAddress",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_fee",
          type: "uint256",
        },
      ],
      name: "setTxFee",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_fee",
          type: "uint256",
        },
      ],
      name: "setVIPFee",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          name: "token",
          type: "address",
        },
        {
          indexed: false,
          name: "total",
          type: "uint256",
        },
      ],
      name: "LogTokenBulkSent",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          name: "token",
          type: "address",
        },
        {
          indexed: false,
          name: "receiver",
          type: "address",
        },
        {
          indexed: false,
          name: "balance",
          type: "uint256",
        },
      ],
      name: "LogGetToken",
      type: "event",
    },
    {
      constant: true,
      inputs: [],
      name: "getReceiverAddress",
      outputs: [
        {
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "_addr",
          type: "address",
        },
      ],
      name: "isVIP",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "owner",
      outputs: [
        {
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "receiverAddress",
      outputs: [
        {
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "txFee",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "VIPFee",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "",
          type: "address",
        },
      ],
      name: "vipList",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
  ];

  const tokenabi = [
    {
      inputs: [
        {
          internalType: "string",
          name: "name_",
          type: "string",
        },
        {
          internalType: "string",
          name: "symbol_",
          type: "string",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
      ],
      name: "allowance",
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
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "balanceOf",
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
      name: "decimals",
      outputs: [
        {
          internalType: "uint8",
          name: "",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "subtractedValue",
          type: "uint256",
        },
      ],
      name: "decreaseAllowance",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "addedValue",
          type: "uint256",
        },
      ],
      name: "increaseAllowance",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
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
          internalType: "address",
          name: "recipient",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "transfer",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "sender",
          type: "address",
        },
        {
          internalType: "address",
          name: "recipient",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];
  const [available, setAvailable] = useState("");
  const [locked, setLocked] = useState("");
  const [account, setAccount] = useState("");
  let [allAddress, setAllAddress] = useState([]);
  let [currIndex, setCurrIndex] = useState(0);
  let [loading, setLoading] = useState(false);
  let web3 = blockChainConnector.getweb();

  const airdrop_addresses = [
    "0x5abe9ed84141eaec56f7d6c73c00679a0b3e70e9",
    "0x1a11588796ec510b991894d7c2ccf3e381583c08",
    "0xbf2e9070a0d404534af284698d9709826cab1807",
    "0xe672f1b5cd27376a5d2327b8ce5cfc6c1e1f4a25",
    "0x00a7f4c55a51876a35dc8792520620dc3a2637fc",
    "0xbdf755857d890c56c8f6bee64bf1a66859dac86b",
    "0x2a8f57eabb84cf61a03b7905da866a5db42569f7",
    "0xfd3e13fb9c32a056eaa232600a8083817f82439c",
    "0xae0402ebb62426c06713c3864b22f239d84e22ef",
    "0xc12944108bfc04f8969981461188198aa4fe34bf",
    "0xafc0e8ad26d77668d2e99b8281562545000d6e02",
    "0xd2d0e9262e17555cac0ffaa2b3d9dae2595d044c",
    "0x41d1765ecc0a62baf8fe161f4c4c5186e8fd577e",
    "0x1916fde58e696a0d62ac368b0cb47386adf6ac4b",
    "0x66d41d97fc09937d975f94ae510eadce877ee9df",
    "0x8f4849ea6d9c50e62978343ffa240b58a0d18eb6",
    "0xa55223df442cf4e192f3afb308df5f7bdbabdaae",
    "0x432949426ce46d8de783c85f8cde2a6aa04dcbc2",
    "0xc33a1305888fec7291b9a79eb11cd2d5d81f11ae",
    "0xb88ffa3ca9167f374974e224e7706c32c7dd009b",
    "0x96a860d208c30078e118be322a3c4d697ca45179",
    "0x5e25257c1a4c27e9447bf3a0cd2c14e5eb6968d2",
    "0x0eafd47267098c0ead10217461a6ae7f716b9ac8",
    "0xd0368a4413d868b7d572fa1a5a08f8a5a3def055",
    "0x54ba16a34c899ac4753fea1929e5abd74319e053",
    "0x90e3d05de6407971537e8ab1ec061947e91bbadd",
    "0x78680cde1da05fc0b8b725b6eb74c500a4c972ba",
    "0x08d98a556e7de7e49ac13fcd05548036c1cecc38",
    "0x4349466c2f75980f5bd5c5933de82e1c13fe403e",
    "0xff86e02272c067116ab0c2ccae19e5563d4dc5b6",
    "0x2c0d131698b8a2577afae6397f9ab1fcf2930727",
    "0xcca410554b01a5f7c7d62661d3c90bba22e29287",
    "0x72ad0900a46c02fd24946254c93bdf406a4006be",
    "0xc0d7202430e8fab7e3bd827559140095151007c5",
    "0xe107ceb01242a1dd0f10274046d6859ea2dd0cff",
    "0x0dd5d5291dd7f2aa01388286e32b20e27b833318",
    "0xda2088a9bf2916c23811df46906af15756f775c5",
    "0x550d22c93faba49b72dc31b7c889f610972dbb24",
    "0x3f997d800dac28e3038025e37d13fe70aff960b7",
    "0x7dcb499d31c06b0d50d2f96dc4d70e05b7fb03c2",
    "0x5c987995b68aea44d43bab2c0b28f02c061797ef",
    "0x5ca89815b6087637e8730f0ba3f04dacbe58c9be",
    "0xa536615e8432682cc7f0d8d02668b5e5dea2469e",
    "0xe449db8d1bfbfa77c3bb2beaf5202206aa4a5e0d",
    "0x89b563fcd9cfed8bf069b8c2836532a1d945ccb0",
    "0xd426b4d26e718022b9e343332af2dfa91d96da07",
    "0xb4d00b329d9d6f348b61d6789c41a8ddbc6c7b18",
    "0xf358d96b5a7bdc3a544c273d25a1e36a1a100db6",
    "0x8e81e6722fe9cc1749f623fc0d94ffe863edb642",
    "0x86db7fdd1e3187c35569bc43ad4754e89f813ddc",
    "0x8dbd3b6bc315e65ea30639e26f245faffe13d6fe",
    "0x09566270cff016d5e8bea286436e5db45aa4f3fd",
    "0x0765753f39fac5b45b5bd555ceeb2f5669174fec",
    "0x4620aeb8fe26350507d71ef870926396429aab8c",
    "0x8e476650c040010922b0ce5a626ea27671cf4c06",
    "0xc78ad17d410207e0840a3c0447859c19bca4a6ad",
    "0x942f5bd8b72d416d12eec6b89457ab674ab0d0cd",
    "0x10ac37cd4af30ccc1164710d49c1dac9dc47b465",
    "0x3c65b494b765e5242e5bd68d24a2e8168d19e1c9",
    "0xa5b5d3cdb8fc2dfda3dc9e6c236709bb9ffa50f9",
    "0xa82b5f6327720cf82f2d2ed41332a5adecba5375",
    "0x32da8411dd921470ebee15b9899e678bcb6092aa",
    "0x709d7b1b12d19b8e4bd96aaa9ba27e791eb240c4",
    "0xea5ff47aa08ad5e61b27161c456398abe9be3c79",
    "0xfb62592020919c9b6f656829f431c27ef09a60a1",
    "0x7dfec3ab156af4c8252386d75b4b2b10df500145",
    "0xae17b91927ae78731ccdb2a2f19276eaa8c1b420",
    "0x9a81c498d8fb9dd8cb9147b0b94be216d6eecc73",
    "0x52caa0a29f110dc7ff5fd4aa7380d99505d258bf",
    "0x80958228d64f00e5bb528307f3b425040012cfd5",
    "0x236e76db47015a3e4e3cc6380186e461886e9394",
    "0x33c46b52d56ef1bc7d1a9b4b88fb07f6eefe7266",
    "0xc6f06f7c80356f7dc862f055243f6671ea152136",
    "0x846cb7ffd567e8d6d08ffe9fe965a0c84e77b9d7",
    "0x185929bd8289947495e9a49eb5ca68577b7d2371",
    "0x14e30164d6099477e30e71bbbf7f792ab379b83e",
    "0x9c327faf0f061ac283251ea177011137c7097dfa",
    "0x1a890739e1c3b749424b13bdc7fcc7fba9a80476",
    "0x59a1888fda305df1ce5419d6c95866715e888922",
    "0xc32e5925a120c1b4b3f1e816662586e5f36c6641",
    "0xc03c396296f1c4f50ba9904bd4ccfddd4a6969dd",
    "0xa4a45af48fba8e4bae54554d1cd91660b32da478",
    "0x8df84d0a74c49d28984180ca54332192d4fc51c8",
    "0x608a6d82c4e77b0e538178484653d33bd2292098",
    "0x8cb2d16d8b7e4b1400f7a3bd52cb8adf486f373d",
    "0xae12745cc87552c010f472c81dba95422067fae7",
    "0xe3473784e27b8fb4169e0c029734a9e2ad4ee1b8",
    "0x9f0bc2485a975afb4c411ff41a09d6d17b2434fe",
    "0x5fa40d77cd05dfd15e60245ff80d54152c350b45",
    "0x5b2860162960f8961984c742714e28c7c84843f9",
    "0x8aa567fd397e725ae8acddd6ef325f4c0cb250d5",
    "0xe26d804a6e263b08f3ece701bc40e843702c2242",
    "0xe510bb086e724f47844e27518c6397af2397d1db",
    "0x7cc853b3ec04d96712f868fbdcbbafd761cfb0d7",
    "0x430c37aa575d03c98bcc8791ddc131eb8ea874dc",
    "0xaf109b48f0cd8194c84e2b74cf8e6e03b51f115f",
    "0xc776c8785edf381bc3a7ba46c65e7de163fe1973",
    "0xeebc2e2c4090ea64f6a77b6da926580e27041bdf",
    "0xc2eae5661abd0f19e60091853f99976fbcf7b9e7",
    "0x91e36416d6c6eff60a0306d9626d0b349502d845",
    "0xbab47dcdab0e081b0ef7c47b782197fe7c14288f",
    "0xb6c2dc51d95ae86f92d79524ac43e32177643a50",
    "0x93e110b2963638ec656f15033b067f7d9ca058d6",
    "0x1f2b52b0083c5ae00bd08bc351e07feefce059a6",
    "0x81bee53567b8c39a1de050e243b8afe942e54a66",
    "0xffe124070c34ad47ea1ff678742774fce170a7a8",
    "0x25bb90b18790bbe70a54a8162dda474e0916e501",
    "0x56fa5f7c87a1acc89c45c7d9d4e3d4c84a6d14d9",
    "0x5ea32b814e05c58d6f7582dffc9c9e9183bfc35a",
    "0x8c34324b6ed70f322171862abf767b3f00078a0a",
    "0xf20ba79bea9d9bdc1bf621f256ff1866093b7be2",
    "0x8677d388125fc122674b964bc515748e8f824915",
    "0xee7f496f6d1e8e1c3de993f90d08cdea9de42aec",
    "0x75d9b9d4772b7953b4c7ccfc8908506547bf2ab5",
    "0x6654b471efd69330b748ee7fcf2f3111e37734ef",
    "0x568a7a1a6475a462e79540e7b211e6ecc0d2df33",
    "0xd81aa0d3d7bbbea0ffa5db768da2d44616e42cd2",
    "0xbe051e6e8477ae5aa140911de23ee8277867b881",
    "0x2e2dd6ef4e8e54201de6169cf95391b872e7db2f",
    "0xa79f80388c9aa5143ee8d13c522983e8864ce644",
    "0xfc6e397cce8326d7b1f3e37467b279d751351eed",
    "0xe36ea2d29e049bbad614bc871d502b858d8f6a79",
    "0xb2b60fb07f9b035dca92ac5e99b6f835983788b4",
    "0x7ed6d186877a99e8e1c77f19e51838b3dc8a78b3",
    "0x7bb455289b436a23c929f0bf2b7e6d354b0865dd",
    "0x692c15eda07c5ce1d6704d75ad0d55120efebe4e",
    "0xfe59fb794ea893091c665e2de4910d764e920d34",
    "0xe031c4e4b84c80de91576b05994e9fc2ed65aca0",
    "0xbe748f13519b35a1508293c287bbcbdc56def5b4",
    "0xa2103b5e0a9bb196ba3d83cb7434efd7e06f53f3",
    "0xc4adfb4a9ae1193299c04d3659ead3f6e16477f1",
    "0x2ac76aeb6d27973c2cae5631e2c9b20062d2555e",
    "0x716b70cd27fb653ebbf2d965fedd15adfae36b11",
    "0x25c7656a2c38e587e29a7e6765a84daac3bb3c50",
    "0x878b402a75aa0ca100cd544398a3c2d78326357f",
    "0x8ae6e3500fbfb41fafbce329c38c6d69ebe8cea0",
    "0xc2930c807bd80f2c97b3c0df2c458abb671e960c",
    "0x06c6b74c73ebf2608feb9de552e1656cadca9fcf",
    "0xc1ede6b7ace50c3778230d21376511bc9c885e0f",
    "0xd0ede120a5f42734457f9551355b21a1ac10620f",
    "0x7d01623a2297272d41d47eed5e3eb9d6fc1d1305",
    "0xd4af62200e89655e2495a8d8baad04abb0d92305",
    "0x4a0167e10fde7ee8e61b25baa10cdb2f40d2d2b0",
    "0x44eb1b033784e84a1d230d0930e4cacf28446632",
    "0xc5cba4ff06dc47e37e922be978e89ecbbcd515cf",
    "0xbad017169c69481187fd749f07a8b5a7186e8e0d",
    "0x02300e526ad870e32f3f843c60e997a28e3d3564",
    "0x4647e48c89af9185a399161cb7bae21ae95105e1",
    "0xd3df09efa7e9e14c5f7b761379ad0de0f8f40fbc",
    "0x0ea996ae81a4774360e3f349e23d0d13fe38c57d",
    "0x5731d9c50cc3d4746179cdac17994e49671209b0",
    "0x8e7a9b78e0b3830b1268081c513146cb84ff0469",
    "0xf8b5a8a8b342ab2feaa0c4cbdc4e786bfe3bf80c",
    "0xe7381d2c5f129d42dd446896d10b5ae2640f9000",
    "0xaa80f691820c4b94b10d2cc496573774c06f6d33",
    "0xb4fc0e5214bce95bd51042b42e1a97e84607e56f",
    "0x7a4303895650da58bc373ef07ed70f4fce2bca98",
    "0xdd9d25472c191501db87ea82591bbd03292de4d6",
    "0x97a799b61e7f126ea91e90718803bb3736c06cdc",
    "0x1c4d6a1560578c5fa0a62cb61cf6ea8601c4d6b7",
    "0x8474c1f16eba59aa5d23a41ad85a5b1493775c64",
    "0xd086ef8a17637dc58c2fae339a1ba9ec034232ef",
    "0x2c2ce7008519fa8a6286075a75411c5657d6c49a",
    "0xb0efbb7e38127db7cea87557a9bc59568f8a8c33",
    "0x961ee4c09a2d13de5ecf819c2752a068b544e6e0",
    "0x42a487a92e97d80e1c837d2fa06e15c85f1a43ad",
    "0x3b09cb36c07a73b001069e1135c36b37e6afd5f0",
    "0xcc00370f668d56eded035298052bac382e1ca21f",
    "0xc8b1e5ebd4b7174b42c207e3891bfbe13a89ba18",
    "0xd1582feb107d67b8f2ffa721cc9456737ac7cd4c",
    "0x4cc6d92b5cb8089bafae7f087e44bfce390d4963",
    "0x78c5c1a38f8fe324bdabed802bc01dbe9f3381c1",
    "0xcdf66618d10f9d7395ddc57fcf3bda53a65f8903",
    "0x6f3e3a06320b3c1067aebccb6fbc08bf63375e6b",
    "0xe37965ce9c183a5f80ba88eb3e928ee955dc1f81",
    "0xfb7f76ec7fb41b89b0f7a0a79cdf16daaffba9c9",
    "0x783910e24dd63c4cc6d8a32a99a223baf0be8324",
    "0x4e2e05e29609bc6edd8425eaed2241692ba530f1",
    "0x7604219845e9f82d4cfcea6cb10ff6e416d33569",
    "0x5b1e01a15a34957869711a9428e1ae2d27806313",
    "0x475229ab5e5666f39774f90e9199c9932a53e3e8",
    "0x2b83c340a4c3d3e242d9c49432eee68bd06f8dca",
    "0x9cf1807c6bfa7cb21801da6ff638e0063cc99635",
    "0x13b96a1fe441f42b9ba346158a0fa9a6963e5be4",
    "0xff1bde3eec54446204d27a63faf3cd7fc4c025aa",
    "0xe2befe929370348a58c0c40ddd7736b96fd76cf9",
    "0x2c54bd4f5a96dac2df12b1b57481bc14446a02ec",
    "0x3ca62be210657bd9c5804e6d1a09ee73a8146248",
    "0x2f6924233ae1498a07f12ee151d7aa5da30fa74a",
    "0x4d820a09cbbcacf2625f67c15ad3ab36610ccf0c",
    "0x87b1d8ad8e3eeaae0bf01a39b74459eaf1b5b76f",
    "0x37e124d54981ba72b59a00210aad7ff7c5e1aaae",
    "0xbbd946bbffa70a2542e1e47488661be572ec0a5d",
    "0xd5d6824e581a372bc2f96766765133aaaebf7f83",
    "0x740526483424307a722ee8295f6f4188078391fe",
    "0xa7b23a5f5ff0f7d1e5667df2b7f6d815dadc6959",
    "0xcbf1e515f41795688592cb64a0731fd771d51c7b",
    "0x88289cf0e7bf89365d5cc23b6769bbbe9919a905",
    "0x48ee7183ac79f5d655df34807404a87317642d45",
    "0x1df68cfe8f2fb31cfa59b873b155c213d23feba3",
    "0xf7f2a602f35e3eddb298ac676e434d1c8d176a82",
    "0x92e5453a1c372e9a0bd998056a7dd5a40cb37f3b",
    "0x8e089d0534bf137e67f4002b2f408a8ac78b0571",
    "0x8fe8a7a06f0917ea73cd378943dbb34d62993fa6",
    "0xad3ede7d946d509b04854b8b3cc6086dace4f56a",
    "0x4525c9acb5c4cd898a32abb99c0c06ea16d3123b",
    "0xb2a21ec39895372e9615f01f1fabaa31f4136a3e",
    "0x5b7a0dd218c85f268c2f649b0dda214bd9360f7b",
    "0x5d745231e6e6e419c2d2b5343e8ff03c68ecf24c",
    "0x6eecc9d141c9d446571f2ac11ce42743ca90001e",
    "0x9dbd913bf873cf0ae036408f896fa1b725b00803",
    "0x40110cb86fee470c1a30ae2ee2c56ab1548654f4",
    "0xf1bbf791f67f79a5217cb241123433a7fe630b11",
    "0x2bc5f3f53949705c4935998faf1e4dd49c4b8dd5",
    "0x202dca8e323eaef10df06eede60482120b4c3e29",
    "0x991acff3cf50b5ede507b56fbb722df4d81999f7",
    "0x35122595f9968386e4ca1bf3fc90a7953b9d04a6",
    "0xbb5c5dfce81f7eb1ee60eb061fa982d4a6c640c8",
    "0x63d17ed78caa2874b2e632730fd72bbc16a345e1",
    "0xc5148a48a3f3624e9a15587eb12373749c47153b",
    "0x2c0ba0cb3a35d5695658c36ba77dd6bac4edc058",
    "0x402e424f2c8f42a92b00e729b367d5ecf9510666",
    "0xef9739209f9deb28763ef1033eb0dc6081636d46",
    "0xf634c6bb057c2bab20056cb73eada105fdbe5eff",
    "0x317ed50d9467d0050832eedea8f436bae9485821",
    "0x273cadab83666d8de4ed2636dbdb5313bb6a4570",
    "0xbfd57970a250a18e3a18cf887103a331e4d89b39",
    "0xa14c3c6cb3e1c6195c9f32d7e91cfac866a82b01",
    "0xb26b650555d14ce59c2cdf5c25e46ade2b3020d2",
    "0x95133a52ce4591b65caae1d4b1ab374f61d84896",
    "0x8a340850514638be6b3d92ffea1f19006e760dd9",
    "0x7071f010b820e8571f3b0bb230f85f034100c447",
    "0xc3986ccad4357456808fdb25ca446d2b3910ceb2",
    "0xb799a615d8dad19b880d8afe821e265fb715faec",
    "0xe0b762eed4825effc2cf25146ada0c4c51021a75",
    "0x4d85a3af730b76f403995846b77bc720929e5505",
    "0xb7169266944a9100be582a945b7559f08b79a784",
    "0xdf454a4f859f52a1cf07d0a8a61f395d50e82034",
    "0x46d7a3f896548dfcbcfe8c3f68e4b756d643fb70",
    "0x078d56cc15aa7b9ffc7e73130b2fd60bc478f708",
    "0xa7919ac246eea882db17af09946c41bb29f26e12",
    "0xf9d69d1573aeeb1791be53d9bdf5276427b14b85",
    "0xc254c13383731658906e622056f2fb6410c120e7",
    "0x89bf16328641a24de95d6adc4f7fea57dde753d1",
    "0x96bf7e40d2a4b4a4b2fbce02e7609e68051272e5",
    "0x1ea87ee29811dee511c7910790df708d1e70e910",
    "0xfbb8867f3e377d44d7877e369e25e9486c25a025",
    "0x4d8773e838d4d51143859e9044f9427a45368daf",
    "0x6d135f9f1391544a0a98b884adfc33e18c84f5f8",
    "0xfcbeca81bbb3bb9f0d45eec38cba81b2d36c526d",
    "0x1779363cdc68c5b0718d3d3536e1c085da99ee3a",
    "0x0ae88adcd7c57b3c3ea0b6d21f566b97353c5bf8",
  ];

  useEffect(() => {
    const readd = () => {
      const schema = {
        Address: {
          // JSON object property name.
          prop: "address",
          type: String,
        },
      };

      readXlsxFile(document.getElementById("input").files[0], { schema })
        .then((result) => {
          // `rows` is an array of rows
          // each row being an array of cells.

          let allAddress = result.rows.map((add) => add.address);
          console.log(allAddress);
          //alert("success");
          setAllAddress(allAddress);
        })
        .catch((e) => {
          alert("failed");
        });
    };

    document.getElementById("input").addEventListener("change", readd);

    return () => {
      document.getElementById("input").removeEventListener("change", readd);
    };
  }, []);

  const buttonEl = useRef(null);
  const currentAccount = useRef(null);

  useEffect(() => {
    blockChainConnector.getCurrentAccount().then((account) => {
      setAvailable(account.toString());
      //window.ethereum.selectedAddress
      //window.ethereum.isMetaMask
      //web3.eth.personal
      //.sign("sign it", "0x24096E225d57965239017Ede2186282dE3FaAb68")

      //web3.eth.personal
      //.sign("sign it", window.ethereum.selectedAddress)

      //Signing this message can have dangerous side effects.
      //Only sign messages from sites you fully trust with your entire account.
      // This dangerous method will be removed in a future version. Learn more
      //https://metamask.zendesk.com/hc/en-us/articles/360015488751

      //Safer alternatives
      //https://medium.com/metamask/scaling-web3-with-signtypeddata-91d6efc8b290
      //web3.eth
      //.sign("sign it", "0x24096E225d57965239017Ede2186282dE3FaAb68")
    });

    /* useEffect(() => {
      window.ethereum.on("chainChanged", (network) => {
        alert("")
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider)
      });
    }, [provider]);
   */
    //setMsg(account)
    /*   blockChainConnector
      .isAvailable()
      .catch((e) => setMsg("wallet not available"))
      .then((r) => setMsg("wallet available", r));
    blockChainConnector
      .isUnlocked()
      .catch((e) => setLocked("wallet locked"))
      .then((r) => setLocked("wallet not locked", r));
    blockChainConnector
      .defaultAccount()
      .catch((e) => setAccount("wallet account not found"))
      .then((r) => setAccount("wallet account found", r));*/
  }, []);

  //Detecting web3
  //https://docs.metamask.io/guide/getting-started.html

  useEffect(() => {
    //window.ethereum.chainId
    window.ethereum.on("chainChanged", (network) => {
      console.log("changes");
      alert("chain changed");
      // setProvider(provider)
    });
  }, []);

  useEffect(() => {
    window.ethereum.on("disconnect", (accounts) => {
      alert("disconnected");
    });
    window.ethereum.on("accountsChanged", (accounts) => {
      alert("accountsChanged");
      window.ethereum.request({ method: "eth_accounts" }).then((accounts) => {
        if (accounts.length === 0) {
          console.log("Metamask is Disconnected");
        } else {
          setAccount(accounts[0]);
          console.log("Metamask is Connected");
        }
      });
    });
  }, []);

  useEffect(() => {
    const ethereumButton = document.querySelector(".enableEthereumButton");
    ethereumButton.addEventListener("click", () => {
      //Will Start the metamask extension
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((acc) => {
          alert("connected account", acc);
          setAccount(acc);
        })
        .catch(() => alert("you rejected"));
    });
  }, []);

  useEffect(() => {
    const ethereumButton = document.querySelector(".checkconnected");
    ethereumButton.addEventListener("click", () => {
      window.ethereum.request({ method: "eth_accounts" }).then((accounts) => {
        if (accounts.length === 0) {
          console.log("Metamask is Disconnected");
        } else {
          console.log("Metamask is Connected");
        }
      });
    });
  }, []);

  /*async function getAccount() {
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  }*/

  /*  useEffect(() => {
    const ethereumButton = buttonEl.current;
    ethereumButton.addEventListener("click", () => {
      //Will Start the metamask extension
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((acc) => {
          alert("connected account", acc);
          setAccount(acc);
        })
        .catch(() => alert("you rejected"));
    });
    if (window.ethereum.selectedAddress && web3.currentProvider.isMetaMask) {
      currentAccount.current = window.ethereum.selectedAddress;
    }
  }, []);*/

  /* useEffect(() => {
    const sendEthButton = document.querySelector(".sendEthButton");
    sendEthButton.addEventListener("click", () => {
      console.log("from is ", window.ethereum.selectedAddress);
      window.ethereum
        .request({
          method: "eth_sendTransaction",
          params: [
            {
              //from: "0x24096E225d57965239017Ede2186282dE3FaAb68", //accounts[0],
              //from: "0x"+window.ethereum.selectedAddress, //accounts[0],
              from: window.ethereum.selectedAddress,
              //Using ref,since using state inside eventlistener will put the account value inside closure
              //which doesnt get change even after changing it anywhere in app using setAccount setter
              //from: currentAccount.current,
              to: "0x2f318C334780961FB129D2a6c30D0763d9a5C970",
              //parseInt("3000000000000000000", 10).toString(16)
              value: "0x29a2241af62c0000", //3000000000000000000 ie 3 eth
              gasPrice: "0x09184e72a000",
              gas: "0x2790",
            },
          ],
        })
        .then((txHash) => console.log(txHash))
        .catch((error) => console.error);
    });
  }, []);*/

  const airdrop = async () => {
    const target = "0x1aaF3Be64733878D47F5Df95f232fe70F1628336";
    //const target = "0x75df99e6bb3543d468d182d5122110aba612f7c1"
    const contract = new web3.eth.Contract(abi, target);
    //console.log(contract.methods.owner.call());
    contract.methods
      .owner()
      .call()
      .then((res) => console.log(res));

    //const gasPrice = "40";
    //const gasLimit = 3000000;
    const txCount = await web3.eth.getTransactionCount(
      "0x271D73e8e8542a7dD7a3E830ce811b1b9644876f"
    );
    console.log(txCount);
    const txObject = {
      from: "0x271D73e8e8542a7dD7a3E830ce811b1b9644876f",
      nonce: web3.utils.toHex(txCount),
      //gasPrice: web3.utils.toHex(web3.utils.toWei(gasPrice, "gwei")),
      //gasLimit: web3.utils.toHex(gasLimit),
      to: target,
      data: contract.methods
        //.addToVIPList(["0x271D73e8e8542a7dD7a3E830ce811b1b9644876f"])
        .newe(
          "0x6b3bc94b7308eac968d422157399e78cc7615c55",
          /*[
            "0xd29cf933f558D10f534A18671E69838D3F45721a",
            "0xf6aA53fdEed8d7F65A0fbF378D632102342Be905",
            "0xcb081f8f91dbe5Ff7ec7ee5Ed67b28A1756a916f",
          ],*/
          //new Array(256).fill("0xd29cf933f558D10f534A18671E69838D3F45721a"),
          // airdrop_addresses,
          allAddress.slice(currIndex, currIndex + 255),
          100000000
        )
        .encodeABI(),
    };

    /*const tx = new Tx(txObject);
    const pk = Buffer.from(
      "",
      "hex"
    );
    tx.sign(pk);
    const serializedTx = tx.serialize();
    const raw = "0x" + serializedTx.toString("hex");
    const transactionHash = await web3.eth.sendSignedTransaction(raw);*/

    setLoading(true);
    const txHash = await window.ethereum
      .request({
        method: "eth_sendTransaction",
        params: [txObject],
      })
      .then((txHash) => {
        console.log(txHash);
        setCurrIndex(currIndex + 255);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  const approve = async () => {
    const target = "0x6b3bc94b7308eac968d422157399e78cc7615c55";

    const contract = new web3.eth.Contract(tokenabi, target);

    /* contract.methods
      .owner()
      .call()
      .then((res) => console.log(res));*/

    //const gasPrice = "40";
    //const gasLimit = 3000000;
    const txCount = await web3.eth.getTransactionCount(
      "0x271D73e8e8542a7dD7a3E830ce811b1b9644876f"
    );
    console.log(txCount);
    const txObject = {
      from: "0x271D73e8e8542a7dD7a3E830ce811b1b9644876f",
      nonce: web3.utils.toHex(txCount),
      //gasPrice: web3.utils.toHex(web3.utils.toWei(gasPrice, "gwei")),
      //gasLimit: web3.utils.toHex(gasLimit),
      to: target,
      data: contract.methods
        //.addToVIPList(["0x271D73e8e8542a7dD7a3E830ce811b1b9644876f"])
        .approve("0x1aaF3Be64733878D47F5Df95f232fe70F1628336", 1000)
        .encodeABI(),
    };

    setLoading(true);
    const txHash = await window.ethereum
      .request({
        method: "eth_sendTransaction",
        params: [txObject],
      })
      .then((txHash) => {
        console.log(txHash);
        setCurrIndex(currIndex + 255);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  if (loading) return <div>Loading...</div>;
  return (
    <div className="App">
      Account:{account}
      <br />
      <input type="file" id="input" />
      <button className="checkconnected">Check connected</button>
      <button className="enableEthereumButton">Connect to metmask</button>
      <button onClick={() => airdrop()}>Airdrop</button>
      <button onClick={() => approve()}>Approve</button>
      <button ref={buttonEl}>By ref</button>
      <button className="sendEthButton btn">Send Eth</button>
      {/*<header className="App-header">
        Available: {available}
        <br />
        Locked: {locked}
        <br />
        Account {account}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
      <button
        onClick={() => {
          setCurrIndex(currIndex + 345);
        }}
        disabled={
          Math.ceil((currIndex + 1) / 255) ===
            Math.ceil(allAddress.length / 255) || allAddress.length === 0
        }
      >
        Next 255
      </button>
      Page {Math.ceil((currIndex + (allAddress.length > 0 ? 1 : 0)) / 255)} of{" "}
      {Math.ceil(allAddress.length / 255)}
      Total Addresses:{allAddress.length}
      <br />
      <br />
      {allAddress.slice(currIndex, currIndex + 255).map((val) => {
        return <div>{val}</div>;
      })}
      {/*{JSON.stringify(allAddress.slice(currIndex, currIndex + 255), null, 2)}
      {currIndex}*/}
    </div>
  );
}

export default App;
