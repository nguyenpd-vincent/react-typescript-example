import { useEffect, useState } from "react";
import { fetchRamenProducts } from "@/services/ramen";
import "./Ramen.css";
import ramen from '/ramen.png';
import Star1 from '/Star1.png';
import Star2 from '/Star2.png';
import Star3 from '/Ellipse.png';


function RamenProduct() {
  const [ramenProducts, setRamenProducts] = useState<any>([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const fetchProducts = async () => {
      fetchRamenProducts(searchQuery)
      .then((data) => {
        setRamenProducts(data.data)
      })
      .catch((error) => console.error('Error fetching data:', error));
    }
    fetchProducts();
  }, [searchQuery]);

  const truncateText = (text: string, sub: number) => {
    return text.length > sub ? `${text.substring(0, sub)}...` : text;
  }

  const chekcTopRamenSetIcon = (top: number) => {
    if (top === 0) {
      return <>
        <div
          style={{
            backgroundImage: `url(${Star1})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: "100% 100%"
          }}
          className='stt_header_top'
        >
          <div className='number_top'><span>{top + 1}</span></div>
        </div>
      </>
    }

    if (top === 1 || top === 2) {
      return <>
        <div
          style={{
            backgroundImage: `url(${Star2})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: "100% 100%"
          }}
          className='stt_header_top'
        >
          <div className='number_top'><span>{top + 1}</span></div>
        </div>
      </>
    }

    return <div
      style={{
        backgroundImage: `url(${Star3})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: "100% 100%"
      }}
      className='stt_header_top'
    >
      <div className='number_top'><span>{top + 1}</span></div>
    </div>
  }

  return (
    <div className='container'>
      <div className='product'>
        <div className='product__ramen__deading'>
          <div className='product__title'>
            <div className='product__title--content'>
              TOKYO RAMEN FINDER
            </div>
            <img src={ramen} alt="ramen" />
          </div>

          <input
            className='product__search'
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder='Filter by speciality, location or keyword...'
          />

          <div className='product__top--result'>
            <p>Displaying the top {ramenProducts?.results?.results_returned} of {ramenProducts?.results?.results_available} results</p>
          </div>
        </div>

        <div className='product__list'>
          {
            ramenProducts &&
            ramenProducts?.results &&
            ramenProducts?.results?.shop &&
            ramenProducts?.results?.shop?.length &&
            ramenProducts?.results?.shop?.map((v: any, idx: number) => (
              <div className='product__info' key={idx} >
                <div className='product__info--item'>
                  <div className='product__info-heading'>
                    <div className='product__title--content'>
                      <div className='product__info--name'>{truncateText(v?.name, 10)}</div>
                      <div className='product__info--address'>{truncateText(v?.address, 12)}</div>
                    </div>

                    {
                      chekcTopRamenSetIcon(idx)
                    }

                  </div>
                  <div className='product__info--image'>
                    <img src={v?.photo?.pc?.l} alt="image_ramen" />
                  </div>
                  <div className='product__info--description'>
                    {truncateText(v?.shop_detail_memo, 35)}
                  </div>
                  <div className='product__info--button'>
                    <button className='product__info--findmore'>
                      Find Out More
                    </button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default RamenProduct;
