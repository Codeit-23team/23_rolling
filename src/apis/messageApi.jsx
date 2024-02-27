export const getApiMessage = async (id) => {
  try {
    const response = await fetch(`https://rolling-api.vercel.app/4-23/recipients/${id}/messages/`);
    const data = await response.json();
    return data;
  } catch {
    throw new Error(error);
  }
};