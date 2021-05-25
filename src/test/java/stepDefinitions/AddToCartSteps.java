package stepDefinitions;

import io.cucumber.java.en.*;
import org.junit.Assert;
import pages.AddToCartPage;
import pages.RegistrationPage;

public class AddToCartSteps extends BasePage {
    @Then("I click on sign in link")
    public void i_click_on_sign_in_link() {

//        RegistrationPage registrationPage = new RegistrationPage();

        new RegistrationPage().setSignInLink();
    }

    @Then("I have entered the users information username as {string} and password as {string}")
    public void i_have_entered_the_users_information_username_as_and_password_as(String email, String pass) {
        new RegistrationPage().userLoginInfo(email, pass);
    }

    @Then("I click on login")
    public void i_click_on_login() {
        new RegistrationPage().setSubmitLogin();

    }

    @When("I navigate to Dresses category and click on Printed Dress Item")
    public void i_navigate_to_Dresses_category_and_click_on_Printed_Dress_Item() {
new AddToCartPage().setDresses();
    }

    @Then("I click on add to cart item")
    public void i_click_on_add_to_cart_item() {
        new AddToCartPage().setAddToCartBtn();

    }

    @Then("I have completed the checkout")
    public void i_have_completed_the_checkout() {
new AddToCartPage().setCheckOutProcess();
    }

    @Then("select payment method and confirm my order")
    public void select_payment_method_and_confirm_my_order() {
        new AddToCartPage().setPaymentMethod();


    }

    @Then("I expect the text {string}")
    public void i_expect_the_text(String expectedText) {
        Assert.assertEquals(expectedText, new AddToCartPage().checkExpectedText(expectedText));
    }


}
