Feature('BlazeDemo Cases');
const contextData = require('../data/dataSet.json'); //with path
//Locators
loc_checkHomePageLoad='.//h1';
loc_welcomeText='Welcome to the Simple Travel Agency!';
loc_fromPort=".//select[@name='fromPort']";
loc_toPort=".//select[@name='toPort']";
loc_Submit=".//input[@type='submit']";
loc_ChooseLastFlight="(.//input[@class='btn btn-small'])[last()]"

Data(contextData["cities"]).Scenario('Flight Search', ({ I,current }) => {
  // console.log(current)
  I.amOnPage('https://blazedemo.com/');
  I.waitForElement(loc_checkHomePageLoad,30)
  I.see(loc_welcomeText);
  I.selectOption(loc_fromPort,current.from)
  I.selectOption(loc_toPort,current.to)
  I.click(loc_Submit)
  I.waitInUrl("reserve.php")
  I.waitForElement(".//*[contains(text(),'Flights from "+current.from+" to "+current.to+"')]")
  I.click(loc_ChooseLastFlight)
  I.waitInUrl("purchase.php")
  I.waitForElement(".//*[contains(text(),'has been reserved') and contains(text(),'Your flight from')]")
  I.fillField('inputName', 'Test_User')
  I.fillField('address', '21, Stamford Bridge Street')
  I.fillField('city', 'London')
  I.fillField('state', 'London')
  I.fillField('zipCode', '777')
  I.selectOption('cardType', 'American Express')
  I.fillField('creditCardNumber', '090322323323222')
  I.fillField('creditCardMonth', '0101')
  I.fillField('creditCardYear', '2022')
  I.fillField('nameOnCard', 'Test User')
  I.click(".//input[@value='Purchase Flight']")
  I.waitInUrl("confirmation.php")
  I.waitForElement(".//*[contains(text(),'Thank you for your purchase today')]")
});