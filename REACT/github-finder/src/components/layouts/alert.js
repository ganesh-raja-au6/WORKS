import React, {Fragment} from 'react'

const Alert = ({alert}) => {
    return (
        alert !== null && <Fragment>
            <div className="alert alert-warning mt-4">
                <i className="fa fa-info-circle"> {alert.msg}</i>
            </div>
        </Fragment>
    )
}

export default Alert