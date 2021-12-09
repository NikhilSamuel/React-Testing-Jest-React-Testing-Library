import { render, screen } from "@testing-library/react";
import Greetings from "./Greetings";

describe("Greetin Component", () => {
  //describe is used to create a test suite for a particular component or t group diff tests together.
  test("renders hello world as a test", () => {
    //Arrange
    render(<Greetings />);
    //Act
    //Assert
    const helloWorldElement = screen.getByText("Hello World"); //set exact : false if you dont want an exact match
    expect(helloWorldElement).toBeInTheDocument();
  });
});
