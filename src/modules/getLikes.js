import CAPSTONE_API_URL from './url.js';

const getLikes = async () => {
  const response = await fetch(CAPSTONE_API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch Likes data');
  }
  const res = await response.json();
  return res;
};

const getLikesAfterPost = async () => {
  const response = await fetch(CAPSTONE_API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch Likes data');
  }
  const res = await response.json();
  return res;
};

export { getLikes, getLikesAfterPost };
