# Documentation

Project to adhere to the included [specifications](./ProjectSpec.md).


## Design Notes

This project was bootstrapped from a customized create-react-app bootstrap project.
It has been customized to provide babel presets to use the [emotion style library](https://emotion.sh).
It is bootstrapped to integrate [redux](https://redux.js.org/) and [redux-first-router](https://github.com/faceyspacey/redux-first-router)
out of the gate for quick project bootstrapping. The [RouteSwitch](../src/components/RouteSwitch.tsx) and [RouteComponent](../src/components/RouteComponent.tsx)
React components were previously created by the [author](https://github.com/mattanglin).

The application will consists of the following 3 pages:
- Landing Page
- New Account Page
- Disqualification Page


### Landing Page

Consists of a form prompting user for input relating to requesting a car loan.
Upon successful submission of the form, we are directed to the New Account Page.
On unqualified loan result, we are directed to the disqualification page.


### New Account Page

Consists of a simple form prompting user to create new account with username and password.


### Disqualification Page

Displays an API fetched message signaling disqualification.

