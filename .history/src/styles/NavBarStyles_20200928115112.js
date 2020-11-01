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
});
