/// <reference types="astro/client" />

/*
 * Sebagian tooling editor (termasuk TS server VSCode) membaca
 * `JSX.IntrinsicElements` global saat memeriksa file `.astro`.
 * Astro menyimpan deklarasi elemen di namespace `astroHTML.JSX`,
 * jadi di-alias-kan di sini agar tidak muncul error:
 * "JSX element implicitly has type 'any' because no interface
 * 'JSX.IntrinsicElements' exists."
 */
import 'astro/types';

declare global {
  namespace JSX {
    type Element = astroHTML.JSX.Element;
    interface ElementChildrenAttribute
      extends astroHTML.JSX.ElementChildrenAttribute {}
    interface IntrinsicAttributes extends astroHTML.JSX.IntrinsicAttributes {}
    interface IntrinsicElements extends astroHTML.JSX.IntrinsicElements {}
  }
}
