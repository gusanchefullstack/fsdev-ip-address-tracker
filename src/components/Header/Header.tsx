import { SearchForm } from '../SearchForm/SearchForm';
import { InfoCard } from '../InfoCard/InfoCard';
import type { IpData } from '../../types/ip';
import './Header.css';

interface HeaderProps {
  onSearch: (query: string) => void;
  loading: boolean;
  ipData: IpData | null;
}

export function Header({ onSearch, loading, ipData }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="site-header__content">
        <h1 className="site-header__title">IP Address Tracker</h1>
        <SearchForm onSearch={onSearch} loading={loading} />
      </div>
      <InfoCard data={ipData} loading={loading} />
    </header>
  );
}
