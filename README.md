# Rock Paper Scissors Lizard Spock!

![RPSLS](/assets/images/readme/am-i-responsive.png)

Website - [Rock Paper Scissors Lizard Spock](https://dazhaze.github.io/RPSLS-Code-Institute-Project-2/)

## What is this website for?

This website is being created to demonstrate my knowledge of JavaScript and manipulating the DOM after my second module in CodeInstitute.

## Goal of this website

The aim of this website is to create an interesting game using Javascript, HTML and CSS.

### *Goals*
* Interesting game for the user.
* Successful game loop with win and lose conditions.
* logic that does not break no matter what the user selects.
* correct use of Javascript.

### *Features for the next stage.*
* Patterns in the computer play that the user can learn.
* CSS styling effects that can give the user more feedback for in-game events.

## Existing Features.

> This section demonstrates features that are currently in the deployed version of the website.

* Clear UI
    * Minimal text is key for a small mini-game like this one. The user has to intuitively know what to do in order to play the game. This is why the UI is bold and clear for a great user experience. Below is an example of clear UI where the user choices are displayed as images. On desktop, while the mouse is hovered over the image is scaled up and a color is eased in. This indicates that this element can be clicked.
    ---
    ![User Choices](/assets/images/readme/user-choices.png)
    ---
    * When the user selects a choice, their choice is displayed along with the computers choice.
    ---
    ![Choices Displayed](/assets/images/readme/choices-displayed.png)
    ---
    * Even though this is a simple game I thought it was important for the user to have some choice in what they are playing. This is why the game-type section was included. This provides the user with a choice between; First to five games or first to three games. The user can also reset the game.
    ---
    ![Game Type](/assets/images/readme/game-type.png)
    ---
    * As seen in the image above a fun little message is also displayed for the user when the round is over.
    ---
    ![Mobile Score](/assets/images/readme/mobile-score.png)
    ---
    * On a mobile device it is not feasible to have the user and computer choices visible on either side of the score. After testing having them displayed underneath, this also did not work due to the fact that the user would have to scroll too much. It was decided to display the choices as text above the score, so there would still be feedback even if it wasn't displayed in image format.
## Testing

> This section is for how the website is tested for usability on various devices.

* HTML
    * No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdazhaze.github.io%2FRPSLS-Code-Institute-Project-2%2Findex.html)

* CSS
    * No errors were found when passing through the official [(Jigsaw) validator](http://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fdazhaze.github.io%2FRPSLS-Code-Institute-Project-2%2Fassets%2Fcss%2Fstyle.css&profile=css3svg&usermedium=all&warning=1&vextwarning=)

* Lighthouse
    * Using lighthouse validator we can see that all scores are greater than 90 and most importantly, accessability is at 100!
    ---
    ![Lighthouse Validator](/assets/images/readme/lighthouse-audit-results.png)
    ---

* JavaScript
    * Running the JavaScript file script.js though [JS Hint](https://jshint.com/) shows that no errors are returned. Only warnings that are minor and not something that will break the project.

## Code
> This section talks about how the game logic was made in JavaScript

![Main Function](/assets/images/readme/JS-click-functions.png)

* As the game logic only needs to run after the user has clicked one of the five choices available (rock, paper, scissors, lizard, spock) or the game types ( first to 3, first to five, or reset) then all of the logic can be run on these button clicks. In the image above we can see that a string of functions are run when the user clicks a choice. The logic was broken down into these smaller functions to make the code more readable and be able to handle errors easier. The logic for which choice beats which, for example rock beats scissors, is unfortunately a series of if/else statements as a more eloquent way was not found. Below is a an image of one of these small funtions.

![Small Function](/assets/images/readme/update-scores-function.png)
* This function increments the user or computer overall score by one. Then it will update the main displayed score accordingly.

* While trying to stay away from global variables as much as possible I felt that for cleaner code and to prevent easy cheating I would create 4. These were; userScore, computerScore, winner and maxScore. The computer and user scores are self explanitory. The winner variable is populated when the main logic function is run to test if rock beats scissors. It returns a string of 'user' or 'computer'. Finally the maxScore holds either 3 or 5. This is based on which game-type the user chooses.

### What improvements could be made?

> The main imporvement to make would be some patterns the computer makes that the user could learn so that the game could be more skill based. For example if the computer picked 'spock' at random then there could be a 1/3 chance that the user chooses spock again. If the user chose rock twice in a row then the computer "prefers" to play paper at a 4/1 likelyness. I think this would add replay value to the game and make it seem on surface level a lot more complex.

## Deployment

> This section is for how the website is deployed.

* While deploying the website, some issues were encountered. Mainly to do with scaling issues with different screen sizes. In the end it uses one media query that mainly switches between CSS Grid and Flexbox. This switch is due to lack of knowledge about FlexBox which seems to be a very powerful tool. An in-depth programme of FlexBox is definately next on my list after completing this project. 

* While deploying it was easy to see that not all elements will be displayed on smaller screen sizes as the playability of the small game would have been ruined by design choices that were made for larger displays. Such as displaying the user and computer choice images beside the score.
___

## User Testing

* Testing was conducted by sending the website link to friends and asking them their thoughts and to test on different devices. This process was made easier as a discord server was used for conversations about it. The main points throughout was that the computer should have some predictability and that there was scaling issues in the beginning. The computer predictability unfortunately was not implemented due to time constraints, but the scaling issues were fixed in the end.


## Credits

* Darragh Hayes, developer.

* The Rock, Paper, Scissors, Lizard, Spock, images were taken from a website called [PNG Egg](https://www.pngegg.com). The link to the original upload can be found [here](https://www.pngegg.com/en/png-iiamd).

* In the initial design phase the layout of the game was inspired by this [video](https://www.youtube.com/watch?v=jaVNP3nIAv0&t=1372s) by YouTube creator [Whatsdev](https://www.youtube.com/channel/UC0tRdbXVDbhaRvZPKsRgmxg). It is important to not that no code was taken from this video and no steps were followed while creating my own code for this website.

