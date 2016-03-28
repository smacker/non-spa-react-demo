import { createStore, combineReducers } from 'redux';

const COUNTER_INCREASE = 'COUNTER_INCREASE';

export const increaseCounter = () =>({ type: COUNTER_INCREASE });

function counter(state = 0, action) {
    switch (action.type) {
        case COUNTER_INCREASE:
            return state + 1;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    counter
});

export function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState
  );
}
