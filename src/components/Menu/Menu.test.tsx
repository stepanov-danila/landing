import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import Menu from "./Menu";

describe("Menu", () => {
  test("should renders correctly with items", () => {
    render(
      <ThemeProvider theme={theme}>
        <Menu
          items={[
            {
              title: "Блог",
              href: "",
            },
            {
              title: "О нас",
              href: "",
            },
            {
              title: "Вакансии",
              href: "",
            },
            {
              title: "Старт карьеры",
              href: "",
            },
          ]}
        />
      </ThemeProvider>
    );
    const nav = screen.getByRole("list");
    expect(nav).toBeInTheDocument();
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(4);
    const blog = screen.getByText(/Блог/i);
    expect(blog).toBeInTheDocument();
    const about = screen.getByText(/О нас/i);
    expect(about).toBeInTheDocument();
    const vacancy = screen.getByText(/Вакансии/i);
    expect(vacancy).toBeInTheDocument();
    const start = screen.getByText(/Старт карьеры/i);
    expect(start).toBeInTheDocument();
  });

  test("should correctly without items", () => {
    render(
      <ThemeProvider theme={theme}>
        <Menu />
      </ThemeProvider>
    );
    const nav = screen.getByRole("list");
    expect(nav).toBeInTheDocument();
  });
});
