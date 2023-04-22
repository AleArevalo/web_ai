import { component$ } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';

import { FaBarsSolid } from '../icons/fontawesome';

import styles from './header.module.scss';

export default component$(() => {
  const location = useLocation();
  const links = [
    {
      url: '/',
      text: 'Inicio',
    },
    {
      url: '/services/',
      text: 'Servicio',
    },
    {
      url: '/about-us/',
      text: 'Nosotros',
    },
    {
      url: '/register/',
      text: 'Registro',
    },
  ];

  return (
    <header class={ 'mt-4' }>
      <div class="flex justify-around pt-6 hidden lg:flex">
        <div>
          <nav class="flex space-x-6">
            { links.map((link, index) => (
              <Link
                key={ index }
                class={ `px-3 py-1 hover:text-blue-ottoby hover:border-b-2 hover:border-blue-ottoby ${ location.url.pathname === link.url ? styles.active : '' }` }
                href={ link.url }
              >
                { link.text }
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <a href="/" title="OTTOBY">
            <img src="/assets/logos/white-logo.svg" alt="Logo OTTOBY" width={ 120 } />
          </a>
        </div>
      </div>
      <div class="flex justify-between sm:hidden">
        <div class="px-6">
          <img src="/assets/logos/logo-text-right.svg" alt="Logo OTTOBY" width={ 120 } />
        </div>
        <div class="px-6">
        <a href="#" class="flex justify-center">
          <FaBarsSolid color="fill-gray-100" size="w-6" />
        </a>
        </div>
      </div>
    </header>
  );
});
