import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import Payments from './Payments'

export class Header extends Component {

    renderContent(){
        switch(this.props.auth){
            case null:
                return
            case false:
                return <li><a href='auth/google'>Login with Google</a></li>
            default:
                return [
                    <li> <Payments /> </li>,
                    <li><a href='api/logout'>Log out</a></li>
                ]
        }
    }

    render() {
        
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link
                     to={this.props.auth ? '/surveys' : '/'}
                     className="left brand-logo"
                    >
                    Emaily</Link>
                
                <ul className='right'>
                    {this.renderContent()}
                </ul>
                </div>
            </nav>
        )
    }
}


const mapStateToProps =(state)=>{
    return {auth: state.auth}
}
export default connect(mapStateToProps,) (Header)
