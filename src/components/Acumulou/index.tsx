import styled from "styled-components";
import { HtmlHTMLAttributes } from "react";
import { sortAndDeduplicateDiagnostics } from "typescript";

interface Props {
  quantidadeGanhadores: number;
}

export default function Acumulou({
quantidadeGanhadores}: Props) {
  return (
    <Sld>
        {quantidadeGanhadores === 0 ? "ACUMULOU"
        : `${quantidadeGanhadores} GANHADORES`}
    </Sld>
  );
}

const Sld = styled.div`
font-size: 20px;
font-weight: bold;
color: ${(props) => props.theme.acumulou};
margin-top: 15px;
padding-left: 15px;
`;
