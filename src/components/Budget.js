import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);

    const handleSetBudget = (budget) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: budget
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>

            <input
                required='required'
                type='number'
                id='budget'
                value={budget}
                step={10}
                style={{ marginLeft: '2rem' , size: 10}}
                onChange={(event) => handleSetBudget(event.target.value)}>
            </input>
        </div>
    );
};

export default Budget;
