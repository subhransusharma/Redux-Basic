const redux  = require('redux');
const creatStore = redux.legacy_createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

//action creator buyCake function which returns an action
function buyCake() {
    //action is an object with type property
    return {
        type: BUY_CAKE,
        info: 'First Redux Action'
    }
    
}

function buyIcecream() {
    //action is an object with type property
    return {
        type: BUY_ICECREAM,
        info: 'First Redux Action'
    }
    
}

const initialCakeState = {
    numOfCakes: 10, 
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default:  return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default:  return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});
const store = creatStore(rootReducer);
console.log('Initial State: ', store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated State: ', store.getState()))
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
unsubscribe();

