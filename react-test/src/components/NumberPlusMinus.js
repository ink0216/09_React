import React, { useState } from 'react';
const NumberPlusMinus = ()=>{
    const [num,setNum] = useState(0);
    return(
        <>
            <button className='cyan' onClick={()=>{
                setNum(num-1);
            }}>-</button>
            <span>{num}</span>
            <button className='magenta'  onClick={()=>{
                setNum(num+1);
            }}>+</button>
        </>
    );
}
export default NumberPlusMinus;