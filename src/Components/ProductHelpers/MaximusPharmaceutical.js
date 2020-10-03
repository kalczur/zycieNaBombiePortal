import React, { Component } from 'react';

export default class MaximusPharmaceutical extends Component {
  render() {
    return (
      <>
        <h1 className="component-header">Maximus Pharmaceutical</h1>
        <h2 className="component-description">
          Maximus Pharmaceutical jest firmą założoną w 2018r. i od tego czasu bardzo prężnie się rozwija, kontrolując
          wszystkie aspekty badań, rozwoju i zatwierdzania produktów, co daje pewność że w każdym produkcie znajduje się
          dokładnie to czego potrzebujesz.
          Wszelkie produkty Maximus Pharmaceuticals można zweryfikować pod kątem oryginalności na stronie
          internetowej{' '}
          <a href="http://www.maximuspharm.com/authenticity" target="_blank" rel="noopener noreferrer">
            maximuspharm.com/authenticity
          </a>{' '}
          dzięki czemu masz gwarancję że otrzymujesz oryginalny produkt najlepszej jakości.
        </h2>
      </>
    );
  }
}
