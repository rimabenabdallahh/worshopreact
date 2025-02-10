import { useEffect, useState } from 'react'
const CounterF = ({ step = 1}) =>{
    console.log("CounterF : Render");
    const [count,setCount]=useState(0);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setLoading(false);
        },3000);
        return ()=>clearTimeout(timer);
    },[])

    useEffect(()=>{
        console.log("Component Did update");
    },[count])
    const handleClick = () =>{
        setCount((prev)=>prev+ step
    );
    }
    const handleClickDec = () =>{
        setCount((prev)=>prev-1);
    }
    const handleReset = () => {
        setCount()
    }
    return (
       <>
       {loading ? <h1>Loading ....</h1> : 
        <>
        <p>Count ={ count}</p>
        <button onClick={handleClick}>Incrementer</button>
        <button onClick={handleClickDec}>Decrementer</button>
       <button onClick={handleReset}>Reset</button>
        </>}
         </>
    );
};
export default CounterF;