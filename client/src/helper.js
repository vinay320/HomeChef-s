import axios from "axios";

export const getFavourites = async (id) => {
  const res = await axios.get(`https://home-chef-s.vercel.app/api/getFavourites/${id}`, {
    withCredentials: true,
  });
  const data = await res.data;
  return data.favourites;
};
