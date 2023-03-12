import React from "react";

const BotChat = ({ message }) => {
  const newText = message.split("\n").map((str) => <p>{str}</p>);
  return (
    <div className="max-w-[60%] rounded-r-xl rounded-tl-xl pt-4 pb-3 mr-auto px-2 bg-[white] text-[#444343]">
      {newText}
    </div>
  );
};

export default BotChat;
