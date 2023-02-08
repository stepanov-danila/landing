import React from "react";
import StyledMenu from "./Menu.styled";

type MenuProps = {
  items?: NavItemType[];
};

type NavItemType = {
  title: string;
  href: string;
  onClick?: () => void;
};

const Menu = ({ items }: MenuProps) => {
  return (
    <StyledMenu>
      {items &&
        items.map((link, index) => (
          <a
            key={index}
            href={link.href}
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              if (link.onClick) {
                e.preventDefault();
                link.onClick();
              }
            }}
          >
            {link.title}
          </a>
        ))}
    </StyledMenu>
  );
};

export default Menu;
