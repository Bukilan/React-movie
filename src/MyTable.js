import React from 'react';
import "./MyTable.css"


class MyTable extends React.Component{

    render() {
        return(
          <table className="argTable">
              <tbody>
                <tr>
                    <td className="tableNumber">
                       <h3>№</h3>
                    </td>
                    <td width="30"/>
                    <td className="tableTitle">
                        <h3>Title</h3>
                    </td>
                    <td width="240"/>
                    <td className="tablePoster">
                        <h3>Poster</h3>
                    </td>
                    <td width="240"/>
                    <td className="tableDate">
                        <h3>Date</h3>
                    </td>
                </tr>
              </tbody>
          </table>
        );
    }
}

export default MyTable;