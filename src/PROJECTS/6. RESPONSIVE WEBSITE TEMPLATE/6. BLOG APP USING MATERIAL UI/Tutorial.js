import { Button, IconButton, makeStyles } from "@material-ui/core";
import { Person, CloudUpload, PhotoCamera } from "@material-ui/icons";
import React from "react";
import { theme } from "./theme";
const useStyle = makeStyles({
  btn: {
    margin: 20,
  },
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    fontSize: 16,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  input: {
    display: "none",
  },
  custom2: {
    ...theme.palette.myButton,
  },
  custom: {
    background: theme.palette.primary.main,
    color: "white",
  },
});
const BlogTemplate = () => {
  const classes = useStyle();
  return (
    <div>
      <Button className={classes.btn} variant="contained" color="primary">
        Primary
      </Button>
      <Button className={classes.btn} variant="contained" color="secondary">
        Secondary
      </Button>
      <Button className={classes.btn} variant="outlined" color="primary">
        Outline
      </Button>
      <Button
        className={classes.btn}
        variant="outlined"
        color="secondary"
        href="https://github.com/"
      >
        Link Button
      </Button>
      <Button
        className={classes.btn}
        variant="outlined"
        color="secondary"
        size="large"
      >
        Large Button
      </Button>
      <Button
        className={classes.btn}
        variant="outlined"
        size="small"
        color="secondary"
      >
        small Button
      </Button>
      <Button
        className={classes.btn}
        variant="outlined"
        color="secondary"
        size="large"
        startIcon={<Person />}
      >
        Icon Button
      </Button>
      <Button
        className={classes.custom}
        variant="outlined"
        size="large"
        startIcon={<Person />}
      >
        Custom Button
      </Button>
      <Button
        className={classes.custom2}
        variant="outlined"
        size="large"
        startIcon={<Person />}
      >
        Custom Button2
      </Button>
      <Button
        onClick={() => {
          alert("clicked");
        }}
        className={classes.btn}
        color="primary"
        variant="outlined"
        size="large"
      >
        Click me
      </Button>

      {/* input upload */}

      <input
        accept="image/*"
        id="contained-button-file"
        className={classes.input}
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button
          variant="contained"
          color="primary"
          component="span"
          endIcon={<PhotoCamera />}
        >
          Upload
        </Button>
      </label>
      <input
        accept="image/*"
        className={classes.input}
        id="icon-button-file"
        type="file"
      />
      <label htmlFor="icon-button-file">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <CloudUpload />
        </IconButton>
      </label>

      <Button variant="contained" size="large" className={classes.root}>
        Gradient Button
      </Button>
      {/* if we want to design own theme then we must use material ui styles * npm i @material-ui/styles */}
    </div>
  );
};

export default BlogTemplate;
