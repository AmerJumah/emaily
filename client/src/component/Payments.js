import React, { Component } from 'react'
import {connect} from  'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import * as actions from  '../actions'


export class Payments extends Component {
    render() {
        return (
            <div>
                <StripeCheckout
                    name='Emaily'
                    description = '$5 for email credits'
                    amount = {500}
                    token={token => this.props.handleToken(token)}
                    stripeKey = {process.env.REACT_APP_STRIPE_KEY}
                >
                    <button className='btn'>
                        add credits
                    </button>
                </StripeCheckout>
            </div>
        )
    }
}

export default connect (null,actions) (Payments)
