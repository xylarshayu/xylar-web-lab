/* Dark Mode */
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

/* Framework Toggle */
const frameworks = ['html', 'vue', 'react', 'astro', 'solid', 'svelte'];
const toggleFramework = (i: string):void => {
  let set = document.body.toggleAttribute(i);
  localStorage?.setItem(i, set.toString());
};
const frameworkActive = (i: string):boolean => document.body.hasAttribute(i);

document.addEventListener('DOMContentLoaded', () => {
  frameworks.map((i) => {
    if (localStorage?.getItem(i) && JSON.parse(localStorage?.getItem(i)!)) toggleFramework(i);
  });

  if (!frameworks.some(frameworkActive)) {toggleFramework('html'); toggleFramework('vue'); toggleFramework('react')};

});

/* */