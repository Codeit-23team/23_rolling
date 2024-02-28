export const getApiRecipientList = async () => {
  try {
    const response = await fetch(`https://rolling-api.vercel.app/4-23/recipients/`);
    const data = await response.json();
    return data;
  } catch {
    throw new Error(error);
  }
};

export const getApiRecipientId = async (id) => {
  try {
    const response = await fetch(`https://rolling-api.vercel.app/4-23/recipients/${id}/`);
    const data = await response.json();
    return data;
  } catch {
    throw new Error(error);
  }
};

export const postApiRecipient = async (user, color, imageUrl) => {
  try {
    const response = await fetch(`https://rolling-api.vercel.app/4-23/recipients/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: user,
        backgroundColor: color,
        backgroundImageURL: imageUrl,
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

export const profileImageRecipient = async () => {
  try {
    const response = await fetch(`https://rolling-api.vercel.app/profile-images/`);
    const data = await response.json();
    return data;
  } catch {
    throw new Error(error);
  }
};

export const postApiRecipientMessage = async (id, message내용) => {
  try {
    const response = await fetch(`https://rolling-api.vercel.app/4-23/recipients/${id}/message`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: user,
        backgroundColor: color,
        backgroundImageURL: imageUrl,
      }),
    });
    const data = await response.json();
    return data;
  } catch {
    throw new Error(error);
  }
};
