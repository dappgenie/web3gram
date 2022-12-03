export interface Address {
  city: string;
  country_code: string;
  line_1: string;
  obfuscation_required: boolean;
  postal_code: string;
  //TODO - need to add typings
  localized: object;
}

export interface NameData {
  id: string;
  name: string;
  value?: string;
}
export interface Attributes {
  name: string;
  values: NameData[];
}
export interface BusinessModel {
  expedia_collect: boolean;
  property_collect: boolean;
}
export interface Descriptions {
  amenities: string;
  dining: string;
  business_amenities: string;
  rooms: string;
  attractions: string;
  location: string;
  headline: string;
}
interface Links {
  size: string;
  method: string;
  href: string;
}
export interface Images {
  hero_image: boolean;
  category: number;
  caption: string;
  links: Links[];
}
interface PropertyRating {
  rating: string;
  type: string;
}
interface GuestRating {
  count: string;
  overall: string;
  cleanliness: string;
  service: string;
  comfort: string;
  condition: string;
  neighborhood: string;
  amenities: string;
  recommendation_percent: string;
}
export interface Rating {
  property: PropertyRating;
  guest: GuestRating;
}
interface RoomDescriptions {
  overview: string;
}
interface BedGroupConfiguration {
  quantity: string;
  size: string;
  type: string;
}
interface BedGroup {
  id: string;
  description: string;
  configuration: BedGroupConfiguration[];
}
interface RoomArea {
  square_meters: string;
  square_feet: string;
}
interface Person {
  name: string;
  minimum_age: string;
}
interface AgeCategories {
  ChildAgeA: Person;
  Infant: Person;
  Adult: Person;
}
interface MaxAllowed {
  total: string;
  children: string;
  adults: string;
}
interface Occupancy {
  max_allowed: MaxAllowed;
  age_categories: AgeCategories;
}
export interface Rooms {
  id: string;
  name: string;
  descriptions: RoomDescriptions;
  amenities: NameData[];
  images: Images[];
  bed_groups: BedGroup[];
  area: RoomArea;
  views: NameData[];
  occupancy: Occupancy;
}

interface EnhancedHouseRules {
  name: string;
  rule: string;
  additional_information: [];
}
export interface VacationRentalDetails {
  private_host: boolean;
  house_rules: string[];
  enhanced_house_rules: EnhancedHouseRules[];
}
export interface Checkin {
  begin_time: string;
  end_time: string;
  instructions: string;
  special_instructions: string;
  min_age: number;
}

export interface Checkout {
  time: string;
}
export interface Fees {
  mandatory: string;
  optional: string;
}
export interface Policies {
  know_before_you_go: string;
}
export interface OnsitePayments {
  currency: string;
  types: NameData[];
}
export interface Rates {
  id: string;
  amenities: NameData[];
}
export interface Dates {
  added: Date;
  updated: Date;
}
export interface GeoPoint {
  name: string
  type: string;
  coordinates: number[];
}

export interface Location {
  main: GeoPoint;
  obfuscated_location?: GeoPoint;
  obfuscation_required: boolean;
}
export interface IProperty {
  property_id: string;
  name: string;
  phone: string;
  fax: string;
  rank: string;
  supply_source: string;
  checkout: Checkout;
  onsite_payments: OnsitePayments;
  fees: Fees;
  dates: Dates;
  policies: Policies;
  payment_registration_recommended: boolean;
  multi_unit: boolean;
  address: Address;
  rating: Rating;
  location: Location;
  checkin: Checkin;
  images: Images[];
  rates: Rates[];
  attributes: Attributes[];
  airports: object;
  brand: NameData;
  statistics: NameData[];
  themes: NameData[];
  business_model: BusinessModel;
  descriptions: Descriptions;
  rooms: Rooms[];
  spoken_languages: NameData[];
  chain: NameData;
  category: NameData;
  vacation_rental_details: VacationRentalDetails[];
}
