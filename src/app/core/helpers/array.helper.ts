export class ArrayHelper {
  /**
   *
   * @param firstArray array that should be filtered
   * @param secondArray array by which the first array is filtered
   * @param propertyName name of the property. Should be used when you have an array of T type
   * and you want to filter by the value of the specific property
   */
  static filterArrayByAnotherArray(
    firstArray: any[],
    secondArray: any[],
    propertyName?: string
  ): any[] {
    return firstArray.filter(data => {
      return propertyName
        ? !secondArray.includes(data[propertyName])
        : !secondArray.includes(data);
    });
  }
}
