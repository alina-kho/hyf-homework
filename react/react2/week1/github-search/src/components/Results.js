import { useContext } from "react";
import { SearchContext } from "./SearchContext";
import { UserProfile } from "./UserProfile";

export const Results = () => {
  const contextValue = useContext(SearchContext);

  //Rendering results according to states
  return (
    <div className="output">
      {contextValue.isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="results">
          <ul>
            {contextValue.results.items &&
            contextValue.results.items.length > 0 ? (
              contextValue.results.items.map((result) => {
                return <UserProfile key={result.id} user={result} />;
              })
            ) : (
              <li className="noUsers">No users found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
