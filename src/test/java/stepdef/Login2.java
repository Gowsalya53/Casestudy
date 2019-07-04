package stepdef;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class Login2 {
	WebDriver driver;
	@Given("Click on signin in homepage")
	public void click_on_signin_in_homepage() {
		System.setProperty("webdriver.chrome.driver", "C:\\seleniumdriver\\chromedriver_win32\\chromedriver.exe");
	    driver=new ChromeDriver();
	    driver.get("http://10.232.237.143:443/TestMeApp/fetchcat.htm");
	    driver.findElement(By.xpath("//*[@id=\"header\"]/div[1]/div/div/div[2]/div/ul/li[1]/a")).click();
	   	}
	@When("user enters un as {string} and psd as{string}")
	public void user_enters_un_as_and_psd_as(String un, String psd) {
		driver.findElement(By.name("userName")).sendKeys(un);
		driver.findElement(By.name("password")).sendKeys(psd);   
	}
	@When("click on login")
	public void click_on_login() {
		driver.findElement(By.xpath("/html/body/main/div/div/div/form/fieldset/div[4]/div/input[1]")).click();   
	}
	@Then("verify Login pass")
	public void verify_Login_pass() {
     String act=driver.getTitle();
     Assert.assertEquals("Home",act);
     driver.close();
	}

}
