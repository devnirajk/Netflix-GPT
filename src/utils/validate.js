export const validateData = (email, password) => {
const validEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
const validPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

if(!validEmailRegex.test(email)) return "Email ID is not valid";
if(!validPasswordRegex.test(password)) return "Password is not valid";

return null;
}