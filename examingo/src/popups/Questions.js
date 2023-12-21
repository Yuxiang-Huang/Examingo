import React from 'react'
import './Questions.css'

function Questions(props) {
    return(props.trigger) ? (
        <div className="questions">
            <div className="questions-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
                { props.children }
            </div>

        </div>
    ) : "";
}

export default Questions