import styled from "styled-components";
import { HtmlHTMLAttributes } from "react";

interface Props {
  trevo: string;
  nome: string;
}

export default function NomeLoteria({ trevo,nome }: Props) {
  return (
    <Sld>
      <TrevoSld src={trevo} alt="Megasena" />
      <NomeSld>{nome}</NomeSld>
    </Sld>
  );
}

const Sld = styled.div`
  display: flex;
`;

const TrevoSld = styled.img``;

const NomeSld = styled.span`
  font-size: 28px;
  font-weight: bold;
  color: ${props => props.theme.loteria};
  margin-left: 10px;
`;
