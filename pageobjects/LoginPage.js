class LoginPage{

    constructor(page)
    {
        this.page = page;
        this.signInbutton = page.locator("[value = 'Login']");
        this.userName = page.locator('#userEmail');
        this.password = page.locator('#userPassword');
        
    } 

    async goTo(page)
    {
        await this.page.goto('https://rahulshettyacademy.com/client/');
    }

    async validlogin(username, password)
    {
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.signInbutton.click();
        await this.page.waitForLoadState('networkidle');
    }   


}

//module.exports = {LoginPage};
// This code defines a LoginPage class for automating the login process on a web page using Playwright. 
export default LoginPage;
// It includes methods to navigate to the login page and perform a valid login with provided credentials.