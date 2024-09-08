export function Result({bill ,rate1 ,rate2}){
  const avg =( rate1 + rate2 )/2 ;
  const totalBill =bill+avg;
  return(
    <p>You Pay
        <span> ${totalBill}</span>
        (
          <span>${bill} + ${avg} tip</span>
        )
    </p>
  )
}