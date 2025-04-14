import { useState } from 'react';

export default function Admin() {
  const [jsonData, setJsonData] = useState('{ "message": "Edit me!" }');

  const saveData = async () => {
    await fetch('/api/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: jsonData,
    });
    alert('Data saved!');
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Admin Panel</h1>
      <textarea
        style={{ width: '100%', height: 200 }}
        value={jsonData}
        onChange={e => setJsonData(e.target.value)}
      />
      <button onClick={saveData} style={{ marginTop: 10 }}>Save</button>
    </div>
  );
}