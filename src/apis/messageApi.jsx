//message 정보 불러오기 - get
export const getApiMessage = async (id) => {
  try {
    const response = await fetch(`https://rolling-api.vercel.app/4-23/recipients/${id}/messages/`);
    const data = await response.json();
    return data;
  } catch {
    throw new Error(error);
  }
};

//message 정보 불러오기 - limit offset [좀더 좋은 방법이 있을것이라고 생각,,]
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

export const deleteApiMessage = async (id) => {
  try {
    const response = await fetch(`https://rolling-api.vercel.app/4-23/messages/${id}/`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  } catch {
    throw new Error(error);
  }
};
