import { useRef } from "react"
import InputComponent from "./InputComponent"

/*
Very similar to useRefExample, but the input field is a component itself
So the parent pass the ref to the child
*/
const ForwardRefExample = () => {

    const inputRef = useRef<HTMLInputElement>(null)

    const handleClick = () => {
        if (!inputRef.current) return

        inputRef.current.value = 'You clicked the button'
    }

    return (
        <>
            <InputComponent value="Some Text" ref={inputRef} />
            <button onClick={handleClick}>Click me</button>
        </>
    )
}

export default ForwardRefExample