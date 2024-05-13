import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../hooks/userContext';
import FormElement from '../ui/form/FormElement';
import FormWrapper from '../ui/form/FormWrapper';
import InputForm from '../ui/form/InputForm';
import AppContentLayer from '../ui/layers/AppContentLayer';
import { bem } from '../utils/classnames';

const [profileLayer] = bem('profile-layer');

const Profile = () => {
	const { user } = useContext(UserContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!user) {
			navigate('/auth/login');
		}
	}, [navigate, user]);

	if (!user) {
		return null;
	}

	const { name, username } = user;

	return (
		<AppContentLayer layerClass={profileLayer}>
			<FormWrapper>
				<FormElement name={name} onSubmitAction={() => {}}>
					<InputForm value={name} disabled />
					<InputForm value={username} disabled />
				</FormElement>
			</FormWrapper>
		</AppContentLayer>
	);
};

export default Profile;

