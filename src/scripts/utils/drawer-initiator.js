const DrawerInitiator = {
  init({
    button, drawer, content, jumbotron, titleMain,
  }) {
    button.addEventListener('click', (event) => {
      this.ToggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this.CloseDrawer(event, drawer);
    });

    jumbotron.addEventListener('click', (event) => {
      this.CloseDrawer(event, drawer);
    });

    titleMain.addEventListener('click', (event) => {
      this.CloseDrawer(event, drawer);
    });
  },

  ToggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  CloseDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;
