import React from 'react'
import Datepicker from '../../component/common/datepicker'


export default class Dashboard extends React.Component {    
    constructor(props) {
        super(props)
        this.state = {
            data: ''
        }
    }
    render() {
        return (
            <div>
                <p>Dashboard</p>
                <Datepicker />
            </div>
        )
    }
}