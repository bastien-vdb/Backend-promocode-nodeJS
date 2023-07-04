import request from 'supertest';
import type * as promoCodeRouteTest from "../../../../src/routes/promoCodeRoute";
import type * as serverTest from "../../../../src/index";

const {promoRouter} = jest.requireActual<typeof promoCodeRouteTest>("../../../../src/routes/promoCodeRoute.ts");
const {server} = jest.requireActual<typeof serverTest>("../../../../src/index.ts");

describe("create route return status code 200", () => {
  it("negative value", async() => {
    const response = await request(server).get('/');
    expect(response.statusCode).toBe(201);
  });

});