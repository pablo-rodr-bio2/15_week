import { useRef } from "react"

/*
I use useRef() to store a ref for the input tag
When the button is clicked, I pass a new text value to the current Ref
*/

const UseRefExample = () => {

    const inputRef = useRef<HTMLInputElement>(null)

    const handleClick = () => {
        
        // since typescript complains that inputRef maybe null
        // I add a checker for that first
        if(!inputRef.current) return

        inputRef.current.value = 'You clicked the button'
    }

    return (
        <>
            <input ref={inputRef} value="Some text"/>
            <button onClick={handleClick}>Click me</button>
        </>
    )
}

export default UseRefExample