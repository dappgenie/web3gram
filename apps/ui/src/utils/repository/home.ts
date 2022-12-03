import type { IHotel } from '../interface'
import popular_hotel_1 from '~/assets/images/home/popular_hotel_1.png'
import popular_hotel_2 from '~/assets/images/home/popular_hotel_2.png'
import popular_hotel_3 from '~/assets/images/home/popular_hotel_3.png'
import popular_hotel_4 from '~/assets/images/home/popular_hotel_4.png'
import event_image_1 from '~/assets/images/home/event_image_1.png'
import event_image_2 from '~/assets/images/home/event_image_2.png'
import event_image_3 from '~/assets/images/home/event_image_3.png'
import event_image_4 from '~/assets/images/home/event_image_4.png'
import hotel_search_item_1 from '~/assets/images/search_hotels/hotel_search_item_1.png'
import hotel_search_item_2 from '~/assets/images/search_hotels/hotel_search_item_2.png'
import hotel_search_item_3 from '~/assets/images/search_hotels/hotel_search_item_3.png'
import hotel_search_item_4 from '~/assets/images/search_hotels/hotel_search_item_4.png'
import Sub_Room1 from '~/assets/images/room/Sub_Room1.png'

export const HOTELS_LIST: {
  name: string
  date: string
  location: string
  price: string
  image: string
}[] = [
  {
    name: 'Dubai',
    date: '23 May - 26 May',
    location: 'United Arab Emirates',
    price: '312',
    image: popular_hotel_1,
  },
  {
    name: 'Abu Dhabi',
    date: '16 Dec - 18 Dec',
    location: 'Qatar',
    price: '482',
    image: popular_hotel_2,
  },
  {
    name: 'Goa',
    date: '18 Mar - 20 Mar',
    location: 'India',
    price: '672',
    image: popular_hotel_3,
  },
  {
    name: 'Miami Beach',
    date: '27 Feb - 6 Mar',
    location: 'United States',
    price: '365',
    image: popular_hotel_4,
  },
  {
    name: 'Sydney',
    date: '20 Mar - 12 April',
    location: 'Australia',
    price: '565',
    image: popular_hotel_3,
  },
  {
    name: 'Bali',
    date: '2 Feb - 23 Feb',
    location: 'Indonesia',
    price: '265',
    image: popular_hotel_2,
  },
]

export const EVENTS_LIST: {
  name: string
  date: string
  location: string
  price: string
  image: string
}[] = [
  {
    name: 'ETH Lisbon',
    date: '28 Oct - 30 Oct',
    location: 'Lisbon, Portugal',
    price: '116',
    image: event_image_1,
  },
  {
    name: 'FIL Lisbon',
    date: '30 Oct - 04 Nov',
    location: 'Lisbon, Portugal',
    price: '139',
    image: event_image_2,
  },
  {
    name: 'Websummit Lisbon',
    date: '01 Nov - 04 Nov',
    location: 'Lisbon, Portugal',
    price: '139',
    image: event_image_3,
  },
  {
    name: 'Solana Breakpoint',
    date: '04 Nov - 07 Nov',
    location: 'Lisbon, Portugal',
    price: '99',
    image: event_image_4,
  },
  {
    name: 'ETH India',
    date: '02 Dec - 04 Dec',
    location: 'India',
    price: '100',
    image: event_image_2,
  },

]

export const SEARCH_HOTEL_LIST: IHotel[] = [
  {
    name: 'Jumeirah Beach Hotel',
    location: 'Lisbon, Portugal',
    reviews: 1100,
    star: 5,
    ratingStar: 4,
    description: '#1 Best Value of 435 places to stay in Thekkady',
    images: [hotel_search_item_1, hotel_search_item_2, hotel_search_item_3],
    startingPrice: 500,
    totalPrice: 700,
    count: 25,
    refund: 'Fully Refundable',
    amenities: [
      {
        type: 'wifi',
        name: 'Wifi',
      },
      {
        type: 'parking',
        name: 'Free-Parking',
      },
      {
        type: 'wallet',
        name: 'Wallet-Friendly',
      },
    ],
    coordinates: {
      lat: 15.249615,
      lng: 74.029082,
    },
  },
  {
    name: 'Jumeirah Beach Hotel',
    location: 'Lisbon, Portugal',
    reviews: 1000,
    star: 4,
    ratingStar: 4.5,
    description: '#1 Best Value of 435 places to stay in Thekkady',
    images: [hotel_search_item_2],
    startingPrice: 300,
    totalPrice: 700,
    count: 50,
    refund: 'Not Refundable',
    amenities: [
      {
        type: 'wifi',
        name: 'Wifi',
      },
      {
        type: 'parking',
        name: 'Free-Parking',
      },
    ],
    coordinates: {
      lat: 15.760412,
      lng: 74.007095,
    },
  },
  {
    name: 'Websummit Lisbon',
    location: 'Lisbon, Portugal',
    reviews: 1100,
    star: 4,
    ratingStar: 4.5,
    description: '#1 Best Value of 435 places to stay in Thekkady',
    images: [hotel_search_item_3],
    startingPrice: 500,
    totalPrice: 700,
    count: 25,
    refund: 'Fully Refundable',
    amenities: [
      {
        type: 'wifi',
        name: 'Wifi',
      },
      {
        type: 'wallet',
        name: 'Wallet-Friendly',
      },
    ],
    coordinates: {
      lat: 15.286831,
      lng: 74.130609,
    },
  },
  {
    name: 'Cuisine park',
    location: 'Goa',
    reviews: 1600,
    star: 3,
    ratingStar: 3.5,
    description: '#1 Best Value of 435 places to stay in Thekkady',
    images: [hotel_search_item_4],
    startingPrice: 800,
    totalPrice: 700,
    count: 12,
    refund: 'Not Refundable',
    amenities: [
      {
        type: 'wifi',
        name: 'Wifi',
      },
      {
        type: 'parking',
        name: 'Free-Parking',
      },
    ],
    coordinates: {
      lat: 15.617623,
      lng: 73.886166,
    },
  },
  {
    name: 'Mark Cuisine',
    location: 'Mumbai',
    reviews: 1800,
    star: 5,
    ratingStar: 3,
    description: '#1 Best Value of 435 places to stay in Thekkady',
    images: [event_image_1],
    startingPrice: 600,
    totalPrice: 700,
    count: 25,
    refund: 'Fully Refundable',
    amenities: [
      {
        type: 'wifi',
        name: 'Wifi',
      },
      {
        type: 'parking',
        name: 'Free-Parking',
      },
    ],
    coordinates: {
      lat: 15.233716,
      lng: 74.103288,
    },
  },
  {
    name: 'Websummit Lisbon',
    location: 'Lisbon, Portugal',
    reviews: 1100,
    star: 4,
    ratingStar: 4.5,
    description: '#1 Best Value of 435 places to stay in Thekkady',
    images: [hotel_search_item_3],
    startingPrice: 500,
    totalPrice: 700,
    count: 25,
    refund: 'Fully Refundable',
    amenities: [
      {
        type: 'wifi',
        name: 'Wifi',
      },
      {
        type: 'wallet',
        name: 'Wallet-Friendly',
      },
    ],
    coordinates: {
      lat: 15.286831,
      lng: 74.130609,
    },
  },

]

// Filter
export const FILTER_LIST: {
  name: string
  type: 'checkbox' | 'radio' | 'slider'
  attributes: Array<any>
  attributeType: 'string' | 'rating'
}[] = [
  {
    name: 'Sources',
    attributes: ['Hotel', 'Marketplace'],
    type: 'checkbox',
    attributeType: 'string',
  },
  {
    name: 'Type',
    attributes: ['Cancellation', 'Special deals', 'High appreciation'],
    type: 'checkbox',
    attributeType: 'string',
  },
  {
    name: 'Guest rating',
    attributes: [5, 4, 3, 2],
    type: 'radio',
    attributeType: 'rating',
  },
  {
    name: 'Price',
    attributes: ['Hotel', 'Marketplace'],
    type: 'slider',
    attributeType: 'string',
  },
  {
    name: 'Property Types',
    attributes: ['5 Star', '4 Star', '3 Star', '2 Star', 'Resorts', 'Guest Houses'],
    type: 'checkbox',
    attributeType: 'string',
  },
  {
    name: 'Amenities',
    attributes: ['Parking', 'Wifi', 'Swimming Pool', 'Half Board', 'Full Board', 'Luxury', 'Play Area', 'Wallet Friendly', 'Breakfast included '],
    type: 'checkbox',
    attributeType: 'string',
  },

]

// Room details
export const HOTEL_ROOM_LIST: {
  name: string
  image: string[]
  price: number
  totalPrice: number
  isSoldOut: boolean
  isMarketPlace: boolean
  isMarketPlacePrice: number
  day: number
  rooms: number
  amenities: {
    type: 'wifi' | 'parking' | 'wallet'
    name: string
  }[]
  options: {
    name: string
    price: number
    subtitle?: string
  }[]

}[] = [
  {
    name: 'Club Room (Suite)',
    image: [Sub_Room1],
    price: 112,
    totalPrice: 234,
    isSoldOut: false,
    isMarketPlace: true,
    isMarketPlacePrice: 180,
    day: 1,
    rooms: 2,
    amenities: [
      {
        type: 'wifi',
        name: 'Wifi',
      },
      {
        type: 'wallet',
        name: 'Wallet-Friendly',
      },
    ],
    options: [
      {
        name: 'Non-Refundable + Breakfast',
        price: 645,
      },
      {
        name: 'Fully Refundable before Nov 28',
        price: 653,
        subtitle: 'Reserve now, pay later',

      },
      {
        name: 'Non-Refundable + Half board',
        price: 700,
      },
      {
        name: 'Fully Refundable before Nov 28 + Breakfast',
        price: 708,
        subtitle: 'Reserve now, pay later',
      },
      {
        name: 'Fully Refundable before Nov 28 + Half board',
        price: 762,
      },
    ],
  },
  {
    name: 'Twin Room',
    image: [Sub_Room1],
    price: 132,
    totalPrice: 234,
    isSoldOut: true,
    isMarketPlace: true,
    isMarketPlacePrice: 180,
    day: 1,
    rooms: 2,
    amenities: [
      {
        type: 'wifi',
        name: 'Wifi',
      },
      {
        type: 'wallet',
        name: 'Wallet-Friendly',
      },
    ],
    options: [
      {
        name: 'Non-Refundable + Breakfast',
        price: 645,
      },
      {
        name: 'Fully Refundable before Nov 28',
        price: 653,
        subtitle: 'Reserve now, pay later',

      },
      {
        name: 'Non-Refundable + Half board',
        price: 700,
      },
      {
        name: 'Fully Refundable before Nov 28 + Breakfast',
        price: 708,
        subtitle: 'Reserve now, pay later',
      },
      {
        name: 'Fully Refundable before Nov 28 + Half board',
        price: 762,
      },
    ],
  },
  {
    name: 'Ambassadors Suite',
    image: [Sub_Room1],
    price: 145,
    totalPrice: 234,
    isSoldOut: true,
    isMarketPlace: false,
    isMarketPlacePrice: 0,
    day: 1,
    rooms: 2,
    amenities: [
      {
        type: 'wifi',
        name: 'Wifi',
      },
      {
        type: 'wallet',
        name: 'Wallet-Friendly',
      },
    ],
    options: [
      {
        name: 'Non-Refundable + Breakfast',
        price: 645,
      },
      {
        name: 'Fully Refundable before Nov 28',
        price: 653,
        subtitle: 'Reserve now, pay later',

      },
      {
        name: 'Non-Refundable + Half board',
        price: 700,
      },
      {
        name: 'Fully Refundable before Nov 28 + Breakfast',
        price: 708,
        subtitle: 'Reserve now, pay later',
      },
      {
        name: 'Fully Refundable before Nov 28 + Half board',
        price: 762,
      },
    ],
  },
]
