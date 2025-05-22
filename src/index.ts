import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class names into a single string, merging Tailwind CSS classes intelligently.
 * This utility function uses `clsx` for conditional class names and `tailwind-merge`'s `twMerge` to handle
 * Tailwind CSS class conflicts. The `twMerge` function intelligently resolves conflicts by keeping the last
 * conflicting class and removing any previous ones.
 *
 * @param values - Array of class values that can be strings, objects, or arrays
 * @returns A single string of merged class names
 *
 * @example
 * ```ts
 * cn('px-2 py-1', 'bg-red-500', { 'text-white': true })
 * // => 'px-2 py-1 bg-red-500 text-white'
 * ```
 */

export function cn(...values: ClassValue[]) {
    return twMerge(clsx(...values));
}
