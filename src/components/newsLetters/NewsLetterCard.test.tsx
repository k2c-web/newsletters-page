import { render, screen } from "@testing-library/react";
import { NewsletterCard } from "./NewsLetterCard";
import { hasRights } from "@/utils/newsLetters.utils";
import { mockNewsletter } from "@/mocks/mocksNewsletter";

jest.mock("@/utils/newsLetters.utils");

const mockHasRights = hasRights as jest.Mock;

describe("NewsletterCard", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("affiche le titre et la description", () => {
    mockHasRights.mockReturnValue(true);

    render(
      <NewsletterCard item={mockNewsletter()} userSubscriptions={["RIGHT_1"]} />
    );

    expect(screen.getByText("Titre newsletter")).toBeInTheDocument();
    expect(screen.getByText("Description newsletter")).toBeInTheDocument();
  });

  it("affiche 'S'inscrire' quand hasRights retourne true", () => {
    mockHasRights.mockReturnValue(true);

    render(
      <NewsletterCard item={mockNewsletter()} userSubscriptions={["RIGHT_1"]} />
    );

    expect(screen.getByRole("button")).toHaveTextContent("S'inscrire");
  });

  it("affiche 'S'abonner' quand hasRights retourne false", () => {
    mockHasRights.mockReturnValue(false);

    render(
      <NewsletterCard item={mockNewsletter()} userSubscriptions={["RIGHT_1"]} />
    );

    expect(screen.getByRole("button")).toHaveTextContent("S'abonner");
  });

  it("appelle hasRights avec les bons arguments", () => {
    const item = mockNewsletter({ subscriptions: ["RIGHT_2"] });
    const userSubs = ["RIGHT_1"];

    mockHasRights.mockReturnValue(false);

    render(<NewsletterCard item={item} userSubscriptions={userSubs} />);

    expect(mockHasRights).toHaveBeenCalledWith(item, userSubs);
  });
});
