import { useState } from "react";
import styled, { keyframes } from "styled-components";
import ComponentWrapper from "../ComponentWrapper";
const texts = [
  "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere pharetra aliquam turpis, magna molestie blandit placerat auctor cursus nec sociosqu dis cum, id scelerisque libero vulputate hac nunc bibendum feugiat nullam tempor, Lorem ipsum dolor sit amet consectetur adipiscing elit posuere pharetra aliquam turpis, magna molestie blandit placerat auctor cursus nec sociosqu, consectetur adipiscing elit posuere pharetra aliquam turpis, magna molestie blandit placerat auctor cursus nec sociosqu",
  "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere pharetra aliquam turpis, magna molestie blandit placerat auctor cursus nec sociosqu dis cum, id scelerisque libero vulputate hac nunc bibendum feugiat nullam tempor",
  "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere pharetra aliquam turpis, magna molestie blandit placerat auctor cursus nec sociosqu dis cum, id scelerisque libero vulputate hac nunc bibendum feugiat nullam tempor",
  "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere pharetra aliquam turpis, magna molestie blandit placerat auctor cursus nec sociosqu dis cum, id scelerisque libero vulputate hac nunc bibendum feugiat nullam tempor, Lorem ipsum dolor sit amet consectetur adipiscing elit posuere pharetra aliquam turpis, magna molestie blandit placerat auctor cursus nec sociosqu, consectetur adipiscing elit posuere pharetra aliquam turpis, magna molestie blandit placerat auctor cursus nec sociosqu",
]
const BodyContent = ({ propertyTitles, viewTimeLineNameId, viewTimeLineAxis, background }) => {
  
  const [show, setShow] = useState(false);
  const handleMouseEnter = () => {
    setShow(true);
  }

  const handleMouseLeave = () => {
    setShow(false);
  }

  return (
    <>
      <BodyContentContainer>
        <span>{texts[0]}</span>
        <ComponentWrapper 
          propertyName={propertyTitles.viewTimeLineName} 
          value={viewTimeLineNameId} 
          show={show}>
          <Square 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            viewTimeLineNameId={viewTimeLineNameId}
            viewTimeLineAxis={viewTimeLineAxis}
            background={background} 
          />
        </ComponentWrapper>
        <span>{texts[1]}</span>
        <span>{texts[2]}</span>
        <span>{texts[3]}</span>
      </BodyContentContainer>
    </>
    
  );
};

export const BodyContentContainer = styled.div`
  display: grid;
  width: 250px;
  height: 50vh;
  overflow-y: auto;
  flex-direction: column;
  gap: 20px;
  padding: 40px 40px;
  border: 1px solid lightgray;
`;

const Animation = keyframes`
  from {
    opacity: 0;
    scale: 25%;
  }

  to{
    opacity: 1;
    scale: 100%;
  }
`;

const Square = styled.div`
  display: flex;
  width: 200px;
  height: 300px;
  border: 3px dashed black;
  background: ${({ background }) => (background ? background : "lightblue")};

  view-timeline-name: --${({ viewTimeLineNameId }) => viewTimeLineNameId };
  view-timeline-axis: ${({viewTimeLineAxis}) => viewTimeLineAxis};

  animation-timeline: --${({ viewTimeLineNameId }) => viewTimeLineNameId };
  animation-name: ${Animation};

  animation-range: entry 25% cover 50%;
  animation-fill-mode: both;
`;

export default BodyContent;
