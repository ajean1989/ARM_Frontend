export const dynamic = 'force-dynamic'

import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import Header from '../components/header';
import Footer from '../components/footer';
import Nav from '../components/nav';

export const metadata: Metadata = {
  title: 'ARM',
}


export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className='flex flex-col justify-stretch'>
          <Header />
          <Nav />
          <main className='grow'>{children}</main>
          <Footer />
        </body>
      </html>
    )
  }