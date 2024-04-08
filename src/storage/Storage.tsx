import { useOutletContext } from 'react-router-dom';

export const Storage = () => {
	const user = useOutletContext();
	console.log({ user });
	return <div>Hell</div>;
};

