import styled, { keyframes } from "styled-components";
const texts = [
  "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere pharetra aliquam turpis, magna molestie blandit placerat auctor cursus nec sociosqu dis cum, id scelerisque libero vulputate hac nunc bibendum feugiat nullam tempor, Lorem ipsum dolor sit amet consectetur adipiscing elit posuere pharetra aliquam turpis, magna molestie blandit placerat auctor cursus nec sociosqu dis cum, id scelerisque libero vulputate hac nunc bibendum feugiat nullam tempor, Lorem ipsum dolor sit",
  "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere pharetra aliquam turpis, magna molestie blandit placerat auctor cursus nec sociosqu dis cum, id scelerisque libero vulputate hac nunc bibendum feugiat nullam tempor"
]
const BodyContent = ({ background }) => {
  return (
    <>
      <BodyContentContainer>
        <span>{texts[0]}</span>
        <Square background={background} />
        <span>{texts[1]}</span>
        <Square background={background} />
      </BodyContentContainer>
    </>
    
  );
};

export const BodyContentContainer = styled.div`
  display: grid;
  width: 200px;
  height: 50vh;
  overflow-y: auto;
  flex-direction: column;
  gap: 20px;
  padding: 100px 40px;
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

  view-timeline-name: --square;
  view-timeline-axis: block;

  animation-timeline: --square;
  animation-name: ${Animation};

  animation-range: entry 25% cover 50%;
  animation-fill-mode: both;
`;

export default BodyContent;
