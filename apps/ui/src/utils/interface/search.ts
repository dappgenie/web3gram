export interface ISearchRoom {
  adults: number,
  children: number[],
}

export interface IDateRange {
  start_date: Date
  end_date: Date
}

export interface ISearchDetails {
  location: string
  dateRange: IDateRange
  rooms: ISearchRoom[]
}
