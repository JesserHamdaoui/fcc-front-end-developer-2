import { UPDATE_PLAIN_TEXT } from "./plainTextTypes";

const initialState = { text: "" };

export const plainTextReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PLAIN_TEXT:
      return { ...state, text: action.text };
    default:
      return state;
  }
};
