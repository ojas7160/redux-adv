import * as actionTypes from './actionTypes';

export const saveResult = (res) => {
  return {
    type: actionTypes.STORE_RESULT,
    val: res
  }
}

export const storeResult = (res) => {
  // setTimeout(() => {}, 2000) // this wont work, instead thunk would do the async trick
  return function(dispatch, getState) {
    setTimeout(() => {
      const oldCounter = getState().ctr.counter; // getState given by redux-thunk and returns the state
      dispatch(saveResult(res))
    }, 2000)
  }
}

export const deleteResult = (res) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: res
  }
}