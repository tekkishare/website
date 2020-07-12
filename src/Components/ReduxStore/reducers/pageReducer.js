import * as CONST_TYPE from "./../actions/actionType";
import homePagesData from "./../../../Assets/pages.json";

const initialState = {
  PageData: [],
  ExpirationDate: "01/01/2020",
};

const pageReducer = (state = initialState, action) => {
  //console.log(state);
  switch (action.type) {
    case CONST_TYPE.INITIALIZE_PAGELIST:
      var pagesActiveData = homePagesData.filter(
        (page) => page.isActive === true
      );

      var expDate = new Date();
      expDate = new Date(
        expDate.getFullYear(),
        expDate.getMonth(),
        expDate.getDate() + 2
      );

      return Object.assign({}, state, {
        PageData: pagesActiveData,
        ExpirationDate: expDate,
      });
    case CONST_TYPE.GET_PAGELIST_MOST_RECENT:
      return state;
    case CONST_TYPE.GET_PAGES:
      console.log("get page - inside reducer");
      return state;
    case CONST_TYPE.CHANGE_EXP_DATE:
      //var stateObject = store.getState();
      //stateObject.Message = action.payload;
      return Object.assign({}, state, {
        ExpirationDate: action.payload,
      });
    default:
      return state;
  }
};

export default pageReducer;
