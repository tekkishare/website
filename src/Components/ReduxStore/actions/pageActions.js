import * as CONST_TYPE from "./actionType";

export const initializePageAction = () => {
  return {
    type: CONST_TYPE.INITIALIZE_PAGELIST,
  };
};

export const ChangeMessageAction = (page) => {
  return {
    type: CONST_TYPE.CHANGE_EXP_DATE,
    payload: page,
  };
};
export const GetMostRecentPageList = () => {
  return {
    type: CONST_TYPE.GET_PAGELIST_MOST_RECENT,
  };
};

export const GetPages = () => {
  return {
    type: CONST_TYPE.GET_PAGES,
  };
};
