import react from "react"
 
import {useState, useEffect} from "react"
const Random=()=>{
    const [number, setNumber] = useState();

    useEffect(()=>{
        setInterval(()=>{
            const n = Math.floor(Math.random() * 10);
            setNumber(n);
        }, 1000)
    }, [])
    return(
        <div>
            {number};
        </div>
    )
}
export default Random