import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";

const apikey = 'EC7ktlHlkI.7tXKVVG0fOVvCGM9BMst3GLGdn3g44fcGdsNOjhSELxYOxX2ZQza3AWFgFoR2lTL'

export class PushProtocol {
  pk: string
  pkey: string
  signer: ethers.Signer
  apiKey: string
  constructor(pk: string,apiKey:string = apikey) {
    this.apiKey = apiKey;
    this.pk = pk
    this.pkey = `0x${pk}}`;
    this.signer = new ethers.Wallet(this.pkey);
  }
  async sendNotification(channel: string, message: string, title: string) {
    try {
      const apiResponse = await PushAPI.payloads.sendNotification({
        signer: this.signer,
        type: 1, // target
        identityType: 2, // direct payload
        notification: {
          title,
          body: `[sdk-test] notification BODY`
        },
        payload: {
          title,
          body: message,
          cta: '',
          img: ''
        },
        channel: `eip155:5:${channel}`, // your channel address
        env: 'staging'
      });

      // apiResponse?.status === 204, if sent successfully!
      console.log('API repsonse: ', apiResponse);
    } catch (err) {
      console.error('Error: ', err);
    }
  }
  async getNotifications(address: string) {
    return await PushAPI.user.getFeeds({
      user: `eip155:5:${address}`, // user address in CAIP
      env: 'staging'
    });
  }
  async getUser(address: string) {
    return await PushAPI.user.get({
      account: `eip155:5:${address}`,
      env: 'staging'
    });
  }
  async createUser(address: string) {
    return await PushAPI.user.create({account: `eip155:5:${address}`, env: 'staging'});
  }
  async listAllChats(address: string): Promise<any> {
    return await PushAPI.chat.chats({env: 'staging',pgpPrivateKey:this.apiKey,account: `eip155:5:${address}`});
  }

}
