import { useState, useEffect } from 'react'
import LeaderboardItem from '@/components/leaderboard/leaderboardItem'
import LeaderboardContainer from '@/components/leaderboard/leaderboardContainer';
import LeaderboardMenu from '@/components/leaderboard/leaderboardMenu';
import Page from '@/components/page';
import Section from '@/components/section';
import Footer from '@/components/footer';

export default function Leaderboard() {
//BUG Can scroll on the side of the page
  return (
    <div className='flex flex-col  w-full'>
      
      {/*Overskrift*/}
      <div className='w-full text-center text-2xl font-medium pb-4'>
        <h1>Ledertavle</h1>
      </div>
      <LeaderboardMenu />

      <LeaderboardContainer />

      <Footer />
    </div>
  );
}
