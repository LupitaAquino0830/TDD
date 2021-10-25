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
  it("must contain quote value", async () => {
    const [firstQuote, secondQuote, thirdQuote] = await screen.findAllByRole("listitem")
    expect(firstQuote.textContent).toBe("Gah, stupid sexy Flanders!")
    expect(secondQuote.textContent).toBe("Eat my shorts")
    expect(thirdQuote.textContent).toBe("Shup up, brain. I got friends now. I don't nedd you anymore")
  })
})