import { forwardRef } from "react"


const InputComponent = forwardRef<HTMLInputElement, JSX.IntrinsicElements["input"]>((props, ref) => {
    return (
        <input {...props} ref={ref}/>
    )
})


export default InputComponent