// Write your code here
import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'
import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  onLoginOut = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state
    const message = isLoggedIn ? 'Welcome User' : 'Please Login'

    return (
      <div className="home-container">
        <div className="sub-home-container">
          <Message message={message} />
          {isLoggedIn ? (
            <Logout operation={this.onLoginOut} />
          ) : (
            <Login operation={this.onLoginOut} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
