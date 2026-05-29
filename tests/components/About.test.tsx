import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import About from "@/components/About";

describe("About", () => {
  it("renders the section with id=about", () => {
    const { container } = render(<About />);
    expect(container.querySelector("section#about")).not.toBeNull();
  });

  it("renders the portrait image with an accessible alt", () => {
    render(<About />);
    expect(
      screen.getByRole("img", { name: /portrait of emilia lima/i }),
    ).toBeInTheDocument();
  });

  it("links to the personal email and LinkedIn", () => {
    render(<About />);
    const emailLinks = screen.getAllByRole("link", {
      name: /emilialimadacunha@gmail\.com/i,
    });
    expect(emailLinks.length).toBeGreaterThan(0);
    expect(emailLinks[0]).toHaveAttribute(
      "href",
      "mailto:emilialimadacunha@gmail.com",
    );

    const linkedIn = screen.getByRole("link", {
      name: /linkedin\.com\/in\/emilia-lima/i,
    });
    expect(linkedIn).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/emilia-lima",
    );
  });
});
