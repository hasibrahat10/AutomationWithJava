package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import stepDefinitions.BasePage;

public class AddToCartPage extends BasePage {
    public AddToCartPage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//li[@class='sfHoverForce']/a[contains(text(),'Dresses')]")
    WebElement dresses;

    @FindBy(xpath = "//a[contains(text(),'Printed Dress')][1]")
    WebElement printedDress;

    @FindBy(xpath = "//span[contains(text(),'Add to cart')]")
    WebElement addToCartBtn;

    @FindBy(id="layer_cart")
    WebElement layerCart;

    @FindBy(xpath = "//span[contains(text(), 'Proceed to checkout')]")
    WebElement proceedToCheckoutBtn; //

    @FindBy(xpath = "//a/span[contains(text(), 'Proceed to checkout')]")
    WebElement paymentStep1;

    @FindBy(xpath = "//button[contains(text(),'Proceed to checkout')]")
    WebElement paymentStep2;

    @FindBy(id = "cgv")
    WebElement paymentStep3;

    @FindBy(xpath = "//button/span[contains(text(),'Proceed to checkout')]")
    WebElement getPaymentStep4;

    @FindBy(xpath = "//a[@class='bankwire']")
    WebElement paymentMethod;

    @FindBy(xpath = "//span[contains(text(),'I confirm my order')]")
    WebElement confirmOrder;

    @FindBy(xpath = "//h1[contains(text(),'Order confirmation')]")
    WebElement expectedText;

    public void setDresses(){
        dresses.click();
        printedDress.click();
    }

    public void setAddToCartBtn(){
        addToCartBtn.click();
        sleepFor(5);
    }

    public void setCheckOutProcess(){
        driver.switchTo().frame(layerCart);
        proceedToCheckoutBtn.click();
        sleepFor(2);
        paymentStep1.click();
        paymentStep2.click();
        paymentStep3.click();
        getPaymentStep4.click();

    }

    public void setPaymentMethod(){
        paymentMethod.click();
        sleepFor(2);
        confirmOrder.click();
    }

    public String checkExpectedText(String text){
        return expectedText.getText();
    }



}
