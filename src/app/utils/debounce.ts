export function debounce<T extends Function>(cb: T, wait = 20) {
	let h = 0;
	let callable = (...args: any) => {
		clearTimeout(h);
		h = setTimeout(() => cb(...args), wait) as unknown as number;
	};
	return <T>(<any>callable);
}

