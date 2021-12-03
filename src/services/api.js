import axios from "axios";

const API_URL = "http://104.131.23.234:3333";

export const participants = () =>
  axios
    .get(`${API_URL}/contacts`)
    .then((response) => response.data)
    .catch((error) => console.log(error));

export const prizes = () =>
  axios
    .get(`${API_URL}/prizes`)
    .then((response) => response.data)
    .catch((error) => console.log(error));

export const sorts = () =>
  axios
    .get(`${API_URL}/sort`)
    .then((response) => response.data)
    .catch((error) => console.log(error));

export const createSorts = () =>
  axios
    .post(`${API_URL}/sort`)
    .then((response) => response.data)
    .catch((error) => console.log(error));

export const createPrize = (data) => {
  const formData = new FormData();

  formData.append("name", data.name);
  formData.append("file", data.file);

  return axios
    .post(`${API_URL}/prizes`, formData)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};
