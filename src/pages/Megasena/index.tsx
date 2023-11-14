import { useLoteria } from "../../hooks";
import "./index.css";
import trevo from "../../assets/trevo-megasena.png";
import { Acumulou, Carregando, Direita, Esquerda, Estimativa, NomeLoteria, Principal, Resultado } from "../../components";

export default function Megasena() {
  const { megasena:sorteio } = useLoteria();
  return (
    <>
      {sorteio.dataApuracao ? (
        <Principal>
          <Esquerda>
            <NomeLoteria trevo={trevo} nome="MEGA-SENA"/>
            <Estimativa dataProximoConcurso={sorteio.dataProximoConcurso} valorEstimadoProximoConcurso={sorteio.valorEstimadoProximoConcurso} />

          </Esquerda>
          <Direita>
            <Resultado dezenas={sorteio.dezenas}/>
            <Acumulou quantidadeGanhadores={sorteio.quantidadeGanhadores} />
            <div className="mega-data-concurso">
              {`Concurso ${sorteio.numeroDoConcurso} - ${sorteio.dataPorExtenso}`}
            </div>
          </Direita>
        </Principal>
      ) : (
        <Carregando />
      )}
    </>
  );
}
