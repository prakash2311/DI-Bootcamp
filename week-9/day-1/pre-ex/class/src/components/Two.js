import {connect} from 'react-redux'
import { changeOne } from '../redux/action'

const Two = (props) => {
    return (
    <>
      <h1>Two</h1>
      change the state of one<input type="text" onChange={(e)=>props.ef(e.target.value)}/>
       {/* <button>change the state of one</button> */}
    </>
    )
}

const mapDispatchToProps = (dispatch)  => {
    return{
        ef: (val) => dispatch(changeOne(val))
    }
}

export default connect(null,mapDispatchToProps)( Two);