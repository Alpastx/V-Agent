// components/ExportButton.tsx

import React from 'react';
import axios from 'axios';

interface ExportButtonProps {
  name: string;
}

const ExportButton: React.FC<ExportButtonProps> = ({ name }) => {
  const handleExport = async () => {
    try {
      // Send a POST request to the API route to fetch data to export
      const response = await axios.post('/api/export', { name });
      
      // Extract the data from the response
      const data = response.data;

      // Convert JSON data to CSV format
      const csvContent = convertJsonToCsv(data);

      // Create a Blob object with the CSV content
      const blob = new Blob([csvContent], { type: 'text/csv' });

      // Create a temporary URL for the Blob object
      const url = window.URL.createObjectURL(blob);

      // Create a link element to trigger the download
      const link = document.createElement('a');
      link.href = url;
      link.download = 'export.csv';

      // Click the link to trigger the download
      link.click();

      // Cleanup: Revoke the temporary URL
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error exporting data:', error);
    }
  };

  // Function to convert JSON data to CSV format
  const convertJsonToCsv = (data: any[]) => {
    if (!data || data.length === 0) return '';

    // Extract all unique keys including nested keys
    const keys = Array.from(new Set(data.flatMap(obj => Object.keys(flatten(obj)))));

    // Generate CSV rows
    const csvRows = [];
    csvRows.push(keys.join(','));

    for (const row of data) {
      const values = keys.map(key => {
        const value = getValueByKey(row, key);
        return typeof value === 'object' ? JSON.stringify(value) : value;
      });
      csvRows.push(values.join(','));
    }

    return csvRows.join('\n');
  };

  // Function to flatten nested objects recursively
  const flatten = (obj: any, prefix = '') => {
    return Object.keys(obj).reduce((acc: any, key: string) => {
      const pre = prefix.length ? prefix + '_' : '';
      if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        Object.assign(acc, flatten(obj[key], pre + key));
      } else {
        acc[pre + key] = obj[key];
      }
      return acc;
    }, {});
  };

  // Function to get value by key including nested keys
  const getValueByKey = (obj: any, key: string) => {
    const keys = key.split('_');
    let value = obj;
    for (const k of keys) {
      if (value && typeof value === 'object' && value.hasOwnProperty(k)) {
        value = value[k];
      } else {
        value = undefined;
        break;
      }
    }
    return value;
  };

  return (
    <button 
      onClick={handleExport} 
      className='bg-Button hover:bg-[#60435F] text-Button_text font-bold py-2 px-2 rounded mt-4 mr-2 '
    >
      Export to CSV
    </button>
  );
}

export default ExportButton;
