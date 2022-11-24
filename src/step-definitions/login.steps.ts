import 'expect-webdriverio'
import { DataTable, Given, Then, When } from '@cucumber/cucumber'
import { Actor } from '@serenity-js/core'
import { Navigate } from '@serenity-js/web'
import { Login } from '../tasks/Login';

if (!process.env.CIRCLECI) {
  require('dotenv').config()
}

Given(
  '{actor} is at the SPA login',
  async (actor: Actor) =>
    await actor.attemptsTo(
      Navigate.to(process.env.BASE_URL),
      Login.toSPA())
)

When(
  '{pronoun} select a country code and a valid mobile number',
  async (actor: Actor, table: DataTable) => {
  const mobileNumber = table.hashes()[0].mobileNumber;
  const countryFlagName = table.hashes()[0].countryFlagName;
    await actor.attemptsTo(
    
    
      )
    })

Then('{pronoun} is able to perform OTP',
  async (actor: Actor) => {
  await actor.attemptsTo(
  )
  })
