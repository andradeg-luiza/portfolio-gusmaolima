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

  it("renderiza os três parágrafos com texto-chave", () => {
    render(<AboutProjectSection />);

    expect(
      screen.getByText(/Este portfólio reúne sistemas simples — calculadoras, mini-jogos/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Mais do que mostrar o resultado final, o objetivo aqui é documentar o processo/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Essa é também uma forma de compartilhar minha transição de Quality Assurance/),
    ).toBeInTheDocument();
  });
});
