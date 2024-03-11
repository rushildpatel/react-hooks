import React from "react";

function Count({ countName, countValue }) {
  console.log(`rendering ${countName}`);
  return (
    <div>
      {countName} - {countValue}
    </div>
  );
}

export default React.memo(Count);
