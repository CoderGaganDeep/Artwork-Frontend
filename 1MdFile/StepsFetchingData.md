# Steps for fetching data - Week2.2

1. Write an async function
2. Make a request to axios

   ```js
   // A. this response is an array
   const getPokemons = async () => {
     const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
     console.log("response", response);
     setPokemons(response.data.results);
   };

   // OR:
   // B. this response is an object
   const getOneCharacter = async () => {
     const response = await axios.get(
       "https://hp-assessment-api.herokuapp.com/got/characters/1"
     );
     console.log("response", response);
     setChar(response.data);
   };
   ```

3. Call the function inside useEffect

   ```js
   useEffect(() => {
     getPokemons();
     getOneCharacter();
   }, []);
   // no []: always runs
   // with []: runs once
   // with [variable]: runs whenever the variable changes
   ```

4. Check the response

   - With console.log(response.data) (above at line 10 and 20)

5. Put it in local state
