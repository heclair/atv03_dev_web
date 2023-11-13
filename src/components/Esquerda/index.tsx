import { HTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends HTMLAttributes<HTMLElement>{}

export default function Esquerda({children}:Props){
    return(
        <Sld>
            {children}
        </Sld>
    )
}

const Sld = styled.div``;