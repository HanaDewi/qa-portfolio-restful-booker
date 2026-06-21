// Data yang digunakan di semua test
const TEST_DATA = {
  auth: {
    username: 'admin',
    password: 'password123',
  },
  booking: {
    firstname: 'John',
    lastname:  'Doe',
    totalprice: 150,
    depositpaid: true,
    bookingdates: {
      checkin:  '2025-06-01',
      checkout: '2025-06-05',
    },
    additionalneeds: 'Breakfast',
  },
  updatedBooking: {
    firstname: 'Jane',
lastname:  'Smith',
    totalprice: 200,
    depositpaid: false,
    bookingdates: {
      checkin:  '2025-07-01',
      checkout: '2025-07-03',
    },
    additionalneeds: 'Lunch',
  },
};
 
module.exports = { TEST_DATA };
