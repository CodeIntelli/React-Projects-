import React from "react";
import axios from "axios";
import FoodList from "./components/FoodList";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import { MdSearch } from "react-icons/md";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    margin: "10px auto",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

// [ + ]
const Recipe = () => {
  const [recipes, setRecipes] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [query, setQuery] = React.useState("mango");
  const APP_ID = "5c719671";
  const APP_KEY = "5b0497af5da9130ea55fb33555f8caa8";
  const APP_url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const getRacipe = async () => {
    const response = await axios.get(APP_url);
    console.log(response.data.hits);
    setRecipes(response.data.hits);
  };
  const updateQuery = (e) => {
    setQuery(search);
    e.preventDefault();
  };
  React.useEffect(() => {
    getRacipe();
  }, [query]);
  const classes = useStyles();
  return (
    <>
      {/* <h1></h1> */}
      <Paper component="form" onSubmit={updateQuery} className={classes.root}>
        <InputBase
          type="text"
          value={search}
          name={search}
          onChange={(e) => {
            const data = e.target.value;
            console.log(data);
            setSearch(e.target.value);
          }}
          className={classes.input}
          placeholder="Search For Recipe"
          inputProps={{ "aria-label": "Search For Recipe" }}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="Search For Recipe"
        >
          <MdSearch />
        </IconButton>
      </Paper>
      <Grid container>
        {recipes.map((recipe, index) => {
          return (
            <>
              <Grid item xs={3} spacing={1}>
                <FoodList
                  key={recipe.recipe.label}
                  title={recipe.recipe.label}
                  calories={recipe.recipe.calories}
                  image={recipe.recipe.image}
                  label={recipe.recipe.label}
                  ingredients={recipe.recipe.ingredients}
                />
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
};

export default Recipe;
