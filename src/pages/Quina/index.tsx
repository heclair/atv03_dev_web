import { useLoteria } from "../../hooks";
import "./index.css";
import trevo from "../../assets/trevo-quina.png";
import {
  Carregando,
  Direita,
  Esquerda,
  Principal,
  Resultado,
  NomeLoteria,
} from "../../components";

export default function Quina() {
  const { quina: sorteio } = useLoteria();
  return (
    <>
      {sorteio.dataApuracao ? (
        <Principal>
          <Esquerda>
          <NomeLoteria trevo={trevo} nome={"QUINA"}/>

            <div className="quina-bloco-estimativa">
              <div className="quina-texto-estimativa">
                Estimativa de prêmio do próximo concurso. Sorteio em{" "}
                {sorteio.dataApuracao}
              </div>
              <div className="quina-valor-estimativa">
                {sorteio.valorEstimadoProximoConcurso.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "brl",
                })}
              </div>
            </div>
          </Esquerda>
          <Direita>
            <Resultado dezenas={sorteio.dezenas} />
            <div className="quina-texto-acumulou">
              {sorteio.acumulado ? "ACUMULOU!" : "NÃO ACUMULOU"}
            </div>
            <div className="quina-data-concurso">
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
