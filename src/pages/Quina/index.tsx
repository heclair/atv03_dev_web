import { useLoteria } from "../../hooks";

import trevo from "../../assets/trevo-quina.png";
import {
  Carregando,
  Direita,
  Esquerda,
  Principal,
  Resultado,
  NomeLoteria,
  Estimativa,
  Acumulou,
  Data,
} from "../../components";

export default function Quina() {
  const { quina: sorteio } = useLoteria();
  return (
    <>
      {sorteio.dataApuracao ? (
        <Principal>
          <Esquerda>
          <NomeLoteria trevo={trevo} nome={"QUINA"}/>
          <Estimativa dataProximoConcurso={sorteio.dataProximoConcurso} valorEstimadoProximoConcurso={sorteio.valorEstimadoProximoConcurso} />
          <Esquerda>
         
            <Estimativa dataProximoConcurso={sorteio.dataProximoConcurso} valorEstimadoProximoConcurso={sorteio.valorEstimadoProximoConcurso} />
          </Esquerda>
          </Esquerda>
          <Direita>
            <Resultado dezenas={sorteio.dezenas} />
            <Acumulou quantidadeGanhadores={sorteio.quantidadeGanhadores} />
            <Data
              numeroDoConcurso={sorteio.numeroDoConcurso}
              dataPorExtenso={sorteio.dataPorExtenso}
            />
          </Direita>
        </Principal>
      ) : (
        <Carregando />
      )}
    </>
  );
}
