import { useState, useEffect, useMemo } from 'react';
import { useQuery } from 'graphql-hooks';
import { OFFERT_QUERY } from '../queries/offertQuery'

const useOffertsPage = () => {
  const { data } = useQuery(OFFERT_QUERY);
  const allOfferts = useMemo(() => data?.allSells || [], [data]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    setSearchQuery('');
  }, [data]);

  const filteredOfferts = useMemo(() => {
    if (!searchQuery) {
      return allOfferts;
    }
    const query = searchQuery.toLowerCase();
    return allOfferts.filter((offert) => offert.nazwa.toLowerCase().includes(query));
  }, [searchQuery, allOfferts]);

  return { filteredOfferts, handleInputChange, searchQuery };
};

export default useOffertsPage;