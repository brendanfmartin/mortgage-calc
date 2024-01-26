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
      <span>Calculated off 2 months worth of each</span>
      <table>
        <tr>
          <th>Homeowner's insurance</th>
          <th>Mortgage insurance</th>
          <th>Property Taxes</th>
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
