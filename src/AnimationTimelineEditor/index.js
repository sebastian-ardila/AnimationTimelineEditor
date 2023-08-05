import styled from "styled-components";
const AnimationTimelineEditor = ({ setBackground }) => {
  return (
    <AnimationTimelineEditorContainer>
      <div>Animation Time-line</div>
      <input
        onChange={(e) => {
          setBackground(e.target.value);
        }}
      />
      <div>Editor 2</div>
      <div>Editor 3</div>
      <div>Editor 4</div>
    </AnimationTimelineEditorContainer>
  );
};

export const AnimationTimelineEditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;  
  padding: 30px;
  width: 200px;
  background: lightgoldenrodyellow;
`;

export default AnimationTimelineEditor;
