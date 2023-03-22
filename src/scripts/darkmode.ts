const darkSwitch = ():void => {
  document.documentElement.classList.toggle('dark');
  localStorage?.setItem('isDark', document.documentElement.classList.contains('dark').toString());
  const link = document.querySelector("link[rel~='icon']") as HTMLAnchorElement;
  link!.href = `/assets/xylar_lab${setDark() ? '_dark' : ''}.svg`;
};

const setDark = ():boolean => {
  let isDarkString = localStorage?.getItem('isDark');
  return isDarkString ? JSON.parse(isDarkString) : window.matchMedia('(prefers-color-scheme: dark)').matches;
};

if (setDark()) {
  document.documentElement.classList.add('dark');
  let link = document.querySelector("link[rel~='icon']") as HTMLAnchorElement;
  link!.href = `/assets/xylar_lab_dark.svg`;
}
else document.documentElement.classList.remove('dark');