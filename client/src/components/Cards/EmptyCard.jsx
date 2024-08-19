/* eslint-disable react/prop-types */

const EmptyCard = ({ imgSrc, message }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 sm:mt-20 px-4 sm:px-0">
      <img src={imgSrc} alt="No Notes" className="w-48 sm:w-60" />
      <p className="w-full sm:w-1/2 text-sm sm:text-base font-medium text-slate-700 text-center leading-6 sm:leading-7 mt-4 sm:mt-5">
        {message}
      </p>
    </div>
  );
};

export default EmptyCard;
