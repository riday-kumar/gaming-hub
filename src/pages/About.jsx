import React from "react";
import soldier from "../assets/soldier.jpg";
import Newsletter from "../components/Newsletter";
import PageHeading from "../components/PageHeading";

const About = () => {
  return (
    <div className="text-white space-y-20">
      <title>HKS | About Us</title>
      <PageHeading heading={"About Us"}></PageHeading>
      <div className="w-5/6 mx-auto grid items-center lg:grid-cols-2 gap-10">
        <div className="space-y-7 text-justify">
          <h2 className="text-3xl max-md:text-left md:text-[40px] font-bold">
            The Best Gaming Studio For All Gamer.{" "}
          </h2>
          <div>
            <h3 className="text-2xl font-bold">Live Streaming</h3>
            <p>
              Join the action with our live streaming hub! Watch top gamers
              battle it out in real-time, from intense esports tournaments to
              chill casual play. Interact with streamers, join the chat, and
              catch every epic moment as it happens. Level up your gaming
              experience with our vibrant community!
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Great Tournament</h3>
            <p>
              "Catch every heart-pounding moment with our Great Tournament live
              streams! Watch elite gamers compete in epic showdowns, from
              nail-biting finals to clutch plays. Join the live chat, cheer for
              your favorites, and dive into the ultimate gaming spectacle. Don’t
              miss the action—stream now!"
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Gaming News</h3>
            <p>
              "Stay in the loop with the hottest gaming news! From blockbuster
              releases like Pokémon Legends: Z-A to indie gems at Steam Next
              Fest, we’ve got the scoop. Catch updates on Battlefield 6’s epic
              battles and Ghost of Yotei’s samurai saga. Tune in for the latest
              drops and gaming buzz!"
            </p>
          </div>
        </div>
        <div>
          <img className="rounded-md" src={soldier} alt="" />
        </div>
      </div>
      <Newsletter></Newsletter>
    </div>
  );
};

export default About;
