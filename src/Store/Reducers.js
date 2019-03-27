import * as actions from './ActionTypes';


const initialStore={
    modalState:false,
    folders:{}
}


const reducer=(state=initialStore, action)=>{
    switch(action.type){
        case actions.MODAL_TOGGLE:{
            return {
                ...state,
                modalState:!state.modalState
            }
        }
        default:{
            return state
        }
    }
}

export default reducer;