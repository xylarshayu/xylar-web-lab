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

const toggleView = ():boolean => document.body.toggleAttribute('list-view');
const toggleMenu = ():boolean => document.body.toggleAttribute('pages-menu');