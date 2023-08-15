export const useCodeManager = ({viewTimeLineNameId, viewTimeLineAxis, background}) => {
    return {
        code: {
            viewTimeLineName: {
                name: "view-timeline-name",
                value: viewTimeLineNameId ? viewTimeLineNameId : '',
            },
            viewTimeLineAxis: {
                name: "view-timeline-axis",
                value: viewTimeLineAxis? viewTimeLineAxis : '',
            },
            background: {
                name: "background",
                value: background ? background : ''
            }
        }
        
    }
}