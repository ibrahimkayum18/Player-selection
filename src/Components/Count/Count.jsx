

const Count = ({player}) => {
    // console.log(player);
    const {img, name} = player;
    return (
        <div className="flex gap-4 items-center my-2 py-2 bg-white rounded-lg pl-4">
            <img className="w-14 h-14 rounded-full" src={img} alt="" />
            <h2 className="text-[1.25rem] font-semibold">{name}</h2>
        </div>
    );
};

export default Count;