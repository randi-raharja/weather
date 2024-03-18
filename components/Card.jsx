export default function Card(prop) {
  return (
    // ada suhu, location, icon weather
    <div className=" flex w-fit flex-col rounded-xl bg-white/0 p-2 text-white mb-2 shadow-lg backdrop-blur-xl ">
      <h4 className="mb-2 border-b border-b-white text-center font-semibold">
        {prop.time}
      </h4>
      <div className="rounded-lg bg-white/30 p-4 text-5xl backdrop-blur-md">
        {prop.icon}
      </div>
      <h4 className="text-center font-bold text-lg">{prop.temp}</h4>
    </div>
  );
}
