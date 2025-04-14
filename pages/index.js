import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>JSON Data Viewer</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
