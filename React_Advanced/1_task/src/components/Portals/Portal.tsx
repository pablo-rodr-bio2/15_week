import { createPortal } from "react-dom"


const portalSelector = document.getElementById("portal-text")

const Portal = () => {
   
    return (
        <div >
            <p>This child is placed in the parent div.</p>
            {portalSelector &&
                createPortal(
                    <p>Portal Text</p>,
                    portalSelector
                )}
        </div>
    )
}

export default Portal