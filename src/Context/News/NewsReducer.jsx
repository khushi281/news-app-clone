const NewsReducer = (state , action) => {

    switch(action.type){
          case "GET_NEWS":
            return {
                ...state,
                allNews:action.payload.news,
                topic:action.payload.topic
            }


        default:
            return state
    }
}

export default NewsReducer