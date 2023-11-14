import styled from "styled-components";
import { HtmlHTMLAttributes } from "react";
import { sortAndDeduplicateDiagnostics } from "typescript";

interface Props {
  numeroDoConcurso: number;
  dataPorExtenso: string;
}

export default function Data({ numeroDoConcurso, dataPorExtenso }: Props) {
  return <Sld>{`Concurso ${numeroDoConcurso} - ${dataPorExtenso}`}</Sld>;
}

const Sld = styled.div`
  margin-top: 15px;
  color: ${(props) => props.theme.data};
  padding-left: 15px;
  font-size: 15px;
`;
