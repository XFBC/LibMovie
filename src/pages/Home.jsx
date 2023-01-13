import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from '../components/Container';
import { DrawerMenu } from '../components/DrawerMenu';
import MovieCard from '../components/MovieCard';
import { api } from '../services/axios';
import Search from '/src/components/Search.jsx';
import { homeBanner } from './../constants/index';

import { SwiperHero } from '../components/Swipers/SwiperHero';
import { TrendingFilms } from '../components/TrendingFilms';
import { TopRated } from '../components/TopRated';

export default function Home() {
  return (
    <>
      <div className="">
        <Container>
          <Search />
          <SwiperHero />
          <TrendingFilms />
          <TopRated />
        </Container>
      </div>
    </>
  );
}
