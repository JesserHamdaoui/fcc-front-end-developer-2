import { UPDATE_PLAIN_TEXT } from "./plainTextTypes";

export const updatePlainText = (text) => {
  return {
    type: UPDATE_PLAIN_TEXT,
    text,
  };
};
