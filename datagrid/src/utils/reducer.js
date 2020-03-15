import DATA from './DATAJSON';


const reducer = (state = {
  original: [...DATA],
  visible: [...DATA],
  searchString: 'arm'
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

    case 'RefreshTable': {
      state.visible.pop();
      state.visible.shift();
      return {
        ...state,
        visible: [...state.original],
      }
    }

    case 'SortByExperience': {
      state.visible.sort((a, b) => a.experience > b.experience ? 1 : -1);
      return {
        ...state,
        visible: [...state.visible],
      }
    }

    case 'Search': {

      const sst = document.querySelector('.searchBar').value;
      const resultSearch = state.visible.filter(function (e) {
        return (e.name.toLowerCase().indexOf(sst) > -1) || (e.city.toLowerCase().indexOf(sst) > -1);
      });
      console.log(resultSearch);
      return {
        ...state,
        visible: [...resultSearch],
      }
    }


    case 'ChangeSearchString': {
      console.log(state.searchString);
      state.searchString = action.payload;
      return {
        state
      }
    }

    default: return state;
  }
};

export default reducer;