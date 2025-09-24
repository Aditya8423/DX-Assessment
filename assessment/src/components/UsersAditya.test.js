// src/__tests__/UsersAditya.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import UsersAditya from "../components/UsersAditya";

// Mock useNavigate
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("UsersAditya Component", () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    useNavigate.mockReturnValue(mockNavigate);
  });

  test("renders title and buttons", () => {
    render(
      <MemoryRouter>
        <UsersAditya />
      </MemoryRouter>
    );

    expect(screen.getByText(/USER MANAGEMENT/i)).toBeInTheDocument();
    expect(screen.getByText(/Display Users/i)).toBeInTheDocument();
    expect(screen.getByText(/Add User/i)).toBeInTheDocument();
  });

  test("navigates to /add on Add User click", () => {
    render(
      <MemoryRouter>
        <UsersAditya />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText(/Add User/i));
    expect(mockNavigate).toHaveBeenCalledWith("/add");
  });
});
