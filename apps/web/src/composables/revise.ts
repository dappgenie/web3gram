import { Revise } from 'revise-sdk';
export async function addCollection (collectionName: string, collectionURI: string) {
  const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjZTRjNDFkLTRkMDItNDA2Yy1iZTllLTBkYTZmMmI5NjE3NSIsImtleSI6IjBkZW9yazd1IiwiaWF0IjoxNjcwMTE2MjQ4fQ.Re-MpXEyQURrayJWnCRfvHn5-PsfEXUHtb74yHGxAY0"
  const revise = new Revise({ auth: AUTH_TOKEN });
  const newCollection = await revise.addCollection({name: collectionName, uri: collectionURI});
}
export async function addNFT (tokenData: any,properties: any) {
  const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjZTRjNDFkLTRkMDItNDA2Yy1iZTllLTBkYTZmMmI5NjE3NSIsImtleSI6IjBkZW9yazd1IiwiaWF0IjoxNjcwMTE2MjQ4fQ.Re-MpXEyQURrayJWnCRfvHn5-PsfEXUHtb74yHGxAY0"
  const revise = new Revise({ auth: AUTH_TOKEN });
  const newNFT = await revise.addNFT(tokenData, properties);
}
export async function fetchNFTs () {
  const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjZTRjNDFkLTRkMDItNDA2Yy1iZTllLTBkYTZmMmI5NjE3NSIsImtleSI6IjBkZW9yazd1IiwiaWF0IjoxNjcwMTE2MjQ4fQ.Re-MpXEyQURrayJWnCRfvHn5-PsfEXUHtb74yHGxAY0"
  const revise = new Revise({ auth: AUTH_TOKEN });
  const nfts = await revise.fetchNFTs();
  return nfts
}
export async function fetchNFT (id: string) {
  const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjZTRjNDFkLTRkMDItNDA2Yy1iZTllLTBkYTZmMmI5NjE3NSIsImtleSI6IjBkZW9yazd1IiwiaWF0IjoxNjcwMTE2MjQ4fQ.Re-MpXEyQURrayJWnCRfvHn5-PsfEXUHtb74yHGxAY0"
  const revise = new Revise({ auth: AUTH_TOKEN });
  const nft = await revise.fetchNFT(id)
  return nft
}
export async function badgeUpdate() {
  const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjZTRjNDFkLTRkMDItNDA2Yy1iZTllLTBkYTZmMmI5NjE3NSIsImtleSI6IjBkZW9yazd1IiwiaWF0IjoxNjcwMTE2MjQ4fQ.Re-MpXEyQURrayJWnCRfvHn5-PsfEXUHtb74yHGxAY0"
  const revise = new Revise({ auth: AUTH_TOKEN });
  const API = '0x0000'
  revise.every('10s').listenTo(API).start(async (data: any) => {
    const nft = await (await revise.updateNFT('nft-id')).setImage(data.imageURL);
    await nft.save();
  })
}
