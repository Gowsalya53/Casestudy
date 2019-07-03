package stepdef;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class cart {
	WebDriver driver;
   int act;

@Given("user login into testme app")
public void user_login_into_testme_app() {
	System.setProperty("webdriver.chrome.driver", "C:\\seleniumdriver\\chromedriver_win32\\chromedriver.exe");
    driver=new ChromeDriver();
    driver.get("http://10.232.237.143:443/TestMeApp/fetchcat.htm");
    driver.findElement(By.xpath("//*[@id=\"header\"]/div[1]/div/div/div[2]/div/ul/li[1]/a")).click();
    driver.findElement(By.name("userName")).sendKeys("Poornima");
	driver.findElement(By.name("password")).sendKeys("poorni123");
	driver.findElement(By.xpath("/html/body/main/div/div/div/form/fieldset/div[4]/div/input[1]")).click();
}

@When("user searches for the product")
public void user_searches_for_the_product() {
	Actions actions=new Actions(driver);
	WebElement fin=driver.findElement(By.id("myInput"));
	fin.sendKeys("Head");
	actions.sendKeys(fin,Keys.ARROW_DOWN).sendKeys(Keys.ENTER).build().perform();
	
}

@When("try to proceed pay without adding to cart")
public void try_to_proceed_pay_without_adding_to_cart() {
act =driver.findElements(By.partialLinkText("Cart")).size();

}

@Then("TestMe does not display cart item")
public void testme_does_not_display_cart_item() {
    if(act>0)
    {
    	Assert.assertTrue(false);	
    }
    else
    	Assert.assertTrue(true);
    driver.close();
}

}
