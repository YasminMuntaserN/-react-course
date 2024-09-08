export function Bill({bill,onChangeBill}){
  return (
    <div className="bill">
      <p>How much was the bill ? </p>
      <input type="number" 
      value={bill}
      onChange={(e)=>onChangeBill(Number(e.target.value))}/>
    </div>
  );
}