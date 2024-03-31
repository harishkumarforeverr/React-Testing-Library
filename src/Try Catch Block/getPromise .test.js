import getPromise from "./getPromise ";

describe("getPromise", () => {
  test("getPromise1 resolves with data when auth is true", async () => {
    const promise1 = getPromise().getPromise1(true);
    await expect(promise1).resolves.toEqual({ data: "Data from Promise 1" });
  });

  test("getPromise1 rejects with an error when auth is false", async () => {
    const promise1 = getPromise().getPromise1(false);
    await expect(promise1).rejects.toThrowError("Error from Promise 1");
  });

  test("getPromise2 resolves with data when auth is true", async () => {
    const promise2 = getPromise().getPromise2(true);
    await expect(promise2).resolves.toEqual({ data: "Data from Promise 2" });
  });

  test("getPromise2 rejects with an error when auth is false", async () => {
    const promise2 = getPromise().getPromise2(false);
    await expect(promise2).rejects.toThrowError("Error from Promise 2");
  });

  test("getPromise3 resolves with data when auth is true", async () => {
    const promise3 = getPromise().getPromise3(true);
    await expect(promise3).resolves.toEqual({ data: "Data from Promise 3" });
  });

  test("getPromise3 rejects with an error when auth is false", async () => {
    const promise3 = getPromise().getPromise3(false);
    await expect(promise3).rejects.toThrowError("Error from Promise 3");
  });
});
