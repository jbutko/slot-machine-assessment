# Slot machine assessment

I was given an assessment to code a simple slot machine game. As a development framework React was chosen. The app was bootstrapped with [create-react-app](https://create-react-app.dev/) (typescript template).

## Styling

The app is styled using [styled-components](https://styled-components.com/) approach. For UI elements, for example buttons and form elements, I chose [rebass framework](https://rebassjs.org/) which makes use of [styled-system](https://styled-system.com/). I think the combination of styled-components and styled-system is by far the best approach to style the (not only react) apps these days. It tooks me almost no time to make the app responsive thanks to quick [declarative notation](https://github.com/jbutko/slot-machine-assessment/blob/master/src/pages/HomePage.tsx#L12).

## React

The entire app is written with typescript and it's classless - only functional components and hooks were utilized. For [global state](https://github.com/jbutko/slot-machine-assessment/blob/master/src/store/app.store.tsx) I choose combination of `useReducer` and `useContext` hooks.

## Reels logic

Logic for reels is pretty simple - in random mode [it calculates](https://github.com/jbutko/slot-machine-assessment/blob/master/src/utils/reels.utils.ts#L41) random number between 0 a 5 and then it shifts whole array (current reel) by calculated number. For real world usage a much more sophisticated approach for positioning of the symbols would be needed because the winning ratio is pretty high.
Spinning reel animation is created by [CSS animation](https://github.com/jbutko/slot-machine-assessment/blob/master/src/components/Reels/components/Reel/Reel.tsx#L55).

## Notes

Live preview of the app can be seen on github pages: https://jbutko.github.io/slot-machine-assessment.
The new version of the app is deployed automatically by github actions CI [[workflow](https://github.com/jbutko/slot-machine-assessment/blob/master/.github/workflows/github-pages-publish.yaml)]
Code was auto formatted with Prettier.

In total it tooks me about 3MDs to finalize the assessment. Much time was spent on making the calculation of new reels positions and spinning animation to work nicely together.

## Development

To start the app install dependencies at first: `yarn install` and then start the app with following command: `yarn start`
To build the app: `yarn build`

(c) Jozef Butko, April 2021
