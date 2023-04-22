import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './services.scss';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="section">
      <div class="container center">
        <h1>Services</h1>
      </div>
    </div>
  );
});