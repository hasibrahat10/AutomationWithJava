package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import stepDefinitions.BasePage;

public class RegistrationPage extends BasePage {

    // ===================  To Find the Elements for the Registration Page ===========================
    @FindBy(xpath = "//a[contains(text(),'Sign in')]")
    WebElement signInLink;

    @FindBy(id = "email_create")
    WebElement emailID;

    @FindBy(id = "SubmitCreate")
    WebElement submitCreate;

    //Find Element for Address Screen

    @FindBy(id = "id_gender1")
    WebElement title;

    @FindBy(id = "customer_firstname")
    WebElement firstName;

    @FindBy(id = "customer_lastname")
    WebElement lastName;

    @FindBy(id = "passwd")
    WebElement password;

    @FindBy(id = "days")
    WebElement day;

    @FindBy(id = "months")
    WebElement month;

    @FindBy(id = "years")
    WebElement year;

    @FindBy(id = "newsletter")
    WebElement newsLetter;

    @FindBy(id = "optin")
    WebElement offerPromo;

    @FindBy(id = "firstname")
    WebElement addressFirstName;

    @FindBy(id = "lastname")
    WebElement addressLastName;

    @FindBy(id = "company")
    WebElement companyName;

    @FindBy(id = "address1")
    WebElement addressOne;

    @FindBy(id = "address2")
    WebElement addressTwo;

    @FindBy(id = "city")
    WebElement city;

    @FindBy(id = "id_state")
    WebElement state;

    @FindBy(id = "postcode")
    WebElement postCode;

    @FindBy(id = "other")
    WebElement other;

    @FindBy(id = "phone")
    WebElement phone;

    @FindBy(id = "phone_mobile")
    WebElement mobilePhone;

    @FindBy(id = "alias")
    WebElement aliasAddress;

    @FindBy(id = "submitAccount")
    WebElement submitAccount;

    @FindBy(xpath = "//p[contains(text(),'Welcome to your account. Here you can manage all o')]")
    WebElement expectedText;


    //=====================  constructor define ===============================
    public RegistrationPage() {
        PageFactory.initElements(driver, this);
    }

    //========================= Custom Method declare for the steps =======================

    public void setSignInLink() {
        signInLink.click();
    }

    public void setEmailID() {
        emailID.clear();
        emailID.sendKeys("hasib99@yopmail.com");
        submitCreate.click();
    }

    public void userInformation() {
        title.click();
        firstName.clear();
        firstName.sendKeys("Hasib");
        lastName.sendKeys("Hasan");
        password.sendKeys("1234567");
        day.sendKeys("4");
        month.sendKeys("April");
        year.sendKeys("2007");

        newsLetter.click();
        offerPromo.click();
        addressFirstName.sendKeys("Hasib");
        addressLastName.sendKeys("Rahat");
        companyName.sendKeys("Demo");
        addressOne.sendKeys("123");
        addressTwo.sendKeys("dhaka");
        city.sendKeys("Dhaka");
        Select stateInput = new Select(state);
        stateInput.selectByVisibleText("Florida");
        postCode.sendKeys("23456");
        other.sendKeys("Demo Test");
        phone.sendKeys("23456789");
        mobilePhone.sendKeys("12345667998");
        aliasAddress.sendKeys("address alias Rahat");
        sleepFor(3);
        submitAccount.click();
    }

    public String checkTextDisplay() {
        return expectedText.getText();
    }


}
