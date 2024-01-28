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
      <HeaderContainer>
        <Header>
          <h1>Animation-Timeline Editor</h1>
        </Header>
        <p>This is a helper to use the property animation-timeline of CSS that allow css to do more easy animations. For more, check the official documentation in <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline">MDN</a></p>
      </HeaderContainer>
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

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10vmax;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: sans-serif;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;
