export const reducer = (stateR, action) => {
    switch (action.type){
        case "START":
            return {...stateR, data: [], error: ""}
        case "SUCCESS":
            return {...stateR, data: action.payload, error: ""}
        case "ERROR":
            return {...stateR, error: action.payload}
        default:
            return stateR;
    }
}