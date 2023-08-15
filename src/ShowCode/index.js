import styled from "styled-components";
import CopyCode from "../CopyCode";
const ShowCode = ({code}) => {
    return(
        <Container>  
            <CopyCode code={code}/>
            <ShowCodeContainer>
                <CodeLine name={code.viewTimeLineName.name} value={`${code.viewTimeLineName.value}`} variable/>
                <CodeLine name={code.viewTimeLineAxis.name} value={`${code.viewTimeLineAxis.value}`} variable={false}/>
            </ShowCodeContainer>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    gap: 15px;
    flex-direction: column;
    position: relative;
    width: 300px;
`;

const CodeLine = ({name, value, variable}) => {
    return (
        <div>
            { value && 
                <CSSCode>
                    <Property>{name}</Property>
                    :
                    <Value>{variable ? `--${value}` : value}</Value>
                </CSSCode>
            }
        </div>
    )
}

const CSSCode = styled.div`
    display: flex;
    gap: 5px;
    font-size: 14px;
    font-family: sans-serif;
`;

const Property = styled.div`
    color: #1976d2;
    min-width: fit-content;
`;

const Value = styled.div`
    color: #98979e;
`;

const ShowCodeContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: 1px solid lightgrey;
    background: white;
    padding: 20px;
    color: gray;
    overflow-y: auto;
`;

export default ShowCode;