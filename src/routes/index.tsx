import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <div class="section">
        <div class="container center">
          holis
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Dog Trainer AI - OTTOBY',
  meta: [
    {
      name: 'description',
      content: 'Help your pet to be healthy and happy',
    },
  ],
};
