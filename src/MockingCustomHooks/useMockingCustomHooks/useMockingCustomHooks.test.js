import useMockingCustomHooks from "./useMockingCustomHooks";

describe("useMockingCustomHooks", () => {
  test("tetsing useMockingCustomHooks", () => {
    const [count, setCount] = useMockingCustomHooks(10);
    expect(count).toBe(count);
    setCount(90)
    expect(count).toBe(count);
  });
  test("tetsing useMockingCustomHooks", () => {
    const [count, setCount] = useMockingCustomHooks();
    expect(count).toBe(count);
    setCount(90)
    expect(count).toBe(count);
  });
});
