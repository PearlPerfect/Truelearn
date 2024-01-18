import React from 'react'
import Dashboard from '@/Components/dashboard/Dashboard';
import Head from 'next/head';
import Navbar from '@/Components/navbar/navbar';
export default function Board() {
  return (
    <>
    <Head>
        <title>TrueLearn|| Dashboard</title>
    </Head>
    <Navbar/>
    <div><Dashboard/></div>
    </>
  )
}