let initialstate = {
    books: [],
    units: [],
    selectedUnit: []
}

export default (state = initialstate, action) =>{
    switch (action.type){

        case 'STORE_BOOKS':
            return {
              ...state,
              books: action.data
            }

        case 'STORE_UNITS':
            return {
              ...state,
              units: action.data
            } 

        case 'HANDLE_UNIT_CLICK':
            const chosenUnit = state.units.find(unit=>{
                return parseFloat(action.data, 10) === unit.unit_number
            })
            return {
              ...state,
              selectedUnit: chosenUnit.books
            }   

        default: {
            return state
        }
    }
}

