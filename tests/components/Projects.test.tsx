import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Projects from "@/components/Projects";

describe("Projects", () => {
  it("renders the section with id=projects", () => {
    const { container } = render(<Projects />);
    expect(container.querySelector("section#projects")).not.toBeNull();
  });

  it("renders at least one project article", () => {
    const { container } = render(<Projects />);
    expect(container.querySelectorAll("article").length).toBeGreaterThan(0);
  });
});
