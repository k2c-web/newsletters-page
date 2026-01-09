import { NEWSLETTER_ITEMS } from "@/mocks/newsletters";
import { fetchNewsletters } from "@/api/newsLettersApi";

jest.useFakeTimers();

describe("fetchNewsletters", () => {
  it("retourne les newsletters mockées", async () => {
    const promise = fetchNewsletters();
    jest.runAllTimers();
    const result = await promise;
    expect(result).toBe(NEWSLETTER_ITEMS);
  });
});
