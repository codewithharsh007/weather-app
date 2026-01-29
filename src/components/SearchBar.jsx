import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { BsFillMicFill } from "react-icons/bs";
import { toast } from "react-hot-toast";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");
  const [listening, setListening] = useState(false);

  const handleSearch = () => {
    if (!input.trim()) {
      toast.error("Please enter a city name.");
      return;
    }
    onSearch(input.trim());
    setInput("");
  };

  const handleVoiceInput = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      toast.error("Voice search is only supported on desktop browsers.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      onSearch(transcript);
    };

    recognition.onerror = (event) => {
      setListening(false);
      console.error("Voice recognition error:", event.error);
      toast.error("Voice recognition failed. Try again.");
    };

    recognition.start();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="flex items-center gap-4 bg-white/10 px-5 py-3 lg:px-6 lg:py-4 rounded-2xl backdrop-blur-md w-full max-w-md lg:max-w-3xl mx-auto text-white text-base lg:text-lg shadow-lg">

      <input
        type="text"
        placeholder="Enter city..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
        className="flex-1 bg-transparent placeholder-white/70 outline-none"
      />

      <button
        onClick={handleSearch}
        className="text-white hover:text-blue-300 transition text-xl lg:text-2xl"
        title="Search"
      >
        <FiSearch />
      </button>

      <button
        onClick={handleVoiceInput}
        className={`hidden lg:block transition text-xl lg:text-2xl ${
          listening
            ? "text-red-400 animate-pulse"
            : "text-white hover:text-blue-300"
        }`}
        title="Voice Search"
      >
        <BsFillMicFill />
      </button>
    </div>
  );
};

export default SearchBar;
