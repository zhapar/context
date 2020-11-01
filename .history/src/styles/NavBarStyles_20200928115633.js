import { fade } from "@material-ui/core/styles/colorManipulator";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginBottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: "-12px",
    marginRight: "20px",
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  },
});
