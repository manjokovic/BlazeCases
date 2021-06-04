const { I } = inject();
// Add in your custom step files


Given('I am in the blazedemo landeing page', () => {
  // From "features\basic.feature" {"line":5,"column":5}
  I.amOnPage("https://blazedemo.com/")
  pause()
});
