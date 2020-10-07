import React, { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';

import AnabolixLabs from './ProductHelpers/AnabolixLabs';
import Apteczne from './ProductHelpers/Apteczne';
import MaximusPharmaceutical from './ProductHelpers/MaximusPharmaceutical';
import PeptydyMagnus from './ProductHelpers/PeptydyMagnus';
import ProduktyNaPotencje from './ProductHelpers/ProduktyNaPotencje';

import data from './ProductHelpers/ProductsData';

import './../Style/products.css';

const Products = ({ match }) => {
  const [matchData, setMatchData] = useState({});

  useEffect(() => {
    let tempRows = data.rows.filter((el) => fixBrandName(el.brand) === match.params.brand);
    let tempData = { ...data };
    tempData.rows = tempRows;

    setMatchData(tempData);
  }, [match]);

  const fixBrandName = (name) => {
    if (name == null) return 'Brak nazwy';
    return name.toLowerCase().replace(/\s/g, '_');
  };

  const printProductDescription = () => {
    switch (match.params.brand) {
      case 'peptydy_magnus':
        return <PeptydyMagnus />;
      case 'produkty_na_potencje':
        return <ProduktyNaPotencje />;
      case 'anabolix_labs':
        return <AnabolixLabs />;
      case 'apteczne':
        return <Apteczne />;
      case 'maximus_pharmaceutical':
        return <MaximusPharmaceutical />;
    }
  };

  const printDataTable = () => {
    if (match.params.brand === 'maximus_pharmaceutical') {
      let tempRowsInjection = data.rows
        .filter((el) => fixBrandName(el.brand) === match.params.brand)
        .filter((el) => el.type === 'injection');
      let tempDataInjection = { ...data };
      tempDataInjection.rows = tempRowsInjection;

      let tempRowsOral = data.rows
        .filter((el) => fixBrandName(el.brand) === match.params.brand)
        .filter((el) => el.type === 'oral');
      let tempDataOral = { ...data };
      tempDataOral.rows = tempRowsOral;

      return (
        <>
          <h2 className="products__table-header">Środki iniekcyjne</h2>
          <MDBDataTable striped bordered small data={tempDataInjection} entries={1000} sorting={true} />
          <h2 className="products__table-header">Środki oralne</h2>
          <MDBDataTable striped bordered small data={tempDataOral} entries={1000} sorting={true} />
        </>
      );
    } else if (match.params.brand === 'pozostale') {
      let tempRowsOthers = data.rows
        .filter((el) => fixBrandName(el.brand) === match.params.brand)
        .filter((el) => el.type === 'Pozostale');
      let tempDataOthers = { ...data };
      tempDataOthers.rows = tempRowsOthers;

      let tempRowsHGH = data.rows
        .filter((el) => fixBrandName(el.brand) === match.params.brand)
        .filter((el) => el.type === 'HGH');
      let tempDataHGH = { ...data };
      tempDataHGH.rows = tempRowsHGH;

      return (
        <>
          <h2 className="products__table-header">Pozostałe</h2>
          <MDBDataTable striped bordered small data={tempDataOthers} entries={1000} sorting={true} />
          <h2 className="products__table-header">Hormon wzrostu - HGH</h2>
          <MDBDataTable striped bordered small data={tempDataHGH} entries={1000} sorting={true} />
        </>
      );
    } else {
      return <MDBDataTable striped bordered small data={matchData} entries={1000} sorting={true} />;
    }
  };

  return (
    <div className="products">
      {printProductDescription()}
      <div className="products__data-table">{printDataTable()}</div>
    </div>
  );
};

export default Products;
