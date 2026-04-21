import { SearchForm } from '../SearchForm/SearchForm';
import './Header.css';

interface HeaderProps {
  onSearch: (query: string) => void;
  loading: boolean;
}

export function Header({ onSearch, loading }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="site-header__content">
        <h1 className="site-header__title">IP Address Tracker</h1>
        <SearchForm onSearch={onSearch} loading={loading} />
      </div>
    </header>
  );
}
