import {UserType} from "../HW8";

type SortNameUpAC = {
    type: 'sort'
    payload: 'up'
}
type SortNameDownAC = {
    type: 'sort'
    payload: 'down'
}
type check18AgeAC = {
    type: 'check'
    payload: 18
}

type ActionType = SortNameUpAC | SortNameDownAC | check18AgeAC

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if(action.payload === 'up'){
                return [...state].sort((a, b) => b.name.localeCompare(a.name));

            } else if(action.payload === 'down'){
                return [...state].sort((a, b) => a.name.localeCompare(b.name));
            }
        }
        case 'check': {
            if(action.payload === 18){
                return state.filter(person => person.age >= 18)
            }
        }
        default: return state
    }
}
