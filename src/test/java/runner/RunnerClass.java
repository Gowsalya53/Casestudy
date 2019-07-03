package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/Features/Register.feature",
                 glue="stepdef",
                 plugin="json:target/cucumber.reports")

public class RunnerClass {

}
