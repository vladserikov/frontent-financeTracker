// export const bem = (name: string) => ({
// 	block: name,
// 	elementGenerator: (element: string) => ({
// 		element: `${name}__${element}`,
// 		modifierGenerator: (modifier: string) => `${name}__${element}--${modifier}`,
// 	}),
// });

export const bem = (name: string) =>
	[
		name,
		(element: string) =>
			[
				`${name}__${element}`,
				(modification: string) => `${name}__${element}--${modification}`,
			] as const,
		(modification: string) => `${name}--${modification}`,
	] as const;

