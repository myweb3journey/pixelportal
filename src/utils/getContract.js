import ContractAbi from "../utils/CreatorCollectible.json";
import { ethers } from "ethers";

export default function getContract() {
  // Creating a new provider
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  console.log("Provider",provider);

  // Getting the signer
  const signer = provider.getSigner();

  console.log("Signer",signer);

  // Creating a new contract factory with the signer, address and ABI
  let contract = new ethers.Contract(
    "0x2E40989307143B9e21808919768c60253e9C0386",
    ContractAbi.abi,
    signer
  );

  console.log("Contract",contract);

  // Returning the contract
  return contract;
}
