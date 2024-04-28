const walletNameAtUser = 'localUser';

export function setCookies(name: string, value: string) {
	const d = new Date();
	d.setTime(d.getTime() + 7 * 24 * 60 * 60 * 1000);
	const expires = `expires=${d.toUTCString()}`;

	document.cookie = `${name}=${value};${expires}`;
}

export function getCookie(cname = walletNameAtUser) {
	let name = cname + '=';
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return '';
}

export function removeCookie(cname: string) {
	document.cookie = `${cname}=; expires=${new Date().toUTCString()}`;
}

export function removeUserCookie() {
	document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
	document.cookie = `name=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
	document.cookie = `username=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
}

