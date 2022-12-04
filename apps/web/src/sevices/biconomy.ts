
import SocialLogin from "@biconomy/web3-auth";
import { watch } from "vue";
import { ethers } from "ethers";
import {useUserStore} from "@/store/user";
import { storeToRefs } from "pinia";
import {Biconomy} from "@biconomy/mexa";
import Web3 from "web3";

const {setAddress, setETHProvider, setFVMProvider, setENSName,setBiconomyETH,setBiconomyFVM } = useUserStore()
const {FVMProvider,biconomyFvm,address } = storeToRefs(useUserStore())

const contractABI =[
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_trustedForwarder",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "cid",
        "type": "string"
      }
    ],
    "name": "addUserPost",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "followUser",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "getUserFollowers",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "getUserFollowings",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "getUserPosts",
    "outputs": [
      {
        "internalType": "uint64[]",
        "name": "",
        "type": "uint64[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "forwarder",
        "type": "address"
      }
    ],
    "name": "isTrustedForwarder",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "trustedForwarder",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "versionRecipient",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];
const contractAddress ="0x0Bef00Ce9fE52bd17A028d03564d37FF7E76a3ee";
export class BiconomyService {
  socialLoginSDK = new SocialLogin();
 
  constructor() {
    this.init()
  }

  init = async ()=>{
   
    await this.socialLoginSDK.init('0x1');
    this.socialLoginSDK.showConnectModal();
    this.checkUserLogged()
  }

  checkUserLogged = async ()=>{
    let checkProvider = setInterval(async () => {
      if (!this.socialLoginSDK?.web3auth?.provider) return;
    const provider = new ethers.providers.Web3Provider(
      this.socialLoginSDK.web3auth.provider as any
    );

  //   let biconomyETH = new Biconomy(new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/28efbcb80b3a49f692f07a2a7b869823") as any,
  //   {
  //     walletProvider: provider, 
  //     apiKey: 'c561f1bc-6732-421a-920a-5232cc678b4f', 
  //     debug: true,
  //     contractAddresses:[contractAddress]
  //   } as any);   
    
  // let ethProvider = new ethers.providers.Web3Provider(biconomyETH as any);
  // setETHProvider(ethProvider)
  // setBiconomyETH(biconomyETH)

  let biconomyFVM = new Biconomy(new Web3.providers.HttpProvider("https://wallaby.node.glif.io/rpc/v0") as any,
    {
      walletProvider: provider, 
      apiKey: 'c561f1bc-6732-421a-920a-5232cc678b4f', 
      debug: true,
      contractAddresses:[contractAddress]
    } as any);  
  // let fvmProvider = new ethers.providers.Web3Provider(biconomyFVM as any);
  let networkWeb3 = new Web3(biconomyFVM as any);

   
 setFVMProvider(networkWeb3)
   setBiconomyFVM(biconomyFVM)

    
    
    const accounts = await provider.listAccounts();
    if(accounts[0]){
      const address = await provider.lookupAddress(accounts[0])
      setENSName(address ?? '')
      setAddress(accounts[0]);
      this.socialLoginSDK.hideWallet();
      clearInterval(checkProvider)
    }
    }, 1000);
  }

  async postUserPost(cid:string){
    let contract = new (FVMProvider.value as any).eth.Contract(
      contractABI,contractAddress);
     let userAddress = address.value;

     console.log(FVMProvider.value);
     
console.log(contract);
console.log(contract.methods.addUserPost(cid));

     let tx = contract.methods.addUserPost(cid).send({
      from: userAddress,
      signatureType: (biconomyFvm.value as any).eip712Sign,
      //optionally you can add other options like gasLimit
  });
     
  tx.on("transactionHash", function (hash:any) {
    console.log(`Transaction hash is ${hash}`);
}).once("confirmation", function (confirmationNumber:any, receipt:any) {
    console.log(receipt);
    console.log(receipt.transactionHash);
    //do something with transaction hash
}); 

  }

  showModel = async ()=>{
    
    this.socialLoginSDK.showWallet();
   this.checkUserLogged()

  }

  signOut = async ()=>{
    this.socialLoginSDK.logout();
    setAddress('')
  }

}
