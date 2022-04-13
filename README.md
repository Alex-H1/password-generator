# Password-Generator

## Description
This is a random password generator.
The purpose and motivation of this project was to incorperate javascript from starter code to make a random password generator from selected user criteria.

## Installation
I was provided the html and css so the tool that I used for this project was JavaScript.
For the instalation I had to make a random password generator that had a criteria of once the user presses the button there is a prompt of how many characters the user's password should contain, if there is a value less than 8 or more than 128 the user would have to start over. If the password is between 8 and 128 the user is then givin multiple confirm popups to include Uppercase values, lowercase values, numeric and special character values.
How I made the code. First I made five arrays. One array was for uppercase values, one array for lowercase values, a array for special characters, a array for numerical values and a empty array to store the values of the prompts. Then I made a function to activate a function that was part of the given code I then added a prompt to ask how many characters the password should contain, if the value of the prompt is less than 8 or more than 128 there will be an alert restarting the function, if the value is between 8 and 128 the function then will activate a series of variables of confirm pop ups and if statements. The promtps then include a pop up to confirm if the user would like to include lowercasses if the user clicks confirm that will push an array of the lowercase letters to an empty array. The same will happen to the other criterias. Once the last prompt pops up if the user doesn't select any criteria there will then be an alert saying the user "must click atleast one of the criteria". Once the user iterates through the prompts and clicks one of the criteria there will then be a for loop that pulls from the number of characters the password should contain the loop also pulls from the array of all the appliqable values and uses a random number generator to pick out values, then display the values to make a password.

## Usage

![alt text](/Animation.gif)

click [here](https://alex-h1.github.io/password-generator/) to view deployed site

