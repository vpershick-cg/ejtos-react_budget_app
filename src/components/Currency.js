import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, currencyLabel } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);

    const handleSetCurrency = (currency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency
        });
    };

    return (
        <div className="currency-menu">  
            <select className="btn btn-success dropdown-toggle" id="currency"
                onChange={(event) => handleSetCurrency(event.target.value)}>
                Currency ({currency} {currencyLabel})
                <option defaultValue selected disabled hidden> Currency ({currency} {currencyLabel}) </option>
                <option value="$"> $ Dollar </option>
                <option value="£"> £ Pound </option>
                <option value="€"> € Euro </option>
                <option value="₹"> ₹ Rupee </option>
            </select>
        </div>
    );
};

export default Currency;
