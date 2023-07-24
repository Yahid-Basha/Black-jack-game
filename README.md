# Blackjack Game

Welcome to the web version of the classic card game Blackjack! This project is an implementation of the popular casino game in HTML, CSS, and JavaScript. The game provides a simple interface where users can play Blackjack against the dealer.

## How to Play:

1. **Objective:** The objective of Blackjack is to get a hand value as close to 21 as possible without exceeding it. A hand with a value of 21 consisting of an Ace and a 10-point card (10, Jack, Queen, or King) is called "Blackjack."

2. **Getting Started:** To start the game, click the "Start Game" button. The dealer will deal two cards to you.

3. **Card Values:** Cards 2 to 10 have their face value. Face cards (Jack, Queen, and King) are worth 10 points, and an Ace can be worth either 1 or 11 points, depending on which value is more beneficial to your hand(currently the values is set to 11 by default, the option will be rolled out in next versions).

4. **Gameplay:** After the initial deal, you have the option to "Hit" or "Stand." Click the "New Card" button to get an additional card ("Hit") or decide to keep your current hand ("Stand"). The goal is to get as close to 21 as possible without exceeding it.

5. **Winning and Losing:** The game will automatically check your hand. The hand closest to 21 without exceeding it wins. If you get a total of 21 with the first two cards (Blackjack), you win immediately. If you exceed 21, you "bust," and you lose.

6. **Aces:** If your hand contains an Ace and the total value with it being counted as 11 does not cause you to bust, the Ace will be counted as 11. Otherwise, it will be counted as 1.

## How to Run the Game:

1. Clone the repository to your local machine or download the source code.

2. Open the `index.html` file in your web browser.

3. Click the "Start Game" button to begin playing Blackjack.

## Game Files:

- `index.html`: This HTML file contains the basic structure of the game, including the necessary elements and buttons.

- `index.css`: The CSS file provides styling for the game interface, making it visually appealing.

- `index.js`: The JavaScript file contains the game logic and functionality, handling card dealing, player decisions, and determining the win.

Have fun playing Blackjack! If you encounter any issues or have suggestions for improvements, feel free to create an issue or pull request on this GitHub repository.

Enjoy the game!
