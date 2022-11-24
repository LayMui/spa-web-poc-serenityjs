import { By, PageElement } from '@serenity-js/web'

export const OTPPage = {
  OTPInput: () =>
  PageElement.located(
    By.css('input[data-testid=input]')
  ),

  timerButton: () =>
    PageElement.located(
      By.css('span[data-testid=timer]')
    ),

  resendButton: () =>
  PageElement.located(
    By.css('button[data-testid=button]')
  ),
  
}
