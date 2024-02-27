export const getApiMessage = async (id) => {
  try {
    const response = await fetch(`https://rolling-api.vercel.app/4-23/recipients/${id}/messages/`);
    const data = await response.json();
    return data;
  } catch {
    throw new Error(error);
  }
};

export const getApiMessageCondition = async (id, limit = 0, offset = 0) => {
  try {
    const response = await fetch(
      `https://rolling-api.vercel.app/4-23/recipients/${id}/messages/?limit=${limit}&offset=${offset}`,
    );
    const data = await response.json();
    return data;
  } catch {
    throw new Error(error);
  }
};
