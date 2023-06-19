const Copyright = () => {
  return (
    <section className="w-full border-t-2 border-black my-4">
      <div className="w-11/12 mx-auto mt-5 flex flex-col gap-4 md:flex-row justify-between">
        <div className="flex  gap-2 md:flex-col">
          <h1>Copyright © 2022</h1>
          <h1>Dine Market</h1>
        </div>
        <div className="flex gap-2 md:flex-col">
          <h1>Design by</h1>
          <h1 className="font-bold">Osama Malik</h1>
        </div>
        <div className="flex gap-2 md:flex-col">
          <h1>Code by</h1>
          <h1 className="font-bold">malikhax on github</h1>
        </div>
      </div>
    </section>
  );
};
export default Copyright;
