import React,  {useState} from 'react';
function Btn (){
       const [onbtn, setonbtn] = useState(true);
          let [num, setNum] = useState(72);   



    return(
        <div >

            <button  className = {onbtn ? 'on1': 'on2' } onClick={()=>setonbtn(true)} >
             on
            </button>
            <button className = {onbtn ? 'on1': 'on2' }    onClick={()=>setonbtn(false)} >
                Off
            </button>
            <h1>{onbtn}</h1>
            <button onClick={()=>setNum(++num)} >
             inc
            </button>
            <button  onClick={()=>setNum(--num)} >
                dec
            </button>
    <p>tepmreture is {num}</p>



        </div>
    )}
    export default Btn;