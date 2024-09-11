import React from "react";
import { Button } from "../ui/button";

function SubScribe() {
  return (
    <section
      id="join"
      className="bg-[#4E3FC0] mx-96 -mt-28 px-0 py-10 w-auto text-white"
    >
      <div className="container">
        <div className="gap-8 grid grid-cols-2">
          {/* Text Section */}
          <div className="flex flex-col justify-center">
            <h5 className="font-semibold text-lg">
              Stay connected Stay updated
            </h5>
            <p>
              Subscribe to get all teh latest Lumanagi updates, events and
              insights
            </p>
          </div>

          {/* Subscriptin Form */}
          <div>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="p-2 rounded-md text-black"
              />
              <Button className="bg-blue-500 px-4 py-2 rounded-md text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubScribe;
