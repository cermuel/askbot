import React from "react";

const UserChat = ({ message }) => {
  return (
    <div className="max-w-[60%] rounded-l-xl rounded-tr-xl pt-4 pb-3 ml-auto px-2 bg-[#4545ed] text-[white]">
      {message}
    </div>
  );
};

export default UserChat;
