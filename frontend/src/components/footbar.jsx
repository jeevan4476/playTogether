function SubscribeSection() {
  return (
      <div className="bg-indigo-50 p-6 mt-12">
          <div className="flex flex-col md:flex-row items-center justify-between mx-auto max-w-4xl space-y-6 md:space-y-0">
              {/* Heading and Description */}
              <div>
                  <h2 className="text-2xl font-bold text-indigo-600">Subscribe for Updates</h2>
                  <p className="text-gray-600">Stay informed about new venues and events</p>
              </div>
              {/* Input and Button */}
              <div className="flex items-center w-full md:w-1/2 space-x-4">
                  <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                  <button className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700">Subscribe</button>
              </div>
          </div>
      </div>
  );
}

export default SubscribeSection;
