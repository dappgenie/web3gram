import { Web3Storage } from 'web3.storage'
import type { CIDString, Filelike } from 'web3.storage/dist/src/lib/interface'
import { hash } from 'ohash'
function getAccessToken() {
  // If you're just testing, you can paste in a token
  // and uncomment the following line:
  // return 'paste-your-token-here'

  // In a real app, it's better to read an access token from an
  // environement variable or other configuration that's kept outside of
  // your code base. For this to work, you need to set the
  // WEB3STORAGE_TOKEN environment variable before you run your code.
  return import.meta.env.VITE_WEB3_STORAGE_API
}

function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() })
}
export const useStoreFile = async (file: File) => {
  try {
    const client = makeStorageClient()
    const renamedFile = new File([file], 'logo.png')
    const cid = await client.put([renamedFile])
    return cid
  }
  catch (error) {
    console.log('🚀 ~ file: storage.ts ~ line 23 ~ useStoreFile ~ error', error)
  }
}
export async function useRetrieveFiles(cid: CIDString) {
  const client = makeStorageClient()
  const res = await client.get(cid)
  if (!res!.ok)
    throw new Error(`failed to get ${cid}`)
  // request succeeded! do something with the response object here...
  return res?.url
}

export function useMakeFileObject(obj: any) {
  // You can create File objects from a Blob of binary data
  // see: https://developer.mozilla.org/en-US/docs/Web/API/Blob
  // Here we're just storing a JSON object, but you can store images,
  // audio, or whatever you want!
  const blob = new Blob([JSON.stringify(obj)], { type: 'application/json' })

  const files = [
    new File(['contents-of-file-1'], 'plain-utf8.txt'),
    new File([blob], `${hash(obj)}.json`),
  ]
  console.log('useMakeFileObject', files[1])
  return files
}
