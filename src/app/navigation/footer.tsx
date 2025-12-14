// components/Footer.js
import Link from 'next/link';
import { OpenMapsIcon } from '../openMaps';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex mt-auto bottom-0 w-full bg-primary text-white">
      <div className="max-w-5xl mx-auto px-2 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand/About Section */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">Ingerslev Biler</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Din pålidelige partner for kvalitetsreparationer og service af Mercedes
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target='_blank'
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target='_blank'
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <OpenMapsIcon />
            </div>
            <div className='flex flex-col mt-4 space-y-1 text-sm'>
              <a href="mailto:ingerslev-autoteknik@example.com" className="hover:text-white transition-colors">
                ingerslev-autoteknik@example.com
              </a>
              <a href="tel:30237077" className="hover:text-white transition-colors">
                30 23 70 77
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className='md:mx-auto'>
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Service
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-300 hover:text-white transition-colors">
                  Reperation
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-gray-300 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/#blog" className="text-gray-300 hover:text-white transition-colors">
                  Om værkstedet
                </Link>
              </li>
            </ul>
          </div>

          {/* Åbningstider */
            <div className='md:mx-auto'>
              <h4 className="text-lg font-semibold mb-4">Åbningstider</h4>
              <ul className="space-y-2">
                <ul>Mandag - Fredag: 08:00 - 16:00</ul>
                <ul>Lørdag: Lukket</ul>
                <ul>Søndag: Lukket</ul>
              </ul>
            </div>}
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-400">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="text-gray-300 text-sm md:text-lg">
              © {currentYear} JMV Autoteknik. Alle rettigheder forbeholdt.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};