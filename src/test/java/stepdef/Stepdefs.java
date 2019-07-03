package stepdef;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class Stepdefs {
	WebDriver driver;
	@Given("user click on signup in home page")
	public void user_click_on_signup_in_home_page() {
		System.setProperty("webdriver.chrome.driver", "C:\\seleniumdriver\\chromedriver_win32\\chromedriver.exe");
	    driver=new ChromeDriver();
	    driver.get("http://10.232.237.143:443/TestMeApp/fetchcat.htm");
	    driver.findElement(By.xpath("//*[@id='header']/div[1]/div/div/div[2]/div/ul/li[2]/a")).click();
	    
	}

	@When("user enters un as {string} and fn as {string} and ln as {string}")
	public void user_enters_un_as_and_fn_as_and_ln_as(String un, String fn, String ln) {
		driver.findElement(By.xpath("//*[@id='userName']")).sendKeys(un);  
		driver.findElement(By.xpath("//*[@id='firstName']")).sendKeys(fn);
		driver.findElement(By.xpath("//*[@id='lastName']")).sendKeys(ln);
	}

	@When("user enters psd as {string} and conpsd as {string}")
	public void user_enters_psd_as_and_conpsd_as(String psd, String conpsd) {
		driver.findElement(By.xpath("//*[@id='password']")).sendKeys(psd);
		driver.findElement(By.xpath("//*[@id='pass_confirmation']")).sendKeys(conpsd);
	  
	}
	
	@When("click on gender and email as {string} and mobno as {string}")
	public void click_on_gender_and_email_as_and_mobno_as(String email, String mobno) {
		Actions actions=new Actions(driver);
		actions.moveToElement(driver.findElement(By.xpath("/html/body/main/div/div/form/fieldset/div/div[6]/div/div/label/span[2]"))).click().perform();
		driver.findElement(By.xpath("//*[@id='emailAddress']")).sendKeys(email);
		driver.findElement(By.xpath("//*[@id='mobileNumber']")).sendKeys(mobno);
	}


	@When("dob as {string} and adr as {string}")
	public void dob_as_and_adr_as(String dob, String addr) {
		driver.findElement(By.xpath("//*[@id='dob']")).sendKeys(dob);
		driver.findElement(By.xpath("//*[@id='address']")).sendKeys(addr); 
	}

	@When("user clicks secqns and ans as {string}")
	public void user_clicks_secqns_and_ans_as(String ans) {
		Select qn=new Select(driver.findElement(By.xpath("//*[@id='securityQuestion']")));
		qn.selectByIndex(1);
		driver.findElement(By.name("answer")).sendKeys(ans);
	    
	}

	@When("Click on Register")
	public void click_on_Register() {
		driver.findElement(By.xpath("/html/body/main/div/div/form/fieldset/div/div[13]/div/input[1]")).click();
	    
	}

	@Then("verify register successfully")
	public void verify_register_successfully() {
		String act=driver.getTitle();
		Assert.assertEquals("Login", act);
		driver.close();
	}
}
