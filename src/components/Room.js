import React , {useState} from 'react'
// function Room (){
//     const[isLit,setisLit] = useState (true);
//     return (
//         <div>
//         {isLit ?  'enter your room' : 'please exit'}
//         <butto onClick = {() =>setisLit(!isLit)}>button</butto>

//     </div>
//     )
// }
// function Room(){
//     const [isLit, setLit] = useState(true);
//     let [num, setNum] = useState(0)   
//     return (
//         <div>
//        { isLit ? 'light' : 'dark' }
//        <button onClick={()=>setNum(++num)}>Inc</button>
//        <p>{num}</p>
//        </div>
//     )
// }
function Room (){
let [num, setNum] = useState(100)
return(
    <div>
        <button onClick={()=>setNum(--num)}>dec</button>
        <h1>{num}</h1>
    </div>
)
}
export default Room;
