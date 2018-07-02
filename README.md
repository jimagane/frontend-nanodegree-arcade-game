# Classic Arcade Game: Frogger

Creates a game canvas of enemies and special objects player must navigate through to score points. Game objective is to score as many points as possible by collecting special items or crossing successfully from grass to water while avoiding enemy bugs. When all 4 heart life are used, game is over.

## Getting Started

Arcade game project can be cloned from github repository:
https://github.com/jimagane/memory_game_project.git

### Prerequisites

Use text editor to edit HTML, CSS, and JavaScript resource, engine, and app code and a web browser to view and play project game.

### Installing and Usage

Clone program files from repository to edit. Open index.html file on web browser window to run game. Refresh page to re-randomize object speeds.

The game draws a canvas of grass, stone, and water. It renders enemy, player, and special objects continuously to create movement across page. If player and enemy inhabit same space or come into contact, a heart life is taken and player position is reset. Likewise if a player and special object come into contact, player gains extra points or a heart life. When player successfully reaches water, they get 1 point and player position is reset.

When all heart lives are lost, game over message is displayed with final score. Upon closing message the score, heart life, and player position is reset. If the speeds of enemy and special objects would like to be re-randomized, page must be refreshed.

## Running Tests

Refresh browser page to test modified code.

## Contributing

This repository for memory game project is for Udacity Front-End Web Developer Nanodegree course. Therefore, will not be accepting pull requests at this time.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

## Dependencies



## Acknowledgements

Starter HTML and CSS code, JS engine and resource code, and images provided by Udacity for this project was used.
