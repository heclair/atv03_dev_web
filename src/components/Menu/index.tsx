import { Link } from "react-router-dom";
import "./index.css";
import { useLoteria } from "../../hooks";

export default function Menu(){
    const {ativo,setAtivo} = useLoteria();

    return(
        <div>
            <Link className={ativo === "megasena" ? "botao ativo" : "botao megasena"} to = "/megasena" onClick={() => setAtivo("megasena")}>MEGA-SENA</Link>
            <Link className={ativo === "lotofacil" ? "botao ativo" : "botao lotofacil"} to = "/lotofacil" onClick={() => setAtivo("lotofacil")}>LOTOFÁCIL</Link>
            <Link className={ativo === "quina" ? "botao ativo" : "botao quina"} to = "/quina" onClick={() => setAtivo("quina")}>QUINA</Link>
        </div>
    );
}