import React, { useEffect, useState } from 'react';
import Nav from '../parts/Nav';
import filePath from '../../assets/RegulationsPage/regulamin.md';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import '../../styles/RegulationsPage.css';

const RegulationsPage = () => {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    fetch(filePath)
      .then((response) => response.text())
      .then((data) => setMarkdownContent(data))
      .catch((error) => console.error('Błąd czytania pliku', error));
  }, []);

  return (
    <>
      <Nav />
      <div className='markdown'>
        <ReactMarkdown children={markdownContent} />
      </div>
    </>
  );
};

export default RegulationsPage;
