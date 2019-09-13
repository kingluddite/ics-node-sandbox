# Using Node to tap into the power of the Okta API
## Requirements
* You need to download and install [Node](https://nodejs.org/en/)
* You [need git installed](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Recommended
* Install VS Code
  - Besides Vim, best free text editor on the planet
* Install the [VS Code Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - This will make your code look pretty
* On Windows [download Cmder](https://cmder.net/) - This will make your terminal work like it does on Linux and Macs
  - If you can't figure out how to set Cmder up - [this may be an easier solution](https://git-scm.com/book/en/v2/Getting-Started-The-Command-Line) -

## Installation instructions
* Clone this repo
  - **note** The `$` denotes commands entered into the Terminal

`$ git clone https://github.com/kingluddite/ics-node-sandbox.git`

1. Create a `.env` file in the root of this project
2. Copy and paste the below code fragment into `.env`
3. Replace the OKTA_URL value with your own Okta sandbox instance
4. Replace the OKTA_TOKEN value with an API key you create from your Okta org instance (create a service user in your Okta sandbox and give this user SUPER ADMIN access and log in as the service user and generate your API key from this user - Best Practice)

`.env`

```
OKTA_URL=https://dev-12345.oktapreview.com
OKTA_TOKEN=00fLBAlD-Kylo9kdjqxcZ0tOiIGXzVQbO1Qhou812
```

## Resources
* [Okta SDK org](https://github.com/okta/okta-sdk-nodejs)
* [Okta SDK org documentation](https://developer.okta.com/okta-sdk-nodejs/jsdocs/)
* [Okta API](https://developer.okta.com/docs/reference/api/apps/#getting-started)


