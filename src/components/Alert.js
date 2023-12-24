import React from "react";

export default function Alert(props) {
  return (
    props.alert && (
      <div>
        <div className={`alert alert-${props.alert.type} role="alert`}>
          {props.alert.type} : {props.alert.message}
        </div>
      </div>
    )
  );
}
