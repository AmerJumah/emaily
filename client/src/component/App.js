import React, { Component } from 'react'
import {BrowserRouter , Route} from 'react-router-dom'
import {connect} from  'react-redux'
import Header from './Header'
import * as actions from '../actions'
import Landing from './Landing'

const Dash = () => <h2>Dash</h2>
const SurveyNew = () => <h2>New Survey</h2>


class App extends Component {

  componentDidMount(){
    this.props.fetchUser()
  }

  render(){
    return (
      <BrowserRouter>
        <Header />
        <div className='container'>
        <Route path='/' exact component={Landing} />
        <Route path='/surveys' exact  component={Dash} />
        <Route path='/surveys/new'  component={SurveyNew} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null,actions)(App)
