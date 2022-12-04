
import { Web3Storage, } from "web3.storage";

export class Web3StorageService {
  
  storage = new Web3Storage({
    token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQyRDExNzBhMzk2OWUwOEQyRDBEM2FlZkI4OTdFMTIzNzgyMkE4YTMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzAwMzEyMTYyODEsIm5hbWUiOiJ3ZWIzZ3JhbSJ9.9Ugzn3pR_F87EmvKpVB2EsCbdeFSJ-ccuT4EcGh9Pas`,
  });;

  constructor() {
  }

  async uploadImage(file:File,caption: string){
    var metaData = {
      caption,
      path: file.name,
    };
    var metaBlob = new Blob([JSON.stringify(metaData)], {
      type: "application/json",
    });
    const metadataFile = new File([metaBlob], "metadata.json");
  
    const cid = await this.storage.put([file, metadataFile], {
      // the name is viewable at https://web3.storage/files and is included in the status and list API responses
      name: file.name,

      onRootCidReady: (localCid) => {
       alert(localCid)
      },
  
      // onStoredChunk is called after each chunk of data is uploaded
      onStoredChunk: (bytes) => {
        // showMessage(`> 🛰 sent ${bytes.toLocaleString()} bytes to web3.storage`)
      },
    });
    console.log(cid);
  }

  
}
