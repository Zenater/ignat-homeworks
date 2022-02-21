import {UserType} from "../HW8";


type ActionType = { type: 'sort', payload: 'up' | 'down' } | { type: 'check', payload: 18 }


export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const filter = [...state].sort((a, b) => {
                if (a.name > b.name) return 1;
                else if (a.name < b.name) return -1;
                else return 0
            })
            return action.payload==='up' ? filter : filter.reverse()
        }
        case 'check': {
            return state.filter(f=>f.age>=action.payload)
        }
        default:
            return state
    }
}