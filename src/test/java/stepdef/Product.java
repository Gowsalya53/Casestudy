package stepdef;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class Product {
	WebDriver driver;
	@Given("user click on signin in home page")
	public void user_click_on_signin_in_home_page() {
		System.setProperty("webdriver.chrome.driver", "C:\\seleniumdriver\\chromedriver_win32\\chromedriver.exe");
	    driver=new ChromeDriver();
	    driver.get("http://10.232.237.143:443/TestMeApp/fetchcat.htm");
	    driver.findElement(By.xpath("//*[@id=\"header\"]/div[1]/div/div/div[2]/div/ul/li[1]/a")).click();
	}

	@When("user enters un as {string} and psd as {string} and click on login")
	public void user_enters_un_as_and_psd_as_and_click_on_login(String un, String psd) {
		driver.findElement(By.name("userName")).sendKeys(un);
		driver.findElement(By.name("password")).sendKeys(psd);
		driver.findElement(By.xpath("/html/body/main/div/div/div/form/fieldset/div[4]/div/input[1]")).click();
	}

	@When("user enters search product as {string} and click find details")
	public void user_enters_search_product_as_and_click_find_details(String search) {
		Actions actions=new Actions(driver);
		WebElement fin=driver.findElement(By.id("myInput"));
		fin.sendKeys(search);
		actions.sendKeys(fin,Keys.ARROW_DOWN).sendKeys(Keys.ENTER).build().perform();
		
	   
	}

	@Then("verify the add to cart page")
	public void verify_the_add_to_cart_page() {
	    String act=driver.findElement(By.xpath("/html/body/section/div/div/div[2]/div/div/div/div[1]/center[1]/h4")).getText();
	    Assert.assertEquals("Headphone", act);
	    driver.close();
	}



}//*[@id="myInputautocomplete-list"]/div
//*[@id="myInputautocomplete-list"]/div[1]
//*[@id="myInputautocomplete-list"]/div[1]
//*[@id="myInput"]
