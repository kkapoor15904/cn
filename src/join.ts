import clsx, { ClassValue } from 'clsx';
import { twJoin } from 'tailwind-merge';

/**
 * Combines multiple class names into a single string, merging Tailwind CSS classes intelligently.
 * This utility function uses `clsx` for conditional class names and `tailwind-merge`'s `twJoin` to handle
 * Tailwind CSS class conflicts. Unlike `twMerge`, `twJoin` preserves the order of classes and doesn't
 * attempt to merge conflicting classes.
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
    return twJoin(clsx(...values));
}
