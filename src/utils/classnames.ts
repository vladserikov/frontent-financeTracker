export const bem = (name: string) => ({
	block: name,
	elementGenerator: (element: string) => ({
		element: `${name}__${element}`,
		modifierGenerator: (modifier: string) => `${name}__${element}--${modifier}`,
	}),
});

