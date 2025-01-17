<h3>Movie list - React Application</h3>

<p>The MovieList component receives user input through the dropdown menu. This menu lists all the unique genres (Science Fiction, Drama, Action) from the movie data (movies array) along with an "All Genres" option.</p>

<p>The program performs several actions based on the user's input. One of them is genre selection. When the user selects a genre from the dropdown, the handle_genre_change function is triggered. This function updates the selected_genre state variable with the chosen genre. Second one is movie filtering. Based on the selected_genre, the program filters the movie data. If "All Genres" is selected, all movies are shown. Otherwise, only movies matching the chosen genre are displayed.</p>

<p>The Output of the program is a component displays the movie list as output. Each movie item includes the title, genre, and release year. Clicking on a movie item triggers an alert message with the selected movie's title. In essence, the program takes user input (genre selection), processes it to filter the movie data, and displays the filtered list as output.</p>

<p>Ollama link: https://0kr96rm0-3000.usw2.devtunnels.ms</p>