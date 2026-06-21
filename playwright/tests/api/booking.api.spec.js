const { test, expect } = require('@playwright/test');

test.describe('Restful Booker - API Automation', () => {
    let token;
    let bookingId;

    test('1. Generate Token', async ({ request }) => {
        const response = await request.post('/auth', {
            data: {
                username: 'admin',
                password: 'password123'
            }
        });
        
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        
        const responseBody = await response.json();
        token = responseBody.token;
        expect(token).toBeDefined();
    });

    test('2. Create Booking', async ({ request }) => {
        const response = await request.post('/booking', {
            data: {
                firstname: "Hana",
                lastname: "Dewi",
                totalprice: 150000,
                depositpaid: true,
                bookingdates: {
                    checkin: "2026-07-01",
                    checkout: "2026-07-05"
                },
                additionalneeds: "Breakfast"
            }
        });

        expect(response.status()).toBe(200);
        
        const responseBody = await response.json();
        bookingId = responseBody.bookingid;
        expect(bookingId).toBeDefined();
        expect(responseBody.booking.firstname).toBe("Hana");
    });

    test('3. Get Booking', async ({ request }) => {
        const response = await request.get(`/booking/${bookingId}`);
        expect(response.status()).toBe(200);
        
        const responseBody = await response.json();
        expect(responseBody.firstname).toBe("Hana");
        expect(responseBody.lastname).toBe("Dewi");
    });

    test('4. Update Booking', async ({ request }) => {
        const response = await request.put(`/booking/${bookingId}`, {
            headers: {
                'Cookie': `token=${token}`
            },
            data: {
                firstname: "Hana",
                lastname: "Shoviyah",
                totalprice: 200000,
                depositpaid: false,
                bookingdates: {
                    checkin: "2026-07-01",
                    checkout: "2026-07-07"
                },
                additionalneeds: "Late Checkout"
            }
        });

        expect(response.status()).toBe(200);
        
        const responseBody = await response.json();
        expect(responseBody.lastname).toBe("Shoviyah");
        expect(responseBody.totalprice).toBe(200000);
    });

    test('5. Delete Booking', async ({ request }) => {
        const response = await request.delete(`/booking/${bookingId}`, {
            headers: {
                'Cookie': `token=${token}`
            }
        });
        
        // Quirk bawaan Restful Booker, balikan hapus adalah 201 Created
        expect(response.status()).toBe(201); 
    });

    test('6. Verify Deleted Booking (Negative Test)', async ({ request }) => {
        const response = await request.get(`/booking/${bookingId}`);
        
        // Memastikan data benar-benar sudah hilang (404 Not Found)
        expect(response.status()).toBe(404);
    });
});