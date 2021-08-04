import React from "react";

export const Filter = ({filter, setFilter}) => {

    return (
        <div className='filter'>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button onClick={() => setFilter(0)} type="button" className={`btn btn${filter===0 ? '' : '-outline'}-secondary`}>Все</button>
                <button onClick={() =>setFilter(1)} type="button" className={`btn btn${filter===1 ? '' : '-outline'}-secondary`}>Выполненные</button>
                <button onClick={() =>setFilter(2)} type="button" className={`btn btn${filter===2 ? '' : '-outline'}-secondary`}>Невыполненные</button>
            </div>
        </div>
    )

}
