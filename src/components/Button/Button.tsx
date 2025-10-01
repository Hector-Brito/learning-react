import "./Button.css"

interface Props {
    label:string
    parentMethod:() => void
}

function Button ({label, parentMethod}:Props) {
    return (
        <>
        <button className="button" onClick={parentMethod}>
            {label}
        </button>
        </>
    )
}

export {Button};