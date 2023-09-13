

const Player = ({player, handleAddPlayers}) => {
    const {img, name, role, strike_rate, total_match, nationality, salary} = player;
    // console.log(player);
    return (
        <div className="border-2 p-4 shadow-lg rounded-lg space-y-3">
            <img className="h-[200px] w-full rounded-lg" src={img} alt="" />
            <h2 className="text-2xl font-bold">{name}</h2>
            <div className="text-gray-600 font-bold space-y-2">
            <div className="flex justify-between">
                <p><span className="mr-4">Role: {role}</span></p>
                <p> SR: {strike_rate} </p>
            </div>
            <div className="flex justify-between ">
                <p><span className="mr-4">Match: {total_match}</span></p>
                <p> Salary: <b>{salary}</b> </p>
            </div>
            <p>Nationality: {nationality}</p>
            <div className="text-center">
            <button onClick={() => handleAddPlayers(player)} className="py-2 px-5 text-center font-bold text-[1.25rem] bg-sky-500 text-white rounded-lg">Select</button>
            </div>
            </div>
        </div>
    );
};

export default Player;