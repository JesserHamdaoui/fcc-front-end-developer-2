import React from "react";
import EditorContainer from "./EditorContainer";
import PreviewContainer from "./PreviewContainer";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="flex flex-row">
        <EditorContainer />
        <PreviewContainer />
      </div>
    </Provider>
  );
};

export default App;
