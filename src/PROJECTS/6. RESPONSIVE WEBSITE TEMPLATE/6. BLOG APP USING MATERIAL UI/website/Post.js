import {
  CardActionArea,
  CardMedia,
  Card,
  CardContent,
  Typography,
  makeStyles,
  CardActions,
  Button,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
  },
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
}));

const Post = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://lh6.googleusercontent.com/rU8dZ0x67y63AeujFhM79UG_I3ZagEqTmDffagrUVuBI5eXPHtW2Z7zP1KU1MLKtl0wU5eNS_QHU-9v3GUJgxlKYeAR1yKADY8xCj7xMrpL8z9Rr2Zde9_OGsmXTigvBr7DEWggV"
          title="My Post"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            My First Post
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
            eiusmod tempor incididunt ut labore et dolore Lorem ipsum dolor sit
            amet, consectetur adipisicing elit sed do eiusmod tempor incididunt
            ut labore et dolore Lorem ipsum dolor sit amet, consectetur
            adipisicing elit sed do eiusmod tempor incididunt ut labore et
            dolore
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
