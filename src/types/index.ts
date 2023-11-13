export interface Props {
    acumulado: boolean;
    concursoEspecial: boolean;
    dataApuracao: string;
    dataPorExtenso: string;
    dataProximoConcurso: string;
    dezenas: string[];
    numeroDoConcurso: number;
    quantidadeGanhadores: number;
    tipoPublicacao: number;
    tipoJogo: string;
    valorEstimadoProximoConcurso: number;
    valorPremio: number;
  }

  export interface LoteriaProps {
    megasena:Props;
    lotofacil:Props;
    quina: Props;
    ativo:string;
    setAtivo:(value:string) => void;
    tema:ThemeProps;
    setTema: (value:ThemeProps) => void;
  }

  export interface ThemeProps {
    acumulou:string;
    data:string;
    estimativa:string;
    loteria:string;
    bola:string;
    bolafonte:string;
}
