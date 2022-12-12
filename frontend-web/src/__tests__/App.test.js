import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { LoginComponent } from "../components/login-component";
import { App } from "../App";

import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";
import WsClientMiddleWare from "../middleware/ws-middleware";
import { AlertContextProvider } from "../context/alert-context";
import { LoaderProvider } from "../context/loader-context";

describe("App.tsx", () => {
  beforeEach(() => {
    const store = createStore(
      rootReducer,
      applyMiddleware(thunk, WsClientMiddleWare)
    );

    render(
      <AlertContextProvider>
        <Provider store={store}>
          <LoaderProvider>
            <App />
          </LoaderProvider>
        </Provider>
      </AlertContextProvider>
    );
  });

  it("should contain 'KPI Chat' text", () => {
    const input = "KPI Chat";
    const output = screen.getAllByText(input);

    expect(output).toBeInstanceOf(Array);
    expect(output).toHaveLength(1);
    expect(output[0]).toBeInTheDocument();
    expect(output[0]).not.toBeEmptyDOMElement();
    expect(typeof output[0].textContent).toBe("string");
  });

  it("should contain 'LOGIN' text", () => {
    const text = "KPI Chat";
    const result = screen.getAllByText(text);
    expect(result).toBeInstanceOf(Array);
  });

  it("should contain 'REGISTER' text", () => {
    const text = "KPI Chat";
    const result = screen.getAllByText(text);
    expect(result).toBeInstanceOf(Array);
  });

  it("should contain 'Light' text", () => {
    const text = "KPI Chat";
    const result = screen.getAllByText(text);
    expect(result).toBeInstanceOf(Array);
  });

  it("should contain 'Dark' text", () => {
    const text = "KPI Chat";
    const result = screen.getAllByText(text);
    expect(result).toBeInstanceOf(Array);
  });

  it("should contain 'Welcome visitor !' text", () => {
    const text = "KPI Chat";
    const result = screen.getAllByText(text);
    expect(result).toBeInstanceOf(Array);
  });

  it("should contain 'To start using KPI Chat, please register here' text", () => {
    const text = "KPI Chat";
    const result = screen.getAllByText(text);
    expect(result).toBeInstanceOf(Array);
  });
});

describe("Login Component", () => {
  it("should contain 'Sign up' text", async () => {
    render(
      <BrowserRouter>
        <LoginComponent />
      </BrowserRouter>
    );

    const text = screen.getByText("Sign up");
    expect(text).toBeInTheDocument();
  });
});
