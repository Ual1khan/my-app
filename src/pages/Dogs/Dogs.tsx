import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";

import { getAllBreeds } from "../../services/dog.service";
import useStyles from "./Dogs.styles";
import DogSearch from "../../components/DogSearch/DogSearch";
import qs from "qs";

interface Props {}

const Dogs = (props: Props) => {
  const classes = useStyles();
  const location = useLocation();

  const [breeds, setBreeds] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState<string>("");


  useEffect(() => {
    setLoading(true);

    getAllBreeds()
      .then((res) => {
        const { message } = res.data;
        setBreeds(Object.keys(message));
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const searchParams = qs.parse(location.search.substr(1));
    if (searchParams.search) {
      setSearchText(searchParams.search as string);
    } else {
      setSearchText("");
    }
  }, [location.search]);

  
  return (
    <div>
      <DogSearch />
      {loading ? (
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      ) : (
        <div className={classes.list}>
          {breeds
            .filter((breed) => breed.match(new RegExp(searchText, "gi")))
            .map((breed) => (
            <Link key={breed} to={`/dogs/${breed}`} className={classes.link}>
              {breed}
            </Link>
            ))
          }
        </div>
      )}
    </div>
  );
};

export default Dogs;
