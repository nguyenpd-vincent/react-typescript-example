import React, { useEffect, useState } from 'react';
import RamenProductService from '../../services/RamenProductService';

const RamenProductList: React.FC = () => {
  // const [ramenProducts, setRamenProducts] = useState<any>([]);

  // useEffect(() => {
  //   // Fetch the list of ramen products from the server using the service
  //   RamenProductService.fetchRamenProducts()
  //     .then((data) => setRamenProducts(data))
  //     .catch((error) => console.error('Error fetching data:', error));
  // }, []);

  return (
    <div>
      {/* <h2>Ramen Products</h2>
      {ramenProducts.map((ramenProduct) => (
        <div key={ramenProduct.id}>
          <h3>{ramenProduct.name}</h3>
          <p>Price: ${ramenProduct.price.toFixed(2)}</p>
        </div>
      ))} */}
    </div>
  );
};

export default RamenProductList;
