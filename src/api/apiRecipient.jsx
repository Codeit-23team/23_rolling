export const getApiRecipient = async (id) => {
  try {
    const response = await fetch(`https://rolling-api.vercel.app/4-23/recipients/${id}/`);
    const data = await response.json();
    return data;
  } catch {
    throw new Error(error);
  }
};

export const postApiRecipient = async (user, color) => {
  try {
    const response = await fetch(`https://rolling-api.vercel.app/4-23/recipients/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: user,
        backgroundColor: color,
      }),
    });
    const data = await response.json();
    return data;
  } catch {
    throw new Error(error);
  }
};

export const deleteApiRecipient = async (id) => {
  try {
    const response = await fetch(`https://rolling-api.vercel.app/4-23/recipients/${id}/`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  } catch {
    throw new Error(error);
  }
};
