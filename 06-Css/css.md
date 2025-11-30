<!-- Why we avoid writing everything in index.css (global CSS) -->

1- index.css affects every component in your whole project.
2- As your project grows (20–50+ components), problems happen:
3- You don't remember which style belongs to which component
4-Same class names conflict (example: .container, .btn, .title)
5-Changing one style may break another component
6-Hard to maintain and debug
<!-- So, global CSS becomes messy and confusing. -->

<!-- Solution → Use CSS Modules -->

React gives a feature called CSS Modules, which means:

✔ Styles are local to each component
✔ No class name conflicts
✔ Easy to maintain
✔ You know exactly which CSS belongs to which component


<!-- Example: -->

<!-- How to use CSS Module in React -->

<!-- 1- Create a CSS file with .module.css extension -->
Card.module.css

<!-- 2- Import inside the component -->
import styles from "./Card.module.css";

<!-- 3- Apply class using the imported object -->
<div className={styles.card}>This is a card</div>