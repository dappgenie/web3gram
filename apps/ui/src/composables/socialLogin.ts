import { ethers } from 'ethers'
import { Web3AuthCore } from '@web3auth/core'
import SmartAccount from "@biconomy/smart-account";
import { NetworkSwitch } from '@web3auth/ui'
import {
  WALLET_ADAPTERS,
  CHAIN_NAMESPACES,
  SafeEventEmitterProvider,
  UserInfo
} from '@web3auth/base'
import { OpenloginAdapter } from '@web3auth/openlogin-adapter'
import { MetamaskAdapter } from '@web3auth/metamask-adapter'
import { WalletConnectV1Adapter } from '@web3auth/wallet-connect-v1-adapter'
import QRCodeModal from '@walletconnect/qrcode-modal'
import NodeClient, { WhiteListSignatureResponse } from '@biconomy/node-client'
import SocialLogin from '@biconomy/web3-auth'
import { ChainId, supportedChains } from '~/utils/factories/chainConfig';

type DefaultSocialLoginConfig = {
  backendUrl: string
}

export class useSocialLogin {
  walletDiv: any
  walletIframe: any
  iWin: any = false
  iframeInitialized = false
  isInit = false
  clientId: string
  userInfo: Partial<UserInfo> | null = null
  web3auth: Web3AuthCore | null = null
  provider: SafeEventEmitterProvider | null = null
  backendUrl!: string
  nodeClient!: NodeClient

  constructor(backendUrl: string = defaultSocialLoginConfig.backendUrl) {
    this.isInit = false
    this.web3auth = null
    this.provider = null
    this.clientId =
      'BEQgHQ6oRgaJXc3uMnGIr-AY-FLTwRinuq8xfgnInrnDrQZYXxDO0e53osvXzBXC1dcUTyD2Itf-zN1VEB8xZlo'
    this.backendUrl = backendUrl
    this.nodeClient = new NodeClient({ txServiceUrl: this.backendUrl })
  }

  async whitelistUrl(origin: string): Promise<string> {
    /*const appKeyBuf = Buffer.from(this.apiKey.padStart(64, '0'), 'hex')
    if (base64url.encode(getPublic(appKeyBuf)) !== this.clientId) throw new Error('appKey mismatch')
    const sig = await sign(
      appKeyBuf,
      Buffer.from(keccak('keccak256').update(origin).digest('hex'), 'hex')
    )
    return base64url.encode(sig)*/

    const whiteListUrlResponse: WhiteListSignatureResponse = await this.nodeClient.whitelistUrl(
      origin
    )
    console.log(whiteListUrlResponse.data)
    return whiteListUrlResponse.data
  }

  async init(
    chainId: string,
    whitelistUrls?: { [P in string]: string },
    network: 'mainnet' | 'testnet' = 'testnet'
  ) {
    try {
      console.log('SocialLogin init')
      const web3AuthCore = new Web3AuthCore({
        clientId: this.clientId,
        chainConfig: {
          chainNamespace: CHAIN_NAMESPACES.EIP155,
          chainId: chainId
        }
      })

      const openloginAdapter = new OpenloginAdapter({
        adapterSettings: {
          clientId: this.clientId,
          network: network,
          uxMode: 'redirect',
          whiteLabel: {
            name: 'Biconomy SDK',
            logoLight: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9543.png',
            logoDark: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9543.png',
            defaultLanguage: 'en',
            dark: true
          },
          originData: whitelistUrls
        }
      })
      const metamaskAdapter = new MetamaskAdapter({
        clientId: this.clientId
      })
      const networkUi = new NetworkSwitch()
      const wcAdapter = new WalletConnectV1Adapter({
        adapterSettings: {
          qrcodeModal: QRCodeModal,
          networkSwitchModal: networkUi
        }
      })

      web3AuthCore.configureAdapter(openloginAdapter)
      web3AuthCore.configureAdapter(metamaskAdapter)
      web3AuthCore.configureAdapter(wcAdapter)
      await web3AuthCore.init()
      this.web3auth = web3AuthCore
      if (web3AuthCore && web3AuthCore.provider) {
        console.log("🚀 ~ file: socialLogin.ts ~ line 111 ~ useSocialLogin ~ web3AuthCore.provider", web3AuthCore.provider)
        this.provider = web3AuthCore.provider
      }
      const web3Provider = new ethers.providers.Web3Provider(web3AuthCore.provider);
      const signer = web3Provider.getSigner();
      const address = await signer.getAddress();
      const chain = await web3Provider.getNetwork();
      const wallet = new SmartAccount(web3Provider, {
        activeNetworkId: chainId,
        supportedNetworksIds: supportedChains,
        networkConfig: [
          {
            chainId: ChainId.POLYGON_MUMBAI,
            dappAPIKey: "59fRCMXvk.8a1652f0-b522-4ea7-b296-98628499aee3",
          },
          {
            chainId: ChainId.POLYGON_MAINNET,
            // dappAPIKey: todo
          },
        ],
      });

      // Wallet initialization to fetch wallet info
      const smartAccount = await wallet.init();
      const { data } = await smartAccount.getSmartAccountsByOwner({
        chainId: Number(chainId),
        owner: address,
      });
      const web3State = {
        address,
        network: chain,
        smartContract: data[0].smartAccountAddress
      }
      this.isInit = true
      return web3State
    } catch (error) {
      console.error(error)
      return error
    }
  }

  getProvider() {
    return this.provider
  }

  _createIframe(iframeContainerDiv: any) {
    this.walletIframe = document.createElement('iframe')
    this.walletIframe.style.display = 'none'
    this.walletIframe.style.display = 'relative'
    this.walletIframe.onload = () => {
      this.iWin = this.walletIframe.contentWindow || this.walletIframe
      this.iframeInitialized = true
    }
    iframeContainerDiv.appendChild(this.walletIframe)
  }

  showWallet() {
    this.walletDiv.style.display = 'block'
    this.walletIframe.style.display = 'block'
    // Set height and width of the iframe to 600x341
    this.walletIframe.style.height = '600px'
    this.walletIframe.style.width = '341px'
    this.walletIframe.style.border = '0px'
    this.walletIframe.style.borderRadius = '3%'
    const el = document.getElementById('w3a-modal')
    el?.dispatchEvent(new Event('show-modal'))
  }

  hideWallet() {
    console.log('hide wallet')
    this.walletDiv.style.display = 'none'
    this.walletIframe.style.display = 'none'
  }

  showConnectModal() {
    // createLoginModal(this)
  }

  async getUserInfo() {
    if (this.web3auth) {
      console.log("🚀 ~🚀 ~🚀 ~🚀 ~ file: socialLogin.ts ~ line 192 ~ useSocialLogin ~ getUserInfo ~ this.web3auth", this.web3auth)
      const userInfo = await this.web3auth.getUserInfo()
      this.userInfo = userInfo
      return userInfo
    }
    console.log("🚀 ~ file: socialLogin.ts ~ line 192 ~ useSocialLogin ~ getUserInfo ~ this.web3aut", this.web3auth)
    return null
  }

  async socialLogin(loginProvider: string) {
    console.log("🚀 ~ 🚀 ~ 🚀 ~ 🚀 ~  ~ useSocialLogin ~ socialLogin ~ loginProvider", loginProvider)
    if (!this.web3auth) {
      console.log('web3auth not initialized yet')
      return
    }
    try {
      const web3authProvider = await this.web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {
        loginProvider: loginProvider
      })
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const web3Provider = new ethers.providers.Web3Provider(web3authProvider!)
      const signer = web3Provider.getSigner()
      const gotAccount = await signer.getAddress()
      const network = await web3Provider.getNetwork()
      console.info(`EOA Address ${gotAccount}\nNetwork: ${network}`)
      this.provider = web3authProvider
      return web3authProvider
    } catch (error) {
      console.error(error)
      throw error
    }
  }

 async emailLogin (email: string) {
    if (!this.web3auth) {
      console.log('web3auth not initialized yet')
      return
    }
    try {
      // console.log('signing in with email', email)
      const web3authProvider = await this.web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {
        loginProvider: 'email_passwordless',
        login_hint: email
        // extraLoginOptions: {
        //   login_hint: email
        // }
      })
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const web3Provider = new ethers.providers.Web3Provider(web3authProvider!)
      const signer = web3Provider.getSigner()
      const gotAccount = await signer.getAddress()
      const network = await web3Provider.getNetwork()
      console.info(`EOA Address ${gotAccount}\nNetwork: ${network}`)
      this.provider = web3authProvider
      return web3authProvider
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  async metamaskLogin() {
    if (!this.web3auth) {
      console.log('web3auth not initialized yet')
      return
    }
    try {
      const web3authProvider = await this.web3auth.connectTo(WALLET_ADAPTERS.METAMASK)
      const web3Provider = new ethers.providers.Web3Provider(web3authProvider!)
      const signer = web3Provider.getSigner()
      const gotAccount = await signer.getAddress()
      const network = await web3Provider.getNetwork()
      console.info(`EOA Address ${gotAccount}\nNetwork: ${network}`)
      this.provider = web3authProvider
      return web3authProvider
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  async walletConnectLogin() {
    if (!this.web3auth) {
      console.log('web3auth not initialized yet')
      return
    }
    try {
      const web3authProvider = await this.web3auth.connectTo(WALLET_ADAPTERS.WALLET_CONNECT_V1)
      const web3Provider = new ethers.providers.Web3Provider(web3authProvider!)
      const signer = web3Provider.getSigner()
      const gotAccount = await signer.getAddress()
      const network = await web3Provider.getNetwork()
      console.info(`EOA Address ${gotAccount}\nNetwork: ${network}`)
      this.provider = web3authProvider
      return web3authProvider
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  async disconnect() {
    if (!this.web3auth) {
      console.log('web3auth not initialized yet')
      return
    }
    await this.web3auth.logout()
    this.web3auth.clearCache()
    this.provider = null
  }
}

const defaultSocialLoginConfig: DefaultSocialLoginConfig = {
  backendUrl: 'https://sdk-backend.prod.biconomy.io/v1'
}

export default SocialLogin

let initializedSocialLogin: SocialLogin | null = null
const getSocialLoginSDK = async (
  chainId: string,
  whitelistUrls?: { [P in string]: string },
  network: 'mainnet' | 'testnet' = 'testnet'
) => {
  if (initializedSocialLogin) {
    return initializedSocialLogin
  }
  await socialLoginSDK.init(chainId, whitelistUrls, network)
  initializedSocialLogin = socialLoginSDK
  console.log("🚀 ~ file: socialLogin.ts ~ line 312 ~ initializedSocialLogin", initializedSocialLogin)
  return socialLoginSDK
}

const socialLoginSDK: SocialLogin = new SocialLogin()
;(window as any).socialLoginSDK = socialLoginSDK

export { socialLoginSDK, getSocialLoginSDK }
