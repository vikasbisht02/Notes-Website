/* eslint-disable react/prop-types */
import { getInitials } from "../../utils/helper";

const ProfileInfo = ({ userInfo, onLogout }) => {
  return (
    <div className="flex items-center gap-1">
      <div className="w-10 h-10 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-200">
        {userInfo ? getInitials(userInfo.fullName) : getInitials("")}
      </div>
      <div>
        <p className="text-xs sm:text-sm font-medium ">
          {userInfo ? userInfo.fullName : ""}
        </p>
        <button
          className="text-xs sm:text-sm text-slate-700 underline hover:text-black"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
