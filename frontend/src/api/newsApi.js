import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_URL;

export const getNews = async () => {
  const response =
    await axios.get(
      `${API_URL}/api/news`
    );

  return response.data;
};

export const getBreakingNews =
  async () => {

    const response =
      await axios.get(
        `${API_URL}/api/news/breaking`
      );

    return response.data;
  };