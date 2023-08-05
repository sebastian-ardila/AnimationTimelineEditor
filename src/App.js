import styled from "styled-components";
import { useParams } from "./hooks/useParams";
import { useBodyContent } from "./hooks/useBodyContent";
import { Resizable } from "react-resizable";
import BodyContent from "./BodyContent";
import AnimationTimeLineEditor from "./AnimationTimelineEditor";
export default function App() {
  const { width, height, setWidth, setHeight } = useBodyContent();
  const { background, setBackground } = useParams();
  const onResize = (event, { node, size, handle }) => {
    setWidth(size.width);
    setHeight(size.height);
  };

  return (
    <>
      <Header>
        <h1>Animation-Timeline Editor</h1>
      </Header>
      <Container>
        <Resizable width={width} height={height} onResize={onResize}>
          <BodyContent background={background} />
        </Resizable>
        <AnimationTimeLineEditor setBackground={setBackground} />
      </Container>
    </>
  );
}

export const Header = styled.div`
  width: 100vh;
  margin: 10px;
  display: flex;
  justify-content: center;
  font-family: sans-serif;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  height: 500px;
`;
