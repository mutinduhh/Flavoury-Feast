
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  #!/usr/bin/env python3
  import sys, os
  
  if __name__ == "__main__":
      # Check if the script is run with a name argument
      if len(sys.argv) < 2:
          print("File must be run as `./bin/start.py your-name` (e.g., `./bin/start.py ada-lovelace`)")
          sys.exit(1)
  
      # Concatenate the name arguments into a single string with hyphens
      concat_name = "-".join(sys.argv[1:])
  
      # Write the concatenated name to a file named `config` in the `bin` directory
      with open('bin/config', 'w') as config_file:
          config_file.write(concat_name)
  
      # Clone a git repository named `code-challenge.bundle`
      os.system("git clone code-challenge.bundle")
  
      # Check out a new branch with the concatenated name in the cloned repository
      os.system(f"cd code-challenge && git checkout -b {concat_name}")
  
      # Add and commit all changes in the repository with the message "Final commit"
      os.system("cd code-challenge && git add.")
      os.system(f"cd code-challenge && git commit -m \"Final commit\"")
  
      # Create a git bundle of the current branch and save it to a file with the concatenated name in the parent directory
      os.system(f"cd code-challenge && git bundle create../{concat_name}.bundle {concat_name}")
  
      # Remove the `code-challenge` directory
      os.system("rm -rf code-challenge")
  
      # Add a code challenge bundle
      os.system("git clone https://github.com/your-username/your-repo.git")
      os.system("mv your-repo code-challenge")
      os.system(f"cd code-challenge && git checkout -b {concat_name}")
      os.system("cd code-challenge && git add.")
      os.system(f"cd code-challenge && git commit -m \"Add code challenge bundle\"")
      os.system(f"cd code-challenge && git bundle create../{concat_name}-challenge.bundle {concat_name}")
      os.system("rm -rf code-challenge")
  const [recipe, setRecipe] = useState();


  // Link to Spoonacular Search API Documentation: https://spoonacular.com/food-api/docs#Get-Random-Recipes
  async function getRandomRecipe(https://api.spoonacular.com/recipes/random) {
    try {
      const apiKey = 'be1f6973c68944149aac1e1f2f6f51a3';

      //making spoonacular api call to get a random recipe
      let resp = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${be1f6973c68944149aac1e1f2f6f51a3}`);
      console.log(21, resp.data);

      //store the random recipe into the recipe variable
      setRecipe(resp.data.recipes[0]);
    } catch (e) {
      console.log(e);
    }

  }

  useEffect(() => {
    getRandomRecipe();
  }, []);



  return (

    <div className="row">

      <button onClick={getRandomRecipe}>
        Generate Random Recipie
      </button>


      <div>
        Name:
        <a target="_blank" href={recipe?.sourceUrl}>
          {recipe?.title}
        </a>
      </div>
      <img src={recipe?.image} />

      <div className="ingredients">
        <div>
          Ingredients needed:
        </div>
        {recipe?.extendedIngredients.map((ingredient, index) =>
          <span key={index}>

            {index != recipe?.extendedIngredients.length - 1 ? ingredient.name + ", " : ingredient.name}
          </span>
        )}
        {recipe?.analyzedInstructions.map((instruction) =>
          <ol>
            {instruction.steps?.map((step) =>
              <li>
                {step.step}
              </li>
            )}
          </ol>
        )
        }
      </div >
      <div>

      </div>

    </div >

  );
}

export default App;