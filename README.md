### Hexlet tests and linter status:
[![Actions Status](https://github.com/cofeinum/frontend-project-44/workflows/hexlet-check/badge.svg)](https://github.com/cofeinum/frontend-project-44/actions)

### Code quality:
[![Maintainability](https://api.codeclimate.com/v1/badges/ebb6a81b32efa6fb3252/maintainability)](https://codeclimate.com/github/cofeinum/frontend-project-44/maintainability)

### Games Description
Brain Games - is a console application written using JavaScript (Node.js), consisting of 5 built-in games:

1. **Even** – player must answer whether the number is even.

[![asciicast](https://asciinema.org/a/579044.svg)](https://asciinema.org/a/579044)


2. **Calc** – player must calculate the result of the expression.

[![asciicast](https://asciinema.org/a/579021.svg)](https://asciinema.org/a/579021)


3. **Gcd** – player must find the greatest common divisor of numbers.

[![asciicast](https://asciinema.org/a/579040.svg)](https://asciinema.org/a/579040)


4. **Progression** – player must find the missing progression number.

[![asciicast](https://asciinema.org/a/579123.svg)](https://asciinema.org/a/579123)


5. **Prime** – player must determine if the number is prime.

[![asciicast](https://asciinema.org/a/579143.svg)](https://asciinema.org/a/579143)

### Project structure
Application can be started using short command (Use: brain-*game_name*). This command run file from the "bin" (bin/brain-*game_name*.js) directory. Executed file calls index.js file that contains menu with games selection from the "games" directory. Each game contains unique variable (game rules) and game round generating function. The general logic of all games is placed in "src" directory (src/logic.js).