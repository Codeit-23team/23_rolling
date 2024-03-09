export const getApiRecipientList = async () => {
  try {
    const response = await fetch(`https://rolling-api.vercel.app/4-23/recipients/`);
    const data = await response.json();
    return data;
  } catch {
    throw new Error(error);
  }
};

export const getApiRecipient = async (id) => {
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

export const messageApiRecipient = async (user, imageUrl, relation, content, font, id) => {
  try {
    const response = await fetch(`https://rolling-api.vercel.app/4-23/recipients/${id}/messages/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        team: '4-23',
        recipientId: Number(id),
        sender: user,
        profileImageURL: imageUrl,
        relationship: relation,
        content: content,
        font: font,
      }),
    });
    const data = await response.json();
    return data;
  } catch {
    throw new Error(error);
  }
};
