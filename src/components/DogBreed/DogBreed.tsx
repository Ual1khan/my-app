import { Box, CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getBreedImages } from "../../services/dog.service";
import useStyles from "./DogBreed.styles";

interface Props {}

interface Params {
  breed: string;
}

const DogBreed = (props: Props) => {
  const { breed } = useParams<Params>();
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    setLoading(true);

    getBreedImages(breed)
      .then((res) => {
        const { message } = res.data;
        setImages(message);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [breed]);

  const dogImages = images.slice(0, 3);
  
  return(
    <div>
      <h2 className={classes.breed}>{breed}</h2>
      {loading ? (
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      ) : (
        <div className={classes.media}>
          {dogImages.map((image, index) => (
            <div className={classes.imageDiv} key={index}>
              <img className={classes.img} src={image} alt="dog" />
            </div>
          ) 
          )}
        </div>
      )}
    </div>
  )
};

export default DogBreed;
