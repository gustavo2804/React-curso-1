import {useState} from 'react';
import PropTypes from "prop-types";

export const CounterApp = ({value})=>{
   
    
    const [ counter, setCounter ] = useState(value);
    
    const handleadd =()=>{
        // console.log(event)
        setCounter(counter + 1) ;
        }
    const handlerest =()=>{
        // console.log(event)
        setCounter(counter - 1) ;
        }    
        const handlereset =()=>{
            // console.log(event)
            setCounter(value) ;
            }    

    return(
    

     <>
    <h1>ahora que paso</h1>
    <h2> {counter} </h2>


    <button onClick={handleadd}> +1 </button>
    <button onClick={handlerest}> -1 </button>
    <button aria-label="reset-button" onClick={handlereset}> Reset </button>
   
    </>
        )


}

CounterApp.propTypes = {
value:PropTypes.number.isRequired

}