import { component$ } from '@builder.io/qwik';

import styles from './header.module.scss';

export default component$(() => {
  return (
    <header class={ styles.header + ' flex justify-around mt-4' }>
      <nav class="flex pt-6">
        <a class="px-6 font-bold" href="#">Inicio</a>
        <a class="px-6 font-bold" href="#">Servicio</a>
        <a class="px-6 font-bold" href="#">Sobre nosotros</a>
        <a class="px-6 font-bold" href="#">Registro</a>
      </nav>
      <div class={styles.logo}>
        <a href="/" title="OTTOBY">
          <img src="assets/logo.svg" alt="Logo OTTOBY" width={ 120 } />
        </a>
      </div>
    </header>
  );
});
