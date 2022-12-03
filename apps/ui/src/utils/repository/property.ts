import { Property } from "../interface";

export const propertyDetails: Property = {
  _id: { $oid: '63801c758d687c3fff8cf61d' },
  property_id: '1039814',
  name: 'Le Méridien Jaipur Resort & Spa',
  phone: '91-1426-403333',
  fax: '91-1426-403342',
  rank: '64390',
  supply_source: 'Expedia',
  checkout: { time: '12:00 PM' },
  onsite_payments: {
    currency: 'INR',
    types: [
      { id: '171', name: 'American Express' },
      { id: '184', name: 'Mastercard' },
      { id: '189', name: 'Visa' },
      { id: '407', name: 'Cash' },
      { id: '1073742461', name: 'Debit cards' },
    ],
  },
  fees: {
    mandatory:
      "<p>You'll be asked to pay the following charges at the property:</p> <ul><li>Christmas Eve (24 December) Gala Dinner per adult: INR 4000</li><li>Christmas Eve (24 December) Gala Dinner per child: INR 2000 (from 5 to 12 years old)</li> <li>New Year's Eve (31 December) Gala Dinner per adult: INR 8000</li><li>New Year's Eve (31 December) Gala Dinner per child: INR 4000 (from 5 to 12 years old)</li></ul> <p>We have included all charges provided to us by the property. </p>",
    optional:
      '<ul> <li>Fee for buffet breakfast: INR 915 per person (approximately)</li>     <li>Airport shuttle fee: INR 2100 per vehicle (one way)</li>             <li>Crib (infant bed) fee: INR 2360.0 per night</li><li>Rollaway bed fee: INR 2360.0 per night</li>            </ul> <p>The above list may not be comprehensive. Fees and deposits may not include tax and are subject to change. </p>',
  },
  // dates: {
  //   added: { $date: { $numberLong: '1073567216580' } },
  //   updated: { $date: { $numberLong: '1669106462478' } },
  // },
  policies: {
    know_before_you_go:
      "<ul>  <li>Pool access available from 7:00 AM to 7:00 PM.</li><li>Reservations are required for massage services and spa treatments. Reservations can be made by contacting the resort prior to arrival, using the contact information on the booking confirmation. </li><li>Children 6 years old and younger stay free when occupying the parent or guardian's room, using existing bedding. </li><li>Some facilities may have restricted access. Guests can contact the property for details using the contact information on the booking confirmation. </li><li>No pets and no service animals are allowed at this property. </li><li>Parking height restrictions apply. </li><li>This property advises that enhanced cleaning and guest safety measures are currently in place.</li><li>Disinfectant is used to clean the property.</li><li>Social distancing measures are in place and guests are provided with hand sanitizer.</li><li>This property affirms that it follows the cleaning and disinfection practices of Commitment to Clean (Marriott).</li> </ul>",
  },
  payment_registration_recommended: false,
  multi_unit: true,
  address: {
    city: 'Amer',
    country_code: 'IN',
    line_1: 'Number 1, RIICO',
    obfuscation_required: false,
    postal_code: '302028',
    localized: {
      links: {
        'en-US': {
          method: 'GET',
          href: 'https://api.ean.com/v3/properties/content?language=en-US&property_id=1039814&include=address&supply_source=expedia',
        },
      },
    },
  },
  // location: {
  //   coordinates: { latitude: 27.032676, longitude: 75.888939 },
  //   obfuscation_required: false,
  // },
  checkin: {
    begin_time: '3:00 PM',
    instructions:
      '<ul>  <li>Extra-person charges may apply and vary depending on property policy</li><li>Government-issued photo identification and a credit card may be required at check-in for incidental charges</li><li>Special requests are subject to availability upon check-in and may incur additional charges; special requests cannot be guaranteed</li><li>Be prepared: check the latest COVID-19 travel requirements and measures in place for this destination before you travel.</li><li>Please note that cultural norms and guest policies may differ by country and by property; the policies listed are provided by the property</li>  </ul> <ul>  <li>Outside food and alcoholic beverages are not permitted on the premises.</li><li>Additional fees apply for connecting/adjoining rooms and are subject to availability.</li>  </ul>',
    special_instructions:
      'Front desk staff will greet guests on arrival. For more details, please contact the property using the information on the booking confirmation.  To register at this property, guests who are Indian citizens must provide a valid photo identity card issued by the Government of India; travelers who are not citizens of India must present a valid passport and visa.',
    min_age: 18,
    end_time: '3:00 PM'
  },
  images: [
    {
      hero_image: true,
      category: 3,
      caption: 'Primary image',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/b527159c_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/b527159c_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/b527159c_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 10001,
      caption: 'Lobby',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/c81f025a_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/c81f025a_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/c81f025a_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 10001,
      caption: 'Lobby',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/66dfa2e5_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/66dfa2e5_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/66dfa2e5_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 21001,
      caption: 'Room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/c61c4437_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/c61c4437_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/c61c4437_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 21001,
      caption: 'Room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/c9e3da1c_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/c9e3da1c_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/c9e3da1c_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 21001,
      caption: 'Room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/1bcf45f5_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/1bcf45f5_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/1bcf45f5_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 21001,
      caption: 'Room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/6391f211_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/6391f211_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/6391f211_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 21001,
      caption: 'Room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/8a585e56_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/8a585e56_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/8a585e56_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 21001,
      caption: 'Room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/0338a53f_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/0338a53f_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/0338a53f_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 21001,
      caption: 'Room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/81879b0f_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/81879b0f_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/81879b0f_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 21001,
      caption: 'Room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/0e7f95e4_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/0e7f95e4_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/0e7f95e4_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 21001,
      caption: 'Room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/5d3c97f0_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/5d3c97f0_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/5d3c97f0_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 21001,
      caption: 'Room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/a32b831b_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/a32b831b_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/a32b831b_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 21001,
      caption: 'Room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/7a142134_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/7a142134_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/7a142134_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 21001,
      caption: 'Room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/8bf0685e_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/8bf0685e_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/8bf0685e_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 21001,
      caption: 'Room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/d94a977e_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/d94a977e_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/d94a977e_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 21001,
      caption: 'Room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/82fdb453_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/82fdb453_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/82fdb453_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 21001,
      caption: 'Room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/175fb011_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/175fb011_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/175fb011_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 21001,
      caption: 'Room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/10f1a090_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/10f1a090_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/10f1a090_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 21001,
      caption: 'Room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/9eaab4fc_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/9eaab4fc_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/9eaab4fc_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 21001,
      caption: 'Room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/e7b355b5_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/e7b355b5_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/e7b355b5_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 21001,
      caption: 'Room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/13e8922b_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/13e8922b_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/13e8922b_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 21001,
      caption: 'Room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/4b19e91c_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/4b19e91c_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/4b19e91c_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 21001,
      caption: 'Room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/44fdd03c_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/44fdd03c_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/44fdd03c_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 21001,
      caption: 'Room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/83972b68_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/83972b68_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/83972b68_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 21001,
      caption: 'Room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/4ba23889_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/4ba23889_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/4ba23889_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 21001,
      caption: 'Room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/ee39d6ae_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/ee39d6ae_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/ee39d6ae_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 21001,
      caption: 'Room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/e4b73655_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/e4b73655_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/e4b73655_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 21001,
      caption: 'Room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/465d52cf_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/465d52cf_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/465d52cf_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 21001,
      caption: 'Room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/29fb733c_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/29fb733c_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/29fb733c_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 21001,
      caption: 'Room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/e9be6c15_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/e9be6c15_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/e9be6c15_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 21001,
      caption: 'Room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/f75696f3_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/f75696f3_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/f75696f3_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 21001,
      caption: 'Room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/c206aaad_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/c206aaad_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/c206aaad_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 21001,
      caption: 'Room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/52f675a5_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/52f675a5_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/52f675a5_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 21001,
      caption: 'Room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/4d5bda28_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/4d5bda28_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/4d5bda28_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 21001,
      caption: 'Room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/4c570a50_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/4c570a50_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/4c570a50_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 21001,
      caption: 'Room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/7ba86b94_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/7ba86b94_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/7ba86b94_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 21001,
      caption: 'Room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/eec53d5a_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/eec53d5a_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/eec53d5a_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 21001,
      caption: 'Room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/6a2f1e6a_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/6a2f1e6a_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/6a2f1e6a_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 21001,
      caption: 'Room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/8c6224b9_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/8c6224b9_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/8c6224b9_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 21001,
      caption: 'Room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/5654a3cf_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/5654a3cf_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/5654a3cf_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 21001,
      caption: 'Room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/9cbb6284_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/9cbb6284_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/9cbb6284_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 21001,
      caption: 'Room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/82930f46_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/82930f46_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/82930f46_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 22005,
      caption: 'Living area',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/39402669_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/39402669_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/39402669_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 22013,
      caption: 'View from room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/62d123d2_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/62d123d2_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/62d123d2_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 22013,
      caption: 'View from room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/31c1d526_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/31c1d526_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/31c1d526_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 22013,
      caption: 'View from room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/24a5e9b0_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/24a5e9b0_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/24a5e9b0_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 22013,
      caption: 'View from room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/27ced017_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/27ced017_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/27ced017_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 22013,
      caption: 'View from room',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/500ade9c_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/500ade9c_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/500ade9c_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 23000,
      caption: 'Bathroom',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/b11a83f6_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/b11a83f6_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/b11a83f6_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 23000,
      caption: 'Bathroom',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/059ff8de_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/059ff8de_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/059ff8de_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 23000,
      caption: 'Bathroom',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/c6ec3f97_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/c6ec3f97_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/c6ec3f97_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 23000,
      caption: 'Bathroom',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/65902322_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/65902322_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/65902322_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 23000,
      caption: 'Bathroom',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/acc306e4_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/acc306e4_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/acc306e4_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 23000,
      caption: 'Bathroom',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/3cc8fd97_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/3cc8fd97_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/3cc8fd97_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 23000,
      caption: 'Bathroom',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/e12be978_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/e12be978_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/e12be978_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 23000,
      caption: 'Bathroom',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/6d5e555f_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/6d5e555f_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/6d5e555f_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 23000,
      caption: 'Bathroom',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/bde3e571_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/bde3e571_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/bde3e571_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 23000,
      caption: 'Bathroom',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/7b3e00e5_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/7b3e00e5_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/7b3e00e5_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 23000,
      caption: 'Bathroom',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/b0f82665_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/b0f82665_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/b0f82665_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 23000,
      caption: 'Bathroom',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/f847c3ff_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/f847c3ff_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/f847c3ff_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 23000,
      caption: 'Bathroom',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/703a09f5_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/703a09f5_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/703a09f5_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 23000,
      caption: 'Bathroom',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/f93c9261_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/f93c9261_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/f93c9261_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 23000,
      caption: 'Bathroom',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/11200225_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/11200225_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/11200225_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 23000,
      caption: 'Bathroom',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/a2de164e_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/a2de164e_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/a2de164e_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 23000,
      caption: 'Bathroom',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/afcb2956_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/afcb2956_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/afcb2956_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 30000,
      caption: 'Pool',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/70a78295_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/70a78295_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/70a78295_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 30003,
      caption: 'Outdoor pool',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/c29947f5_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/c29947f5_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/c29947f5_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 42001,
      caption: 'Yoga',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/d7deb046_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/d7deb046_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/d7deb046_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 51000,
      caption: 'Spa',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/d78bb839_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/d78bb839_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/d78bb839_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 51000,
      caption: 'Spa',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/da815bbb_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/da815bbb_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/da815bbb_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 60002,
      caption: 'Bicycling',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/24e160d8_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/24e160d8_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/24e160d8_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 60004,
      caption: 'Basketball court',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/7fa49e55_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/7fa49e55_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/7fa49e55_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 60005,
      caption: 'Sport court',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/ce9bc129_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/ce9bc129_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/ce9bc129_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 60005,
      caption: 'Sport court',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/687e0b6e_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/687e0b6e_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/687e0b6e_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 71000,
      caption: 'Property amenity',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/4a381388_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/4a381388_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/4a381388_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 71000,
      caption: 'Property amenity',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/416480e1_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/416480e1_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/416480e1_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 71006,
      caption: 'Billiards',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/95261e06_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/95261e06_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/95261e06_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 72003,
      caption: "Children's play area - indoor",
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/01447b04_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/01447b04_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/01447b04_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 81003,
      caption: 'Restaurant',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/3e5c2377_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/3e5c2377_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/3e5c2377_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 81003,
      caption: 'Restaurant',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/9447bda1_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/9447bda1_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/9447bda1_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 81031,
      caption: 'Breakfast meal',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/3c60d058_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/3c60d058_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/3c60d058_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 83009,
      caption: 'Meeting facility',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/5f5e29e0_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/5f5e29e0_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/5f5e29e0_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 83009,
      caption: 'Meeting facility',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/678c3df2_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/678c3df2_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/678c3df2_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 91000,
      caption: 'Property grounds',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/7d2006e3_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/7d2006e3_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/7d2006e3_z.jpg',
        },
      ],
    },
    {
      hero_image: false,
      category: 91016,
      caption: 'BBQ/picnic area',
      links: [
        {
          size: '350px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/5b76d888_b.jpg',
        },
        {
          size: '70px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/5b76d888_t.jpg',
        },
        {
          size: '1000px',
          method: 'GET',
          href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/5b76d888_z.jpg',
        },
      ],
    },
  ],
  rates: [
    {
      id: '226086384',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226086386',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226086388',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226086390',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226086392',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226086394',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226086396',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226098230',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226099881',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2107', name: 'Free dinner' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226099882',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2107', name: 'Free dinner' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226099883',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2107', name: 'Free dinner' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226099884',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2107', name: 'Free dinner' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226099885',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2107', name: 'Free dinner' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226099886',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2107', name: 'Free dinner' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226099887',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2107', name: 'Free dinner' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226099888',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2107', name: 'Free dinner' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226136156',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226136157',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226136511',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226139097',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226139098',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226139099',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226139100',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226139101',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226139102',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226139103',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226139104',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226139105',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226139106',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226139107',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226159743',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226159744',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226172698',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226172699',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226178917',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226178918',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226178919',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226178920',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226178921',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226178922',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226178923',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226178924',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226182084',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226182085',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226182087',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226182089',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226182091',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226182093',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226182095',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226182097',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226182417',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2106', name: 'Free lunch' },
        { id: '2107', name: 'Free dinner' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226182418',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2106', name: 'Free lunch' },
        { id: '2107', name: 'Free dinner' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226182419',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2106', name: 'Free lunch' },
        { id: '2107', name: 'Free dinner' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226182420',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2106', name: 'Free lunch' },
        { id: '2107', name: 'Free dinner' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226182421',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2106', name: 'Free lunch' },
        { id: '2107', name: 'Free dinner' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226182422',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2106', name: 'Free lunch' },
        { id: '2107', name: 'Free dinner' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226182423',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2106', name: 'Free lunch' },
        { id: '2107', name: 'Free dinner' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226182424',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2106', name: 'Free lunch' },
        { id: '2107', name: 'Free dinner' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226209767',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226209768',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226209769',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226209770',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226209771',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226209772',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226209773',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226209774',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226210298',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226210299',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226210300',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226210301',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226210302',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226210303',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226216519',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226216520',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226216521',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226216522',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226230088',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226230119',
      amenities: [
        { id: '2107', name: 'Free dinner' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226230120',
      amenities: [
        { id: '2107', name: 'Free dinner' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226230121',
      amenities: [
        { id: '2107', name: 'Free dinner' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226230122',
      amenities: [
        { id: '2106', name: 'Free lunch' },
        { id: '2107', name: 'Free dinner' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226230123',
      amenities: [
        { id: '2106', name: 'Free lunch' },
        { id: '2107', name: 'Free dinner' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226230124',
      amenities: [
        { id: '2106', name: 'Free lunch' },
        { id: '2107', name: 'Free dinner' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226230125',
      amenities: [
        { id: '2106', name: 'Free lunch' },
        { id: '2107', name: 'Free dinner' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226230126',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226230127',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226230128',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226230129',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226230130',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226230131',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226230132',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226230133',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226230134',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226230135',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226230136',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226230137',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226230138',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226230139',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226230140',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226230141',
      amenities: [
        { id: '2107', name: 'Free dinner' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226230142',
      amenities: [
        { id: '2107', name: 'Free dinner' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226230143',
      amenities: [
        { id: '2107', name: 'Free dinner' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226230144',
      amenities: [
        { id: '2107', name: 'Free dinner' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226230145',
      amenities: [
        { id: '2107', name: 'Free dinner' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226230146',
      amenities: [
        { id: '2106', name: 'Free lunch' },
        { id: '2107', name: 'Free dinner' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226230147',
      amenities: [
        { id: '2106', name: 'Free lunch' },
        { id: '2107', name: 'Free dinner' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226230148',
      amenities: [
        { id: '2106', name: 'Free lunch' },
        { id: '2107', name: 'Free dinner' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226230149',
      amenities: [
        { id: '2106', name: 'Free lunch' },
        { id: '2107', name: 'Free dinner' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226230150',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226230151',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '226230152',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226230153',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226230154',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226230155',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226230156',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226230157',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '226230158',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '381409309',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '381409313',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2191', name: 'Free high-speed internet' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '382283522',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '382283524',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '382283527',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '382283528',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '382283529',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '382283531',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '382283534',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '382283535',
      amenities: [
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
        { id: '2205', name: 'Breakfast buffet' },
      ],
    },
    {
      id: '382443405',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '382443406',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '382443408',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '382443410',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '382443413',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '382443414',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '382443417',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '382443418',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
    {
      id: '382443420',
      amenities: [
        { id: '2103', name: 'Continental breakfast' },
        { id: '2109', name: 'Free self parking' },
        { id: '2192', name: 'Free WiFi' },
        { id: '2195', name: 'Free valet parking' },
      ],
    },
  ],
  attributes: [
    {
      name: 'pets',
      values: [
        { id: '2050', name: 'Pets not allowed' },
        { id: '2808', name: 'Service animals not allowed' },
      ],
    },
    {
      name: 'general',
      values: [
        { id: '2554', name: 'Parking height restrictions apply' },
        { id: '1073744992', name: 'Property is cleaned with disinfectant' },
        {
          id: '1073745002',
          name: 'Guests are provided with free hand sanitizer',
        },
        { id: '1073745004', name: 'Social distancing measures are in place' },
        {
          id: '1073745010',
          name: "Property follows a brand or regulatory agency's sanitization guidelines Commitment to Clean (Marriott)",
          value: 'Commitment to Clean (Marriott)',
        },
        {
          id: '1073745013',
          name: 'Property confirms they are implementing enhanced cleaning measures',
        },
        {
          id: '1073745053',
          name: 'Property confirms they are implementing guest safety measures',
        },
      ],
    },
  ],
  airports: { preferred: { iata_airport_code: 'JAI' } },
  brand: { id: '87', name: 'Le Meridien' },
  statistics: [
    { id: '52', name: 'Total number of rooms - 126', value: '126' },
    { id: '54', name: 'Number of floors - 4', value: '4' },
    { id: '55', name: 'Number of buildings/towers - 2', value: '2' },
    { id: '2515', name: 'Year Built - 2003', value: '2003' },
  ],
  themes: [
    { id: '2328', name: 'Business property' },
    { id: '2333', name: 'Family property' },
    { id: '2337', name: 'Luxury property' },
    { id: '2341', name: 'Spa property' },
  ],
  business_model: { expedia_collect: true, property_collect: true },
  descriptions: {
    amenities:
      'Relax at the full-service spa, where you can enjoy massages, body treatments, and facials. You can take advantage of recreational amenities such as a health club, an outdoor pool, and a sauna. This resort also features complimentary wireless Internet access, concierge services, and an arcade/game room. Guests can catch a ride to nearby destinations on the area shuttle (surcharge).',
    dining:
      'Enjoy a meal at Latest Recipe or snacks in the coffee shop/cafe. The resort also offers 24-hour room service. Relax with your favorite drink at the bar/lounge or the poolside bar. Buffet breakfasts are available daily from 7 AM to 10:30 AM for a fee.',
    business_amenities:
      'Featured amenities include complimentary wired Internet access, a 24-hour business center, and limo/town car service. Planning an event in Amer? This resort has facilities measuring 6457 square feet (600 square meters), including a conference center. A train station pick-up service is provided at no charge (available 24 hours), and free valet parking is available onsite.',
    rooms:
      'Make yourself at home in one of the 126 individually decorated guestrooms, featuring refrigerators and LCD televisions. Your memory foam bed comes with down comforters and premium bedding. Wired and wireless Internet access is complimentary, while DVD players and cable programming provide entertainment. Private bathrooms with showers feature rainfall showerheads and designer toiletries.',
    attractions:
      'Distances are displayed to the nearest 0.1 mile and kilometer. <br /> <p>Royal Gaitor Tumbas - 0.8 km / 0.5 mi <br /> Nahargarh Biological & Zoological Park - 5.2 km / 3.2 mi <br /> Elefantasy - 7.6 km / 4.7 mi <br /> Shesh Mahal - 8.4 km / 5.2 mi <br /> Amber Fort - 8.4 km / 5.2 mi <br /> Seesh Mahal - 8.6 km / 5.3 mi <br /> Chand Pol (Moon Gate) - 8.8 km / 5.4 mi <br /> Jal Mahal - 12.1 km / 7.5 mi <br /> Gaitor - 15 km / 9.4 mi <br /> Jaigarh Fort - 15.3 km / 9.5 mi <br /> Galta Gate - 15.4 km / 9.6 mi <br /> Govind Devji Temple - 16.1 km / 10 mi <br /> Ganesh Temple - 16.2 km / 10 mi <br /> Jantar Mantar - 16.3 km / 10.1 mi <br /> Hawa Mahal - 16.3 km / 10.1 mi <br /> </p><p>The preferred airport for Le Méridien Jaipur Resort & Spa is Sanganer Airport (JAI) - 28.3 km / 17.6 mi </p>',
    location:
      "With a stay at Le Méridien Jaipur Resort & Spa in Amer, you'll be 5.2 mi (8.4 km) from Amber Fort and 7.5 mi (12.1 km) from Jal Mahal.  This 5-star resort is 10.1 mi (16.3 km) from Jantar Mantar and 10.1 mi (16.3 km) from Hawa Mahal.",
    headline: 'Near Royal Gaitor Tumbas',
  },
  rooms: [
    {
      id: '210902829',
      name: 'Premium Room, 2 Twin Beds, Non Smoking',
      amenities: [
        { id: '26', name: 'Television' },
        { id: '121', name: 'Wheelchair accessible' },
        { id: '128', name: 'Free newspaper' },
        { id: '130', name: 'Refrigerator' },
        { id: '131', name: 'Minibar' },
        { id: '132', name: 'Coffee/tea maker' },
        { id: '133', name: 'Daily housekeeping' },
        { id: '136', name: 'Phone' },
        { id: '141', name: 'Private bathroom' },
        { id: '142', name: 'Bathrobes' },
        { id: '143', name: 'Free toiletries' },
        { id: '144', name: 'Hair dryer' },
        { id: '146', name: 'In-room safe' },
        { id: '331', name: 'Ceiling fan' },
        { id: '2015', name: 'Room service (24 hours)' },
        { id: '2025', name: 'Designer toiletries' },
        { id: '2026', name: 'Desk' },
        { id: '2030', name: 'In-room climate control (air conditioning)' },
        { id: '2034', name: 'Premium bedding' },
        { id: '2039', name: 'Pay movies' },
        { id: '2055', name: 'Iron/ironing board (on request)' },
        { id: '2056', name: 'Turndown service' },
        { id: '2057', name: 'Free bottled water' },
        { id: '2081', name: 'Premium TV channels' },
        { id: '2086', name: 'DVD player' },
        { id: '2148', name: 'Access via exterior corridors' },
        { id: '2149', name: 'Bidet' },
        { id: '2160', name: 'In-room massage available' },
        { id: '2162', name: 'Slippers' },
        { id: '2166', name: 'Shower only' },
        { id: '2398', name: 'Cable TV service' },
        { id: '2402', name: 'HDTV' },
        { id: '2403', name: 'Free WiFi' },
        { id: '2405', name: 'Free wired internet' },
        { id: '2559', name: 'Down comforter' },
        { id: '2567', name: 'Individually furnished' },
        { id: '2568', name: 'Individually decorated' },
        { id: '2569', name: 'Memory foam mattress' },
        { id: '2572', name: 'Pillow menu' },
        { id: '2575', name: 'LCD TV' },
        { id: '3502', name: 'Rainfall showerhead' },
        { id: '4950', name: 'Cribs/infant beds (surcharge)' },
        { id: '6176', name: 'Non-Smoking' },
        { id: '1073742816', name: 'Rollaway/extra beds (surcharge)' },
        { id: '1073743289', name: 'Electric kettle' },
        { id: '1073743370', name: 'Towels provided' },
        { id: '1073743371', name: 'Bedsheets provided' },
        { id: '1073744214', name: 'Local maps' },
        { id: '1073744216', name: 'Guidebooks or recommendations' },
        { id: '1073744237', name: 'Laptop-friendly workspace' },
        { id: '1073744382', name: 'Restaurant dining guide' },
        { id: '1073744655', name: 'Wheelchair-accessible bathroom vanity' },
        { id: '1073744660', name: 'Raised toilet seat' },
        { id: '1073744661', name: 'Lowered electrical outlets in bathroom' },
        { id: '1073744667', name: 'Low-height counters/sink' },
        { id: '1073744673', name: 'Height-adjustable showerhead' },
        { id: '1073744675', name: 'Grab bar - near toilet' },
        { id: '1073744681', name: 'Bathroom emergency pull cord' },
        { id: '1073744684', name: 'Transfer shower' },
        { id: '1073744689', name: 'Lever door handles' },
      ],
      images: [
        {
          hero_image: true,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/ee39d6ae_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/ee39d6ae_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/ee39d6ae_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/ee39d6ae_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/c61c4437_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/c61c4437_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/c61c4437_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/c61c4437_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/c9e3da1c_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/c9e3da1c_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/c9e3da1c_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/c9e3da1c_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/0e7f95e4_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/0e7f95e4_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/0e7f95e4_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/0e7f95e4_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/5d3c97f0_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/5d3c97f0_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/5d3c97f0_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/5d3c97f0_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/4d5bda28_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/4d5bda28_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/4d5bda28_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/4d5bda28_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 22013,
          caption: 'View from room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/27ced017_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/27ced017_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/27ced017_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/27ced017_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 23000,
          caption: 'Bathroom',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/b11a83f6_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/b11a83f6_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/b11a83f6_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/b11a83f6_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 23000,
          caption: 'Bathroom',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/afcb2956_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/afcb2956_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/afcb2956_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/afcb2956_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 30000,
          caption: 'Pool',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/70a78295_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/70a78295_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/70a78295_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/70a78295_z.jpg',
            },
          ],
        },
      ],
      bed_groups: [
        {
          id: '37341',
          description: '2 Twin Beds',
          configuration: [{ quantity: '2', size: 'Twin', type: 'TwinBed' }],
        },
      ],
      area: { square_meters: '54', square_feet: '581' },
      views: [{}],
      occupancy: {
        max_allowed: { total: '3', children: '2', adults: '3' },
        age_categories: {
          ChildAgeA: { name: 'ChildAgeA', minimum_age: '1' },
          Infant: { name: 'Infant', minimum_age: '0' },
          Adult: { name: 'Adult', minimum_age: '12' },
        },
      },
    },
    {
      id: '210902830',
      name: 'Room, 1 King Bed, Non Smoking',
      amenities: [
        { id: '26', name: 'Television' },
        { id: '121', name: 'Wheelchair accessible' },
        { id: '128', name: 'Free newspaper' },
        { id: '130', name: 'Refrigerator' },
        { id: '131', name: 'Minibar' },
        { id: '132', name: 'Coffee/tea maker' },
        { id: '133', name: 'Daily housekeeping' },
        { id: '136', name: 'Phone' },
        { id: '141', name: 'Private bathroom' },
        { id: '142', name: 'Bathrobes' },
        { id: '143', name: 'Free toiletries' },
        { id: '144', name: 'Hair dryer' },
        { id: '146', name: 'In-room safe' },
        { id: '331', name: 'Ceiling fan' },
        { id: '2015', name: 'Room service (24 hours)' },
        { id: '2025', name: 'Designer toiletries' },
        { id: '2026', name: 'Desk' },
        { id: '2030', name: 'In-room climate control (air conditioning)' },
        { id: '2034', name: 'Premium bedding' },
        { id: '2039', name: 'Pay movies' },
        { id: '2055', name: 'Iron/ironing board (on request)' },
        { id: '2056', name: 'Turndown service' },
        { id: '2057', name: 'Free bottled water' },
        { id: '2081', name: 'Premium TV channels' },
        { id: '2086', name: 'DVD player' },
        { id: '2148', name: 'Access via exterior corridors' },
        { id: '2149', name: 'Bidet' },
        { id: '2160', name: 'In-room massage available' },
        { id: '2162', name: 'Slippers' },
        { id: '2166', name: 'Shower only' },
        { id: '2398', name: 'Cable TV service' },
        { id: '2402', name: 'HDTV' },
        { id: '2403', name: 'Free WiFi' },
        { id: '2405', name: 'Free wired internet' },
        { id: '2559', name: 'Down comforter' },
        { id: '2567', name: 'Individually furnished' },
        { id: '2568', name: 'Individually decorated' },
        { id: '2569', name: 'Memory foam mattress' },
        { id: '2572', name: 'Pillow menu' },
        { id: '2575', name: 'LCD TV' },
        { id: '3502', name: 'Rainfall showerhead' },
        { id: '4950', name: 'Cribs/infant beds (surcharge)' },
        { id: '6176', name: 'Non-Smoking' },
        { id: '1073742816', name: 'Rollaway/extra beds (surcharge)' },
        { id: '1073743289', name: 'Electric kettle' },
        { id: '1073743370', name: 'Towels provided' },
        { id: '1073743371', name: 'Bedsheets provided' },
        { id: '1073744214', name: 'Local maps' },
        { id: '1073744216', name: 'Guidebooks or recommendations' },
        { id: '1073744237', name: 'Laptop-friendly workspace' },
        { id: '1073744382', name: 'Restaurant dining guide' },
        { id: '1073744655', name: 'Wheelchair-accessible bathroom vanity' },
        { id: '1073744660', name: 'Raised toilet seat' },
        { id: '1073744661', name: 'Lowered electrical outlets in bathroom' },
        { id: '1073744667', name: 'Low-height counters/sink' },
        { id: '1073744673', name: 'Height-adjustable showerhead' },
        { id: '1073744675', name: 'Grab bar - near toilet' },
        { id: '1073744681', name: 'Bathroom emergency pull cord' },
        { id: '1073744684', name: 'Transfer shower' },
        { id: '1073744689', name: 'Lever door handles' },
      ],
      images: [
        {
          hero_image: true,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/465d52cf_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/465d52cf_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/465d52cf_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/465d52cf_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/a32b831b_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/a32b831b_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/a32b831b_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/a32b831b_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/175fb011_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/175fb011_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/175fb011_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/175fb011_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/10f1a090_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/10f1a090_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/10f1a090_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/10f1a090_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/52f675a5_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/52f675a5_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/52f675a5_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/52f675a5_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/5654a3cf_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/5654a3cf_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/5654a3cf_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/5654a3cf_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 22013,
          caption: 'View from room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/27ced017_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/27ced017_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/27ced017_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/27ced017_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 23000,
          caption: 'Bathroom',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/3cc8fd97_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/3cc8fd97_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/3cc8fd97_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/3cc8fd97_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 23000,
          caption: 'Bathroom',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/703a09f5_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/703a09f5_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/703a09f5_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/703a09f5_z.jpg',
            },
          ],
        },
      ],
      bed_groups: [
        {
          id: '37321',
          description: '1 King Bed',
          configuration: [{ quantity: '1', size: 'King', type: 'KingBed' }],
        },
      ],
      area: { square_meters: '35', square_feet: '377' },
      views: [{}],
      occupancy: {
        max_allowed: { total: '3', children: '2', adults: '3' },
        age_categories: {
          ChildAgeA: { name: 'ChildAgeA', minimum_age: '1' },
          Infant: { name: 'Infant', minimum_age: '0' },
          Adult: { name: 'Adult', minimum_age: '12' },
        },
      },
    },
    {
      id: '210902831',
      name: 'Room, 2 Twin Beds, Non Smoking',
      amenities: [
        { id: '26', name: 'Television' },
        { id: '121', name: 'Wheelchair accessible' },
        { id: '128', name: 'Free newspaper' },
        { id: '130', name: 'Refrigerator' },
        { id: '131', name: 'Minibar' },
        { id: '132', name: 'Coffee/tea maker' },
        { id: '133', name: 'Daily housekeeping' },
        { id: '136', name: 'Phone' },
        { id: '141', name: 'Private bathroom' },
        { id: '142', name: 'Bathrobes' },
        { id: '143', name: 'Free toiletries' },
        { id: '144', name: 'Hair dryer' },
        { id: '146', name: 'In-room safe' },
        { id: '331', name: 'Ceiling fan' },
        { id: '2015', name: 'Room service (24 hours)' },
        { id: '2025', name: 'Designer toiletries' },
        { id: '2026', name: 'Desk' },
        { id: '2030', name: 'In-room climate control (air conditioning)' },
        { id: '2034', name: 'Premium bedding' },
        { id: '2039', name: 'Pay movies' },
        { id: '2055', name: 'Iron/ironing board (on request)' },
        { id: '2056', name: 'Turndown service' },
        { id: '2057', name: 'Free bottled water' },
        { id: '2081', name: 'Premium TV channels' },
        { id: '2086', name: 'DVD player' },
        { id: '2148', name: 'Access via exterior corridors' },
        { id: '2149', name: 'Bidet' },
        { id: '2160', name: 'In-room massage available' },
        { id: '2162', name: 'Slippers' },
        { id: '2166', name: 'Shower only' },
        { id: '2398', name: 'Cable TV service' },
        { id: '2402', name: 'HDTV' },
        { id: '2403', name: 'Free WiFi' },
        { id: '2405', name: 'Free wired internet' },
        { id: '2559', name: 'Down comforter' },
        { id: '2567', name: 'Individually furnished' },
        { id: '2568', name: 'Individually decorated' },
        { id: '2569', name: 'Memory foam mattress' },
        { id: '2572', name: 'Pillow menu' },
        { id: '2575', name: 'LCD TV' },
        { id: '3502', name: 'Rainfall showerhead' },
        { id: '4950', name: 'Cribs/infant beds (surcharge)' },
        { id: '6176', name: 'Non-Smoking' },
        { id: '1073742816', name: 'Rollaway/extra beds (surcharge)' },
        { id: '1073743289', name: 'Electric kettle' },
        { id: '1073743370', name: 'Towels provided' },
        { id: '1073743371', name: 'Bedsheets provided' },
        { id: '1073744214', name: 'Local maps' },
        { id: '1073744216', name: 'Guidebooks or recommendations' },
        { id: '1073744237', name: 'Laptop-friendly workspace' },
        { id: '1073744382', name: 'Restaurant dining guide' },
        { id: '1073744655', name: 'Wheelchair-accessible bathroom vanity' },
        { id: '1073744660', name: 'Raised toilet seat' },
        { id: '1073744661', name: 'Lowered electrical outlets in bathroom' },
        { id: '1073744667', name: 'Low-height counters/sink' },
        { id: '1073744673', name: 'Height-adjustable showerhead' },
        { id: '1073744675', name: 'Grab bar - near toilet' },
        { id: '1073744681', name: 'Bathroom emergency pull cord' },
        { id: '1073744684', name: 'Transfer shower' },
        { id: '1073744689', name: 'Lever door handles' },
      ],
      images: [
        {
          hero_image: true,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/f75696f3_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/f75696f3_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/f75696f3_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/f75696f3_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/c61c4437_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/c61c4437_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/c61c4437_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/c61c4437_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/1bcf45f5_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/1bcf45f5_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/1bcf45f5_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/1bcf45f5_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/5d3c97f0_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/5d3c97f0_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/5d3c97f0_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/5d3c97f0_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/5654a3cf_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/5654a3cf_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/5654a3cf_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/5654a3cf_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 22013,
          caption: 'View from room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/27ced017_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/27ced017_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/27ced017_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/27ced017_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 23000,
          caption: 'Bathroom',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/65902322_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/65902322_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/65902322_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/65902322_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 23000,
          caption: 'Bathroom',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/f93c9261_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/f93c9261_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/f93c9261_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/f93c9261_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 30000,
          caption: 'Pool',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/70a78295_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/70a78295_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/70a78295_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/70a78295_z.jpg',
            },
          ],
        },
      ],
      bed_groups: [
        {
          id: '37341',
          description: '2 Twin Beds',
          configuration: [{ quantity: '2', size: 'Twin', type: 'TwinBed' }],
        },
      ],
      area: { square_meters: '35', square_feet: '377' },
      views: [{}],
      occupancy: {
        max_allowed: { total: '3', children: '2', adults: '3' },
        age_categories: {
          ChildAgeA: { name: 'ChildAgeA', minimum_age: '1' },
          Infant: { name: 'Infant', minimum_age: '0' },
          Adult: { name: 'Adult', minimum_age: '12' },
        },
      },
    },
    {
      id: '210902832',
      name: 'Room, 1 King Bed, Non Smoking',
      amenities: [
        { id: '26', name: 'Television' },
        { id: '121', name: 'Wheelchair accessible' },
        { id: '128', name: 'Free newspaper' },
        { id: '130', name: 'Refrigerator' },
        { id: '131', name: 'Minibar' },
        { id: '132', name: 'Coffee/tea maker' },
        { id: '133', name: 'Daily housekeeping' },
        { id: '136', name: 'Phone' },
        { id: '141', name: 'Private bathroom' },
        { id: '142', name: 'Bathrobes' },
        { id: '143', name: 'Free toiletries' },
        { id: '144', name: 'Hair dryer' },
        { id: '146', name: 'In-room safe' },
        { id: '331', name: 'Ceiling fan' },
        { id: '2015', name: 'Room service (24 hours)' },
        { id: '2025', name: 'Designer toiletries' },
        { id: '2026', name: 'Desk' },
        { id: '2030', name: 'In-room climate control (air conditioning)' },
        { id: '2034', name: 'Premium bedding' },
        { id: '2039', name: 'Pay movies' },
        { id: '2055', name: 'Iron/ironing board (on request)' },
        { id: '2056', name: 'Turndown service' },
        { id: '2057', name: 'Free bottled water' },
        { id: '2081', name: 'Premium TV channels' },
        { id: '2086', name: 'DVD player' },
        { id: '2148', name: 'Access via exterior corridors' },
        { id: '2149', name: 'Bidet' },
        { id: '2160', name: 'In-room massage available' },
        { id: '2162', name: 'Slippers' },
        { id: '2166', name: 'Shower only' },
        { id: '2398', name: 'Cable TV service' },
        { id: '2402', name: 'HDTV' },
        { id: '2403', name: 'Free WiFi' },
        { id: '2405', name: 'Free wired internet' },
        { id: '2559', name: 'Down comforter' },
        { id: '2567', name: 'Individually furnished' },
        { id: '2568', name: 'Individually decorated' },
        { id: '2569', name: 'Memory foam mattress' },
        { id: '2572', name: 'Pillow menu' },
        { id: '2575', name: 'LCD TV' },
        { id: '3502', name: 'Rainfall showerhead' },
        { id: '4950', name: 'Cribs/infant beds (surcharge)' },
        { id: '6176', name: 'Non-Smoking' },
        { id: '1073742816', name: 'Rollaway/extra beds (surcharge)' },
        { id: '1073743289', name: 'Electric kettle' },
        { id: '1073743370', name: 'Towels provided' },
        { id: '1073743371', name: 'Bedsheets provided' },
        { id: '1073744214', name: 'Local maps' },
        { id: '1073744216', name: 'Guidebooks or recommendations' },
        { id: '1073744237', name: 'Laptop-friendly workspace' },
        { id: '1073744382', name: 'Restaurant dining guide' },
        { id: '1073744655', name: 'Wheelchair-accessible bathroom vanity' },
        { id: '1073744660', name: 'Raised toilet seat' },
        { id: '1073744661', name: 'Lowered electrical outlets in bathroom' },
        { id: '1073744667', name: 'Low-height counters/sink' },
        { id: '1073744673', name: 'Height-adjustable showerhead' },
        { id: '1073744675', name: 'Grab bar - near toilet' },
        { id: '1073744681', name: 'Bathroom emergency pull cord' },
        { id: '1073744684', name: 'Transfer shower' },
        { id: '1073744689', name: 'Lever door handles' },
      ],
      images: [
        {
          hero_image: true,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/52f675a5_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/52f675a5_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/52f675a5_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/52f675a5_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/a32b831b_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/a32b831b_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/a32b831b_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/a32b831b_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/d94a977e_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/d94a977e_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/d94a977e_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/d94a977e_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/eec53d5a_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/eec53d5a_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/eec53d5a_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/eec53d5a_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/9cbb6284_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/9cbb6284_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/9cbb6284_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/9cbb6284_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 22013,
          caption: 'View from room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/27ced017_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/27ced017_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/27ced017_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/27ced017_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 23000,
          caption: 'Bathroom',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/acc306e4_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/acc306e4_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/acc306e4_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/acc306e4_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 23000,
          caption: 'Bathroom',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/b0f82665_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/b0f82665_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/b0f82665_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/b0f82665_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 23000,
          caption: 'Bathroom',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/11200225_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/11200225_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/11200225_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/11200225_z.jpg',
            },
          ],
        },
      ],
      bed_groups: [
        {
          id: '37321',
          description: '1 King Bed',
          configuration: [{ quantity: '1', size: 'King', type: 'KingBed' }],
        },
      ],
      area: { square_meters: '54', square_feet: '581' },
      views: [{}],
      occupancy: {
        max_allowed: { total: '3', children: '2', adults: '3' },
        age_categories: {
          ChildAgeA: { name: 'ChildAgeA', minimum_age: '1' },
          Infant: { name: 'Infant', minimum_age: '0' },
          Adult: { name: 'Adult', minimum_age: '12' },
        },
      },
    },
    {
      id: '210902833',
      name: 'Room, 2 Twin Beds, Non Smoking',
      amenities: [
        { id: '26', name: 'Television' },
        { id: '121', name: 'Wheelchair accessible' },
        { id: '128', name: 'Free newspaper' },
        { id: '130', name: 'Refrigerator' },
        { id: '131', name: 'Minibar' },
        { id: '132', name: 'Coffee/tea maker' },
        { id: '133', name: 'Daily housekeeping' },
        { id: '136', name: 'Phone' },
        { id: '141', name: 'Private bathroom' },
        { id: '142', name: 'Bathrobes' },
        { id: '143', name: 'Free toiletries' },
        { id: '144', name: 'Hair dryer' },
        { id: '146', name: 'In-room safe' },
        { id: '331', name: 'Ceiling fan' },
        { id: '2015', name: 'Room service (24 hours)' },
        { id: '2025', name: 'Designer toiletries' },
        { id: '2026', name: 'Desk' },
        { id: '2030', name: 'In-room climate control (air conditioning)' },
        { id: '2034', name: 'Premium bedding' },
        { id: '2039', name: 'Pay movies' },
        { id: '2055', name: 'Iron/ironing board (on request)' },
        { id: '2056', name: 'Turndown service' },
        { id: '2057', name: 'Free bottled water' },
        { id: '2081', name: 'Premium TV channels' },
        { id: '2086', name: 'DVD player' },
        { id: '2148', name: 'Access via exterior corridors' },
        { id: '2149', name: 'Bidet' },
        { id: '2160', name: 'In-room massage available' },
        { id: '2162', name: 'Slippers' },
        { id: '2166', name: 'Shower only' },
        { id: '2398', name: 'Cable TV service' },
        { id: '2402', name: 'HDTV' },
        { id: '2403', name: 'Free WiFi' },
        { id: '2405', name: 'Free wired internet' },
        { id: '2559', name: 'Down comforter' },
        { id: '2567', name: 'Individually furnished' },
        { id: '2568', name: 'Individually decorated' },
        { id: '2569', name: 'Memory foam mattress' },
        { id: '2572', name: 'Pillow menu' },
        { id: '2575', name: 'LCD TV' },
        { id: '3502', name: 'Rainfall showerhead' },
        { id: '4950', name: 'Cribs/infant beds (surcharge)' },
        { id: '6176', name: 'Non-Smoking' },
        { id: '1073742816', name: 'Rollaway/extra beds (surcharge)' },
        { id: '1073743289', name: 'Electric kettle' },
        { id: '1073743370', name: 'Towels provided' },
        { id: '1073743371', name: 'Bedsheets provided' },
        { id: '1073744214', name: 'Local maps' },
        { id: '1073744216', name: 'Guidebooks or recommendations' },
        { id: '1073744237', name: 'Laptop-friendly workspace' },
        { id: '1073744382', name: 'Restaurant dining guide' },
        { id: '1073744655', name: 'Wheelchair-accessible bathroom vanity' },
        { id: '1073744660', name: 'Raised toilet seat' },
        { id: '1073744661', name: 'Lowered electrical outlets in bathroom' },
        { id: '1073744667', name: 'Low-height counters/sink' },
        { id: '1073744673', name: 'Height-adjustable showerhead' },
        { id: '1073744675', name: 'Grab bar - near toilet' },
        { id: '1073744681', name: 'Bathroom emergency pull cord' },
        { id: '1073744684', name: 'Transfer shower' },
        { id: '1073744689', name: 'Lever door handles' },
      ],
      images: [
        {
          hero_image: true,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/e4b73655_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/e4b73655_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/e4b73655_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/e4b73655_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/7a142134_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/7a142134_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/7a142134_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/7a142134_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/8bf0685e_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/8bf0685e_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/8bf0685e_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/8bf0685e_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/82fdb453_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/82fdb453_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/82fdb453_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/82fdb453_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/eec53d5a_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/eec53d5a_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/eec53d5a_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/eec53d5a_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 22013,
          caption: 'View from room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/27ced017_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/27ced017_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/27ced017_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/27ced017_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 23000,
          caption: 'Bathroom',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/b11a83f6_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/b11a83f6_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/b11a83f6_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/b11a83f6_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 23000,
          caption: 'Bathroom',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/f847c3ff_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/f847c3ff_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/f847c3ff_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/f847c3ff_z.jpg',
            },
          ],
        },
      ],
      bed_groups: [
        {
          id: '37341',
          description: '2 Twin Beds',
          configuration: [{ quantity: '2', size: 'Twin', type: 'TwinBed' }],
        },
      ],
      area: { square_meters: '54', square_feet: '581' },
      views: [{}],
      occupancy: {
        max_allowed: { total: '3', children: '2', adults: '3' },
        age_categories: {
          ChildAgeA: { name: 'ChildAgeA', minimum_age: '1' },
          Infant: { name: 'Infant', minimum_age: '0' },
          Adult: { name: 'Adult', minimum_age: '12' },
        },
      },
    },
    {
      id: '210902834',
      name: 'Villa, 1 King Bed, Non Smoking',
      amenities: [
        { id: '26', name: 'Television' },
        { id: '121', name: 'Wheelchair accessible' },
        { id: '128', name: 'Free newspaper' },
        { id: '130', name: 'Refrigerator' },
        { id: '131', name: 'Minibar' },
        { id: '132', name: 'Coffee/tea maker' },
        { id: '133', name: 'Daily housekeeping' },
        { id: '136', name: 'Phone' },
        { id: '141', name: 'Private bathroom' },
        { id: '142', name: 'Bathrobes' },
        { id: '143', name: 'Free toiletries' },
        { id: '144', name: 'Hair dryer' },
        { id: '146', name: 'In-room safe' },
        { id: '331', name: 'Ceiling fan' },
        { id: '2015', name: 'Room service (24 hours)' },
        { id: '2025', name: 'Designer toiletries' },
        { id: '2026', name: 'Desk' },
        { id: '2030', name: 'In-room climate control (air conditioning)' },
        { id: '2034', name: 'Premium bedding' },
        { id: '2039', name: 'Pay movies' },
        { id: '2055', name: 'Iron/ironing board (on request)' },
        { id: '2056', name: 'Turndown service' },
        { id: '2057', name: 'Free bottled water' },
        { id: '2081', name: 'Premium TV channels' },
        { id: '2086', name: 'DVD player' },
        { id: '2148', name: 'Access via exterior corridors' },
        { id: '2149', name: 'Bidet' },
        { id: '2160', name: 'In-room massage available' },
        { id: '2162', name: 'Slippers' },
        { id: '2166', name: 'Shower only' },
        { id: '2398', name: 'Cable TV service' },
        { id: '2402', name: 'HDTV' },
        { id: '2403', name: 'Free WiFi' },
        { id: '2405', name: 'Free wired internet' },
        { id: '2559', name: 'Down comforter' },
        { id: '2567', name: 'Individually furnished' },
        { id: '2568', name: 'Individually decorated' },
        { id: '2569', name: 'Memory foam mattress' },
        { id: '2572', name: 'Pillow menu' },
        { id: '2575', name: 'LCD TV' },
        { id: '3502', name: 'Rainfall showerhead' },
        { id: '4950', name: 'Cribs/infant beds (surcharge)' },
        { id: '6176', name: 'Non-Smoking' },
        { id: '1073742816', name: 'Rollaway/extra beds (surcharge)' },
        { id: '1073743289', name: 'Electric kettle' },
        { id: '1073743370', name: 'Towels provided' },
        { id: '1073743371', name: 'Bedsheets provided' },
        { id: '1073744214', name: 'Local maps' },
        { id: '1073744216', name: 'Guidebooks or recommendations' },
        { id: '1073744237', name: 'Laptop-friendly workspace' },
        { id: '1073744382', name: 'Restaurant dining guide' },
        { id: '1073744655', name: 'Wheelchair-accessible bathroom vanity' },
        { id: '1073744660', name: 'Raised toilet seat' },
        { id: '1073744661', name: 'Lowered electrical outlets in bathroom' },
        { id: '1073744667', name: 'Low-height counters/sink' },
        { id: '1073744673', name: 'Height-adjustable showerhead' },
        { id: '1073744675', name: 'Grab bar - near toilet' },
        { id: '1073744681', name: 'Bathroom emergency pull cord' },
        { id: '1073744684', name: 'Transfer shower' },
        { id: '1073744689', name: 'Lever door handles' },
      ],
      images: [
        {
          hero_image: true,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/4c570a50_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/4c570a50_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/4c570a50_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/4c570a50_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/6391f211_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/6391f211_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/6391f211_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/6391f211_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/8a585e56_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/8a585e56_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/8a585e56_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/8a585e56_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/9eaab4fc_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/9eaab4fc_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/9eaab4fc_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/9eaab4fc_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 22013,
          caption: 'View from room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/31c1d526_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/31c1d526_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/31c1d526_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/31c1d526_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 23000,
          caption: 'Bathroom',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/059ff8de_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/059ff8de_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/059ff8de_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/059ff8de_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 23000,
          caption: 'Bathroom',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/c6ec3f97_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/c6ec3f97_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/c6ec3f97_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/c6ec3f97_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 23000,
          caption: 'Bathroom',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/7b3e00e5_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/7b3e00e5_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/7b3e00e5_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/7b3e00e5_z.jpg',
            },
          ],
        },
      ],
      bed_groups: [
        {
          id: '37321',
          description: '1 King Bed',
          configuration: [{ quantity: '1', size: 'King', type: 'KingBed' }],
        },
      ],
      area: { square_meters: '110', square_feet: '1184' },
      views: [{}],
      occupancy: {
        max_allowed: { total: '3', children: '2', adults: '3' },
        age_categories: {
          ChildAgeA: { name: 'ChildAgeA', minimum_age: '1' },
          Infant: { name: 'Infant', minimum_age: '0' },
          Adult: { name: 'Adult', minimum_age: '12' },
        },
      },
    },
    {
      id: '210902835',
      name: 'Suite, 1 King Bed, Non Smoking',
      amenities: [
        { id: '26', name: 'Television' },
        { id: '121', name: 'Wheelchair accessible' },
        { id: '128', name: 'Free newspaper' },
        { id: '130', name: 'Refrigerator' },
        { id: '131', name: 'Minibar' },
        { id: '132', name: 'Coffee/tea maker' },
        { id: '133', name: 'Daily housekeeping' },
        { id: '136', name: 'Phone' },
        { id: '141', name: 'Private bathroom' },
        { id: '142', name: 'Bathrobes' },
        { id: '143', name: 'Free toiletries' },
        { id: '144', name: 'Hair dryer' },
        { id: '146', name: 'In-room safe' },
        { id: '331', name: 'Ceiling fan' },
        { id: '2015', name: 'Room service (24 hours)' },
        { id: '2025', name: 'Designer toiletries' },
        { id: '2026', name: 'Desk' },
        { id: '2030', name: 'In-room climate control (air conditioning)' },
        { id: '2034', name: 'Premium bedding' },
        { id: '2039', name: 'Pay movies' },
        { id: '2055', name: 'Iron/ironing board (on request)' },
        { id: '2056', name: 'Turndown service' },
        { id: '2057', name: 'Free bottled water' },
        { id: '2081', name: 'Premium TV channels' },
        { id: '2086', name: 'DVD player' },
        { id: '2148', name: 'Access via exterior corridors' },
        { id: '2149', name: 'Bidet' },
        { id: '2160', name: 'In-room massage available' },
        { id: '2162', name: 'Slippers' },
        { id: '2166', name: 'Shower only' },
        { id: '2398', name: 'Cable TV service' },
        { id: '2402', name: 'HDTV' },
        { id: '2403', name: 'Free WiFi' },
        { id: '2405', name: 'Free wired internet' },
        { id: '2559', name: 'Down comforter' },
        { id: '2567', name: 'Individually furnished' },
        { id: '2568', name: 'Individually decorated' },
        { id: '2569', name: 'Memory foam mattress' },
        { id: '2572', name: 'Pillow menu' },
        { id: '2575', name: 'LCD TV' },
        { id: '3502', name: 'Rainfall showerhead' },
        { id: '4950', name: 'Cribs/infant beds (surcharge)' },
        { id: '6176', name: 'Non-Smoking' },
        { id: '1073742816', name: 'Rollaway/extra beds (surcharge)' },
        { id: '1073743289', name: 'Electric kettle' },
        { id: '1073743370', name: 'Towels provided' },
        { id: '1073743371', name: 'Bedsheets provided' },
        { id: '1073744214', name: 'Local maps' },
        { id: '1073744216', name: 'Guidebooks or recommendations' },
        { id: '1073744237', name: 'Laptop-friendly workspace' },
        { id: '1073744382', name: 'Restaurant dining guide' },
        { id: '1073744655', name: 'Wheelchair-accessible bathroom vanity' },
        { id: '1073744660', name: 'Raised toilet seat' },
        { id: '1073744661', name: 'Lowered electrical outlets in bathroom' },
        { id: '1073744667', name: 'Low-height counters/sink' },
        { id: '1073744673', name: 'Height-adjustable showerhead' },
        { id: '1073744675', name: 'Grab bar - near toilet' },
        { id: '1073744681', name: 'Bathroom emergency pull cord' },
        { id: '1073744684', name: 'Transfer shower' },
        { id: '1073744689', name: 'Lever door handles' },
      ],
      images: [
        {
          hero_image: true,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/7ba86b94_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/7ba86b94_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/7ba86b94_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/7ba86b94_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/81879b0f_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/81879b0f_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/81879b0f_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/81879b0f_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/e7b355b5_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/e7b355b5_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/e7b355b5_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/e7b355b5_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/13e8922b_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/13e8922b_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/13e8922b_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/13e8922b_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/4b19e91c_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/4b19e91c_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/4b19e91c_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/4b19e91c_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/e9be6c15_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/e9be6c15_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/e9be6c15_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/e9be6c15_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/6a2f1e6a_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/6a2f1e6a_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/6a2f1e6a_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/6a2f1e6a_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 22013,
          caption: 'View from room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/24a5e9b0_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/24a5e9b0_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/24a5e9b0_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/24a5e9b0_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 23000,
          caption: 'Bathroom',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/e12be978_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/e12be978_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/e12be978_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/e12be978_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 23000,
          caption: 'Bathroom',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/bde3e571_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/bde3e571_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/bde3e571_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/bde3e571_z.jpg',
            },
          ],
        },
      ],
      bed_groups: [
        {
          id: '37321',
          description: '1 King Bed',
          configuration: [{ quantity: '1', size: 'King', type: 'KingBed' }],
        },
      ],
      area: { square_meters: '150', square_feet: '1613' },
      views: [{}],
      occupancy: {
        max_allowed: { total: '3', children: '2', adults: '3' },
        age_categories: {
          ChildAgeA: { name: 'ChildAgeA', minimum_age: '1' },
          Infant: { name: 'Infant', minimum_age: '0' },
          Adult: { name: 'Adult', minimum_age: '12' },
        },
      },
    },
    {
      id: '210902836',
      name: 'Presidential Suite, 2 Bedrooms, Non Smoking',
      amenities: [
        { id: '26', name: 'Television' },
        { id: '121', name: 'Wheelchair accessible' },
        { id: '128', name: 'Free newspaper' },
        { id: '130', name: 'Refrigerator' },
        { id: '131', name: 'Minibar' },
        { id: '132', name: 'Coffee/tea maker' },
        { id: '133', name: 'Daily housekeeping' },
        { id: '136', name: 'Phone' },
        { id: '141', name: 'Private bathroom' },
        { id: '142', name: 'Bathrobes' },
        { id: '143', name: 'Free toiletries' },
        { id: '144', name: 'Hair dryer' },
        { id: '146', name: 'In-room safe' },
        { id: '331', name: 'Ceiling fan' },
        { id: '2015', name: 'Room service (24 hours)' },
        { id: '2025', name: 'Designer toiletries' },
        { id: '2026', name: 'Desk' },
        { id: '2030', name: 'In-room climate control (air conditioning)' },
        { id: '2034', name: 'Premium bedding' },
        { id: '2039', name: 'Pay movies' },
        { id: '2055', name: 'Iron/ironing board (on request)' },
        { id: '2056', name: 'Turndown service' },
        { id: '2057', name: 'Free bottled water' },
        { id: '2081', name: 'Premium TV channels' },
        { id: '2086', name: 'DVD player' },
        { id: '2148', name: 'Access via exterior corridors' },
        { id: '2149', name: 'Bidet' },
        { id: '2160', name: 'In-room massage available' },
        { id: '2162', name: 'Slippers' },
        { id: '2166', name: 'Shower only' },
        { id: '2398', name: 'Cable TV service' },
        { id: '2402', name: 'HDTV' },
        { id: '2403', name: 'Free WiFi' },
        { id: '2405', name: 'Free wired internet' },
        { id: '2559', name: 'Down comforter' },
        { id: '2567', name: 'Individually furnished' },
        { id: '2568', name: 'Individually decorated' },
        { id: '2569', name: 'Memory foam mattress' },
        { id: '2572', name: 'Pillow menu' },
        { id: '2575', name: 'LCD TV' },
        { id: '3502', name: 'Rainfall showerhead' },
        { id: '4950', name: 'Cribs/infant beds (surcharge)' },
        { id: '6176', name: 'Non-Smoking' },
        { id: '1073742816', name: 'Rollaway/extra beds (surcharge)' },
        { id: '1073743289', name: 'Electric kettle' },
        { id: '1073743370', name: 'Towels provided' },
        { id: '1073743371', name: 'Bedsheets provided' },
        { id: '1073744214', name: 'Local maps' },
        { id: '1073744216', name: 'Guidebooks or recommendations' },
        { id: '1073744237', name: 'Laptop-friendly workspace' },
        { id: '1073744382', name: 'Restaurant dining guide' },
        { id: '1073744655', name: 'Wheelchair-accessible bathroom vanity' },
        { id: '1073744660', name: 'Raised toilet seat' },
        { id: '1073744661', name: 'Lowered electrical outlets in bathroom' },
        { id: '1073744667', name: 'Low-height counters/sink' },
        { id: '1073744673', name: 'Height-adjustable showerhead' },
        { id: '1073744675', name: 'Grab bar - near toilet' },
        { id: '1073744681', name: 'Bathroom emergency pull cord' },
        { id: '1073744684', name: 'Transfer shower' },
        { id: '1073744689', name: 'Lever door handles' },
      ],
      images: [
        {
          hero_image: true,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/29fb733c_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/29fb733c_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/29fb733c_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/29fb733c_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/4b19e91c_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/4b19e91c_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/4b19e91c_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/4b19e91c_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/7ba86b94_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/7ba86b94_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/7ba86b94_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/7ba86b94_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/8c6224b9_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/8c6224b9_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/8c6224b9_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/8c6224b9_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/82930f46_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/82930f46_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/82930f46_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/82930f46_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 22013,
          caption: 'View from room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/24a5e9b0_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/24a5e9b0_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/24a5e9b0_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/24a5e9b0_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 23000,
          caption: 'Bathroom',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/e12be978_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/e12be978_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/e12be978_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/e12be978_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 23000,
          caption: 'Bathroom',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/a2de164e_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/a2de164e_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/a2de164e_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/a2de164e_z.jpg',
            },
          ],
        },
      ],
      bed_groups: [
        {
          id: '37365',
          description: '2 Double Beds',
          configuration: [{ quantity: '2', size: 'Full', type: 'FullBed' }],
        },
      ],
      area: { square_meters: '350', square_feet: '3767' },
      views: [{}],
      occupancy: {
        max_allowed: { total: '4', children: '3', adults: '4' },
        age_categories: {
          ChildAgeA: { name: 'ChildAgeA', minimum_age: '1' },
          Infant: { name: 'Infant', minimum_age: '0' },
          Adult: { name: 'Adult', minimum_age: '12' },
        },
      },
    },
    {
      id: '210903738',
      name: 'Premium Room, 1 King Bed, Non Smoking',
      amenities: [
        { id: '26', name: 'Television' },
        { id: '121', name: 'Wheelchair accessible' },
        { id: '128', name: 'Free newspaper' },
        { id: '130', name: 'Refrigerator' },
        { id: '131', name: 'Minibar' },
        { id: '132', name: 'Coffee/tea maker' },
        { id: '133', name: 'Daily housekeeping' },
        { id: '136', name: 'Phone' },
        { id: '141', name: 'Private bathroom' },
        { id: '142', name: 'Bathrobes' },
        { id: '143', name: 'Free toiletries' },
        { id: '144', name: 'Hair dryer' },
        { id: '146', name: 'In-room safe' },
        { id: '331', name: 'Ceiling fan' },
        { id: '2015', name: 'Room service (24 hours)' },
        { id: '2025', name: 'Designer toiletries' },
        { id: '2026', name: 'Desk' },
        { id: '2030', name: 'In-room climate control (air conditioning)' },
        { id: '2034', name: 'Premium bedding' },
        { id: '2039', name: 'Pay movies' },
        { id: '2055', name: 'Iron/ironing board (on request)' },
        { id: '2056', name: 'Turndown service' },
        { id: '2057', name: 'Free bottled water' },
        { id: '2081', name: 'Premium TV channels' },
        { id: '2086', name: 'DVD player' },
        { id: '2148', name: 'Access via exterior corridors' },
        { id: '2149', name: 'Bidet' },
        { id: '2160', name: 'In-room massage available' },
        { id: '2162', name: 'Slippers' },
        { id: '2166', name: 'Shower only' },
        { id: '2398', name: 'Cable TV service' },
        { id: '2402', name: 'HDTV' },
        { id: '2403', name: 'Free WiFi' },
        { id: '2405', name: 'Free wired internet' },
        { id: '2559', name: 'Down comforter' },
        { id: '2567', name: 'Individually furnished' },
        { id: '2568', name: 'Individually decorated' },
        { id: '2569', name: 'Memory foam mattress' },
        { id: '2572', name: 'Pillow menu' },
        { id: '2575', name: 'LCD TV' },
        { id: '3502', name: 'Rainfall showerhead' },
        { id: '4950', name: 'Cribs/infant beds (surcharge)' },
        { id: '6176', name: 'Non-Smoking' },
        { id: '1073742816', name: 'Rollaway/extra beds (surcharge)' },
        { id: '1073743289', name: 'Electric kettle' },
        { id: '1073743370', name: 'Towels provided' },
        { id: '1073743371', name: 'Bedsheets provided' },
        { id: '1073744214', name: 'Local maps' },
        { id: '1073744216', name: 'Guidebooks or recommendations' },
        { id: '1073744237', name: 'Laptop-friendly workspace' },
        { id: '1073744382', name: 'Restaurant dining guide' },
        { id: '1073744655', name: 'Wheelchair-accessible bathroom vanity' },
        { id: '1073744660', name: 'Raised toilet seat' },
        { id: '1073744661', name: 'Lowered electrical outlets in bathroom' },
        { id: '1073744667', name: 'Low-height counters/sink' },
        { id: '1073744673', name: 'Height-adjustable showerhead' },
        { id: '1073744675', name: 'Grab bar - near toilet' },
        { id: '1073744681', name: 'Bathroom emergency pull cord' },
        { id: '1073744684', name: 'Transfer shower' },
        { id: '1073744689', name: 'Lever door handles' },
      ],
      images: [
        {
          hero_image: true,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/c206aaad_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/c206aaad_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/c206aaad_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/c206aaad_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/0338a53f_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/0338a53f_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/0338a53f_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/0338a53f_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/44fdd03c_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/44fdd03c_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/44fdd03c_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/44fdd03c_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/83972b68_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/83972b68_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/83972b68_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/83972b68_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 21001,
          caption: 'Room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/4d5bda28_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/4d5bda28_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/4d5bda28_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/4d5bda28_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 22013,
          caption: 'View from room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/27ced017_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/27ced017_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/27ced017_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/27ced017_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 22013,
          caption: 'View from room',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/500ade9c_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/500ade9c_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/500ade9c_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/500ade9c_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 23000,
          caption: 'Bathroom',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/6d5e555f_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/6d5e555f_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/6d5e555f_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/6d5e555f_z.jpg',
            },
          ],
        },
        {
          hero_image: false,
          category: 30000,
          caption: 'Pool',
          links: [
            {
              size: '350px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/70a78295_b.jpg',
            },
            {
              size: '70px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/70a78295_t.jpg',
            },
            {
              size: '200px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/70a78295_s.jpg',
            },
            {
              size: '1000px',
              method: 'GET',
              href: 'https://i.travelapi.com/hotels/2000000/1040000/1039900/1039814/70a78295_z.jpg',
            },
          ],
        },
      ],
      bed_groups: [
        {
          id: '37321',
          description: '1 King Bed',
          configuration: [{ quantity: '1', size: 'King', type: 'KingBed' }],
        },
      ],
      area: { square_meters: '54', square_feet: '581' },
      views: [{}],
      occupancy: {
        max_allowed: { total: '3', children: '2', adults: '3' },
        age_categories: {
          ChildAgeA: { name: 'ChildAgeA', minimum_age: '1' },
          Infant: { name: 'Infant', minimum_age: '0' },
          Adult: { name: 'Adult', minimum_age: '12' },
        },
      },
    },
  ],
  spoken_languages: [
    { id: 'hi', name: 'Hindi' },
    { id: 'en', name: 'English' },
  ],
  chain: { id: '-9', name: 'Marriott' },
  category: { id: '3', name: 'Resort' },
  vacation_rental_details: [
    {
      private_host: false,
      house_rules: [
        'Children welcome',
        'No pets or service animals',
        'Smoking permitted',
      ],
      enhanced_house_rules: [
        {
          name: 'Pets',
          rule: 'No pets allowed, no service animals permitted',
          additional_information: [],
        },
        {
          name: 'CheckOut',
          rule: 'Check out before noon',
          additional_information: [],
        },
        {
          name: 'MinBookingAge',
          rule: 'Minimum age to rent: 18',
          additional_information: [],
        },
        {
          name: 'CheckIn',
          rule: 'Check in after 3 PM',
          additional_information: [],
        },
        {
          name: 'Children',
          rule: 'Children allowed',
          additional_information: [],
        },
        {
          name: 'Smoking',
          rule: 'Smoking allowed: in designated areas',
          additional_information: [],
        },
      ],
    },
  ],
  __v: 0,
};
