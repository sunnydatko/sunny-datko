import axios from "axios";

export const fetchCatFact = async () => {
  try {
    const response = await axios.get(
      "https://catfact.ninja/fact?max_length=140"
    );
    return response.data.fact;
  } catch (error) {
    console.error("Error fetching cat fact:", error);
    return "Could not fetch a cat fact at this time.";
  }
};

export const fetchJoke = async () => {
  try {
    const response = await axios.get("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    });
    return response.data.joke;
  } catch (error) {
    console.error("Error fetching joke:", error);
    return "Could not fetch a joke at this time.";
  }
};
