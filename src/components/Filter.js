import React from "react";

function Filter({ goodFilter, onApplyFilter }) {
    return (
        <div id="filter-div">
            <button onClick={onApplyFilter} id="good-dog-filter">Filter good dogs: {goodFilter ? 'ON' : 'OFF'}</button>
        </div>
    )
}

export default Filter