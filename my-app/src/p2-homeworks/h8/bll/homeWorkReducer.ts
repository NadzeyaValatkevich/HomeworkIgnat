import {UserType} from "../HW8";

export type SortActionType = {
    type: 'sort',
    payload: 'up' | 'down'
};

export type CheckActionType = {
    type: 'check',
    payload: 18
};

type ActionsType = SortActionType | CheckActionType;

export const homeWorkReducer = (state: Array<UserType>, action: ActionsType ):Array<UserType>=> {
    switch (action.type) {
        case 'sort': {
           const newArray = [...state.sort((a, b) => {
               if(a.name < b.name) return -1
               else if (a.name > b.name) return 1
               else return 0
           })];
           return action.payload === 'up' ? newArray : newArray.reverse();
        }
        case 'check': {
            return state.filter(elem => elem.age > action.payload)
        }
        default: return state
    }
};
