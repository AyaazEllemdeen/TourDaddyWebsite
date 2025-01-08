import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DayToursGrid = () => {
  const [tours, setTours] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    axios.get('http://localhost:1337/api/daytour')
      .then(response => {
        setTours(response.data.products);  // Assuming your response is in this format
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div style={styles.gridContainer}>
      {tours.map((tour, index) => (
        <div key={index} style={styles.tourCard}>
          <img src={tour.imageUrl} alt={tour.name} style={styles.tourImage} />
          <h3>{tour.name}</h3>
          <p>{tour.shortDescription}</p>
          <p>Price: ${tour.advertisedPrice}</p>
        </div>
      ))}
    </div>
  );
};

// Simple styles to display the tours as squares
const styles = {
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    padding: '20px',
  },
  tourCard: {
    border: '1px solid #ccc',
    padding: '15px',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  tourImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
};

export default DayToursGrid;
