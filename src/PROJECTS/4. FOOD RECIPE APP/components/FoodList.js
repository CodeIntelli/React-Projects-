import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { shadows } from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    margin: "10px 0",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const FoodList = ({ ingredients, calories, image, label, title }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <Card className={classes.root} boxShadow={3}>
        {/* <CardHeader title={title} subheader={Math.floor(calories)} /> */}
        <CardMedia className={classes.media} image={image} title={title} />

        <CardActions disableSpacing>
          <Typography>{title}</Typography>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <span>Calories: {Math.floor(calories)}</span>
            {ingredients.map((elem, index) => {
              return (
                <>
                  <Typography paragraph key={index}>
                    {elem.text}
                  </Typography>
                </>
              );
            })}
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
};

export default FoodList;
