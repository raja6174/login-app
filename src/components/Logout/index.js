// Write your code here
import './index.css'

function Logout(props) {
  const {operation} = props
  return (
    <button type="button" onClick={operation}>
      Logout
    </button>
  )
}

export default Logout
