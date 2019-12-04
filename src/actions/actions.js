export const storeBooks = (data) => {
    return {
       type: 'STORE_BOOKS',
       data
    }
 } 

 export const storeUnits = (data) => {
    return {
       type: 'STORE_UNITS',
       data
    }
 } 

 export const selectedUnit = (event) => {
    return {
        type: 'HANDLE_UNIT_CLICK',
        data: event.target.dataset.id
    }
} 