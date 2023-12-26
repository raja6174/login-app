// Write your code here
import './index.css'

function Login(props) {
  const {operation} = props
  return (
    <button type="button" onClick={operation}>
      Login
    </button>
  )
}

export default Login
