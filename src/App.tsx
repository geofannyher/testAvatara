import { useState } from "react";
import human from "/human.png";
function App() {
  const [text, setText] = useState("");
  const [history, setHistory] = useState<any>([]);

  const spechProcess = () => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "id-ID";

    synth.speak(utterance);
    setHistory((prevHistory: any) => [...prevHistory, text]);
  };

  return (
    <div>
      <div className="bg-[#FDFDFD] h-screen">
        <div className="flex">
          <div className="w-4/12 py-10 px-4 h-screen bg-[#4ca3ab]">
            <div className="flex flex-col space-y-5">
              <form className="w-full" id="thisForm">
                <textarea
                  className="h-52 p-2 w-full rounded-md"
                  placeholder="input type here"
                  onChange={(e) => setText(e.target.value)}
                />
                <button
                  type="button"
                  onClick={spechProcess}
                  className="w-full rounded-md duration-300 flex justify-center items-center gap-2 transition hover:bg-[#213436] text-white font-semibold h-10 bg-[#44797e]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="12"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="#ffffff"
                      d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
                    />
                  </svg>
                  Speech
                </button>
              </form>
              <h2 className="text-start text-white">History</h2>
              <div className="text-white flex flex-col">
                <div>
                  <ul>
                    {history.map((item: any, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center items-center">
            <img src={human} id="human" alt="img" className="max-h-screen" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
