const path = (root, subLink) => `${root}${subLink}`;

const ROOTS_SHOP = '/';
const ROOTS_PROFILE = '/profile';
const ROOTS_ADMIN = '/admin';

export const PATH_PROFILE = {
  root: ROOTS_PROFILE,
  login: path(ROOTS_PROFILE, '/login'),
  signin: path(ROOTS_PROFILE, '/signin'),
  cart: path(ROOTS_PROFILE, '/cart'),
};

export const PATH_ADMIN = {
  root: ROOTS_ADMIN,
};

export const PATH_SHOP = {
  root: ROOTS_SHOP,
  device: (deviceId) => `/device/${deviceId}`,
};

