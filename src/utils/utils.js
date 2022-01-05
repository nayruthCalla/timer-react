export const fill = (number, width) => {
  const numberOutput = Math.abs(number); /* Valor absoluto del número */
  const { length } = number.toString(); /* Largo del número */
  const cero = "0"; /* String de cero */

  if (width <= length) {
    if (number < 0) {
      return `-${numberOutput.toString()}`;
    }
    return numberOutput.toString();
  }
  if (number < 0) {
    return `-${cero.repeat(width - length)}${numberOutput.toString()}`;
  }
  return cero.repeat(width - length) + numberOutput.toString();
};
