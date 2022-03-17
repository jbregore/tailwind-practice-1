import { CheckIcon } from "@heroicons/react/solid";
import React from "react";

const NotifCard = () => {
  return (
    <div className="flex pr-2">
      <div>
        <CheckIcon className="w-7 mr-4 text-green-600" />
      </div>
      <div>
        <h3 className="font-bold text-lg ">Notifications</h3>
        <p className="text-lg pt-2 pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          libero nesciunt quidem fugit ducimus veritatis!
        </p>
      </div>
    </div>
  );
};

const AllInOne = () => {
  const notif = 8;
  return (
    <div name="platforms" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-4xl font-bold text-center">All In One Platform</h2>
        <p className="text-2xl py-8 text-gray-500 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A repudiandae
          autem commodi ipsa distinctio quia officia, magni omnis molestiae
          necessitatibus?
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {[...Array(notif)].map((elementInArray, index) => (
            <NotifCard />
          ))}
          {/* <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg ">Notifications</h3>
              <p className="text-lg pt-2 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                libero nesciunt quidem fugit ducimus veritatis!
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg ">Notifications</h3>
              <p className="text-lg pt-2 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                libero nesciunt quidem fugit ducimus veritatis!
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg ">Notifications</h3>
              <p className="text-lg pt-2 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                libero nesciunt quidem fugit ducimus veritatis!
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg ">Notifications</h3>
              <p className="text-lg pt-2 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                libero nesciunt quidem fugit ducimus veritatis!
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg ">Notifications</h3>
              <p className="text-lg pt-2 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                libero nesciunt quidem fugit ducimus veritatis!
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg ">Notifications</h3>
              <p className="text-lg pt-2 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                libero nesciunt quidem fugit ducimus veritatis!
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg ">Notifications</h3>
              <p className="text-lg pt-2 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                libero nesciunt quidem fugit ducimus veritatis!
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg ">Notifications</h3>
              <p className="text-lg pt-2 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                libero nesciunt quidem fugit ducimus veritatis!
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AllInOne;
