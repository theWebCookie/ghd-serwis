import React from 'react'
import "../../styles/Alert.css"

const Alert = ({type}) => (
  <div className={type === "success" ? "alert success" : "alert failure"}>
    {type === "success" ? <span>Wysłano email!</span> : <span>Nie udało się wysłać email</span>}
  </div>
)

export default Alert;