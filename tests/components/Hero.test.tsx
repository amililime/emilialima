import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "@/components/Hero";

describe("Hero", () => {
  it("renders the hero section with id=top", () => {
    const { container } = render(<Hero />);
    expect(container.querySelector("section#top")).not.toBeNull();
  });

  it("renders the name as the h1", () => {
    render(<Hero />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading.textContent).toContain("Emilia");
    expect(heading.textContent).toContain("Lima");
  });

  it("renders the two CTAs pointing at #work and #contact", () => {
    render(<Hero />);
    const viewWork = screen.getByRole("link", { name: /view work/i });
    const getInTouch = screen.getByRole("link", { name: /get in touch/i });
    expect(viewWork).toHaveAttribute("href", "#work");
    expect(getInTouch).toHaveAttribute("href", "#contact");
  });
});
