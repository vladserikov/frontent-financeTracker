import { z } from 'zod';

import { ErrorSchemaObject } from '../../types';

type FieldsAddTransaction = {
	category?: string[];
	amount?: string[];
	date?: string[];
};

export type ErrorAddTransactionFields = ErrorSchemaObject<FieldsAddTransaction>;

export const addTransactionSchema = z.object({
	amount: z.string().transform((v) => Number(v) || 0),
	category: z.string().min(1, {
		message: 'Please typing category',
	}),
	date: z.coerce.date({
		invalid_type_error: 'Data',
	}),
	transactionType: z.enum(['Expense', 'Income']),
});

