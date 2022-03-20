// Redux
import { createStore } from 'redux';

// action types
const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';

// to-do app reducer function
const todoReducer = (state = [], action) => {
    switch(action.type){
        case ADD_ITEM:
            return [...state, action.item]
        case REMOVE_ITEM:
            return [...state].filter(
                (item) => [...state].indexOf(item) !== action.itemId
            )
        default:
            return state
    }
};

// action creators for add item and remove item
const addItem = (item) => {
    return {
        type: ADD_ITEM,
        item
    };
};

const removeItem = (itemId) => {
    return {
        type: REMOVE_ITEM,
        itemId
    }
}

export const mapStateToProps = (state) => {
    return {
        items: state
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        addNewItem: function(item) {
            dispatch(addItem(item));
        },

        deleteItem: function(itemId) {
            dispatch(removeItem(itemId));
        }
    };
}

// create redux store
export const store = createStore(todoReducer);