package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features= {"src/test/resources"},
				glue="glue",
				tags= {"@Tag1" , "~@Tag3"},
				format= {"html:reports","junit:reports/junit.xml"
						,"json:reports/output.json"}		
)
public class Runner {
	
}
