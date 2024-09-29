import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { AiOutlineUser, AiOutlineRobot, AiOutlineSend, AiOutlineClose } from "react-icons/ai";
import Latex from 'react-latex-next'; // LaTeX rendering component

function Chat() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Controls chat pop-up visibility
  const chatContainerRef = useRef(null);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    if (isOpen && chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const generateAnswer = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    setGeneratingAnswer(true);
    const userMessage = { text: question, from: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyB-scXq-SGLrVJChjxbHQb191NZ87FIzek",
        { contents: [{ parts: [{ text: question }] }] }
      );

      const aiMessage = {
        text: response.data.candidates[0].content.parts[0].text,
        from: "ai",
      };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      const errorMessage = { text: "Sorry, something went wrong. Please try again.", from: "ai" };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }

    setGeneratingAnswer(false);
    setQuestion("");
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <div
          className="fixed bottom-5 right-5 bg-blue-500 p-4 rounded-full shadow-lg cursor-pointer hover:bg-blue-600 transition"
          onClick={() => setIsOpen(true)}
        >
          <AiOutlineUser className="text-white text-2xl" />
        </div>
      )}

      {/* Chat Pop-up */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-2xl h-[600px] rounded-lg shadow-lg relative overflow-hidden">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition"
              onClick={() => setIsOpen(false)}
            >
              <AiOutlineClose className="text-2xl" />
            </button>

            <div className="h-full flex flex-col bg-gradient-to-r from-[rgba(4,81,97,0.5)] via-[rgba(4,81,97,0.3)] to-[rgba(4,81,97,0)] p-4">
              <h1 className="text-2xl font-bold text-center mb-2">Vidhyalaya Chat</h1>
              <p className="text-center mb-4">Ask your query about your favorite college!</p>

              {/* Chat Messages */}
              <div
                ref={chatContainerRef}
                className="flex-1 overflow-y-auto border border-gray-200 rounded-lg p-3 shadow-inner"
              >
                {messages.map((message, index) => (
                  <div key={index} className={`flex mb-2 ${message.from === "user" ? "justify-start" : "justify-end"}`}>
                    <div className={`p-3 rounded-lg ${message.from === "user" ? "bg-green-200" : "bg-gray-200"}`}>
                      <div className="flex items-center">
                        {message.from === "user" ? (
                          <AiOutlineUser className="mr-2 text-lg" />
                        ) : (
                          <AiOutlineRobot className="mr-2 text-lg" />
                        )}
                        {/* Render LaTeX-formatted text for AI messages */}
                        <p className="text-sm">
                          {message.from === "ai" ? <Latex>{message.text}</Latex> : message.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {generatingAnswer && (
                  <div className="flex items-center justify-start mb-2">
                    <div className="p-2 rounded-lg bg-gray-200 flex items-center">
                      <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V2.83A9.93 9.93 0 004.17 11H2a10 10 0 0010 10c2.76 0 5.26-1.14 7.07-2.97l-1.42-1.42A7.96 7.96 0 0112 20c-4.42 0-8-3.58-8-8z"></path>
                      </svg>
                      <p className="text-sm">Loading your answer...</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Form */}
              <form onSubmit={generateAnswer} className="flex mt-4 border-t border-gray-200 pt-2">
                <input
                  type="text"
                  className="flex-1 py-2 px-4 border border-gray-300 rounded-l-lg focus:outline-none"
                  placeholder="Ask anything..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
                <button
                  type="submit"
                  className={`py-2 px-4 bg-blue-500 text-white rounded-r-lg flex items-center justify-center ${
                    generatingAnswer || !question.trim() ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
                  }`}
                  disabled={generatingAnswer || !question.trim()}
                >
                  {generatingAnswer ? (
                    <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V2.83A9.93 9.93 0 004.17 11H2a10 10 0 0010 10c2.76 0 5.26-1.14 7.07-2.97l-1.42-1.42A7.96 7.96 0 0112 20c-4.42 0-8-3.58-8-8z"></path>
                    </svg>
                  ) : (
                    <AiOutlineSend className="text-lg" />
                  )}
                  <span>Send</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Chat;
