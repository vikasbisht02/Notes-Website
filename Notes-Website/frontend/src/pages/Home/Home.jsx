import Navebar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/Cards/NoteCard";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "../../components/AddEditNotes/AddEditNotes";
import Modal from "react-modal";
import { useState, useEffect } from "react";

const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  useEffect(() => {
    Modal.setAppElement("#root"); // Set this to the root element of your app
  }, []);

  return (
    <>
      <Navebar />
      <div className="container w-[90%] ml-20">
        <div className="grid grid-cols-3 gap-4 mt-8">
          <NoteCard
            title={"Meeting"}
            date={"30 July 2024"}
            content={"Meeting on 30 July "}
            tags={"#Meeting"}
            isPinned={false}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>

      <button
        className=" w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10"
        onClick={() => {
          setOpenAddEditModal({ isShown: true, type: "add", data: null });
        }}
      >
        <MdAdd className="text-[32px] text-white" />
      </button>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel=""
        className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll"
      >
        <AddEditNotes
          type={openAddEditModal.type}
          noteData={openAddEditModal.data}
          onClose={() => {
            setOpenAddEditModal({ isShown: false, type: "add", data: null });
          }}
        />
      </Modal>
    </>
  );
};

export default Home;
