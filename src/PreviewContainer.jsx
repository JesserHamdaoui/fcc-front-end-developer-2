import { marked } from "marked";
import React from "react";
import { useSelector } from "react-redux";

const PreviewContainer = () => {
  const text = useSelector((state) => state.text);

  return (
    <div className="w-1/2">
      <h2 className="font-extrabold underline">Preview</h2>
      <div
        className="mt-5 break-words w-full"
        dangerouslySetInnerHTML={{
          __html: marked.parse(text),
        }}
      />
    </div>
  );
};

export default PreviewContainer;
