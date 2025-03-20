import LeaderboardMenu from "@/components/leaderboard/leaderboardMenu"

const companyLeaderboard = () => {

    return (
        <div className='flex flex-col min-h-screen w-full'>
            
            {/*Overskrift*/}
            <div className='w-full text-center text-2xl text-bold'>
                <h1>Ledertavle</h1>
            </div>
            <LeaderboardMenu />
            
        </div>
    );
}

export default companyLeaderboard;