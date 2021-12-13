import React, {useState} from "react";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {Button} from "@mui/material";
import {hwAPI} from "./request-api";

export const Request = () => {

    const [value, setValue] = useState<boolean>(true);
    // const [error, setError] = useState<boolean>(false);
    const [response, setResponse] = useState(null);


    const onClickHandler = () => {



        hwAPI.createPost(value).then(
            response => {
                console.log(response.data);
                setResponse(response.data.errorText);

            }
        ).catch(error =>{
            console.log({...error});
            console.log(error.response ? error.response.data.errorText : error.message);
            setResponse(error.response.data.errorText)
        })
    }

    return (
        <div>
            <SuperCheckbox
                checked={value}
                onChangeChecked={setValue}
            />
            <Button variant={'contained'} onClick={onClickHandler}>
                Click
            </Button>
            {response}
        </div>
    )
}