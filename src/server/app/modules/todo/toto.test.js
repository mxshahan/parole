import request from 'supertest';

import { server } from '@server';

let expectedProps = ["_id", "createdAt", "updatedAt", "content"];

afterEach(() => {
  server.close();
});

describe("routes: Todo - get all", () => {
  it("Should return json object", async () => {
    const response = await request(server).get('/api/todo');
    expect(response.status).toBe(200);
    expect(response.type).toEqual("application/json");
    expect(response.body).toBeInstanceOf(Object);
    const { body } = response.body;
    expect(Object.keys(body[0])).toEqual(
      expect.arrayContaining(["_id", "createdAt", "updatedAt", "content"])
    );
  });
});
