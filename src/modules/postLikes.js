import CAPSTONE_API_URL from './url.js';

const postLikes = async (id) => {
  try {
    await fetch(CAPSTONE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id.toString(),
      }),
    });
  } catch (error) {
    throw new Error('Failed to post Likes data');
  }
};

export default postLikes;
