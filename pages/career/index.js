import { useState } from "react";


// just for test
// export  function getStaticProps(){
    
//     return{props:{tt:78}}
// }

function Career(props){
    // console.log(props.tt);
    const [calculate,setCalculate]=useState(0);
    let btnProp= false;
    const applyBtnProp = calculate==0||calculate<0?btnProp=true:btnProp=false;
    // console.log(applyBtnProp);

    return<>
    <h2>Career Component</h2>
    <h3>{calculate}</h3>
    
    <button disabled={applyBtnProp} onClick={()=>setCalculate(calculate-1)}>decrement</button>
    <button  onClick={()=>setCalculate(calculate+1)}>increment</button>
 
    </>
}

export default Career;