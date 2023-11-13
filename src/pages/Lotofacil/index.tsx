import { useLoteria } from "../../hooks";
import "./index.css";
import trevo from "../../assets/trevo-lotofacil.png";

export default function Lotofacil() {
  const { lotofacil } = useLoteria();
  const um = [],
      dois = [],
      tres = [];
      
  if (lotofacil.dataApuracao) {
    for (let i = 0; i < 5; i++) {
      um.push(lotofacil.dezenas[i]);
    }
    for (let i = 5; i < 10; i++) {
      dois.push(lotofacil.dezenas[i]);
    }
    for (let i = 10; i < 15; i++) {
      tres.push(lotofacil.dezenas[i]);
    }
  }

  return (
    <>
      {lotofacil.dataApuracao ? (
        <div className="principal-bloco">
          <div className="lotofacil-bloco-principal">
            <div>
              <div className="lotofacil-bloco-loteria">
                <img src={trevo} alt="Lotofacil" />
                <span className="lotofacil-nome-loteria">LOTOFÁCIL</span>
              </div>
              <div className="lotofacil-bloco-estimativa">
                <div className="lotofacil-texto-estimativa">
                  Estimativa de prêmio do próximo concurso. Sorteio em{" "}
                  {lotofacil.dataApuracao}
                </div>
                <div className="lotofacil-valor-estimativa">
                  {lotofacil.valorEstimadoProximoConcurso.toLocaleString(
                    "pt-br",
                    {
                      style: "currency",
                      currency: "brl",
                    }
                  )}
                </div>
              </div>
            </div>
            <div className="lotofacil-bloco-direita">
              <div className="lotofacil-linha-bola">
                {um.map((dezena) => (
                  <div className="lotofacil-bola" key={dezena}>
                    {dezena}
                  </div>
                ))}
              </div>
              <div className="lotofacil-linha-bola">
                {dois.map((dezena) => (
                  <div className="lotofacil-bola" key={dezena}>
                    {dezena}
                  </div>
                ))}
              </div>
              <div className="lotofacil-linha-bola">
                {tres.map((dezena) => (
                  <div className="lotofacil-bola" key={dezena}>
                    {dezena}
                  </div>
                ))}
              </div>
              <div className="lotofacil-texto-acumulou">
                {lotofacil.acumulado ? "ACUMULOU!" : "NÃO ACUMULOU"}
              </div>
              <div className="lotofacil-data-concurso">
                {`Concurso ${lotofacil.numeroDoConcurso} - ${lotofacil.dataPorExtenso}`}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="principal-carregando">
          <h3>Carregando...</h3>
        </div>
      )}
    </>
  );
}
