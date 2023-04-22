import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './register.scss';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="section">
      <div class="container center">
        <h1>register</h1>
      </div>
    </div>
  );
});