function langSwitcher() {
  return {
    open: false,

    toggle() {
      this.open = !this.open;
    },

    switchLang(targetLang) {
      const currentPath = window.location.pathname;
      const segments = currentPath.split('/').filter(Boolean);

      if (segments.length > 0) {
        segments[0] = targetLang;
      }

      const newPath = '/' + segments.join('/') + '/';
      window.location.href = newPath;
    },
  };
}
