import { NewsLetter } from "@/types/newsLetter";

export const mockNewsletter = (
  overrides: Partial<NewsLetter> = {}
): NewsLetter => ({
  id: "1",
  site: "Les Échos",
  title: "Titre newsletter",
  description: "Description newsletter",
  image: "",
  subscriptions: [],
  ...overrides,
});
