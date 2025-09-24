// src/__tests__/AddUsersAditya.test.js
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";
import AddUsersAditya from "../components/AddUsersAditya";

jest.mock("axios");

describe("AddUsersAditya Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(window, "alert").mockImplementation(() => {}); // Mock alert
  });

  test("renders input fields and button", () => {
    render(
      <MemoryRouter>
        <AddUsersAditya />
      </MemoryRouter>
    );

    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Gender")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Phone")).toBeInTheDocument();
    expect(screen.getByText(/Add User/i)).toBeInTheDocument();
  });

  test("submits new user successfully", async () => {
    axios.post.mockResolvedValueOnce({ data: { id: 1, name: "John" } });

    render(
      <MemoryRouter>
        <AddUsersAditya />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText("Name"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByPlaceholderText("Gender"), {
      target: { value: "Male" },
    });
    fireEvent.change(screen.getByPlaceholderText("Phone"), {
      target: { value: "1234567890" },
    });

    fireEvent.click(screen.getByText(/Add User/i));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith("http://localhost:5000/users", {
        name: "John",
        gender: "Male",
        phone: "1234567890",
      });
      expect(window.alert).toHaveBeenCalledWith("User Added Successfully!");
    });
  });
});
