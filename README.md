# Rock Paper Scissors Lizard Spock!

![RPSLS](/assets/images/readme/am-i-responsive.png)

Website - [Rock Paper Scissors Lizard Spock](https://dazhaze.github.io/RPSLS-Code-Institute-Project-2/)

## What is this website for?

This website is being created to demonstrate my knowledge of JavaScript and manipulating the DOM after my second module in CodeInstitute.

## Goal of this website

The aim of this website is to create an interesting game using Javascript, HTML and CSS.

### *Goals*
* Interesting game for the user.
* Succesful game loop with win and lose conditions.
* logic that does not break no matter what the user selects.
* correct use of Javascript.

### *Features for the next stage.*
* Patterns in the computer play that the user can learn.
* CSS styling effects that can give the user more feedback for in-game events.

## Existing Features.

> This section demonstrates features that are currently in the deployed version of the website.

* Clear UI
    * Minimal text is key for a small mini-game like this one. The user has to intuitivly know what to do in order to play the game. This is why the UI is bold and clear for a great user experience. Below is an example of clear UI where the user choices are displayed as images. On desktop, while the mouse is hovered over the image is scaled up and a color is eased in. This indicates that this element can be clicked.
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
    * On a mobile device it is not feasable to have the user and computer choices visible on either side of the score. After testing having them displayed underneath this also did not work due to the fact that the user would have to scroll too much. It was decided to display the choices as text above the score so there would still be feedback even if it wasn't displayed in image format.
## Testing

> This section is for how the website is tested for usability on various devices.

* HTML
    * No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdazhaze.github.io%2FRPSLS-Code-Institute-Project-2%2Findex.html)

* CSS
    * No errors were found when passing through the official [(Jigsaw) validator](http://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fdazhaze.github.io%2FRPSLS-Code-Institute-Project-2%2Fassets%2Fcss%2Fstyle.css&profile=css3svg&usermedium=all&warning=1&vextwarning=)

* Lighthouse
    * Using lighthouse validator we can see that all scores are greater than 90.
    ---
    ![Lighthouse Validator](/assets/images/readme/lighthouse-audit-results.png)
    ---

* JavaScript
    * Running the JavaScript file script.js though [JS Hint](https://jshint.com/) shows that no errors are returned. Only warnings that are minor and not something that will break the project.

## Deployment

> This section is for how the website is deployed.

___

## Credits

* Darragh Hayes, developer.

