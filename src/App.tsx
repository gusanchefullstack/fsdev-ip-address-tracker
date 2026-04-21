import { useState, useEffect } from 'react';
import { Header } from './components/Header/Header';
import { MapView } from './components/MapView/MapView';
import { getIpData } from './services/ipify';
import type { IpData } from './types/ip';
import './styles/global.css';
import './App.css';

export default function App() {
  const [ipData, setIpData] = useState<IpData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function fetchIpData(query?: string) {
    setLoading(true);
    setError(null);
    try {
      const data = await getIpData(query);
      setIpData(data);
    } catch {
      setError('Could not find information for that IP address or domain.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchIpData();
  }, []);

  return (
    <>
      <Header onSearch={fetchIpData} loading={loading} ipData={ipData} />
      {error && (
        <p className="app__error" role="alert">
          {error}
        </p>
      )}
      <main className="app__main">
        <MapView ipData={ipData} />
      </main>
      <footer className="attribution">
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a
          href="https://github.com/gusanchefullstack"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gustavo Sanchez
        </a>
        .
      </footer>
    </>
  );
}
