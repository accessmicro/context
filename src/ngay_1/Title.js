import React from "react";

const Title = ({name, style}) => {
    return (  
        <React.Fragment>
            <h1 className="title" style={style}>{name}</h1>
        </React.Fragment>
    )
}
 
export default Title;