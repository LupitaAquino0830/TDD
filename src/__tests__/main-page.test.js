import React from "react"
import { rest } from "msw"
import { setupServer } from "msw/node"
import {
  render, 
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react"

import { MainPage } from "../components/main-page"

const fakeQuotes = [
  { quote: "Gah, stupid sexy Flanders!"},
  { quote: "Eat my shorts"},
  { quote: "Shup up, brain. I got friends now. I don't nedd you anymore"},
]

const server = setupServer(
  rest.get("/quotes", (req, res, ctx) => {
    return res(ctx.json(fakeQuotes))
  })
)

beforeEach(() => render (<MainPage />))

//Enable API moking before test
beforeAll(() => server.listen())

//Disable API mocking after the tests are done
afterAll(() => server.close())


describe ("Quote List", () => {
  it("must contain quote value", async () => {
    const [firstQuote, secondQuote, thirdQuote] = await screen.findAllByRole("listitem")
    const [fakeOne, fakeTwo, fakeThird] = fakeQuotes
    expect(firstQuote.textContent).toBe("Gah, stupid sexy Flanders!")
    expect(secondQuote.textContent).toBe("Eat my shorts")
    expect(thirdQuote.textContent).toBe("Shup up, brain. I got friends now. I don't nedd you anymore")
  })
})