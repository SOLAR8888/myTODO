import React, {Fragment} from 'react';
import {InputForm} from "../components/InputForm";
import {Notes} from "../components/Notes";

export const Home = () => {
    //для теста
    const notes = new Array(3)
        .fill('')
        .map((v,i)=>({ id:i, title:`Item #${i+1}`}));

    return (
        <Fragment>
            <InputForm/>
            <hr/>

            <Notes notes={notes}/>
        </Fragment>
    )
}
