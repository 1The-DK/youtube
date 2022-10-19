import * as React from "react"

const Button = ({ classes, text }) => {
    return (
        <button className={`btn ${classes}`}>{ text }</button>
    )
}

export default Button