import "./App.css";
import { InputBar } from "./components/InputBar";
import { Results } from "./components/Results";
import { useState, useEffect } from "react";
import { SearchContextProvider } from "./components/SearchContext";
import { ErrorHandler } from "./components/ErrorHandler";

function App() {
  //Defining initial states
  const [results, setResults] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setLoading] = useState(true);

  //Fetching data - rerender when inputValue changes
  useEffect(() => {
    setLoading(true);
    getGithubUsers(inputValue)
      .then((json) => {
        setErrorMessage(null);
        setLoading(false);
        // console.log(json);
        setResults(json);
      })
      .catch((error) => {
        // console.log(error);
        setLoading(false);
        setErrorMessage(error.message);
      });
  }, [inputValue]);

  const contextValues = {
    results,
    setResults,
    inputValue,
    setInputValue,
    isLoading,
    errorMessage,
  };
  return (
    <SearchContextProvider value={contextValues}>
      <h1>Github user search</h1>
      <InputBar />
      <ErrorHandler />
      <Results />
    </SearchContextProvider>
  );
}

async function getGithubUsers(input) {
  const response = await fetch(
    `https://api.github.com/search/users?q=${input}`
  );
  if (!response.ok) {
    throw new Error(response.status);
  } else {
    const json = await response.json();
    console.log(json);
    return json;
  }
}

export default App;
