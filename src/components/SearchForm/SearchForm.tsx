import { useState } from 'react';
import arrowIcon from '/images/icon-arrow.svg';
import './SearchForm.css';

interface SearchFormProps {
  onSearch: (query: string) => void;
  loading: boolean;
}

export function SearchForm({ onSearch, loading }: SearchFormProps) {
  const [query, setQuery] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!loading) onSearch(query.trim());
  }

  return (
    <form className="search-form" onSubmit={handleSubmit} role="search">
      <label htmlFor="search-input" className="search-form__label">
        Search for any IP address or domain
      </label>
      <div className="search-form__controls">
        <input
          id="search-input"
          className="search-form__input"
          type="text"
          placeholder="Search for any IP address or domain"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="IP address or domain"
          autoComplete="off"
        />
        <button
          className="search-form__btn"
          type="submit"
          aria-label="Search"
          disabled={loading}
        >
          <img src={arrowIcon} alt="" aria-hidden="true" />
        </button>
      </div>
    </form>
  );
}
