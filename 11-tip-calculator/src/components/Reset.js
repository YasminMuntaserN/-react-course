export function Reset({onChangeBill ,onRate1Change,onRate2Change}){
  return (
    <button onClick={()=>{
      onChangeBill(0)
      onRate1Change(0)
      onRate2Change(0)
    }}
    >Reset</button>
  )
}