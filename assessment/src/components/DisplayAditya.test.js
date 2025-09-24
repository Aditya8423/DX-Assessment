// src/__tests__/DisplayAditya.test.js
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";
import DisplayAditya from "../components/DisplayAditya";

jest.mock("axios");

describe("DisplayAditya Component", () => {
  test("renders no users if API returns empty", async () => {
    axios.get.mockResolvedValueOnce({ data: [] });

    render(
      <MemoryRouter>
        <DisplayAditya />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.queryByText("John")).not.toBeInTheDocument();
    });
  });
});
