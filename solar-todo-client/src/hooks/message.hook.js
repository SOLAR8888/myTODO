import {useCallback} from "react";

export const useMessage = () =>{
    return useCallback(text => {
        //TODO заменить на react-bootstrap Toast
        if (window.M && text){
            window.M.toast({html:text});
        }
    },[])
}
