import { useMemo, useState } from "react"

/*
The memoCalculation() will only run when the secondCount is changed
*/

const memoCalculation = (secondCount: number) => {
    console.log('This is the calculation function')
    return secondCount + 1
}


const UseMemoExample = () => {
    const [firstCount, setFirstCount] = useState(0)
    const [secondCount, setSecondCount] = useState(0)


    const addFirstCount = () => {
        setFirstCount(count => count + 1)
    }

    const addSecondCount = () => {
        setSecondCount(count => count + 1)
    }

    const calculation = useMemo( () => memoCalculation(secondCount), [secondCount]) 

    return (
        <>
        <button onClick={addFirstCount}>+</button>  
        {firstCount}
        &emsp;
        <button onClick={addSecondCount}>+</button>        
        {calculation}
        </>
    )
}

export default UseMemoExample