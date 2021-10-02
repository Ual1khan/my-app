import React, { useState } from "react";
import { Box, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory, useLocation } from "react-router";

interface Props {}

const DogSearch = (props: Props) => {
  const history = useHistory();
  const location = useLocation();

  const [searchText, setSearchText] = useState(location.search.split('=')[1]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    history.push(`/dogs?search=${searchText}`);
  };

  return (
    <Box display="flex" justifyContent="center" mb={4}>
      <form onSubmit={handleFormSubmit}>
        <TextField
          value={searchText}
          onChange={handleInputChange}
          variant="outlined"
          placeholder="Search"
          InputProps={{ endAdornment: <SearchIcon /> }}
        />
      </form>
    </Box>
  );
};

export default DogSearch;
