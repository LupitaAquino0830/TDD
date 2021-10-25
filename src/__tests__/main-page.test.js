import React from "react"
import { render, screen } from "@testing-library/react"

import { MainPage } from "../components/main-page"

beforeEach(() => render (<MainPage />))

describe("Main Page mount", () => {
    it("must display the main page title", () => {
      expect(
        screen.getByRole("heading", { name: /simpsons quotes/i })
      ).toBeInTheDocument()
    })
})

describe ("Quote List", () => {
  it("must display 3 quote", async () => {
      expect(await screen.findAllByRole("listitem")).toHaveLength(3)
  })
})