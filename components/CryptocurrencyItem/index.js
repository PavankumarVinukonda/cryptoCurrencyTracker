// Write your JS code here
import './index.css'

const CurrencyItem = props => {
  const {currencyDataitem} = props

  const {id, currencyLogo, currencyName, usdValue, euroValue} = currencyDataitem

  return (
    <div className="currencyItem">
      <div className="logoCont">
        <img src={currencyLogo} alt={currencyName} className="currencyLogo" />
        <p className="currencyName">{currencyName}</p>
      </div>
      <div className="valueContainer">
        <p className="Usd">{usdValue}</p>
        <p className="euro">{euroValue}</p>
      </div>
    </div>
  )
}

export default CurrencyItem
