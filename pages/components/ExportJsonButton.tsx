// components/ExportJsonButton.tsx

import React from 'react';
import axios from 'axios';

interface ExportJsonButtonProps {
  name: string;
}

const ExportJsonButton: React.FC<ExportJsonButtonProps> = ({ name }) => {
  const handleExport = async () => {
    try {
      // Send a POST request to the API route to fetch data to export
      const response = await axios.post('/api/export', { name });
      
      // Extract the data from the response
      const data = response.data;
        console.log(data);
      // Convert data to JSON format
      const jsonData = JSON.stringify(data, null, 2);

      // Create a Blob object with the JSON content
      const blob = new Blob([jsonData], { type: 'application/json' });

      // Create a temporary URL for the Blob object
      const url = window.URL.createObjectURL(blob);

      // Create a link element to trigger the download
      const link = document.createElement('a');
      link.href = url;
      link.download = 'ExportAsJson.json';

      // Click the link to trigger the download
      link.click();

      // Cleanup: Revoke the temporary URL
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error exporting data:', error);
    }
  };

  return (
    <button 
      onClick={handleExport} 
      className='bg-Button hover:bg-[#60435F] text-Button_text font-bold py-2 px-2 rounded mt-2'
    >
      Export to Json
    </button>
  );
}

export default ExportJsonButton;
