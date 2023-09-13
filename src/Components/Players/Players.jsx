import { useEffect, useState } from "react";
import Player from "../Player/Player";
import Count from "../Count/Count";


const Players = () => {

    const [players, setPlayers] = useState([]);
    const [player, setPlayer] = useState([]);
    const [remainingCost, setRemainingCost] = useState(0);
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        fetch('players.json')
        .then(res => res.json())
        .then(data =>setPlayers(data))
    },[])

    
    const handleAddPlayers = (addPlayer) => {
        // console.log(addPlayer);
        // console.log(players);
        let cost = addPlayer.salary;
        const isFound = player.find(item => item.id == addPlayer.id);
        if (isFound) {
            return alert('Already selected, Please choose another player')
        }
        else{
            player.forEach(item => {
                cost = cost + item.salary;
            })
            
            const remaining = 9000000 - cost;
            console.log(remaining);
            if (remaining <= 0) {
                return alert('Your budget is not enough to select the player')
            }
            else{
                setRemainingCost(remaining)
                setTotalCost(cost);
                const newPlayer = [...player,addPlayer];
                setPlayer(newPlayer);
            }
            
        }
        
    }


    return (
        <div>
            <div className="flex gap-4 mt-10" >
                <div className="w-9/12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        players.map(player => <Player 
                            key={player.id}
                            player={player}
                            handleAddPlayers={handleAddPlayers}
                            ></Player>)
                    }
                </div>
                <div className="w-3/12">
                    <div className="text-[1.25rem] text-gray-700 font-bold bg-gray-300 rounded-lg p-4 mb-5">
                        <div className="bg-white rounded-lg p-4">
                        <h2>Total Budget: 9000000</h2>
                    <h2>Total Cost: {totalCost}</h2>
                    <h2>Remaining Cost: {remainingCost}</h2>
                        </div>
                    
                    </div>
                    <div className="bg-gray-300 rounded-lg px-4 py-5">
                    <h2 className="text-2xl font-bold">Total Player: {player.length}</h2>
                {
                    player.map(player => <Count 
                        key={player.id}
                        player={player}
                        ></Count>)
                }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Players;