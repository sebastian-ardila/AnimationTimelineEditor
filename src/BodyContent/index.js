import styled, { keyframes } from "styled-components";
const loremIpsum =
  "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere pharetra aliquam turpis, magna molestie blandit placerat auctor cursus nec sociosqu dis cum, id scelerisque libero vulputate hac nunc bibendum feugiat nullam tempor.";
const BodyContent = ({ background }) => {
  return (
    <BodyContentContainer>
      <span>{loremIpsum}</span>
      <Square background={background} />
    </BodyContentContainer>
  );
};

export const BodyContentContainer = styled.div`
  display: grid;
  width: 200px;
  height: 30px;
  overflow-y: auto;
  flex-direction: column;
  gap: 20px;
  padding: 100px 40px;
  border: 1px solid lightgray;
`;

const Animation = keyframes`
  from {
    opacity: 0%;
    scale: 25%;
  }

  to{
    opacity: 1%;
    scale: 100%;
  }
`;

const Square = styled.div`
  display: flex;
  width: 200px;
  height: 300px;
  border: 3px dashed black;
  background: ${({ background }) => (background ? background : "lightblue")};

  view-timeline-name: --sqare;
  view-timeline-axis: block;

  animation-timeline: --square;
  animation-name: ${Animation};
`;

export default BodyContent;
