import styled from "styled-components";

interface Props {
    dezenas: string[]
}

export default function Resultado({dezenas}:Props){
    return(
        <Sld>
            {dezenas.map((dezena) => (
                <BolaSld key={dezena}>
                  {dezena}
                </BolaSld>
              ))}
        </Sld>
    )
}

const Sld = styled.div`
    display: flex;

`;

const BolaSld = styled.div`
    font-size: 18px;
    font-weight: bold;
    background-color: #260085;
    color: #fff;
    border-radius: 25px;
    padding: 10px;
    margin: 0px 10px;
`;
