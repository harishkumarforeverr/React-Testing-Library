import { fireEvent, render, waitFor } from "@testing-library/react";
import TryCatchBlock from "./TryCatchBlock";
// const mockGetPromise1 = jest.fn().mockResolvedValue({ data: "Mock data" });
const mockGetPromise1 = jest.fn().mockRejectedValue(new Error('Mock error'));

const mockGetPromise2 = jest.fn().mockResolvedValue({ data: "Mock data" });
const mockGetPromise3 = jest.fn().mockResolvedValue({ data: "Mock data" });
jest.mock("./getPromise ", () => ({
  __esModule: true,
  default: () => ({
    getPromise1: mockGetPromise1,
    getPromise2: mockGetPromise2,
    getPromise3: mockGetPromise3,
  }),
}));
describe("TryCatchBlock", () => {
  test("rendering 1", async () => {
    const { getByLabelText } = render(<TryCatchBlock />);

    fireEvent.click(getByLabelText("refreshButton1"));
    await waitFor(() => {
      expect(mockGetPromise1).toHaveBeenCalled();
    });
  });
  test("rendering 2", async () => {
    const { getByLabelText } = render(<TryCatchBlock />);

    fireEvent.click(getByLabelText("refreshButton2"));
    await waitFor(() => {
      expect(mockGetPromise2).toHaveBeenCalled();
    });
  });
  test("rendering 3", async () => {
    const { getByLabelText } = render(<TryCatchBlock />);

    fireEvent.click(getByLabelText("refreshButton3"));
    await waitFor(() => {
      expect(mockGetPromise3).toHaveBeenCalled();
    });
  });
});
