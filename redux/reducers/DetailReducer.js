const initialState = 
{
    userDetails: {
        name:"",
        surname:"",
        
    }
};

const DetailReducer = (state = initialState , action) => {
switch(action.type){
    case "SAVE_USER_DETAIL" :{
        return{
            ...state,
            userDetails : action.userDetails
        }
    }
    default:{
        return state;
    }
}
}
export default DetailReducer;