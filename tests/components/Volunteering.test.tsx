import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Volunteering from "@/components/Volunteering";

describe("Volunteering", () => {
  it("renders the section with id=volunteering", () => {
    const { container } = render(<Volunteering />);
    expect(container.querySelector("section#volunteering")).not.toBeNull();
  });

  it("renders an ordered list with at least one item", () => {
    const { container } = render(<Volunteering />);
    const list = container.querySelector("ol");
    expect(list).not.toBeNull();
    expect(list!.querySelectorAll("li").length).toBeGreaterThan(0);
  });
});
