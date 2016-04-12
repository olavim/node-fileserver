import * as ActionTypes from '../types/routeActions'

export const navigate = (text) => {
    return {
        type: ActionTypes.NAVIGATE,
        text
    }
}