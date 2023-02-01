import { useState } from "react"

const ControlledComponent = () => {

    const [value, setValue] = useState('')

    return (
        <>
            <div>Controlled component</div>
            <input type="text" value={value} onChange={e => setValue(e.target.value)} />
            <div> The value in the input field is controlled by state and is: {value}</div>
        </>
    )
}

export default ControlledComponent