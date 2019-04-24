import React from "react";

import "../static/CancelCross.css"
import {itemFetchMovies} from "../redux/actions/items";
import {connect} from "react-redux";

const CancelCross = (props) => {

    const handleClose = () => {
        props.fetchMovie(1);
    };

    return(
        <p onClick={handleClose} className="close"/>
        )
};


const mapStateToProps = (state) => ({
    method: state.method,
    query: state.query,
    state: state,
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovie: (page, method, query_value) => dispatch(itemFetchMovies(page, method, query_value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CancelCross)





