import * as ActionTypes from '../types/serverActions'

export const retrieveFiles = (path) => {
    return {
        type: ActionTypes.RETRIEVE_FILES,
        path
    }
}