import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchJoke } from "./jokeSlice";

function App() {
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const joke = useSelector((state) => state.joke.joke);
  const dispatch = useDispatch();

  const validCategories = [
    "animal", "career", "celebrity", "dev", "explicit", "fashion", "food", 
    "history", "money", "movie", "music", "political", "religion", 
    "science", "sport", "travel"
  ];

  function handleChangeCategory(e) {
    setCategory(e.target.value);
    setError("");
  }

  function handleFetch() {
    if (!validCategories.includes(category)) {
      setError(`Invalid category. Available categories are: ${validCategories.join(", ")}`);
    } else {
      dispatch(fetchJoke(category));
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-green-100 to-purple-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Joke Generator</h1>
      <input
        className="p-3 w-3/4 max-w-md border rounded-lg shadow-lg mb-4 focus:outline-none focus:ring-4 focus:ring-blue-200 bg-white text-gray-800"
        placeholder="Enter category"
        onChange={handleChangeCategory}
      />
      <button
        className={`px-6 py-3 text-lg font-semibold text-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 ${category ? 'bg-blue-400 hover:bg-blue-500' : 'bg-gray-400 cursor-not-allowed'}`}
        onClick={handleFetch}
        disabled={!category}
      >
        Get {category || "Jokes"}
      </button>
      {error && <p className="mt-4 text-red-500 text-center px-4">{error}</p>}
      <h1 className="mt-6 text-xl text-gray-600 text-center px-4 italic">{joke}</h1>
    </div>
  );
}

export default App;