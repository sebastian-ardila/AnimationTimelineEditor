import { Button } from "@mui/material";
import { Code } from "@mui/icons-material";
import { useState, useEffect } from "react";

const CopyCode = ({code}) => {
    
    const [disabled, setDisabled] = useState();

    const generateCode = (code) => {
        const textToCopy = `
            ${code.viewTimeLineName.value ? `${code.viewTimeLineName.name}:--${code.viewTimeLineName.value};` : ''}
            ${code.viewTimeLineAxis.value ? `${code.viewTimeLineAxis.name}:${code.viewTimeLineAxis.value};` : ''}
        `;
        textToCopy.replace(' ', '');
        return textToCopy;
    }
    const handleCopyClick = () => {
        const textToCopy = generateCode(code);
        navigator.clipboard.writeText(textToCopy)
          .then(() => alert('Texto copiado al portapapeles'))
          .catch((err) => console.error('Error al copiar el texto:', err));
      };

    useEffect(()=>{
        if(
            !code.viewTimeLineName.value &&
            !code.viewTimeLineAxis.value
        ){
            setDisabled(true)
        }else{
            setDisabled(false)
        }
    }, [code])

    return(

        <Button disabled={disabled} onClick={handleCopyClick} variant="outlined" startIcon={<Code />}>
            Copy Code
        </Button>
    );
};

export default CopyCode;