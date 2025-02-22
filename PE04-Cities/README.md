# Cities Application

# Input

The application accepts two types of input: user-entered city data (name, country, population) via the "Add City" form, and user clicks on city names from the "Cities List". The "Add City" form captures text inputs. Clicking a city name provides a city ID as a URL parameter.

# Process

When a user submits the "Add City" form, the application creates a new city object with the provided data and adds it to the cities list. When a user clicks a city name, React Router uses the 'useParams' hook to extract the city ID from the URL. The application then finds the matching city in the cities list and displays its details. The 'Outlet' component allows the city details to be rendered within the cities list layout.

# Output

The application displays a list of cities with clickable links. Clicking a link shows detailed city information: name, country, and population. After adding a city, the user is redirected to the cities list. The application provides a user-friendly interface to manage and view city data.