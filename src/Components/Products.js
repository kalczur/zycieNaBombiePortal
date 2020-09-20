import React, { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';

import AnabolixLabs from './ProductHelpers/AnabolixLabs';
import Apteczne from './ProductHelpers/Apteczne';
import MaximusPharmaceutical from './ProductHelpers/MaximusPharmaceutical';
import PeptydyMagnus from './ProductHelpers/PeptydyMagnus';
import ProduktyNaPotencje from './ProductHelpers/ProduktyNaPotencje';

import './../Style/products.css';

const Products = ({ match }) => {
  const data = {
    columns: [
      {
        label: 'Nazwa',
        field: 'name',
        sort: 'asc',
        width: 200,
      },
      {
        label: 'Waga',
        field: 'weight',
        sort: 'asc',
        width: 270,
      },
      {
        label: 'Cena [zł]',
        field: 'price',
        sort: 'asc',
        width: 200,
      },
      {
        label: 'Rodzaj / Marka',
        field: 'brand',
        sort: 'asc',
        width: 100,
      },
    ],
    rows: [
      {
        name: 'Anastrazol (Arimidex)',
        weight: '28 tab / 1mg',
        price: 140,
        brand: 'Apteczne',
      },
      {
        name: 'Exemestane (Symex / Glandex)',
        weight: '30 tab / 25mg',
        price: 150,
        brand: 'Apteczne',
      },
      {
        name: 'Letrozol',
        weight: '30 tab / 2,5mg',
        price: 150,
        brand: 'Apteczne',
      },
      {
        name: 'Salbutamol',
        weight: '25tab / 4mg',
        price: 40,
        brand: 'Apteczne',
      },
      {
        name: 'Pfizer - Genotropine - Apteka',
        weight: '36iu',
        price: 600,
        brand: 'Apteczne',
      },
      {
        name: 'Izotek',
        weight: '100tab / 20mg',
        price: 220,
        brand: 'Apteczne',
      },
      {
        name: 'Euthyrox N100',
        weight: '100tab / 100mcg',
        price: 60,
        brand: 'Apteczne',
      },
      {
        name: 'Heparegen',
        weight: '100tab / 100mg',
        price: 150,
        brand: 'Apteczne',
      },
      {
        name: 'Tialorid',
        weight: '50tab / 5+50mg',
        price: 50,
        brand: 'Apteczne',
      },
      {
        name: 'Pregnyl - HCG',
        weight: '5000iu',
        price: 100,
        brand: 'Apteczne',
      },
      {
        name: 'Insulina krótka - Novorapid Penfill',
        weight: '5x3ml 100iu/ml',
        price: 250,
        brand: 'Apteczne',
      },
      {
        name: 'Insulina krótka - Lilly Humulin R',
        weight: '5x3ml 100iu/ml',
        price: 230,
        brand: 'Apteczne',
      },
      {
        name: 'Metronizadol - PolPharma',
        weight: '20tab / 250mg',
        price: 70,
        brand: 'Apteczne',
      },
      {
        name: 'Tetracyclinum TZF',
        weight: '16tab / 250mg',
        price: 70,
        brand: 'Apteczne',
      },
      {
        name: 'Testosterone Propionate',
        weight: '100mg / 10ml',
        price: 80,
        brand: 'Maximus Pharmaceutical',
      },
      {
        name: 'Testosterone Enanthate',
        weight: '250mg / 10ml',
        price: 100,
        brand: 'Maximus Pharmaceutical',
      },
      {
        name: 'Testosterone Enanthate Forte',
        weight: '500mg / 10ml',
        price: 150,
        brand: 'Maximus Pharmaceutical',
      },
      {
        name: 'Testosterone Compound (Susta)',
        weight: '250mg / 10ml',
        price: 110,
        brand: 'Maximus Pharmaceutical',
      },
      {
        name: 'Testosterone Cypionate',
        weight: '250mg / 10ml',
        price: 100,
        brand: 'Maximus Pharmaceutical',
      },
      {
        name: 'Testosterone Compound (SuperSusta)',
        weight: '450mg / 10ml',
        price: 150,
        brand: 'Maximus Pharmaceutical',
      },
      {
        name: 'Nandrolone Decanoate (Długa Deka)',
        weight: '200mg / 10m',
        price: 140,
        brand: 'Maximus Pharmaceutical',
      },
      {
        name: 'Nandrolone Phenylpropionate (Krótka Deka NPP)',
        weight: '100mg / 10ml',
        price: 130,
        brand: 'Maximus Pharmaceutical',
      },
      {
        name: 'Dihydro Boldenone (DHB)',
        weight: '100mg / 10ml',
        price: 160,
        brand: 'Maximus Pharmaceutical',
      },
      {
        name: 'Boldenone Undecylenate (Boldenon)',
        weight: '250mg / 10ml',
        price: 135,
        brand: 'Maximus Pharmaceutical',
      },
      {
        name: 'Drostanolone Propionate (Krótki masteron)',
        weight: '100mg / 10ml',
        price: 145,
        brand: 'Maximus Pharmaceutical',
      },
      {
        name: 'Drostanolone Enanthate (Długi masteron)',
        weight: '200mg / 10ml',
        price: 190,
        brand: 'Maximus Pharmaceutical',
      },
      {
        name: 'Trenbolone Acetate',
        weight: '100mg / 10ml',
        price: 145,
        brand: 'Maximus Pharmaceutical',
      },
      {
        name: 'Trenbolone Enanthate',
        weight: '200mg / 10m',
        price: 175,
        brand: 'Maximus Pharmaceutical',
      },
      {
        name: 'Stanozolol (Winstrol) - Iniekcyjny (Na oleju)',
        weight: '50mg / 10ml',
        price: 150,
        brand: 'Maximus Pharmaceutical',
      },
      {
        name: 'Oxymetholone (Anapolon) - Iniekcyjny (Na oleju)',
        weight: '50mg / 10mg',
        price: 150,
        brand: 'Maximus Pharmaceutical',
      },
      {
        name: 'Methandienone (Metanabol)',
        weight: '100 tab / 10mg',
        price: 80,
        brand: 'Maximus Pharmaceutical',
      },
      {
        name: 'Stanozolol (Winstrol)',
        weight: '100 tab / 10mg',
        price: 100,
        brand: 'Maximus Pharmaceutical',
      },
      {
        name: 'Chloromethyltestosterone (Turanabol)',
        weight: '100tab / 10mg',
        price: 150,
        brand: 'Maximus Pharmaceutical',
      },
      {
        name: 'Oxandrolone (Anavar)',
        weight: '100tab / 10mg',
        price: 150,
        brand: 'Maximus Pharmaceutical',
      },
      {
        name: 'Tadal (Tadalafil)',
        weight: '10tab / 25mg',
        price: 70,
        brand: 'Produkty na Potencje',
        about: 'Tadalafil jest to ta sama substancja czynna która jest zawarta w Cialis',
      },
      {
        name: 'Kamagra Super(Sildenafil+Dapoksetyna)',
        weight: '4tab / 100mg+60mg',
        price: 50,
        brand: 'Produkty na Potencje',
        about:
          'Sildenafil jest to ta sama substancja czynna która jest zawarta m.in. w Viagrze. Dodatkowa substancja Dapoksetyna jest organicznym związkiem chemicznym wykorzystywanym w leczeniu przedwczesnego wytrysku.',
      },
      {
        name: 'Kamagra Gold(Sildenafil)',
        weight: '4tab / 100mg',
        price: 35,
        brand: 'Produkty na Potencje',
        about: 'Sildenafil jest to ta sama substancja czynna która jest zawarta m.in. w Viagrze',
      },
      {
        name: 'Fast Burner',
        weight: '50kap',
        price: 130,
        brand: 'Anabolix Labs',
      },
      {
        name: 'Yohimbina HCL',
        weight: '50kap / 10mg',
        price: 45,
        brand: 'Anabolix Labs',
      },
      {
        name: 'Ostaryna',
        weight: '90kap / 10mg',
        price: 130,
        brand: 'Anabolix Labs',
      },
      {
        name: 'GW Cardarine',
        weight: '60kap / 10mg',
        price: 130,
        brand: 'Anabolix Labs',
      },
      {
        name: 'MK677 Ibutamoren',
        weight: '30kap/ 30mg',
        price: 230,
        brand: 'Anabolix Labs',
      },
      {
        name: 'LGD Ligandrol',
        weight: '60kap / 5mg',
        price: 160,
        brand: 'Anabolix Labs',
      },
      {
        name: 'RAD-140',
        weight: '60kap / 5mg',
        price: 140,
        brand: 'Anabolix Labs',
      },
      {
        name: 'Superdrol',
        weight: '50kap / 10mg',
        price: 150,
        brand: 'Anabolix Labs',
      },
      {
        name: 'S4',
        weight: '90kap / 25mg',
        price: 160,
        brand: 'Anabolix Labs',
      },
      {
        name: 'S23',
        weight: '60kap / 15mg',
        price: 190,
        brand: 'Anabolix Labs',
      },
      {
        name: 'YK-11',
        weight: '50kap / 5mg',
        price: 210,
        brand: 'Anabolix Labs',
      },
      {
        name: 'TB500',
        weight: '10mg',
        price: 150,
        brand: 'Peptydy Magnus',
      },
      {
        name: 'BPC157',
        weight: '10mg',
        price: 140,
        brand: 'Peptydy Magnus',
      },
      {
        name: 'CJC1295 + GHRP6',
        weight: '2mg + 10mg',
        price: 150,
        brand: 'Peptydy Magnus',
      },
      {
        name: 'CJC1295 DAC',
        weight: '2mg',
        price: 150,
        brand: 'Peptydy Magnus',
      },
      {
        name: 'GHRP6',
        weight: '10mg',
        price: 150,
        brand: 'Peptydy Magnus',
      },
      {
        name: 'FRAG 176-191',
        weight: '5mg',
        price: 140,
        brand: 'Peptydy Magnus',
      },
      {
        name: 'Folistatyna',
        weight: '1mg',
        price: 110,
        brand: 'Peptydy Magnus',
      },
      {
        name: 'IGF1 LR3',
        weight: '1mg',
        price: 110,
        brand: 'Peptydy Magnus',
      },
      {
        name: 'Melanotan II',
        weight: '10mg',
        price: 130,
        brand: 'Peptydy Magnus',
      },
    ],
  };

  const [matchData, setMatchData] = useState({});

  useEffect(() => {
    //printProductDescription();

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

  return (
    <div className="products">
      {printProductDescription()}
      <div className="products__data-table">
        <MDBDataTable responsive striped bordered small data={matchData} entries={200} sorting={true} />
      </div>
    </div>
  );
};

export default Products;
