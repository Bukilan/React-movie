import React from "react";

import "../static/CancelCross.css"

class CancelCross extends React.Component {

    handleClose = () => {
        window.location.reload();
    };

    render() {
        return(
            <p onClick={this.handleClose} className="close"/>
        )
    }
}

export default CancelCross





