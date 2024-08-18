import { Link } from "react-router-dom";

const LandingHome = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#bdc4cb] p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full h-80 flex flex-col justify-between">
        <h1 className="text-2xl md:text-3xl font-medium text-black-600 text-center mb-0">
          Notes App
        </h1>
        <h1 className="text-xl md:text-xl font-medium text-black-600 text-center mt-0 mb-0">
          Write Your Important Things Here
        </h1>
        <div className="flex justify-center flex-col md:flex-row md:space-x-4 space-y-0 md:space-y-0 mt-0">
          <Link to="/login" className="w-full">
            <button className="w-full md:w-full px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-3">
              Login
            </button>
          </Link>
          <Link to="/signup" className="w-full">
            <button className="w-full md:w-full px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Signup
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingHome;
