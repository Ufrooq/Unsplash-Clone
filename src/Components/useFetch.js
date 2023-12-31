const ACCESS_KEY = "1eiadmZTnGjnZ2vVO4kisCw9kwCRC8Ck8DzHEf0ERoY";
export const useFetch = () => {
  const fetchData = async (query, color, orient) => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
          query
        )}&per_page=50${color}${orient}`,
        {
          headers: {
            Authorization: `Client-ID ${ACCESS_KEY}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Error has occured!!");
      } else {
        const jsonData = await response.json();
        return jsonData.results;
      }
    } catch (error) {
      console.log(`Error : ${error}`);
    }
  };

  return { fetchData };
};
