package stepDefinitions;

import io.cucumber.java.en.Then;
import org.junit.Assert;
import pages.RegistrationPage;

public class RegistrationSteps extends BasePage {

    @Then("I click on sing in link")
    public void i_click_on_sing_in_link() {
        new RegistrationPage().setSignInLink();
    }

    @Then("I have entered an email address as {string} and click on create an account")
    public void iHaveEnteredAnEmailAddressAsAndClickOnCreateAnAccount(String email) {
        new RegistrationPage().setEmailID(email);
    }

    @Then("I have entered the users information and click register")
    public void i_have_entered_the_users_information_and_click_register() {
        new RegistrationPage().userInformation();

    }

    @Then("I am on the My Account screen {string}")
    public void i_am_on_the_My_Account_screen(String expectedText) {
       sleepFor(3);
       Assert.assertEquals(expectedText, new RegistrationPage().checkTextDisplay());
    }


}
