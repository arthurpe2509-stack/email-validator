import chalk from "chalk";

function validateEmail(email) {

    if (email== "123456") {
        console.log(`${chalk.green(email)} est valide`);
        
    }else {

    console.log(`${chalk.red(email)} est mal formaté`);

}
}
validateEmail("123456");
validateEmail("true");