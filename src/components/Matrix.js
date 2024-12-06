import React, { useState } from "react";
import "./Matrix.css";

const Matrix = () => {
  const [matrix, setMatrix] = useState(Array(9).fill(null));
  const [clickOrder, setClickOrder] = useState([]);

  const handleClick = (index) => {
    if (matrix[index] === null) {
      const newMatrix = [...matrix];
      newMatrix[index] = "green";
      setMatrix(newMatrix);
      setClickOrder([...clickOrder, index]);

      if (clickOrder.length === 8) {
        // Change all colors to orange in sequence of their clicks
        setTimeout(() => {
          const newMatrixOrange = Array(9).fill("orange");
          setMatrix(newMatrixOrange);
        }, 1000);
      }
    }
  };

  return (
    <div className="matrix">
      {matrix.map((color, index) => (
        <div key={index} className="box" style={{ backgroundColor: color }} onClick={() => handleClick(index)} />
      ))}
    </div>
  );
};

export default Matrix;
