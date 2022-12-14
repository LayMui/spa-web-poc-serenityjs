import { Duration, Task } from '@serenity-js/core'
import { Click, Enter, isVisible, Wait } from '@serenity-js/web'
import { LoginPage } from '../page-objects/LoginPage'

export const Login = {
  toSPA: () =>
    Task.where(
      `#actor login`,
      Wait.upTo(Duration.ofMilliseconds(5000000)).until(
        LoginPage.login(),
        isVisible()
      ),
      Click.on(LoginPage.login()),
    ),
}
