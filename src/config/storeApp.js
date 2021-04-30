import { createStore } from 'redux'

const defaultState = {
  isLogin: false,
  
};

//rejuicer
const storeApp = (state = defaultState, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {...state,
          isLogin: action.payload.isLogin,
          
        };
  }
};

export default createStore(storeApp);
