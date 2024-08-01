/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import TagInput from "../Input/TagInput";
import {MdClose } from "react-icons/md";

const AddEditNotes = ({ noteData, type, onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [error, setError] = useState(null);

  

  // Add Note
  const addNewNote = async () => {

  }

  // Edit Note
  const editNote = async () => {

  }

  const handleAddNote = () => {
    if(!title) {
      setError("Please enter valid title");
      return;
    }

    if(!content) {
      setError("Please enter valid content");
      return;
    }

    setError("");
  }

  if(type === 'edit') {
    editNote();
  } else {
    addNewNote();
  }


  return (
    <div className="relative">
      <button className="w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3">
        <MdClose className="text-xl text-slate-400 hover:bg-slate-300 rounded-3xl size-6"  onClick={onClose}/>
      </button>

      <div className="flex flex-col gap-2">
        <label className="input-title">Title</label>
        <input
          type="text"
          className="text-xl text-slate-950 border border-gray-200 outline-none rounded-lg p-3 hover:bg-slate-200 "
          placeholder="Go to Gym at 5"
          value={title}
          onChange={({ target }) => setTitle(target.value)}


          
        />
      </div>

      <div className="flex flex-col gap-2  mt-4">
        <label className="input-label">CONTENT</label>
        <textarea
          type="text"
          name=""
          id=""
          className="text-sm text-slate-950 outline-none border border-gray-200  p-2 rounded-lg hover:bg-slate-200"
          placeholder="Content"
          rows={10}
          value={content}
          onChange={({ target }) => setContent(target.value)}
        ></textarea>
      </div>

      <div className="mt-3">
        <label className="input-label">TAGS</label>
        <TagInput tags={tags} setTags={setTags} />
      </div>

      {
        error && <p className="text-sm text-red-500 mt-2">{error}</p>
      }

      <button className="btn-primary font-medium  mt-5 p-3 rounded-lg " onClick={handleAddNote}>
        Add
      </button>
    </div>
  );
};

export default AddEditNotes;
