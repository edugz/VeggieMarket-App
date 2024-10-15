import { useState } from "react";

function useSearch() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  return { searchQuery, handleSearchChange };
}

export default useSearch;
