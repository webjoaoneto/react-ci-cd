import React, {useState} from 'react';

import "./Soma.css";

function Soma() {
  const [ op1, setOp1 ] = useState('');
  const [ op2, setOp2 ] = useState('');

  const [ res, setRes ] = useState('');


  const somar = function() {
      setRes( Number(op1) - Number(op2) );
  }

  return (
    <div className="Soma">
      <div>
          <input name="op1" placeholder="op1" onChange={event => setOp1(event.target.value)} />

          <input name="op2" placeholder="op2" onChange={event => setOp2(event.target.value)} />

          <button id="click" onClick={somar}>Somar</button>
      </div>

      <div data-testid="somaResult" className="result">
        {res}
      </div>
    </div>
  );
}

export default Soma;
