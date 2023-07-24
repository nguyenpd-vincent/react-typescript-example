import React, { useEffect, useState } from 'react';
import RamenProductService from '../services/RamenProductService';
import ramen from '../assets/ramen.png';
import Star1 from '../assets/Star1.png';
import Star2 from '../assets/Star2.png';
import Star3 from '../assets/Ellipse.png';

const NotFound: React.FC = () => {
  const [ramenProducts, setRamenProducts] = useState<any>([]);

  useEffect(() => {
    // Fetch the list of ramen products from the server using the service
    RamenProductService.fetchRamenProducts()
      .then((data) => setRamenProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

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
    <div className='ramen'>
      <div className='container'>
        <div className='content'>
          <div className='content_header'>
            <div className='text_header'>
              TOKYO RAMEN FINDER
            </div>
            <img src={ramen} alt="ramen" />
          </div>

          <input
            className='search_input'
            type="text"
            placeholder='Filter by speciality, location or keyword...'
          />

          <div className='display_top_result'>
            <p>Displaying the top 12 of 2,500 results</p>
          </div>
        </div>

        <div className='cards'>
          {
            ramenProducts &&
            ramenProducts?.results &&
            ramenProducts?.results?.shop &&
            ramenProducts?.results?.shop?.length &&
            ramenProducts?.results?.shop?.map((v: any, idx: number) => (
              <div className='card'>
                <div className='box'>
                  <div className='card_header'>
                    <div className='text_header'>
                      <div className='name_header'>{truncateText(v?.name, 10)}</div>
                      <div className='address_header'>{truncateText(v?.address, 12)}</div>
                    </div>

                    {
                      chekcTopRamenSetIcon(idx)
                    }

                  </div>
                  <div className='image_ramen'>
                    <img src={v?.photo?.pc?.l} alt="image_ramen" />
                  </div>
                  <div className='description'>
                    {truncateText(v?.shop_detail_memo, 35)}
                  </div>
                  <div className='button_find_more'>
                    <button className='find_out_more'>
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
};

export default NotFound;