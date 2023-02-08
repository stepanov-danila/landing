import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import Logo from "./Logo";

describe("Logo", () => {
  test("should renders correclty", () => {
    render(
      <ThemeProvider theme={theme}>
        <Logo />
      </ThemeProvider>
    );
    const icon = screen.getByTestId("logo-icon");
    expect(icon).toBeInTheDocument();
    const title = screen.getByText(/ланит/i);
    expect(title).toBeInTheDocument();
    const subtitle = screen.getByText(/карьера/i);
    expect(subtitle).toBeInTheDocument();
  });
});
