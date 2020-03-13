import DATA from './DATAJSON';

const reducer = (state = DATA, action) => {
  switch (action.type) {
    // case 'RND': {
    //   return state + 1;
    // }

    case 'ShowJSON': {
      return DATA;
    }
    // case 'toggleVirtualize': {
    //   return !state;
    // }
    default: return state;
  }
};

export default reducer;