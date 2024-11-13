
function Carousel() {
  return (
    <div className="flex flex-col items-center space-y-4">
  <h1 className="font-bold text-center ">HIGHLIGHTS</h1>
  <div className="bg-gray-200 w-1/2 h-64 flex flex-col items-center justify-center rounded-lg ">
    <p className="text-center text-lg font-medium"></p>
    {/* Pagination Dots */}
    {/* <div className="mt-8 flex items-center space-x-2">
      <span className="h-1.5 w-4 bg-gray-400 rounded-full"></span>
      <span className="h-1.5 w-1.5 bg-gray-600 rounded-full"></span>
      <span className="h-1.5 w-1.5 bg-gray-400 rounded-full"></span>
    </div> */}
  </div>
  <hr className="w-full "></hr>
  <div className="w-full">
    <p className="font-bold text-base/10 ">Discover New Games</p>
    <p className="">find exciting games to play and connect with other players</p>
    <input className="mt-3 bg-gray-100 pt-1 p-2 mb-4" placeholder="Enter Location..."></input>
    <hr className="w-full  "></hr>

    
  </div>
</div>

  );
}

export default Carousel;
