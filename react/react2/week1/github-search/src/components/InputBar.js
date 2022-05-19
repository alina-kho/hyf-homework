import { useContext } from "react";
import { SearchContext } from "./SearchContext";

export const InputBar = () => {
  const contextValue = useContext(SearchContext);

  const inputHandler = (e) => {
    // console.log("Input handler works");
    // console.log(contextValue.inputValue);
    contextValue.setInputValue(e.target.value);
  };

  return (
    <div className="inputBar">
      <input
        type="text"
        onChange={inputHandler}
        placeholder="Search for user"
      ></input>
    </div>
  );
};
