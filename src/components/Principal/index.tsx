import { HTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends HTMLAttributes<HTMLElement>{}

export default function Principal({children}:Props){
    return(
        <Sld>
            {children}
        </Sld>
    )
}

const Sld = styled.div`
    padding: 0px 20px;
    font-family: roboto;
    display: flex;
    padding: 30px 0px;
    border-bottom: 1px solid #ddd;
`;