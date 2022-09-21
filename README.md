# Pokemon Compendium Plan

## Components

- Compendium -- main component
- Select -- generic dropdown component
- Search -- generic search component
- Pokemon -- displaying Poke details

## State

- pokemon -- loaded from API
- types -- loaded from API
- selectedType -- controlled by Select component
- searchTerm -- controlled by Search component
- loading -- boolean (https://cssloaders.github.io/)

## Events

- page load -- load the initial list of Pokemon and the list of types (`useEffect`)
- select change -- update the selectedType state, and also reload the pokemon (make an API call)
- search input change -- updated teh searchTerm state but will NOT call the API
- search button click -- call the API with the search term

## Plan

1. Load the initial list of Pokemon
   - Make my Compendium component
   - Create a custom hook `usePokemon` for loading pokemon (including services function)
   - Use the custom hook in my Compendium component and display Pokemon component for each item
2. Get Select Working
   - Create my Select component
   - add state to usePokemon for selectedType and types
   - load list of types and pass to Select component
   - add event handler for the type changing
3. Get Search Working
   - Create my Search component
   - add state to usePokemon for searchTerm
   - add event handler for the clicking on the button
