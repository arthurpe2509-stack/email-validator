import chalk from "chalk";
import validator from "validator";
function validateEmail(email) {

    if (validator.isEmail(email)) {
        console.log(`${chalk.green(email)} est valide`);
        
    }else {

    console.log(`${chalk.red(email)} est mal formaté`);

}
}
validateEmail("1234@mail.com");
validateEmail("true");