import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  const imagesMain = [
    '/assets/images/app-use.svg',
    '/assets/images/ai-brain.svg',
    '/assets/images/task-list.svg',
    '/assets/images/dog-process.svg',
    '/assets/images/winner.svg',
  ]
  return (
    <>
      <div class="section">
        <div class="container mx-auto">
          <div class="flex flex-wrap justify-center">
            {imagesMain.map((link, index) => (
              <div key={index} class="w-full sm:w-1/2 md:w-1/5 p-4 flex flex-col items-center">
                <img
                  src={ link }
                  alt={`Image ${index}`}
                  class={`w-full flex-1 ${index % 2 === 1 ? "order-1" : "order-2"}`}
                />
              </div>
            ))}
          </div>
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
