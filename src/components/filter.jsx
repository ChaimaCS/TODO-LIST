import {useDispatch} from 'react-redux'
import { showAll, showCompleted, showNotCompleted } from '../actions/Actions'


function Filter () {

const dispatch = useDispatch()

return (
<div>
  <h1 className='p-4'>Filter by :</h1>
   <div className='btns'> 
    <button className='btn btn-secondary m-4' onClick={() => dispatch(showAll('ALL'))}> All Tasks </button>

    <button  className='btn btn-secondary m-4'onClick={() => dispatch(showCompleted('COMPLETED'))}>Completed Tasks</button>

    <button  className='btn btn-secondary m-4' onClick={() => dispatch(showNotCompleted('NOTCOMPLETED'))}> Not Done Tasks</button>
    </div> 
</div>
)
}

export default Filter