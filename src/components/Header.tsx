import React, { useState, useEffect } from "react";
import { RxHamburgerMenu, RxMagnifyingGlass } from "react-icons/rx";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (isMenuOpen || isSearchOpen) return;

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen, isSearchOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Placeholder para compensar o header fixed */}
      <div className="h-20"></div>

      {/* HEADER PRINCIPAL */}
      <header
        className={`bg-white shadow-md fixed top-0 left-0 w-full z-30 transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto p-4 flex items-center justify-between h-20">
          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md transition-colors flex items-center cursor-pointer"
              aria-label="Toggle menu"
            >
              <RxHamburgerMenu className="h-6 w-6 text-gray-800" />
              <span className="ml-2 text-gray-800 font-medium hidden md:inline">
                Menu
              </span>
            </button>
          </div>

          <div className="flex-grow text-center">
            <h1 className="font-playfair text-2xl sm:text-4xl uppercase text-gray-900 tracking-wider">
              Vicenzo
            </h1>
          </div>

          <div className="flex items-center">
            <button
              onClick={toggleSearch}
              className="p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md transition-colors flex items-center cursor-pointer"
              aria-label="Toggle search"
            >
              <RxMagnifyingGlass className="h-6 w-6 text-gray-800" />
            </button>
          </div>
        </div>
      </header>

      {/* ELEMENTOS FORA DO HEADER (Evita o bug do CSS transform) */}

      {/* Menu lateral esquerdo (Hamburger) */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white p-6 shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-gray-800 text-2xl focus:outline-none"
          aria-label="Fechar menu"
        >
          &times;
        </button>
        <nav className="mt-8">
          <ul className="space-y-4">
            <li>
              <a href="#" className="block hover:text-gray-300 text-lg">
                Coleções
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-gray-300 text-lg">
                Novidades
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-gray-300 text-lg">
                Acessórios
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-gray-300 text-lg">
                Sobre
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-gray-300 text-lg">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Menu lateral direito (Pesquisa) */}
      <div
        className={`fixed inset-y-0 right-0 w-80 bg-white p-6 shadow-lg transform ${
          isSearchOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button
          onClick={toggleSearch}
          className="absolute top-4 left-4 text-gray-800 text-2xl focus:outline-none"
          aria-label="Fechar pesquisa"
        >
          &times;
        </button>
        <div className="mt-8">
          <input
            type="text"
            placeholder="Pesquisar..."
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <p className="mt-4 text-gray-600">Sugestões:</p>
          <ul className="mt-2 space-y-1 text-gray-700 font-bold">
            <li className="cursor-pointer">Joias exclusivas</li>
            <li className="cursor-pointer">Relógios de alta relojoaria</li>
            <li className="cursor-pointer">Seda pura</li>
            <li className="cursor-pointer">Alfaiataria fina</li>
          </ul>
        </div>
      </div>

      {/* Overlay para fechar menus ao clicar fora */}
      {(isMenuOpen || isSearchOpen) && (
        <div
          className="fixed inset-0 bg-black/10 z-40"
          onClick={() => {
            setIsMenuOpen(false);
            setIsSearchOpen(false);
          }}
        ></div>
      )}
    </>
  );
};

export default Header;
