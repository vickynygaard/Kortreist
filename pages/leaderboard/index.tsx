import { useState, useEffect } from 'react'
import LeaderboardItem from '@/components/leaderboard/leaderboardItem'
import LeaderboardContainer from '@/components/leaderboard/leaderboardContainer';
import LeaderboardMenu from '@/components/leaderboard/leaderboardMenu';

const Leaderboard = () => {

  return (
    <div className='flex flex-col w-full'>
      
      {/*Overskrift*/}
      <div className='w-full text-center text-2xl font-medium pb-4'>
        <h1>Ledertavle</h1>
      </div>
      <LeaderboardMenu />

      <LeaderboardContainer />
      

    </div>
  );
}

export default Leaderboard;