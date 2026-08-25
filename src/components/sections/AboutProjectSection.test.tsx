import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AboutProjectSection } from "./AboutProjectSection";

describe("AboutProjectSection", () => {
  it('renderiza o título "Sobre este projeto"', () => {
    render(<AboutProjectSection />);

    expect(
      screen.getByRole("heading", { level: 2, name: "Sobre este projeto" }),
    ).toBeInTheDocument();
  });

  it("renderiza os dois parágrafos com texto-chave", () => {
    render(<AboutProjectSection />);

    expect(
      screen.getByText(
        /Aqui você acompanha, passo a passo, como pequenos sistemas e jogos nascem a partir de prompts de inteligência artificial/,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Mais do que mostrar o resultado final, o objetivo é documentar o processo: cada projeto vem com o prompt exato/,
      ),
    ).toBeInTheDocument();
  });
});
