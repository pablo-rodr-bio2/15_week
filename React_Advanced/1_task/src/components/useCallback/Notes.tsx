import { memo } from "react"

interface Props {
    notes: string[]
    addNote: () => void
}
const Notes = ({ notes, addNote }: Props) => {
    console.log('Notes component rendered')

    return <>
        <button onClick={addNote}>+</button>
        &emsp;
        {notes.map(note => {
            return (
                <>
                    <span>{note}</span>
                    &emsp;
                </>
            )
        })}
    </>
}

export default memo(Notes)