import React from "react";
import TextField from "@mui/material/TextField";
import {makeStyles} from "@mui/styles";


const useStyle = makeStyles({
    input: {
        width: "300px"
    }

});


export default function CustomInput(props) {
    const {id, label, type, autocomplete, variant, required, handlechange, name,autofocus} = props;
    const classes = useStyle();
    return (
        <>

            <TextField className={classes.input}
                       required={required}
                       id={id}
                       label={label}
                       type={type}
                       autoComplete={autocomplete}
                       variant={variant}
                       onChange={handlechange}
                       name={name}
                       autoFocus={autofocus}

            />


        </>
    )

}