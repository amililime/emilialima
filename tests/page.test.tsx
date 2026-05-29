import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home page", () => {
  it("renders the skip link pointing at #main", () => {
    render(<Home />);
    const skip = screen.getByRole("link", { name: /skip to content/i });
    expect(skip).toHaveAttribute("href", "#main");
  });

  it("renders all eight section ids in document order", () => {
    const { container } = render(<Home />);
    const expectedIds = [
      "top",
      "about",
      "skills",
      "work",
      "projects",
      "volunteering",
      "education",
      "contact",
    ];
    const sectionIds = Array.from(container.querySelectorAll("section[id]")).map(
      (el) => el.getAttribute("id"),
    );
    for (const id of expectedIds) {
      expect(sectionIds).toContain(id);
    }
    const filtered = sectionIds.filter((id) => expectedIds.includes(id!));
    expect(filtered).toEqual(expectedIds);
  });

  it("renders a main landmark with id=main", () => {
    const { container } = render(<Home />);
    const main = container.querySelector("main#main");
    expect(main).not.toBeNull();
  });
});
