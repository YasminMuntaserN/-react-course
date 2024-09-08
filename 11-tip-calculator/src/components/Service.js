export function Service({children , onRateChange}){
    return(
      <div className="service">
        {children}
        <select onChange={(e)=>onRateChange(e.target.value)}>
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was Okey (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">Absolutely amazing! (20%)</option>
        </select>
      </div>
    )
}