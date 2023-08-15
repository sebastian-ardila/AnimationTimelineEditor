import { useState } from "react";

export const useParams = () => {
  const [background, setBackground] = useState("black");
  const [viewTimeLineNameId, setViewTimeLineNameId] = useState('');
  const [viewTimeLineAxis, setViewTimeLineAxis] = useState('');
  return {
    background,
    setBackground,
    viewTimeLineNameId,
    setViewTimeLineNameId,
    viewTimeLineAxis,
    setViewTimeLineAxis,
    propertyTitles: {
      viewTimeLineName: 'view-timeline-name',
      viewTimeLineAxis: 'view-timeline-axis',
    },
  };
};
