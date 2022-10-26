const request = require("supertest");
// we also need our app for the correct routes!
const app = require("../api/routes/stock-data");

let company = '20MICRONS';
let start_date = '2022-10-15';
let end_date = '2022-10-17';
let today_date = new Date();

describe("GET /stock-price-data ", () => {
    test("It should respond with timestamp and close price", async () => {
        const response = await request(app).get(`/${company}/${start_date}/${end_date}`);
        expect(response.body[0]).toHaveProperty("TIMESTAMP");
        expect(response.body[0]).toHaveProperty("CLOSE");
        expect(response.body).toEqual([{ TIMESTAMP: '17-OCT-2022', CLOSE: 94.1 }])
        expect(response.statusCode).toBe(200);
    });

    test("It should give error 404", async () => {
        const response = await request(app).get(`/${company}`);
        expect(response.statusCode).toBe(404);
    });

    test("It should give empty output", async () => {
        const response = await request(app).get(`/${company}/${today_date}/${today_date}`);
        expect(response.body).toEqual([])
        expect(response.statusCode).toBe(200);
    });
  });