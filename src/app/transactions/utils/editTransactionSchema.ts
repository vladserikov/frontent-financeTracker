import { z } from 'zod';

import { ErrorSchemaObject } from '../../types';

type FieldsEditTransaction = {
	category?: string[];
	amount?: string[];
};

export type ErrorEditTransactionFields =
	ErrorSchemaObject<FieldsEditTransaction>;

export const editTransactionSchema = z.object({
	amount: z.string().transform((v) => Number(v) || 0),
	category: z.string().min(1, {
		message: 'Please typing category',
	}),
});

