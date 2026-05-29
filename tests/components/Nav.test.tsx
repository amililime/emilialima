import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Nav from "@/components/Nav";

describe("Nav", () => {
  it("renders the brand link to #top", () => {
    render(<Nav />);
    const brand = screen.getByRole("link", { name: /emilia lima/i });
    expect(brand).toHaveAttribute("href", "#top");
  });

  it("renders the three primary nav links", () => {
    render(<Nav />);
    const nav = screen.getByRole("navigation", { name: /primary/i });
    expect(nav).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /^about$/i })).toHaveAttribute(
      "href",
      "#about",
    );
    expect(screen.getByRole("link", { name: /^work$/i })).toHaveAttribute(
      "href",
      "#work",
    );
    expect(screen.getByRole("link", { name: /^contact$/i })).toHaveAttribute(
      "href",
      "#contact",
    );
  });
});
