import React from 'react'
import { Spinner} from 'reactstrap'

export default function Loader() {
    return (
        <div className='spiner'>
        <div className="row">
            <Spinner color='dark'/>
        </div>
            
        </div>
    )
}
