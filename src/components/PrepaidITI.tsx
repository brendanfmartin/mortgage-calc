// Homeowner's insurance (est 2 months)
// $333
// Mortgage insurance (est 2 months)
// 0.0
// Property Taxes (est 2 months)
// $1,504

export const PrepaidITI = ({propertyTaxes, homeownerInsurance}: {
  propertyTaxes: number,
  homeownerInsurance: number
}) => {
  return (
    <>
      <h3>Estimated prepaid interest, taxes & insurance</h3>
      {/*Prepaid interest (est 15 days)
$1,110
Homeowner's insurance (est 1 year)
$2,000
Total estimated prepaid interest, taxes & insurance popup
$3,110*/}
      <table>
        <tr>
          <th>Prepaid interest (est 15 days)</th>
          <th>Homeowner's insurance (est 1 year)</th>
        </tr>
        <tr>
          <td>${homeownerInsurance * 2}</td>
          <td>--</td>
          <td>${propertyTaxes * 2}</td>
        </tr>
      </table>
    </>
  );
};
