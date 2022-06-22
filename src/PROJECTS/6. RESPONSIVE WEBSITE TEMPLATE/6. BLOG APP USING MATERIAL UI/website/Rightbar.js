import React from "react";
import {
  Avatar,
  Container,
  Divider,
  ImageList,
  ImageListItem,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

const useStyle = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
  },
  link: {
    marginRight: theme.spacing(2),
    color: "#555",
    fontSize: 16,
  },
}));

const Rightbar = () => {
  const classes = useStyle();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>
        Online Friends
      </Typography>
      <AvatarGroup max={4} style={{ marginBottom: 20 }}>
        <Avatar
          alt="Remy Sharp"
          src="https://images-na.ssl-images-amazon.com/images/S/amzn-author-media-prod/462js02i4msm19rieh3tv3tn15._SY600_.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://ohrh.law.ox.ac.uk/wp-content/uploads/2021/03/Ligia-De-Jesus-Castaldi-800x800-1.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://www.wcl.american.edu/wcl-american-edu/assets/Image/initiatives_and_programs/academy_for_human_rights/about-the-competition.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://image.shutterstock.com/image-photo/young-french-artist-coffee-260nw-563947945.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://images.unsplash.com/photo-1513595323107-c9f6125b945f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlbmNoJTIwbWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
        />
      </AvatarGroup>
      <Typography className={classes.title} gutterBottom>
        Gallary
      </Typography>
      <ImageList rowHeight={100} style={{ marginBottom: 20 }} cols={2}>
        <ImageListItem>
          <img
            src="https://www.seriouseats.com/thmb/AVdCUACjl50RScwPNVRjVq-Nb4M=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2017__07__20170728-sunny-side-up-eggs-vicky-wasik-d07c5480d72e49cc85689c1d6d88495e.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://www.seriouseats.com/thmb/AVdCUACjl50RScwPNVRjVq-Nb4M=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2017__07__20170728-sunny-side-up-eggs-vicky-wasik-d07c5480d72e49cc85689c1d6d88495e.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://www.seriouseats.com/thmb/AVdCUACjl50RScwPNVRjVq-Nb4M=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2017__07__20170728-sunny-side-up-eggs-vicky-wasik-d07c5480d72e49cc85689c1d6d88495e.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://www.seriouseats.com/thmb/AVdCUACjl50RScwPNVRjVq-Nb4M=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2017__07__20170728-sunny-side-up-eggs-vicky-wasik-d07c5480d72e49cc85689c1d6d88495e.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://www.seriouseats.com/thmb/AVdCUACjl50RScwPNVRjVq-Nb4M=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2017__07__20170728-sunny-side-up-eggs-vicky-wasik-d07c5480d72e49cc85689c1d6d88495e.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://www.seriouseats.com/thmb/AVdCUACjl50RScwPNVRjVq-Nb4M=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2017__07__20170728-sunny-side-up-eggs-vicky-wasik-d07c5480d72e49cc85689c1d6d88495e.jpg"
            alt=""
          />
        </ImageListItem>
      </ImageList>
      <Typography className={classes.title} gutterBottom>
        Categories
      </Typography>
      <Link href="#" className={classes.link} variant="body2">
        Sport
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Food
      </Link>
      <Divider flexItem style={{ marginBottom: 5 }} />
      <Link href="#" className={classes.link} variant="body2">
        Movies
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Science
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Technology
      </Link>
    </Container>
  );
};

export default Rightbar;
