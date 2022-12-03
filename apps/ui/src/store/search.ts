import { acceptHMRUpdate, defineStore } from 'pinia'
import { IDateRange, ISearchRoom } from '~/utils/interface'

export const useSearchStore = defineStore('search', () => {
  /**
   * Default state of the loader.
   */
  const location = ref('')
  const locationSearch = ref<any>({})
  const rooms = ref<ISearchRoom[]>([{
    adults: 1,
    children: [],
  }])
  const dateRange = ref<IDateRange>({
    start_date: new Date(),
    end_date: new Date(+new Date() + 86400000)
  })
  console.log("🚀 ~ file: search.ts ~ line 17 ~ useSearchStore ~ dateRange", dateRange)

  /**
   * Set the state of the loader.
   */
  // const setSearchData = (value: ISearchDetails) => {
  //   console.log("🚀 ~ file: search.ts ~ line 24 ~ setSearchData ~ value", value)
  //   isSearch.value = value
  // }

  return {
    location,
    locationSearch,
    rooms,
    dateRange,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useSearchStore, import.meta.hot))
