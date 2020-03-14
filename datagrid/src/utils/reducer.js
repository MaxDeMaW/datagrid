import DATA from './DATAJSON';


const reducer = (state = {
  original: [...DATA],
  visible: [...DATA]
},
  action) => {
  switch (action.type) {

    case 'DeleteElement': {
      state.visible.pop();
      state.visible.shift();
      return {
        ...state,
        visible: [...state.visible],
      }
    }

    default: return state;
  }
};

export default reducer;