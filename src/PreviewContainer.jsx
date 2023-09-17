import { marked } from "marked";
import React from "react";
import { useSelector } from "react-redux";

const PreviewContainer = () => {
  const text = useSelector((state) => state.text);

  return (
    <div className="w-1/2">
      <h2 className="font-extrabold underline bg-gray-900 py-3 text-white pl-5">
        Preview
      </h2>
      <div
        id="preview"
        className="mt-5 break-words w-full pl-5"
        dangerouslySetInnerHTML={{
          __html: marked.parse(text, { breaks: true }),
        }}
      />
    </div>
  );
};

export default PreviewContainer;
