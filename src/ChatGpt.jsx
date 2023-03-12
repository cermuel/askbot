import React, { useEffect, useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import axios from "axios";
import UserChat from "./components/UserChat";
import BotChat from "./components/BotChat";
import { BsSendFill } from "react-icons/bs";
import Loader from "./components/Loader";

const ChatGpt = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState();
  const [isLoading, setisLoading] = useState(false);
  const API_KEY = "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";

  const configuration = new Configuration({
    apiKey: API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const handleMessage = async (event) => {
    setisLoading(true);
    event.preventDefault();

    setChatHistory((chatHistory) => [
      ...chatHistory,
      { user: true, text: userInput },
    ]);

    try {
      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: userInput,
        max_tokens: 150,
      });
      setChatHistory((chatHistory) => [
        ...chatHistory,
        { user: false, text: completion.data.choices[0].text },
      ]);
      setisLoading(false);
      setUserInput("");
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }
  };

  useEffect(() => {
    console.log(chatHistory);
  }, [chatHistory]);

  return (
    <div className="w-screen h-screen bg-[#f2f5f6] p-4 pt-14 relative flex flex-col justify-between gap-4">
      <div className="cursor-pointer fixed w-full top-2 flex justify-center text-[#4545ed] bg-[#f2f5f6] font-bold text-2xl">
        <a href="https://cermuel.vercel.app/" target="_blank">
          Ask me anything!!!
        </a>
      </div>
      <div className="flex flex-col gap-2 w-full px-4">
        {chatHistory.map((chat) => {
          return chat.user ? (
            <UserChat message={chat.text} />
          ) : (
            <BotChat message={chat.text} />
          );
        })}
      </div>
      <div>
        {isLoading && <Loader />}
        <form
          onSubmit={handleMessage}
          className="w-full bg-white py-6 border-t-[1px] border-[#eeeeee] flex px-4 items-center"
        >
          <input
            type="text"
            value={userInput}
            className="bg-[#eeeeee] p-3 w-[90%] max-md:w-[80%] outline-none"
            onChange={(event) => setUserInput(event.target.value)}
          />
          <button
            type="submit"
            className="w-[10%] max-md:w-[20%] flex justify-center"
          >
            <BsSendFill className="text-[#4545ed] text-2xl" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatGpt;
