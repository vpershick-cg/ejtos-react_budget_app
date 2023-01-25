import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);

    const handleSetBudget = (budget) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: budget
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input
                    required='required'
                    type='number'
                    id='budget'
                    value={budget}
                    step={10}
                    onChange={(event) => handleSetBudget(event.target.value)}>
                </input>
            </span>
        </div>
    );
};

export default Budget;
