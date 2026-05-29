import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Skills from "@/components/Skills";

describe("Skills", () => {
  it("renders the section with id=skills (moved off #work)", () => {
    const { container } = render(<Skills />);
    expect(container.querySelector("section#skills")).not.toBeNull();
    expect(container.querySelector("section#work")).toBeNull();
  });

  it("renders at least one skill group", () => {
    const { container } = render(<Skills />);
    const groups = container.querySelectorAll("dt");
    expect(groups.length).toBeGreaterThan(0);
  });
});
