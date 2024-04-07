import { fireEvent, render } from "@testing-library/react";
import ParenthandleChangeFromChildComp from "./ParenthandleChangeFromChildComp";

describe("ParenthandleChangeFromChildComp", () => {
  test("rendering ParenthandleChangeFromChildComp", () => {
    const { getByLabelText } = render(<ParenthandleChangeFromChildComp />);
    const button = getByLabelText("handlePageChange");
    fireEvent.click(button);
  }); 
});
