import React from "react";
import {
  AppBar,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
  alpha,
  IconButton,
  Badge,
  Avatar,
} from "@material-ui/core";
import { theme } from "../theme";
import { Search, MailOutline, AccountCircle } from "@material-ui/icons";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";

const useStyle = makeStyles({
  logolg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logosm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  Toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  search: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "30%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
    },
  },
  inputRoot: {
    color: "inherit",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  searchBtn: {
    display: "none",
    color: "white",
    spacing: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  badgeIcons: {
    display: (props) => (props.open ? "none" : "block"),
  },
});

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyle({ open });
  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.Toolbar}>
          <Typography variant="h6" component="span" className={classes.logolg}>
            Blog Menia
          </Typography>
          <Typography variant="h6" component="span" className={classes.logosm}>
            BMenia
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Search Blog"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            ></InputBase>
          </div>
          <div className={classes.sectionDesktop}>
            <IconButton>
              <Search
                className={classes.searchBtn}
                onClick={() => setOpen(true)}
                onDoubleClick={() => setOpen(false)}
              />
            </IconButton>

            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailOutline />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsActiveIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <Avatar
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/2.jpg"
              />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
