import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import Header from "./Header";

describe("Header", () => {
  test("should renders correctly", () => {
    render(
      <ThemeProvider theme={theme}>
        <Header LogoComponent={<Logo />} NavComponent={<Menu />} />
      </ThemeProvider>
    );
    const nav = screen.getByRole("list");
    expect(nav).toBeInTheDocument();
    const icon = screen.getByTestId("logo-icon");
    expect(icon).toBeInTheDocument();
    const title = screen.getByText(/ланит/i);
    expect(title).toBeInTheDocument();
    const subtitle = screen.getByText(/карьера/i);
    expect(subtitle).toBeInTheDocument();
  });
});
