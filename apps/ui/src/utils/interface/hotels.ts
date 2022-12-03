export interface IHotel {
    name: string
    location: string
    reviews: number
    star: number
    ratingStar: number
    description: string
    images: string[]
    startingPrice: number
    totalPrice: number
    count: number
    refund: string
    amenities: {
      type: 'wifi' | 'parking' | 'wallet'
      name: string
    }[]
    coordinates: {
      lat: number,
      lng:number
    }
  }[]