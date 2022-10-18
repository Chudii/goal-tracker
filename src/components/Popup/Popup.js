import './Popup.css'
import { useState } from "react"

const Popup = (props) => {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-content">
                { props.children }
                <button type='button' className="close-btn" onClick={() => props.setTrigger(false)}>Close</button>
            </div>
        </div>
    ) : ""
}

export default Popup