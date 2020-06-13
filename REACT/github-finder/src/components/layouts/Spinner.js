import React, { Fragment } from 'react'

import Spinner from '../../spinner.gif'
const spinner = () => 
    <Fragment>
        <img src={Spinner} alt='Loading' style={{position: 'absolute', top: '50%', left: '50%', transform : 'translate(-50%, -50%)'}}/>
    </Fragment>

export default spinner