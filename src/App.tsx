import './App.css';
import { Dispatch, SetStateAction, useState } from 'react';

const calcMortgagePayment = (principal: number, annualInterestRate: number): number => {
  const percentageRate = +annualInterestRate / 1200;
  const lengthOfLoan = 30 * 12;
  const fullPayment = (principal * percentageRate) / (1 - (Math.pow((1 + percentageRate), lengthOfLoan * -1)));
  return +fullPayment.toFixed(2);
};

const calcTaxEstimate = (houseValue: number, taxRate: number): number => +(houseValue * taxRate / 12).toFixed(2);

type NumInputProps = {
  label: string,
  id: string,
  setter: Dispatch<SetStateAction<number>>,
  value: number
}

const NumInput = ({label, id, setter, value}: NumInputProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type='number'
        id={id}
        value={value}
        onChange={(e) => {
          e.preventDefault();
          setter(+e.target.value.trim());
        }}
      />
    </div>
  )
}

export default function App () {

  const [isDownPercent, setIsDownPercent] = useState<boolean>(false);

  const [houseValue, setHouseValue] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(0);
  const [downPayment, setDownPayment] = useState<number>(0);

  const exampleTaxRate = 0.0111;
  const exampleInsuranceRate = 0.0043;
  const propertyTaxes = calcTaxEstimate(houseValue, exampleTaxRate);
  const homeownerInsurance = calcTaxEstimate(houseValue, exampleInsuranceRate);

  const principal = houseValue - downPayment;
  const monthly = calcMortgagePayment(principal, interestRate);

  const downPercentMath = (e: number) => setDownPayment(e * houseValue)

  return (
    <div className="App">
      <header className="App-header">
        <NumInput id={'house-value'} label={'House Value: $'} setter={setHouseValue} value={houseValue}/>
        {/*<button onClick={() => setIsDownPercent(!isDownPercent)} disabled={isDownPercent}>Percent</button>*/}
        {/*<button onClick={() => setIsDownPercent(!isDownPercent)} disabled={!isDownPercent}>Dollars</button>*/}

        {isDownPercent ? (
          <NumInput id={'down-payment'} label={'Down Payment: %'} setter={setDownPayment} value={downPayment}/>
        ) : (
          <NumInput id={'down-payment'} label={'Down Payment: $'} setter={setDownPayment} value={downPayment}/>
        )}
        <NumInput id={'interest-rate'} label={'Interest Rate: %'} setter={setInterestRate} value={interestRate}/>
        {/*<NumInput id={'principal'} label={'Principal: $'} setter={setPrincipal} value={principal}/>*/}
        <div>
          <h2>Home value</h2>
          <p>House Value: {houseValue.toLocaleString()}</p>
          <p>interestRate: {interestRate.toLocaleString()}</p>
          <p>principal: {principal.toLocaleString()}</p>
          <p>down payment: {downPayment.toLocaleString()}</p>
          <p>down payment percent: {((houseValue / downPayment)).toLocaleString()}</p>
        </div>
        <div>
          <h2>Monthly</h2>
          <p>monthly mortgage: {monthly.toLocaleString()}</p>
          <p>property taxes: {propertyTaxes.toLocaleString()}</p>
          <p>homeowners insurance: {homeownerInsurance.toLocaleString()}</p>
          <p>total: {(monthly + propertyTaxes + homeownerInsurance).toLocaleString()}</p>
        </div>

      </header>
    </div>
  );
};
