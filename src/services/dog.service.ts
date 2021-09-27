import axios from "axios";

export const getAllBreeds = () => {
  return axios.get("https://dog.ceo/api/breeds/list/all");
};

export const getBreedImages = (breed: string) => {
  return axios.get(`https://dog.ceo/api/breed/${breed}/images`)
};
