import React from 'react'

const BuildControls = (props) => {
    const currencies=Object.entries(props.bpiData)
            .map(currency=><option key={currency[0]} value={currency[0]}>{currency[1].description}</option>)
    return (
        <div>
            <div className="control-group">
                <input type="number" className="form-control" name="bitcoins" value={props.bitcoins} onChange={(e)=>props.bitCoinsHandler(e.target.value)}/>
                <select name="bitcoin" className="form-control">
                    <option value="bitcoin">Bitcoin</option>
                </select>
            </div>
            <div className="control-group">
                <input type="number" name="currencyVal" className="form-control" value={props.currencyVal} onChange={(e)=>props.currencyValHandler(e.target.value)}/>
                <select name="currencies" className="form-control" onChange={(e)=>props.baseCurrencyHandler(e.target.value)}>
                    {currencies}
                </select>
            </div>
        </div>
    )
}

export default BuildControls
