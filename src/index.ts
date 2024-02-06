import { customAlphabet } from 'nanoid';

export type UID = string;

// Custom alphabet for id generation (without hyphens, underscores, I, l, O, 0)
export const idAlphabet = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';

// Number of characters in the id
export const idLength = 12;

// Regex id
export const idRegex = /^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{12}$/;

// Create uid generator. Collision risk is 1% over 5B uid generated (https://zelark.github.io/nano-id-cc/)
const nanoid = customAlphabet(idAlphabet, idLength);

/**
 * Generate an uid
 * @returns UID
 */
export const generateId = (): UID => nanoid();

/**
 * Check if a string is a valid UID
 * @param uidToValidate string to validate
 * @returns Boolean true if valid
 */
export const isValidId = (uidToValidate: any): boolean => {
    return typeof uidToValidate === 'string' && idRegex.test(uidToValidate);
};
