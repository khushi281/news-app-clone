const QuotesReducer = ( state , action)  => {

    switch(action.type){
        case "GET_QUOTES":
            return{
                ...state,
                quotesData:action.payload
            }


        default:
            return state
    }
}
export default QuotesReducer