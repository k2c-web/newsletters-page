import { render, screen, fireEvent } from "@testing-library/react";
import { CallToAction } from "./CallToAction";

describe("CallToAction", () => {
  it("affiche le wording correctement", () => {
    render(<CallToAction wording="S'abonner" />);

    expect(screen.getByRole("button")).toHaveTextContent("S'abonner");
  });

  it("applique la classe personnalisée", () => {
    render(<CallToAction wording="Test" className="bg-red-500" />);

    expect(screen.getByRole("button")).toHaveClass("bg-red-500");
  });

  it("déclenche l'événement onClick quand il est fourni", () => {
    const handleClick = jest.fn();

    render(<CallToAction wording="Click" onClick={handleClick} />);

    fireEvent.click(screen.getByRole("button"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
