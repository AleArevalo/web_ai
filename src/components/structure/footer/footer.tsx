import { component$ } from '@builder.io/qwik';
import { useServerTimeLoader } from '~/routes/layout';
import styles from './footer.module.scss';

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer>
      <a href="https://www.ottoby.app/" target="_blank" class={ styles.anchor }>
        Made with ♡ by OTTOBY
        <span class={ styles.spacer }>|</span>
        <span>©{ serverTime.value.date } LatamCódigo - Todos los derechos reservados.</span>
      </a>
    </footer>
  );
});
