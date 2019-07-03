package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features={"src/test/resources/Features/Register.feature","src/test/resources/Features/Login2.feature","src/test/resources/Features/product.feature","src/test/resources/Features/cart.feature"}
                 glue="stepdef",
                 plugin="json:target/Cucumber reports.json")

public class RunnerClass {

}
