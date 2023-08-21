import React from 'react';
import Footer from './Footer';

const Page = ({ children }) => (
  <>
    <main>{children}</main>
    <Footer />
  </>
);

export default Page;
