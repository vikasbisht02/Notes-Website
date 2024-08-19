/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import TagInput from "../Input/TagInput";
import { MdClose } from "react-icons/md";
import axiosInstance from "../../utils/axiosInstance";

const AddEditNotes = ({
  type,
  noteData,
  onClose,
  getAllNotes,
  showToastMessage,
}) => {
  const [title, setTitle] = useState(noteData?.title || "");
  const [content, setContent] = useState(noteData?.content || "");
  const [tags, setTags] = useState(noteData?.tags || []);
  const [error, setError] = useState(null);

  // Add Note
  const addNewNote = async () => {
    try {
      const response = await axiosInstance.post("/add-note", {
        title,
        content,
        tags,
      });

      if (response.data && response.data.note) {
        showToastMessage("Note Added Successfully");
        getAllNotes();
        onClose();
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      }
    }
  };

  // Edit Note
  const editNote = async () => {
    const noteId = noteData._id;
    try {
      const response = await axiosInstance.put("/edit-note/" + noteId, {
        title,
        content,
        tags,
      });

      if (response.data && response.data.note) {
        showToastMessage("Note Updated Successfully");
        getAllNotes();
        onClose();
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      }
    }
  };

  const handleAddNote = () => {
    if (!title) {
      setError("Please enter a valid title");
      return;
    }

    if (!content) {
      setError("Please enter valid content");
      return;
    }

    setError("");

    if (type === "edit") {
      editNote();
    } else {
      addNewNote();
    }
  };

  return (
    <div className="relative p-4 sm:p-6 bg-white rounded-lg shadow-md max-w-lg w-full mx-auto">
      <button className="w-8 h-8 rounded-full flex items-center justify-center absolute -top-2 -right-2 sm:-top-3 sm:-right-3">
        <MdClose
          className="text-lg sm:text-xl text-slate-400 hover:bg-slate-300 rounded-full"
          onClick={onClose}
        />
      </button>

      <div className="flex flex-col gap-2 mt-2 sm:mt-4">
        <label className="text-sm font-medium">Title</label>
        <input
          type="text"
          className="text-base sm:text-xl text-slate-950 border border-gray-200 outline-none rounded-md sm:rounded-lg p-2 sm:p-3 hover:bg-slate-200 w-full"
          placeholder="Go to Gym at 5"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>

      <div className="flex flex-col gap-2 mt-3 sm:mt-4">
        <label className="text-sm font-medium">Content</label>
        <textarea
          className="text-sm text-slate-950 outline-none border border-gray-200 p-2 sm:p-3 rounded-md sm:rounded-lg hover:bg-slate-200 w-full"
          placeholder="Content"
          rows={4}
          value={content}
          onChange={({ target }) => setContent(target.value)}
        ></textarea>
      </div>

      <div className="mt-3 sm:mt-4">
        <label className="text-sm font-medium">Tags</label>
        <TagInput tags={tags} setTags={setTags} />
      </div>

      {error && <p className="text-xs sm:text-sm text-red-500 mt-2">{error}</p>}

      <button
        className="btn-primary font-medium w-full mt-4 sm:mt-5 p-2 sm:p-3 rounded-md sm:rounded-lg"
        onClick={handleAddNote}
      >
        {type === "edit" ? "UPDATE" : "ADD"}
      </button>
    </div>
  );
};

export default AddEditNotes;
