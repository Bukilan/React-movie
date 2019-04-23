import React from 'react';
import "../static/isError.css"


let url = "https://ui-ex.com/images/transparent-gif-loading-1.gif";


class IsError extends React.Component {


    render() {
        return (
            <div className="no-data-container">
                <img
                    // src="https://webmarketingschool.com/wp-content/uploads/2018/03/nojobsfound.png"
                    src={url}
                    alt="Sorry, here is an error"
                    width="128"
                    height="128"
                />
            </div>
        )
    }
}


export default IsError;