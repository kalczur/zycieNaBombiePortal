import React, { Component } from 'react';

export default class PeptydyMagnus extends Component {
  render() {
    return (
      <>
        <h1 className="component-header">Peptydy Magnus</h1>
        <h2 className="component-description">
          Magnus Pharmaceuticals jest jedną z największych prywatnych firm farmaceutycznych w Indiach, produktującą od
          ponad 15 lat najwyższej jakości produkty, dzięki czemu zdążyli wyrobić solidną i bardzo dobrze kojarzoną markę
          na Polskim rynku.
          <br /> Wszelkie produkty Magnus Pharmaceuticals można zweryfikować pod kątem oryginalności na stronie
          internetowej{' '}
          <a href="http://www.magnuspharmaceuticals.net/verification" target="_blank" rel="noopener noreferrer">
            magnuspharmaceuticals.net/verification
          </a>{' '}
          dzięki czemu masz gwarancję że otrzymujesz oryginalny produkt najlepszej jakości.
        </h2>
      </>
    );
  }
}
