//Andrick
import React, { useState } from 'react';
import './Destinations.css';

// Example destinations
const destinations = [
    {
      name: 'Paris (CDG)',
      image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRcNDlT7ZKhYlHBPSqlCQBI0cZ4-w8YxT8iN90Q5TBYhf7YGYi1LwGdTMlH-vxsbLcvQoUzVZWToabcPXgTXsttMRPghxgOMM0PWerjVw',
      details: `Known as the City of Light, Paris is renowned for its art, fashion, gastronomy, and culture. Iconic landmarks like the Eiffel Tower, Notre-Dame Cathedral, and the Louvre Museum are must-visits.`,
      attractions: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral'],
      bestTime: 'April to June and October to early November (mild weather and fewer crowds)',
    },
    {
      name: 'New York (JFK)',
      image: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQ5qEk8nItGgK-kA-KRn3NMJelFYrbKpmCWZYg6ZFHeCO9wZnwoVckllBw7eY0GDFFWVrtFcs9Pqvop9OIMjxjmZk0fEJNVOKoIxBWMRw',
      details: `New York City is the cultural and financial capital of the world. Explore its vibrant neighborhoods, world-class museums, and iconic landmarks.`,
      attractions: ['Statue of Liberty', 'Times Square', 'Central Park'],
      bestTime: 'April to June and September to early November (pleasant weather)',
    },
    {
      name: 'Tokyo (HND)',
      image: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcR3ZdS6obKdBRdwtFB8OCpnVYt6A4R3wiPJaJT_zEgpnmTF0TZuNjVTGF9mrepjCEr33RvP5qmVfsxu6EbDN56zI1R5i9GzSDz1wU5uVw',
      details: `Tokyo is a city of contrasts, blending ancient traditions with cutting-edge technology. It's famous for its neon-lit streets, historic temples, and exquisite cuisine.`,
      attractions: ['Tokyo Skytree', 'Senso-ji Temple', 'Shibuya Crossing'],
      bestTime: 'March to April (cherry blossom season) and October to November (autumn colors)',
    },
    {
      name: 'Sydney (SYD)',
      image: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRhQPo3Ysz6MlU3FKMyStoyrwusdDi5qXESmCrZom27mfcX11tUffsA9MV7GJYrGQ8dZIjJFMdFFQQK9asNBgazbkqCDCOLjee8Howtrw',
      details: `Sydney is Australia's largest city, known for its stunning harbor, iconic Opera House, and beautiful beaches.`,
      attractions: ['Sydney Opera House', 'Bondi Beach', 'Harbour Bridge'],
      bestTime: 'September to November and March to May (pleasant weather)',
    },
    {
      name: 'Dubai (DXB)',
      image: 'https://lh5.googleusercontent.com/p/AF1QipPrKhKs_aMI_DR8WXZCL3dW81cDHEwhlzBZbarT=w1080-h624-n-k-no',
      details: `Dubai is a city of luxury, boasting modern architecture, desert adventures, and world-class shopping experiences.`,
      attractions: ['Burj Khalifa', 'Desert Safari', 'Palm Jumeirah'],
      bestTime: 'November to March (cooler weather)',
    },
    {
      name: 'London (LHR)',
      image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR5Enzu8EWh5lpOaetK1J9avBzBusLR4VIwXmr9FwWFAOxCA1EgXx2xccbzL2id_YNrQ2y_aRbclPbkEdToRpo-9jgv74BNzyn4CWOXzg',
      details: `London is a global city steeped in history. From its royal palaces to its diverse cultural scene, there's something for everyone.`,
      attractions: ['Big Ben', 'Buckingham Palace', 'Tower of London'],
      bestTime: 'March to May and September to November (mild weather)',
    },
    {
      name: 'Los Angeles (LAX)',
      image: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSyzE0jcoSntVXm7LHDrv-GwxubX_0p8mVs2rrV7WS6IthvG0TI3tHY5JdUmyigal8pbIo8DprDEMO1xwhWF7QaR2IJWSUXlYlQ2MXGLA',
      details: `Los Angeles, the City of Angels, is the entertainment capital of the world. It's famous for its beaches, Hollywood landmarks, and vibrant culture.`,
      attractions: ['Hollywood Sign', 'Santa Monica Pier', 'Griffith Observatory'],
      bestTime: 'March to May and September to November (pleasant temperatures)',
    },
    {
      name: 'Singapore (SIN)',
      image: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTpTF2uqyG5GD0BHnG6QhmIlJ_tObIMmfsK4cHQW6jaxZFJgu3Rh3NdfLoq_TTaPlQLQ3HuN-zJ5unkOdXEVBGvn23CBgqnp-jkmLOPZg',
      details: `Singapore is a modern city-state known for its cleanliness, cultural diversity, and iconic attractions.`,
      attractions: ['Marina Bay Sands', 'Gardens by the Bay', 'Sentosa Island'],
      bestTime: 'February to April (dry season)',
    },
    {
      name: 'Bangkok (BKK)',
      image: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQnUkkA85zehm808n314MTekfMlYOf4dj0WT21TSuc8L0po33YLxih-U-DqrNeIov6a5InjiP6G-4lDriDScPI88AxG4ArAfA5oO4ltmw',
      details: `Bangkok is a bustling city that offers a mix of ancient temples, vibrant street markets, and lively nightlife.`,
      attractions: ['Grand Palace', 'Wat Arun', 'Chatuchak Market'],
      bestTime: 'November to February (cool season)',
    },
    {
      name: 'Rome (FCO)',
      image: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTgiSm1pj6XI2PSaqRaaWxD-nJTrG3pWCpkpRQY8kkiHRxkudGrsZc73GLh3ceX9HeK1tpplFI42Ar8drjmmplz6zZSYeCXy0k1F9EE9Q',
      details: `Rome, the Eternal City, is a treasure trove of history, art, and culture. Walk through ancient ruins and enjoy authentic Italian cuisine.`,
      attractions: ['Colosseum', 'Vatican City', 'Trevi Fountain'],
      bestTime: 'April to June and September to October (pleasant weather)',
    },
    {
      name: 'Istanbul (IST)',
      image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRsZHV6ZAeCySgz5xobMTJGVISNIiqJ-VcTeDmHa4mFjkTJZBSuuHFofjOqXiNbHdl09NKX6IMi5HwcVrQu5o8mWisqHj4e7_bB1550hg',
      details: `Istanbul bridges Europe and Asia, offering a unique mix of cultures, historic sites, and vibrant bazaars.`,
      attractions: ['Hagia Sophia', 'Blue Mosque', 'Grand Bazaar'],
      bestTime: 'April to May and September to November (mild weather)',
    },
    {
      name: 'Barcelona (BCN)',
      image: 'https://lh5.googleusercontent.com/p/AF1QipOxwFRsHTWMWABPquEmNX4bIqjJk8Gu5YYoeFvs=w1080-h624-n-k-no',
      details: `Barcelona is a Mediterranean city known for its stunning architecture, vibrant culture, and sandy beaches.`,
      attractions: ['Sagrada Família', 'Park Güell', 'La Rambla'],
      bestTime: 'May to June and September to October (pleasant weather)',
    },
  ];

const Destinations = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);

  // Handle destination click
  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
  };

  return (
    <div className="destinations-page">
      <h1>Default Destinations</h1>

      {/* Displaying the destinations in a grid */}
      <div className="destinations-grid">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="destination-card"
            onClick={() => handleDestinationClick(destination)}
          >
            <img src={destination.image} alt={destination.name} />
            <h3>{destination.name}</h3>
          </div>
        ))}
      </div>

      {/* Show destination details if selected */}
      {selectedDestination && (
        <div className="destination-details">
          <h2>{selectedDestination.name}</h2>
          <p>{selectedDestination.details}</p>
          <ul>
            {selectedDestination.attractions.map((attraction, idx) => (
              <li key={idx}>{attraction}</li>
            ))}
          </ul>
          <p><strong>Best time to visit:</strong> {selectedDestination.bestTime}</p>
        </div>
      )}
    </div>
  );
};

export default Destinations;
