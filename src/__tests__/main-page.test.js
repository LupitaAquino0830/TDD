import React from "react"
import { render, screen } from "@testing-library/react"

import { MainPage } from "../components/main-page"

describe("Main Page mount", () => {
    it("must display the main page title", () => {
      render(<MainPage />)
      expect(
        screen.getByRole("heading", { name: /simpsons quotes/i })
      ).toBeInTheDocument()
    })
})