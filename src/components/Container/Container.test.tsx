import { render, screen } from "@testing-library/react";
import { debug } from "console";
import Container from "./Container";

describe("Container:", () => {
  test("should render correctly", () => {
    render(<Container />);
    expect(screen.getByTestId("container")).toBeInTheDocument();
  });
  test("should render inners", () => {
    render(
      <Container>
        <p>Hello</p>
      </Container>
    );
    const paragraph = screen.getByText(/hello/i);
    expect(paragraph).toBeInTheDocument();
  });
});
