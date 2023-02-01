import { useCallback, useState } from "react"
import Notes from "./Notes"

/*
 I memoize the Notes component but still it gets re-rendered whenever
 I add a new number to the counter. Putting the addNote() in a callback
 prevents this.
*/
const UseCallbackExample = () => {

    const [notes, setNotes] = useState<string[]>(['First note'])
    const [count, setCount] = useState(0)

    const addNote = useCallback(() => {
        setNotes(notes => [...notes, "This is a new note"])
    }, [notes])

    const addCount = () => {
        setCount((count) => count + 1)
    }

    return (
        <>
            <div>
                <button onClick={addCount}>+</button> &emsp; {count}
            </div>
            <Notes notes={notes} addNote={addNote} />

        </>
    )
}

export default UseCallbackExample