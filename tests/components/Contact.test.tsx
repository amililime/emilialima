import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Contact from "@/components/Contact";

describe("Contact", () => {
  it("renders the section with id=contact", () => {
    const { container } = render(<Contact />);
    expect(container.querySelector("section#contact")).not.toBeNull();
  });

  it("renders the form with Name, Email, and Message fields plus a Send button", () => {
    render(<Contact />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send/i })).toBeInTheDocument();
  });

  it("renders email, LinkedIn, and GitHub contact links", () => {
    render(<Contact />);
    const emailLinks = screen.getAllByRole("link", {
      name: /emilialimadacunha@gmail\.com/i,
    });
    expect(emailLinks[0]).toHaveAttribute(
      "href",
      "mailto:emilialimadacunha@gmail.com",
    );

    expect(
      screen.getByRole("link", { name: /linkedin\.com\/in\/emilia-lima/i }),
    ).toHaveAttribute("href", "https://www.linkedin.com/in/emilia-lima");

    expect(
      screen.getByRole("link", { name: /github\.com\/amililime/i }),
    ).toHaveAttribute("href", "https://github.com/amililime");
  });
});
