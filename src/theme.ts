export interface Theme {
  main: {
    colors: any;
    transition: {
      duration: string;
    };
    fonts: {
      primary: string;
      secondary: string;
    };
  };
}

export type ThemeColorKey =
  | "blue"
  | "gray"
  | "black"
  | "white"
  | "orange"
  | "blueGradient";

export const theme: Theme = {
  main: {
    colors: {
      blue: "#07B6F0",
      gray: "#333333",
      black: "#020F12",
      white: "#FFFFFF",
      orange: "#F39224",
      blueGradient: "linear-gradient(180deg, #33CCFF -0.29%, #00AFEA 100.05%);",
    },
    transition: {
      duration: "0.3s",
    },
    fonts: {
      primary: "'Fira Sans', Arial, sans-serif",
      secondary: "'Inter', Arial, sans-serif",
    },
  },
};
