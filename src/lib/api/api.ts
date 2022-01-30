import axios from 'axios';
import TokenService from './TokenService';

const base = 'http://localhost:8080/v1';

async function refreshAccessToken() {
  const token = TokenService.getLocalRefreshToken();

  if (!token) {
    return Promise.reject(new Error('no local refresh token'));
  }

  try {
    const rs = await axios.get(`${base}/auth/refresh_token`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const save = TokenService.isSaved();
    TokenService.setLocalAccessToken(rs.data.access_token, save);

    return true;
  } catch (_error) {
    return Promise.reject(_error);
  }
}

async function send({ method, path, data }) {
	const opts: any = { method, headers: {} };

	if (data) {
		opts.headers['Content-Type'] = 'application/json';
		opts.body = JSON.stringify(data);
	}


  if (path === '/auth/logout') { // only path that uses refresh token
    const token = TokenService.getLocalRefreshToken();
    if (token) {
      opts.headers['Authorization'] = `Bearer ${token}`;
    }
  } else {
    const token = TokenService.getLocalAccessToken();
    if (token) {
      opts.headers['Authorization'] = `Bearer ${token}`;
    }
  }

	return fetch(`${base}${path}`, opts)
		.then((r) => r.text())
		.then((json) => {
			try {
				return JSON.parse(json);
			} catch (err) {
				return json;
			}
		});
}

export async function sendWithRefresh({ method, path, data }) {
	const response = await send({ method, path, data });

  if (response.status === 401) {
    const refresh = await refreshAccessToken();

    if (refresh) { // try again if refresh
      return await send({ method, path, data });
    }
  }
}

export function get(path) {
	return sendWithRefresh({ method: 'GET', path, data: null });
}

export function del(path) {
	return send({ method: 'DELETE', path, data: null });
}

export function post(path, data) {
	return send({ method: 'POST', path, data });
}

export function put(path, data) {
	return send({ method: 'PUT', path, data });
}
