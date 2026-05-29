import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Experience from "@/components/Experience";

describe("Experience", () => {
  it("renders the section with id=work (nav 'Work' target)", () => {
    const { container } = render(<Experience />);
    expect(container.querySelector("section#work")).not.toBeNull();
  });

  it("renders an ordered list of jobs with at least one entry", () => {
    const { container } = render(<Experience />);
    const list = container.querySelector("ol");
    expect(list).not.toBeNull();
    expect(list!.querySelectorAll("li").length).toBeGreaterThan(0);
  });
});
