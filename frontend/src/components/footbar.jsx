
function SubscribeSection() {
  return (
    <div className="flex flex-col items-center justify-end min-h-0 bg-white pb-3 space-y-2">
      <hr className="w-full max-w-3xl border-t-2 border-gray-300 " />
      {/* Subscription Content */}
      <div className="flex flex-col md:flex-row items-start justify-between w-full max-w-3xl p-6 space-y-6 md:space-y-0 md:space-x-6">
        {/* Left Side - Heading and Description */}
        <div className="flex flex-col space-y-2 ">
          <h2 className="text-2xl font-bold">Subscribe for Updates</h2>
          <p className="text-gray-600">Stay informed about new venues</p>
        </div>

        {/* Right Side - Input and Button */}
        <div className="flex flex-col space-y-3 w-full md:w-1/2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded p-2 w-full"
          />
          <p className="text-xs text-gray-500"> We&apos;ll send you the latest updates</p>
          <button className="bg-black text-white font-semibold py-2 rounded mt-2 hover:bg-gray-800 ">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="mt-16 flex space-x-6 text-sm text-gray-600 mt-*">
         <a href="#" className="hover:underline">Contact Us</a>
         <a href="#" className="hover:underline">Privacy Policy</a>
         <a href="#" className="hover:underline">Terms of Service</a>
      </div>
    </div>
  );
}

export default SubscribeSection;
