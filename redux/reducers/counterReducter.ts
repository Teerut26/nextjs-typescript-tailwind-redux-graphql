import { CounterEnum } from "../enum/CounterEnum"

const counterReducter = (state = 0, action: { type: any }) => {

    switch(action.type){
        case CounterEnum.INCREMENT_COUNTER:
            return state + 1
        case CounterEnum.DECREMENT_COUNTER:
            return state - 1
        default:
            return state
    }

}

export default counterReducter