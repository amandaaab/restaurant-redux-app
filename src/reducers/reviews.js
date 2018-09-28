const initialState = {
    reviews: [
        {
            name : "Alice",
            text : "Trevlig personal och god mat!",
            id : 0
        },
        {
            name : "Stefan",
            text : "Fin utsikt, bra mat.",
            id: 1
        },
        {
            name : "Alice",
            text : "Trevlig personal och god mat!",
            id : 0
        },
        {
            name : "Stefan",
            text : "Fin utsikt, bra mat.",
            id: 1
        },
        {
            name : "Alice",
            text : "Trevlig personal och god mat!",
            id : 0
        },
        {
            name : "Stefan",
            text : "Fin utsikt, bra mat.",
            id: 1
        },

    ]
}

const reviews = (state = initialState, action) => {
    const newState = {...state};
    if(action.type === 'CREATE') {
        return {
            ...state,
            reviews: state.reviews.concat({name: action.name, text: action.text, id: action.id})
        }
        
    }
console.log('NYTT STATE', newState);
    return newState;
}


export default reviews;