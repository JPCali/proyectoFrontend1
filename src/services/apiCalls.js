const BASE_URL = "http://localhost:4000/api";

export const getAllServices = async () => {
  //   console.log("soy el getAllUsers");
  const config = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(`${BASE_URL}/Services`);

  const data = await response.json();
  return data.data;
};
