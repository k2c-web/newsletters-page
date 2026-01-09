import { render, screen } from "@testing-library/react";
import { NewslettersGrid } from "./NewsLettersGrid";
import { useAtomValue } from "jotai";
import {
  USER_WITH_ONE_SUBSCRIPTION,
  USER_WITHOUT_SUBSCRIPTION,
  USER_WITH_MULTIPLE_SUBSCRIPTION,
} from "@/mocks/user";
import { mockNewsletter } from "@/mocks/mocksNewsletter";

jest.mock("jotai", () => ({
  useAtomValue: jest.fn(),
}));

const mockUseAtomValue = useAtomValue as jest.Mock;

describe("NewslettersGrid", () => {
  it("affiche les titres des groupes", () => {
    mockUseAtomValue.mockReturnValue(USER_WITHOUT_SUBSCRIPTION);

    const group = [
      { siteName: "Les Échos", items: [] },
      { siteName: "Investir", items: [] },
    ];

    render(<NewslettersGrid group={group} />);

    expect(screen.getByText("Les Échos")).toBeInTheDocument();
    expect(screen.getByText("Investir")).toBeInTheDocument();
  });

  it("rend le bon nombre de NewsletterCard", () => {
    mockUseAtomValue.mockReturnValue(USER_WITH_ONE_SUBSCRIPTION);

    const group = [
      {
        siteName: "Les Échos",
        items: [mockNewsletter({ id: "1" }), mockNewsletter({ id: "2" })],
      },
    ];

    render(<NewslettersGrid group={group} />);

    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });

  it("utilise les subscriptions du user (cas multiple)", () => {
    mockUseAtomValue.mockReturnValue(USER_WITH_MULTIPLE_SUBSCRIPTION);

    const group = [
      {
        siteName: "Les Échos",
        items: [mockNewsletter({ id: "1", subscriptions: ["RIGHT_1"] })],
      },
    ];

    render(<NewslettersGrid group={group} />);

    expect(screen.getByRole("listitem")).toBeInTheDocument();
    expect(screen.getByText("Les Échos")).toBeInTheDocument();
  });
});
