import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

// Mock components (so test focuses only on routing)
jest.mock("./components/UsersAditya", () => () => <div>UsersAditya Page</div>);
jest.mock("./components/DisplayAditya", () => () => <div>DisplayAditya Page</div>);
jest.mock("./components/AddUsersAditya", () => () => <div>AddUserAditya Page</div>);

describe("App Routing with react-router-dom v6", () => {
  test("renders UsersAditya at default route (/)", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("UsersAditya Page")).toBeInTheDocument();
  });

  test("renders DisplayAditya at /display", () => {
    render(
      <MemoryRouter initialEntries={["/display"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("DisplayAditya Page")).toBeInTheDocument();
  });

  test("renders AddUserAditya at /add", () => {
    render(
      <MemoryRouter initialEntries={["/add"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("AddUserAditya Page")).toBeInTheDocument();
  });
});
