/**
 *
 */
export class StringHelper {
  /**
   *
   * @param firstValue value which is checked for equality
   * @param secondValue value to which the first parameter is compared to; 'true' by default
   * @returns true if the first value is equal to the second one; false otherwise
   */
  static toBool = (firstValue: string, secondValue = 'true') =>
    firstValue === secondValue;
}

/**
 * Pads the passed string with another string till `targetLength`
 * @param value value to be padded
 * @param targetLength length of the string once padded
 * @param padString string to pad the current `value` with
 * @returns padded string
 */
export function padStart(
  value: any,
  targetLength: number = 2,
  padString: string = '0'
): string {
  return value.toString().padStart(targetLength, padString);
}
