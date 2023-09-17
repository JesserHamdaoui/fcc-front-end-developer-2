import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePlainText } from "./redux/plain_text/plainTextActions";

const EditorContainer = () => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.text);

  return (
    <div className="w-1/2 bg-green-200 min-h-screen">
      <h2 className="font-extrabold underline bg-green-900 py-3 text-white">
        Editor
      </h2>
      <textarea
        className="h-5/6 w-10/12 block mx-auto mt-5"
        id="editor"
        onChange={(e) => dispatch(updatePlainText(e.target.value))}
        value={text}
      />
    </div>
  );
};

export default EditorContainer;
