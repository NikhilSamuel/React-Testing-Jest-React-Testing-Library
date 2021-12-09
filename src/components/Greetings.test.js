import { render, screen } from "@testing-library/react";
import Greetings from "./Greetings";
test("renders hello world as a test", () => {
  //Arrange
  render(<Greetings />);
  //Act
  //Assert
  const helloWorldElement = screen.getByText("Hello World"); //set exact : false if you dont want an exact match
  expect(helloWorldElement).toBeInTheDocument();
});
