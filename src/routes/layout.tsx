import { component$, Slot } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

import Header from '~/components/structure/header/header';
import Footer from '~/components/structure/footer/footer';

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <div class="page">
      <Header />
      <main class="min-h-screen">
        <Slot />
      </main>
      <Footer />
    </div>
  );
});
