import React,{Component} from 'react'
import a from './a.gif'

class Spinner extends React.Component {

    render() {
        return <div className='text-center'>
            <img src={a} alt="loading"/>
            </div>;
    }
}

export default Spinner;