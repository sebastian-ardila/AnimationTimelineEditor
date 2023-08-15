import styled from "styled-components";
const ComponentWrapper = ({propertyName, value, show, children}) => {
    return (
        <ComponentWrapperContainer show={show}>  
            {
                value && 
                    <WrapperTitleContainer show={show}>
                        <WrapperProperty>{propertyName}</WrapperProperty>
                        <WrapperValue>{value}</WrapperValue>
                    </WrapperTitleContainer>
            }
            <WrapperChildren>
                {children}
            </WrapperChildren>
            
        </ComponentWrapperContainer>
    )
}

const WrapperProperty = styled.div`
    font-size: 10px;
    font-family: sans-serif;
`;

const WrapperValue = styled.div`
    font-size: 13px;
    font-family: sans-serif;
`;

const WrapperTitleContainer = styled.div`
    flex-direction: column;
    pointer-events: none;
    display: ${({show}) => show ? 'flex':'none'};
    position: absolute;
    padding: 5px;
    border-bottom-right-radius: 10px;
    z-index: 99;
    background: #00ffffc9;
`;

const WrapperChildren = styled.div`
    top: 20px;
`;

const ComponentWrapperContainer = styled.div`
    border: ${({show}) => show ? '1px dashed gray':'1px dashed transparent'};
    display: flex;
    position: relative;
    flex-direction: column;
    width: fit-content;
    height: fit-content;
`

export default ComponentWrapper;