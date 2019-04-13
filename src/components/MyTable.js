import React from 'react';
import "../MyTable.css"

const MyTable = (props) =>

{
        return(
            <div className="header">
                <h1 className="header-name">
                    Movie list
                </h1>
                <input className="header-input" type="text" name="txt"/>
            </div>
        )
};

export default MyTable;
