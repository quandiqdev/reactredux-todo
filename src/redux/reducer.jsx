import { ADD_TODO } from "./actionTypes";

const initialState = {
    todos: [{ text: 'Learn Spanish', completed: false },
    { text: 'Buy candies for cousins', completed: false }],
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, { text: action.payload.text, completed: false }]
            }
        default:
            return state;
    }
}
export default reducer;