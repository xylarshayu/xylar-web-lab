const darkSwitch = (() => {
  document.documentElement.classList.toggle('dark');
  localStorage?.setItem('isDark', document.documentElement.classList.contains('dark').toString());
});

const setDark:boolean = (() => {
  let isDarkString = localStorage?.getItem('isDark');
  return isDarkString ? JSON.parse(isDarkString) : window.matchMedia('(prefers-color-scheme: dark)').matches;
})();

setDark ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');