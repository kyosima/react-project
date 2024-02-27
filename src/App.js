export default function App() {
  return (
    <div className="bg-[#A9C5DE]">
      <div class="grid grid-cols-12 gap-5 container mx-auto p-6 md:px-6">
        <div class="bg-vy-jang flex-wrap space-between sticky top-0 md:col-span-12 md:hidden h-screen sm:col-span-12 sm:hidden lg:col-span-2 lg:flex rounded-xl ">
          <div className="h-1/2 w-full">
            <div className="flex justify-center items-center h-1/2">
              <img
                src="/images/home.png"
                alt="vyjang thui"
                className="md:w-1/2 sm:w-1/3 lg:w-1/6"
              ></img>
            </div>
            <div className="w-full flex flex-wrap justify-between">
              <div className="px-10 py-5 inline-flex hover:bg-[#EBF5FF]">
                <img
                  src="/images/dashboard.png"
                  alt="dashboard"
                  className="w-2/12"
                ></img>
                <strong className=" pl-3">Dashboard</strong>
              </div>
              <div className="px-10 py-5 inline-flex hover:bg-[#EBF5FF]">
                <img
                  src="/images/room.png"
                  alt="dashboard"
                  className="w-2/12"
                ></img>
                <strong className=" pl-3">Room</strong>
              </div>
              <div className="px-10 py-5 inline-flex hover:bg-[#EBF5FF]">
                <img
                  src="/images/device.png"
                  alt="dashboard"
                  className="w-2/12"
                ></img>
                <strong className=" pl-3">Devices</strong>
              </div>
              <div className="px-10 py-5 inline-flex hover:bg-[#EBF5FF]">
                <img
                  src="/images/statistic.png"
                  alt="dashboard"
                  className="w-2/12"
                ></img>
                <strong className="pl-3">Statistics</strong>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center">
            <div className="px-10 py-3 inline-flex hover:bg-[#EBF5FF]">
              <img
                src="/images/logout.png"
                alt="dashboard"
                className="w-2/12 object-contain"
              ></img>
              <strong className="pl-3">Logout</strong>
            </div>
          </div>
        </div>
        <div class="md:col-span-12 sm:col-span-12 lg:col-span-7 rounded-xl">
          <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="">
              <form class="max-w-md mx-auto">
                <label
                  for="default-search"
                  class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                  <input
                    type="search"
                    id="default-search"
                    class="block w-full p-4 ps-10 text-sm text-gray-900 border rounded-3xl bg-[#F0F0F0]  dark:text-white"
                    placeholder="Search"
                    required
                  />
                  <button
                    type="submit"
                    class=" absolute end-2.5 bottom-2.5 focus:ring-4 text-sm px-4 py-2"
                  >
                    <svg
                      class="w-4 h-4 text-black dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
            <div className="flex items-center justify-end">
              <p className="text-right text-sm font-bold">
                Monday, 11 December 2023
              </p>
            </div>
            <div className=" bg-[#F0F0F0] sm:col-span-1 md:col-span-1 lg:col-span-2 rounded-xl  grid grid-cols-4 gap-5 p-5">
              <div className="bg-white h-32 rounded-2xl sm:col-span-2 md:col-span-1 lg:col-span-1">
                <div className=" p-3">
                  <div className="flex flex-wrap justify-around">
                    <strong className=" text-sm">Living Room</strong>
                    <svg
                      class="w-7 h-7 text-black dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-width="2"
                        d="M6 12h0m6 0h0m6 0h0"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-wrap justify-evenly">
                    <img
                      src="/images/living.png"
                      className="w-3/12 object-contain"
                    ></img>

                    <div className=" content-center">
                      <p className="text-3xl text-center">150</p>
                      <p className="text-center text-[#828282]">kWh</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white h-32 rounded-2xl sm:col-span-2 md:col-span-1 lg:col-span-1">
                <div className=" p-3">
                  <div className="flex flex-wrap justify-around">
                    <strong className=" text-sm">Bedroom</strong>
                    <svg
                      class="w-7 h-7 text-black dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-width="2"
                        d="M6 12h0m6 0h0m6 0h0"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-wrap justify-evenly">
                    <img
                      src="/images/bed.png"
                      className="w-3/12 object-contain"
                    ></img>

                    <div className=" content-center">
                      <p className="text-3xl text-center">150</p>
                      <p className="text-center text-[#828282]">kWh</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white h-32 rounded-2xl sm:col-span-2 md:col-span-1 lg:col-span-1">
                <div className=" p-3">
                  <div className="flex flex-wrap justify-around">
                    <strong className=" text-sm">Bathroom</strong>
                    <svg
                      class="w-7 h-7 text-black dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-width="2"
                        d="M6 12h0m6 0h0m6 0h0"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-wrap justify-evenly">
                    <img
                      src="/images/bath.png"
                      className="w-3/12 object-contain"
                    ></img>

                    <div className=" content-center">
                      <p className="text-3xl text-center">150</p>
                      <p className="text-center text-[#828282]">kWh</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white h-32 rounded-2xl sm:col-span-2 md:col-span-1 lg:col-span-1">
                <div className=" p-3">
                  <div className="flex flex-wrap justify-around">
                    <strong className=" text-sm">Kitchen</strong>
                    <svg
                      class="w-7 h-7 text-black dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-width="2"
                        d="M6 12h0m6 0h0m6 0h0"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-wrap justify-evenly">
                    <img
                      src="/images/kitchen.png"
                      className="w-3/12 object-contain"
                    ></img>

                    <div className=" content-center">
                      <p className="text-3xl text-center">150</p>
                      <p className="text-center text-[#828282]">kWh</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white h-32 md:col-span-12 sm:col-span-12 lg:col-span-3 rounded-xl"></div>
      </div>
    </div>
  );
}
