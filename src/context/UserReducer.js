

export const userReducer = (previousState, instructions) => {
    let newState = {...previousState};

    switch(instructions.type){
        case 'setJWT':
            newState = instructions.data;
            return newState;
        case 'login':
            newState = 'pretend a etch request finished and returned a jwt';
            return newState;
        case 'logout':
            return '';
        default:
            return newState;
    }


    return newState;
}