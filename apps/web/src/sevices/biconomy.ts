
import SocialLogin from "@biconomy/web3-auth";
import { watch } from "vue";
import { ethers } from "ethers";
import {useUserStore} from "@/store/user";
import { storeToRefs } from "pinia";
const {setAddress } = useUserStore()
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
    console.log(await provider.lookupAddress("0xc35002fa2133a8d2bBCe8359213a12B548CeA03e"));
    
    
    const accounts = await provider.listAccounts();
    if(accounts[0]){
      setAddress(accounts[0]);
      this.socialLoginSDK.hideWallet();
      clearInterval(checkProvider)
    }
    }, 1000);
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
