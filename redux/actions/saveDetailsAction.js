


export const saveDetails = (userDetails) =>(
    {
        type:"SAVE_USER_DETAIL",
       
        userDetails:{
            name:userDetails.name,
            surname:userDetails.surname,
           

        }
    
    });

