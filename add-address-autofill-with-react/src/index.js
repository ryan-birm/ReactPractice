import React from 'react';
import ReactDOM from 'react-dom';
import { AddressAutofill } from '@mapbox/search-js-react';

function App() {
    return (
        <form>
            <AddressAutofill accessToken="pk.eyJ1IjoiYmlybSIsImEiOiJjbWF6eHIza3owb2ZkMmxvczg5emg2ZDZtIn0.Yg81e2RlYrf3Ze0cbaJVtg">
                <input
                    name="address" 
                    placeholder="Address" 
                    type="text"
                    autoComplete="address-line1"
                />
            </AddressAutofill>
            <input
                name="unit" 
                placeholder="Unit number" 
                type="text"
                autoComplete="address-line2"
            />
            <input
                name="city" 
                placeholder="City" 
                type="text"
                autoComplete="address-level2"
            />
            <input
                name="state" 
                placeholder="State" 
                type="text"
                autoComplete="address-level1"
            />
            <input
                name="country" 
                placeholder="Country" 
                type="text"
                autoComplete="country"
            />
            <input
                name="postcode" 
                placeholder="Postcode" 
                type="text"
                autoComplete="postal-code"
            />
        </form>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);