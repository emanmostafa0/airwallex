export function validateEmail(inputEmail) {
  // checks for format _@_._
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail);
}

export function validateConfirmEmail(inputEmail, confirmEmail) {
  // checks for format _@_._
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail) && (confirmEmail === inputEmail) ;
}
  

export function validateFName(name) {
  // check if name has more than 3 characters
  return name.length >= 3 ;
}
    
export const errorMessages = {
  fName: "please write a valid Name with at least 3 characters.",
  email: `please write a correct email ex.: name@example.com.`,
  confirmEmail: `please write a correct Confirm email .`,
   
};
