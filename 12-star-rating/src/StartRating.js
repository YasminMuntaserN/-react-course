const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap:"16px"
};

const starcontainerStyle = {
  display: 'flex',
  gap:"4px"
}

const textStyle = {
  lineHeight :"1" ,
  margin:0
}

export function StartRating({maxRating = 5}){
  return ( 
  <div style={containerStyle}>
    <div style={starcontainerStyle}>
      {Array.from({length:maxRating } ,(_, i) =>
      (
        <span >S(i+1)</span>
      )
      )}
    </div>
    <p style={textStyle}>{maxRating}</p>
        </div>
  );
}