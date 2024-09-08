export function Bill({onChangeBill}){
  return (
    <div className="bill">
      <p>How much was the bill ? </p>
      <input type="number" onChange={(e)=>onChangeBill(e.target.value)}/>
    </div>
  );
}