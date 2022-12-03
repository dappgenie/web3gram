import MeiliSearch, { Hits, Index, SearchParams } from "meilisearch"

export class useMeilisearch {
  client: MeiliSearch | null = null
  index: Index<any> | null = null

  async init() {
    this.client = new MeiliSearch({
      host: import.meta.env.VITE_MEILISEARCH_HOST,
      apiKey: import.meta.env.VITE_MEILISEARCH_API_KEY,
    })
    this.index = this.client.index('search-demo')
  }
  
  async search(value: any, attributes: SearchParams) : Promise<Hits<Record<string, any>> | null> {
    if(this.index) {
      const data = await this.index.search(value, attributes)
      return data.hits
    }
    return null
  }
}

