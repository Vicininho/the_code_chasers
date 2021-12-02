import axios from "axios";

export const participants = () =>
  axios
    .get("http://localhost:3312/contacts")
    .then((response) => response.data)
    .catch((error) => console.log(error));

export const prizes = () =>
  axios
    .get("http://localhost:3312/prizes")
    .then((response) => response.data)
    .catch((error) => console.log(error));

export const sorts = () =>
  axios
    .get("http://localhost:3312/sort")
    .then((response) => response.data)
    .catch((error) => console.log(error));

export const createSorts = () =>
  axios
    .post("http://localhost:3312/sort")
    .then((response) => response.data)
    .catch((error) => console.log(error));

export const createPrize = (data) => {
  const formData = new FormData();

  formData.append("name", data.name);
  formData.append("file", data.file);

  return axios
    .post("http://localhost:3312/prizes", formData)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};
