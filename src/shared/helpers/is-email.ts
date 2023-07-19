export default function isEmail(val:string) {
  let regEmail = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
  return regEmail.test(val);

}