import React, { Fragment } from 'react';

const WorkHistory = (props) => {
    return(
        <Fragment>
            <h3>{props.jobTitle}</h3>
            <h5>{props.company}</h5>
            <div>{props.children}</div>
        </Fragment>
    );
}

export default WorkHistory;