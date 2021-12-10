import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greetings from "./Greetings";

describe("Greetin Component", () => {
  //describe is used to create a test suite for a particular component or t group diff tests together.
  test("renders hello world as a test", () => {
    //test to see if the app renders hello world
    //Arrange
    render(<Greetings />);
    //Act
    //Assert
    const helloWorldElement = screen.getByText("Hello World"); //set exact : false if you dont want an exact match
    expect(helloWorldElement).toBeInTheDocument();
  });
  test("renders its good to see you if the button was not clicked", () => {
    render(<Greetings />);
    const keyword = screen.getByText("its good to see you.");
    expect(keyword).toBeInTheDocument();
  });

  test("renders changed if the button was clicked", () => {
    render(<Greetings />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const keyword = screen.getByText("changed");
    expect(keyword).toBeInTheDocument();
  });

  test("does not render 'good to see you' if the button was clicked", () => {
    render(<Greetings />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const keyword = screen.queryByText("good to see you", { exact: false });
    expect(keyword).not.toBeInTheDocument();
  });
});
