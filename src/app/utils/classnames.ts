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

