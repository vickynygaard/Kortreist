import { useState, useEffect } from 'react'
import LeaderboardItem from '@/components/leaderboard/leaderboardItem'
import LeaderboardContainer from '@/components/leaderboard/leaderboardContainer';
import LeaderboardMenu from '@/components/leaderboard/leaderboardMenu';
import Page from '@/components/page';
import Section from '@/components/section';
import { useApi } from '@/hooks/useApi';
import { usePrefetchMainRoutes } from '@/services/preFetch';


export default function Leaderboard() {

  usePrefetchMainRoutes();

  return (
    <div className='flex flex-col w-full'>
      
      {/*Overskrift*/}
      <div className='w-full text-center'>
      <div className="font-bold text-3xl text-violet-950 pb-6">Toppliste</div>
      </div>
      <LeaderboardMenu />

      <LeaderboardContainer />
    </div>
  );
}
