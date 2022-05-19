import { SearchContext } from "./SearchContext";
import { useContext } from "react";

export const ErrorHandler = () => {
  const contextValue = useContext(SearchContext);
  return (
    <div className="errorMessage">
      {contextValue.errorMessage !== null ? (
        <p>Failed to fetch. Error: {contextValue.errorMessage}</p>
      ) : (
        <></>
      )}
    </div>
  );
};
