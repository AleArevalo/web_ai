import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './about-us.scss';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="section">
      <div class="container center">
        <h1>about-us</h1>
      </div>
    </div>
  );
});