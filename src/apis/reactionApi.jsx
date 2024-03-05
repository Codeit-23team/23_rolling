export const postApiReaction = async (id, inputEmoji, setType) => {
  try {
    const response = await fetch(
      `https://rolling-api.vercel.app/4-23/recipients/${id}/reactions/`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          emoji: inputEmoji,
          type: setType,
        }),
      },
    );
    const data = await response.json();
    return data;
  } catch {
    throw new Error(error);
  }
};

export const getApiReaction = async (id) => {
  try {
    const response = await fetch(`https://rolling-api.vercel.app/4-23/recipients/${id}/reactions/`);
    const data = await response.json();
    return data;
  } catch {
    throw new Error(error);
  }
};
