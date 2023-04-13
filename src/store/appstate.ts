import { map } from 'nanostores';
import { persistentMap } from '@nanostores/persistent';
import { action } from "nanostores"

export type FrameworkKey = "html" | "vue" | "react" | "lit" | "solid" | "svelte";
export type FrameworksMap = {
  [key in FrameworkKey]: 'true' | 'false'
}

export const frameworks = persistentMap<FrameworksMap>('frameworks:', {
  html: "true",
  vue: "true",
  react: "false",
  lit: "false",
  solid: "false",
  svelte: "false"
});

export const toggleFramework = action(frameworks, 'toggleFramework', (store, framework: FrameworkKey) => {
  let bool: 'true' | 'false' = JSON.parse(store.get()[framework]) ? 'false' : 'true';
  store.setKey(framework, bool);
/*   let elements = document.querySelectorAll(`[title=${framework}]`);
  elements.forEach(el => el.classList.toggle('framework-toggled', JSON.parse(bool))); */
})



