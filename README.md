# RPSLS

RPSLS (Rock Paper Scissors Lizard Spock) is an adapatation of the classic game of chance, Rock paper scissors or Ro Sham Bo. The purpose of this page is to allow the user to play a computer opponant that selects a random outcome to play with. The design of the page allows the user to easily understand what is required and how to interact with the program.

![RPSLS Main Page](https://user-images.githubusercontent.com/7358665/162696898-64934f9f-b565-4132-9df7-4b0a1d872570.png)

## Design And Planning

### Wireframes

- __Original Design__

  - The original design and assets for the site were created by [Frontendmentor](https://www.frontendmentor.io/home) for their rock paper scissors challange.
  - Whilst I used the style guide provded, I made choices that deviated from the recommendations as I worked through the project. See the style.md file to reference what was provided.
  - I decided to work from a desktop first approach as that is what I have been used to since starting my studies with CODEINSTITUTE.

- __Color Choices__

  - The chosen colors for the site were chosen to emphasize the options and make them easily distinguisable for comparisons in the win/lose/draw section of the game. 
  - The colors were checked initially to make sure their contrast would be adequate in terms of readability using https://webaim.org/resources/contrastchecker/

## Features 

### Existing Features

- __Title Bar And Scoreboard__
 
  - This section allows the user to easily see the title of the game and visualise their current score tally.
  - The title and scoeboard are static in position and always the usuer to easily understand and follow the flow of the game.

<img width="774" alt="Titlebar and scorecard" src="https://user-images.githubusercontent.com/7358665/162699279-a0520adb-39d8-4f96-a382-5289107a10ab.png">

- __Main Game Area And User Selections__

  - The main game area has all possible player choices laid out in an easy to view area.
  - Input areas are greatly implied by the use of animation and transitions of any clickable area in the games main area.

- __Outcome Screen__

  - Once the user makes a selections the game shows a clearly laid out outcome showing the opponants choice, the players choice and text to clarify what the result of the choices was. These are either the user wins, the opponant wins or the game is a tie.


![Lost](https://user-images.githubusercontent.com/7358665/162700048-1ad1adea-b57f-4157-91bb-9a3575a5d32a.png)

![Won](https://user-images.githubusercontent.com/7358665/162700199-f3d33bd3-882f-4194-9f83-d54d0004550d.png)

![Game Tied](https://user-images.githubusercontent.com/7358665/162700248-21cbd8a0-06e2-471a-b6fa-d3f58deac57b.png)

- __The Scoreboard__ 

  - The scoreboard allows the user to see a visual representation of how many succesful games they have played in this visit to the game. 
  
  <img width="174" alt="Scorecard" src="https://user-images.githubusercontent.com/7358665/162700926-fee4aba6-37f8-438d-a933-13ae3e897462.png">

- __The Play Again Button__ 

  - The reset button allows the user adequate time to recieve the result of the most recent game cycle. If the player requires more time then they can stay on the results screen as long as they require. If they want to replay more quickly then they have that option to do so by clicking reset when they are ready to do so.

<img width="174" alt="Play Again" src="https://user-images.githubusercontent.com/7358665/162701677-b621b0a4-3541-456a-ac2a-db53a0de3ed2.png">

### Required Features Left to Implement

N.B - I had worked on and completed this project to what I considered a satisfactory standard several weeks prior to submission. Whilst removing some old practice repos that were no longer required from my GitHub profile I must have also removed my project repo in error. When I came back to the project to review before submission, I therefore had no work and had to start over. Due to this I have had just under 36 hours to try to replicate my previous efforts and as such did not have adequate time to get through all the processes. I have decided to submit with these features missing (some of which are requirements and not extra features) and will outline where my project was to progress to if time had allowed.

- __Responsivness__

  - I tackled this project from a desktop first approach. 
  - Due to time lost I have not implimented responsivness yet for smaller viewport sizes and as such the game and UI breaks at smaller scales

<img width="918" alt="Medium UI Break" src="https://user-images.githubusercontent.com/7358665/162703119-481ee23f-37fb-4c7c-a868-226e2b5bd62d.png">
<img width="463" alt="Small Ui Break" src="https://user-images.githubusercontent.com/7358665/162712607-ae7c4dd1-a98e-4eb5-a711-089119f660e7.png">

  - Positioning issues also arose with the player choice buttons and as such would need to be addressed before I considered the project completed.

### None Required Features to Implement in the Future

- __Rules Page__

  - A feature that could be implimented is a user accesible image or overlay, possibly toggled by a button or swith, which shows all the possible outcomes available to the player. As this is an extended version of the relativly simple original game with 5 choices instead of 3, there are 25 possible interactions instead of 9. 
  - This would aid the player and lead to a more positive user expierience as they may not be able to memorise all possible interactions and there fore having them availble if required would be a useful tool.
  - This could be easily implimented as an overlay which can be toggled by button or swith at the users discretion. This approach would aid in implimentation of this feauture on smaller sceens where having a seperate area for the history would tpotentially take too much space on the viewport. 

- __Saving Scores When Leaving Page__

  - A feature that could be implimented is a local save, potentially using cookies, to save the player score if the user navigates away from the game and returns at a later point. 
  - This feauture would benefit from addition of a reset score button and functionality which would likely be added to the title and scoreboard area.

- __Sound__

  - The addition of sound effects when users interactions occur and upon win/lose/draw conditions would emphasize the fun nature of the gameplay.
  - This could easily be implimented in line with the onclick event listeners and functions within the javascript files.
  - care would need to be taken to ensure the sound files are lightweight enough to not negativly impact load times, the flow of the game, or user expierience.
  - This feauture would benefit from a mute toggle button/swith. Care would have to be taken to ensure that on page load any and all sounds are muted until the user decides to impliment them in the gameplay. 

- __Previous Game Outcome History__

  - Adding a visual representation of the previous game cycles outcomes could add an additional level of strategic gameplay elements for the user. Even though the computer opponant picks outcomes randomly, the player may engage with the extra layer of strategy brought by being able to review past choices, wins, loses and draws.
  - This could be easily implimented as an overlay which can be toggled by button or swith at the users discretion. This approach would aid in implimentation of this feauture on smaller sceens where having a seperate area for the history would tpotentially take too much space on the viewport. 

## Testing 

To begin testing the site I checked all user interactions worked as expected in Chrome, Firefox and Safari. This included checking every outcome for every user choice. As far as was observable there were no errors in any browser in terms of user interaction elements or code implimentation with the javascript. This was only tested at desktop viewport sizes as responsivness for smaller viewports had not yet been implimented as explained above.

### Validator Testing 

I have not yet ran the project through any validators as my time ran out and the project was not in a stage where validation would have been apprpriatly useful.
Once at an appropriate level of completion, I would have conducted lighthouse, HTML, CSS, Javascript, accessibility and color contrast checks to make sure my project was in line with industry standard expectations.
I would use any feedback from the checks to make suitable updates to my project as and where they were required.

### Unfixed Bugs

There are no bugs present that i am aware of with the project in it's current state.
The only bug that I found, where the score was being incremented on a succesful game but not stored, has been addressed in a commit already.

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch (may show as Main Branch)
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://sjcooper.github.io/lets-go-walkies/index.html 

<img width="1237" alt="deploy" src="https://user-images.githubusercontent.com/7358665/155917884-0bc8b480-f935-4051-afee-9b147a7cc192.png">

## Credits 

### Content 

- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)
- All maps were direct links from [Google maps](https://www.google.com/maps/@53.7750116,-2.7105935,15z)
- This README was created using a template provided for the Love Running project from [Code Institute](https://codeinstitute.net/)
- The fonts used by the site are from [Google Fonts](https://fonts.google.com/)
- Favicon icons and files were taken from [Favicon.io](https://favicon.io/)
- Color swatch image was taken from [coolors.co](https://coolors.co/)
- Photo compression was done using [compresspng](https://compresspng.com/)

### Code

- CSS Flex Grid design and implimentation was taken from [Codepen](https://codepen.io/), specifically Tania Rascias [Easist Flex Grid Ever](https://codepen.io/taniarascia/pen/rOLEGe/) which was shown to me by my mentor Malia Havlicek.
- Code feedback was given by Malia Havlicek as part of my Mentor sessions. 
- Other code was implimented from Code Institutes lessons including the Love Running Project indirectly from what I had learned from them.

### Media

- The photos for the hero image and gallery page were all from [Unsplash](https://unsplash.com/). Any other photos are personal photos owned by myself.
