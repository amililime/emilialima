import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import EducationAndCerts from "@/components/EducationAndCerts";

describe("EducationAndCerts", () => {
  it("renders the section with id=education", () => {
    const { container } = render(<EducationAndCerts />);
    expect(container.querySelector("section#education")).not.toBeNull();
  });

  it("renders both Education and Certifications headings", () => {
    render(<EducationAndCerts />);
    expect(
      screen.getByRole("heading", { level: 3, name: /^education$/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: /^certifications$/i }),
    ).toBeInTheDocument();
  });
});
