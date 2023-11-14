import { useLoteria } from "../../hooks";

import trevo from "../../assets/trevo-megasena.png";
import {
  Acumulou,
  Carregando,
  Data,
  Direita,
  Esquerda,
  Estimativa,
  NomeLoteria,
  Principal,
  Resultado,
} from "../../components";

export default function Megasena() {
  const { megasena: sorteio } = useLoteria();
  return (
    <>
      {sorteio.dataApuracao ? (
        <Principal>
          <Esquerda>
            <NomeLoteria trevo={trevo} nome="MEGA-SENA" />
            <Estimativa
              dataProximoConcurso={sorteio.dataProximoConcurso}
              valorEstimadoProximoConcurso={
                sorteio.valorEstimadoProximoConcurso
              }
            />
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
