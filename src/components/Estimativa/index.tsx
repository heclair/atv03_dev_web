import styled from "styled-components";
import { HtmlHTMLAttributes } from "react";
import { sortAndDeduplicateDiagnostics } from "typescript";

interface Props {
  dataProximoConcurso: string;
  valorEstimadoProximoConcurso: number;
}

export default function Estimativa({
  dataProximoConcurso,
  valorEstimadoProximoConcurso,
}: Props) {
  return (
    <Sld>
      <TextoSld>
        Estimativa de prêmio do próximo concurso. Sorteio em{" "}
        {dataProximoConcurso};
      </TextoSld>
      <ValorSld>
        {valorEstimadoProximoConcurso.toLocaleString("pt-Br", {
          style: "currency",
          currency: "BRL",
        })}
      </ValorSld>
    </Sld>
  );
}

const Sld = styled.div`
  width: 240px;
  margin-left: 45px;
  margin-top: 15px;
`;

const TextoSld = styled.div`
  font-size: 15px;
  color: ${(props) => props.theme.data};
`;

const ValorSld = styled.div`
  font-size: 20px;
  margin-top: 15px;
  font-weight: bold;
  color: ${(props) => props.theme.estimativa};
`;
