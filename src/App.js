import styled from "styled-components";
import { useParams } from "./hooks/useParams";
import { useBodyContent } from "./hooks/useBodyContent";
import { useCodeManager } from "./hooks/useCodeManager";
import BodyContent from "./BodyContent";
import AnimationTimeLineEditor from "./AnimationTimelineEditor";
import ShowCode from "./ShowCode";

export default function App() {
  const { width, height, setWidth, setHeight } = useBodyContent();
  const {
    viewTimeLineNameId,
    setViewTimeLineNameId,
    viewTimeLineAxis,
    setViewTimeLineAxis,
    background, 
    setBackground,
    propertyTitles,
  } = useParams();
  const onResize = (event, { node, size, handle }) => {
    setWidth(size.width);
    setHeight(size.height);
  };
  const { code } = useCodeManager({
    viewTimeLineNameId,
    viewTimeLineAxis,
    background,
  });

  return (
    <>
      <Header>
        <h1>Animation-Timeline Editor</h1>
      </Header>
      <Container>
        <BodyContent 
          propertyTitles={propertyTitles}
          viewTimeLineNameId={viewTimeLineNameId}
          viewTimeLineAxis={viewTimeLineAxis}
          background={background} 
        />
        <AnimationTimeLineEditor 
          propertyTitles={propertyTitles}
          viewTimeLineNameId={viewTimeLineNameId} 
          setViewTimeLineNameId={setViewTimeLineNameId}
          viewTimeLineAxis={viewTimeLineAxis}
          setViewTimeLineAxis={setViewTimeLineAxis}
          setBackground={setBackground} 
        />
        <ShowCode code={code} />
      </Container>
    </>
  );
}

export const Header = styled.div`
  width: 100%;
  margin: 10px;
  display: flex;
  justify-content: center;
  font-family: sans-serif;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;
