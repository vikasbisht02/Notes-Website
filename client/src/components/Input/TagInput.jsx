/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";

const TagInput = ({ tags, setTags }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addNewTag = () => {
    if (inputValue.trim() !== "") {
      setTags((prevTags) => {
        const newTags = [...prevTags, inputValue.trim()];
        return newTags;
      });
      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addNewTag();
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="flex flex-col gap-3">
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="flex items-center gap-2 text-xs sm:text-sm text-slate-900 bg-slate-200 px-2 py-1 rounded-lg"
            >
              #{tag}
              <button
                className="text-xs sm:text-sm text-red-500 hover:text-red-700"
                onClick={() => handleRemoveTag(tag)}
              >
                <MdClose size={16} />
              </button>
            </span>
          ))}
        </div>
      )}
      <div className="flex items-center gap-3 flex-wrap mt-3">
        <input
          type="text"
          placeholder="Add Tags"
          className="text-xs sm:text-sm border border-gray-300 px-3 py-2 rounded-lg outline-none hover:bg-slate-100 w-full sm:w-auto"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button
          className="w-8 h-8 flex items-center justify-center rounded-lg border border-blue-700 bg-blue-700 hover:bg-blue-800 text-white"
          onClick={addNewTag}
        >
          <MdAdd size={20} />
        </button>
      </div>
    </div>
  );
};

export default TagInput;
