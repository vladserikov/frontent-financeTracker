import { createContext } from 'react';

import { User } from '../app/types';

type Context = {
	user: User | null;
	updateUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const defaultContext = {
	user: null,
	updateUser: () => {},
};

export const UserContext = createContext<Context>(defaultContext);

