// const parse = (birthday: string): Date => {
//   let data = new Date(birthday);
//   if (isVaild(birthday)) {
//     return null;
//   }
//   return data;
// }

const parse = (birthday: string): Date => {
  let data = new Date(birthday);
  if (isVaild(birthday)) {
    throw new RangeError('Enter a data in the form YYYY/MM/DD');
  }
  return data;
}