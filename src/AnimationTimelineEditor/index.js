import styled from "styled-components";
import { TextField, Tooltip } from "@mui/material";
import { 
  SwapVertOutlined, 
  SwapHorizOutlined,
  SwapVertTwoTone,
  SwapHorizTwoTone,
} from '@mui/icons-material/';
import { useEffect, useState } from "react";

const ViewTimeLineName = ({propertyTitle, viewTimeLineNameId, setViewTimeLineNameId}) => {
  return (
    <>
        <TextField 
          id="outlined-basic" 
          label="view-timeline-name" 
          variant="outlined"
          value={viewTimeLineNameId}
          onChange={(e) => {
            setViewTimeLineNameId(e.target.value);
          }}
          size="small"
          helperText="Enter the animation identifier"
          required
        />
    </>
  )
}

const ViewTimeLineAxis = ({propertyTitle, setViewTimeLineAxis}) => {
  const [vertical, setVertical] = useState(false);
  const [horizontal, setHorizontal] = useState(false);
  const DEFAULT_AXIS_TEXT = 'Vertical(block) or Horizontal(inline)';
  const [axisValue, setAxisValue] = useState(DEFAULT_AXIS_TEXT);

  const showingAxisValue = (axisValue) => {
    if(axisValue === 'block'){
      return 'Vertical - '+axisValue;
    }else if( axisValue === 'inline'){
      return 'Horizontal - '+axisValue;
    } else {
      return axisValue;
    }
  }

  useEffect(()=>{
    if(vertical) setAxisValue('block')
    if(horizontal) setAxisValue('inline')
    if(!vertical && !horizontal) setAxisValue(DEFAULT_AXIS_TEXT);
  }, [vertical, horizontal])

  useEffect(()=>{
    if(axisValue ==='block' || axisValue === 'inline'){
      setViewTimeLineAxis(axisValue);
    }else{
      setViewTimeLineAxis('')
    }
  }, [axisValue])

  return (
    <>
      <VerticalTimeLineAxisContainer>
        <SwapContainer 
          select={vertical}
          onClick={() => {
            setVertical(!vertical);
            horizontal ? setHorizontal(!horizontal) : null;
          }}
        >
          <SwapVertOutlined />
        </SwapContainer>
        <SwapContainer
          select={horizontal}
          onClick={() => {
            setHorizontal(!horizontal);
            vertical ? setVertical(!vertical) : null;
          }}  
        >
          <SwapHorizOutlined />
        </SwapContainer>
      </VerticalTimeLineAxisContainer>
      <VerticalTimeLineAxisPlaceholder>{showingAxisValue(axisValue)}</VerticalTimeLineAxisPlaceholder>
    </>
    
  )
}

const SwapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid lightgray;
  color:  ${({select}) => select ? 'white':'gray'};
  background: ${({select}) => select ? '#1976d2':'white'};

  :hover {
    background: #1976d2;
    color: white;
  }
`

const VerticalTimeLineAxisContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const VerticalTimeLineAxisPlaceholder = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.66;
  letter-spacing: 0.03333em;
  text-align: left;
  margin-top: 4px;
  margin-right: 14px;
  margin-bottom: 0;
  margin-left: 14px;
`;


const AnimationTimelineEditor = ({ 
  propertyTitles, 
  viewTimeLineNameId, 
  setViewTimeLineNameId,
  viewTimeLineAxis,
  setViewTimeLineAxis,
  setBackground 
}) => {
  return (
    <AnimationTimelineEditorContainer>
      <EditorContainer>
        <ViewTimeLineName propertyTitle={propertyTitles.viewTimeLineName} viewTimeLineNameId={viewTimeLineNameId} setViewTimeLineNameId={setViewTimeLineNameId}/>
      </EditorContainer>
      <EditorContainer>
        <ViewTimeLineAxis propertyTitle={propertyTitles.ViewTimeLineAxis} ViewTimeLineAxis={viewTimeLineAxis} setViewTimeLineAxis={setViewTimeLineAxis}/>
      </EditorContainer>
    </AnimationTimelineEditorContainer>
  );
};

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const AnimationTimelineEditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;  
  padding: 20px;
  width: 240px;
  border: 1px solid lightgray;
`;

export default AnimationTimelineEditor;
