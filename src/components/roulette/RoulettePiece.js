import React from "react";

function getAngledLine(length, angle) {
  return {
    x: Math.cos(angle) * length,
    y: Math.sin(angle) * length,
  }
}


function RoulettePiece(props) {
  const {centerX, centerY, length, angularOffset, angularWidth} = props;
  const line1 = getAngledLine(length, angularOffset);
  const line2 = getAngledLine(length, angularOffset + angularWidth);
  return (
    <path 
      stroke="red"
      d = {`
        M ${centerX + " " + centerY}
        l ${line1.x + " " + line1.y}
        a ${length} ${length} ${angularOffset} 0 1 ${line2.x-line1.x} ${line2.y-line1.y} 
        l ${(-line2.x) + " " + (-line2.y)}
      `}
    />)
}


export default RoulettePiece;
