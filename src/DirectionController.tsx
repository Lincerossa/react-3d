
import React, {  FunctionComponent } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { getDirectionValue } from './redux/direction/reducer'
import { changeValueDirection } from './redux/direction/actions'

const DirectionController : FunctionComponent<any> = () => {
  const dispatch = useDispatch()
  const directionValue: boolean = useSelector(getDirectionValue)


  const action = changeValueDirection(directionValue ? false : true)

  
  function handleChangeValue(){
    dispatch(action)
  }

  return <>
    <button onClick={handleChangeValue}>change status</button>
  </>
}


export default DirectionController