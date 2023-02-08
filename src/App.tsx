import { theme } from "./theme";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import Landing from "./components/Landing/Landing";
import { store } from "./redux/store";
import "./App.sass";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Landing />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
