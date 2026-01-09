import { hasRights, splitBySite } from "./newsLetters.utils";
import { mockNewsletter } from "@/mocks/mocksNewsletter";

describe("splitBySite", () => {
  it("groupe correctement les items par site", () => {
    const items = [
      mockNewsletter({ site: "Les Échos" }),
      mockNewsletter({ site: "Les Échos" }),
      mockNewsletter({ site: "Investir" }),
    ];

    const result = splitBySite(items);

    expect(result).toEqual([
      {
        siteName: "Les Échos",
        items: [
          mockNewsletter({ site: "Les Échos" }),
          mockNewsletter({ site: "Les Échos" }),
        ],
      },
      {
        siteName: "Investir",
        items: [mockNewsletter({ site: "Investir" })],
      },
    ]);
  });
});

describe("hasRights", () => {
  const item = (subs: string[]) => ({
    id: "1",
    site: "Les Échos",
    title: "Test",
    description: "",
    image: "",
    subscriptions: subs,
  });

  it("retourne true si la newsletter n’a aucune restriction", () => {
    expect(hasRights(item([]), ["RIGHT_1"])).toBe(true);
  });

  it("retourne true si l’utilisateur possède au moins un droit requis", () => {
    expect(hasRights(item(["RIGHT_1"]), ["RIGHT_1"])).toBe(true);
  });

  it("retourne false si l’utilisateur n’a aucun droit requis", () => {
    expect(hasRights(item(["RIGHT_2"]), ["RIGHT_1"])).toBe(false);
  });
});
