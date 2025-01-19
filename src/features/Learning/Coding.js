import React, { useState, useEffect } from 'react';

const DisplayData = () => {
  const [data, setData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null); // To manage the category selected
  const [len,setLen] = useState(0);

  useEffect(() => {
    // Fetch the JSON data from the public folder
    fetch('/convertcsv.json') // Fetch the JSON file from the public directory
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => setData(data)) // Store the data in state
      .catch((error) => console.error('Error fetching data:', error)); // Handle errors
  }, []);

  const handleCategoryClick = (category) => {
    // Toggle display of selected category
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      {Object.keys(data).map((category) => (
        <div key={category}>
            <div className='h-14 '>
              <div className='bg-blue-300 flex justify-between rounded-md h-8'>

          <h2
            onClick={() => handleCategoryClick(category)}
            style={{ cursor: 'pointer',  }}
            className='   pl-3  '
          >
            {category}
            </h2>
           <h2 className='pr-3'>0/{category.length}</h2> 
         
          </div>
          </div>
          {selectedCategory === category && (
            <table border="1" style={{ width: '100%', marginTop: '10px' }}>
              <thead>
                <tr>
                  <th className='mr-6'>Question</th>
                  <th className='mr-6'>Done</th>
                  <th className='mr-6'>Bookmark</th>
                  <th className='mr-6'>Editor</th>
                </tr>
              </thead>
              <tbody>
                {data[category].map((item, index) => (
                  <tr key={index}>
                    <td>{item.Question}</td>
                    <td>
                      <input
                        type="checkbox"
                        checked={item.Done === 'Yes'}
                        readOnly
                      />
                    </td>
                    <td>
                      <span
                        style={{
                          color: item.Bookmark ? 'gold' : 'gray',
                          fontSize: '20px',
                        }}
                      >
                        ★
                      </span>
                    </td>
                    <td>
                      <a
                        href={item.Links}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'underline' }}
                      >
                        Editor
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      ))}
    </div>
  );
};

export default DisplayData;
