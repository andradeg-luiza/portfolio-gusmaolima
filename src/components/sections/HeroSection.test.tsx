import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { HeroSection } from "./HeroSection";

vi.mock("next/image", () => ({
  default: ({
    src,
    alt,
    priority: _priority,
    ...props
  }: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    priority?: boolean;
  }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} {...props} />
  ),
}));

describe("HeroSection", () => {
  it("renderiza o nome da autora", () => {
    render(<HeroSection />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Luiza Gusmão de Andrade Lima" }),
    ).toBeInTheDocument();
  });

  it("renderiza a tagline", () => {
    render(<HeroSection />);

    expect(
      screen.getByText("Desenvolvedora de Software | Criando sistemas com IA"),
    ).toBeInTheDocument();
  });

  it("renderiza a imagem de perfil com alt correto", () => {
    render(<HeroSection />);

    expect(
      screen.getByAltText("Foto de perfil de Luiza Gusmão de Andrade Lima"),
    ).toBeInTheDocument();
  });

  it("renderiza links de LinkedIn e GitHub com hrefs corretos", () => {
    render(<HeroSection />);

    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/andradegluiza/",
    );
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/andradeg-luiza",
    );
  });
});
