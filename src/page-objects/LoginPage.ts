import { By, PageElement } from '@serenity-js/web'

export const LoginPage = {
  login: () =>
    PageElement.located(By.id('qsLoginBtn')),

  countryCodeDropDown: () =>
    PageElement.located(
      By.css('div[data-testid=input_button]')
    ),

  mobileNumberField: () =>
    PageElement.located(
      By.css('input[data-testid=input]')
    ),

  ContinueButton: () =>
   PageElement.located(
      By.css('button[data-testid=button]')
    ),
}
