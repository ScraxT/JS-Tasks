const themes = ["blackTheme", "greyTheme", "whiteTheme"];

themes.forEach(theme => {
  document.getElementById(theme).addEventListener("click", () => {
    document.body.className = theme;
  });
});