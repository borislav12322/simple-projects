import {UserType} from "../HW8";

type SortNameUpACType = {
    type: 'sort'
    payload: 'up'
}
type SortNameDownACType = {
    type: 'sort'
    payload: 'down'
}
type Check18AgeACType = {
    type: 'check'
    payload: 18
}

type ActionType = SortNameUpACType | SortNameDownACType | Check18AgeACType

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
                const newList =  [...state].sort((a, b) => b.name.localeCompare(a.name));
                return action.payload === 'up' ? newList : newList.reverse()
        }
        case 'check': {
            return state.filter(person => person.age >= action.payload);
        }
        default:
            return state
    }
}
