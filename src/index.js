const puppeteer = require('puppeteer');

const URL = "https://forms.microsoft.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR7wilYdZ6AxGj-lBptvyYqNUMVJJTDkyUktEVjMyRzhTT05VSzg2SVkxWiQlQCN0PWcu";

(async () => {
    const submitButtonSelector = '.office-form-theme-primary-background.office-form-theme-button.office-form-bottom-button.button-control.light-background-button.__submit-button__'
    const textareaFieldSelector = '.office-form-question-textbox.office-form-textfield-input.form-control.office-form-theme-focus-border.border-no-radius';

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(URL);

    await page.click('input[value="Team Tribore"]');

    // uncomment if you need to add a message
    // await page.type(textareaFieldSelector, '', {delay: 1000});
    // await page.screenshot({path: 'screenshot/' + Date.now() + '.png'});
    
    await page.click(submitButtonSelector);

    await page.waitFor(5000);
    await page.screenshot({path: 'screenshot/' + Date.now() + '.png'});

    await browser.close();
})();