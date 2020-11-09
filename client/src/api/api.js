export const getData = async (link) => {
  try {
    const response = await fetch(link);
    return response.json();
  } catch {
    console.log("Something went wrong with fetching data from server");
  }
};

export const apiCall = async (link, payload, method) => {
  try {
    const response = await fetch(link, {
      method: method,
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    return response.json();
  } catch (err) {
    console.log("Something went wrong");
  }
};
