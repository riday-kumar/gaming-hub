import { FiArrowRight, FiChevronRight } from "react-icons/fi";

const Tournament = () => {
  const tournaments = [
    {
      title: "Football Community Cup",
      game: "5v5 Bomb Defusal",
      date: "Oct 28, 2024",
      time: "6:00 PM EST",
      prize: "$500 Prize",
      status: "Open • 816 Teams",
      statusColor: "text-green-400",
      icon: "https://play-lh.googleusercontent.com/Z3686VO4ILSGo_UiDPSk3i2oPf6KzCRNZhpOo5_7pTTq3JYhcUNsm1EMrK6mG_xiOBQg=w526-h296-rw",
    },
    {
      title: "Tennis League",
      game: "2v2 Soccer",
      date: "Oct 29, 2024",
      time: "8:00 PM EST",
      prize: "$250 Prize",
      status: "Full • 32/32 Teams",
      statusColor: "text-red-400",
      icon: "https://play-lh.googleusercontent.com/DQ5wGfAO7UktULlwp3niOGRqD8goGgcPYATYr-kBAsEHjFzaQE2R_4u5-pOPF3Dh0g",
    },
    {
      title: "Clash of Clans",
      game: "5v5 Summoner's Rift",
      date: "Nov 01, 2024",
      time: "7:30 PM EST",
      prize: "$1,500 Prize",
      status: "Open • 416 Teams",
      statusColor: "text-green-400",
      icon: "https://play-lh.googleusercontent.com/sFmWfYbYp_2ea7VRMTnwd3gjIBrPGXHj_d_ab1_k1q1p2OMk4riGMF1vqxdhONOtTYOt_BVpk7a4AYcKU68LNGQ",
    },
    {
      title: "IPL",
      game: "5v5 Competitive",
      date: "Nov 03, 2024",
      time: "2:00 PM EST",
      prize: "$3,000 Prize",
      status: "Open • 1032 Teams",
      statusColor: "text-green-400",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgoPHVP0c-zF4Y5rg2dIHrD1S3Ndw12HsHtg&s",
    },
  ];

  return (
    <section className="w-5/6 mx-auto text-white py-10">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Featured Tournaments</h2>
      </div>

      {/* Featured Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Card 1 */}
        <div className="bg-[#13291f] rounded-2xl overflow-hidden">
          <img
            src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2507950/192e49c1f0a1a2e1ec524fbbeb041af29de0a4e8/capsule_616x353.jpg?t=1764036796"
            className="h-40 w-full object-cover"
            alt=""
          />
          <div className="p-4 space-y-3">
            <h3 className="font-semibold">Delta Force</h3>
            <p className="text-sm text-gray-400">Oct 24 • 8:00 PM EST</p>
            <span className="text-green-400 text-sm">$10,000 Prize Pool</span>

            <button className="w-full mt-3 bg-[#ffa826] text-black py-2 rounded-xl font-medium flex items-center justify-center gap-2">
              Join Tournament <FiArrowRight />
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#13291f] rounded-2xl overflow-hidden">
          <img
            src="https://play-lh.googleusercontent.com/RFAnr3o80BE2JaecvzLpYhftygw4WE6rOaWFIgMX2VMnA_tdZcW0RTkHpCkiwXmlCho=w526-h296-rw"
            className="h-40 w-full object-cover"
            alt=""
          />
          <div className="p-4 space-y-3">
            <h3 className="font-semibold">Metal Storm</h3>
            <p className="text-sm text-gray-400">Live Now • 12.5k Viewers</p>
            <span className="text-green-400 text-sm">$5,000 Prize Pool</span>

            <button className="w-full mt-3 bg-[#ffa826] text-black py-2 rounded-xl font-medium">
              Watch Stream
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#13291f] rounded-2xl overflow-hidden">
          <img
            src="https://play-lh.googleusercontent.com/B3YoscTh85gvWwlVXFHz6g6-gX091xGBcX7Hey1r7Jmr7uQnfkAzYxnaDosYNuKz7w=w526-h296-rw"
            className="h-40 w-full object-cover"
            alt=""
          />
          <div className="p-4 space-y-3">
            <h3 className="font-semibold">Champion Cup</h3>
            <p className="text-sm text-gray-400">Starts in 2h 45m</p>
            <span className="text-green-400 text-sm">$2,000 Prize Pool</span>

            <button className="w-full mt-3 bg-[#ffa826] text-black py-2 rounded-xl font-medium">
              Register Now
            </button>
          </div>
        </div>
      </div>

      {/* Upcoming Tournaments */}
      <div className="space-y-4">
        {tournaments.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-[#13291f] p-4 rounded-2xl hover:bg-[#173527] transition"
          >
            {/* Left */}
            <div className="flex items-center gap-4">
              <img
                src={item.icon}
                alt={item.title}
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <h4 className="font-medium">{item.title}</h4>
                <p className="text-sm text-gray-400">
                  {item.game} &nbsp;•&nbsp; {item.date} &nbsp;•&nbsp;{" "}
                  {item.time}
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-[#ffa826] font-semibold">{item.prize}</p>
                <p className={`text-xs ${item.statusColor}`}>{item.status}</p>
              </div>

              <button className="w-9 h-9 rounded-full bg-[#1e3d2e] flex items-center justify-center">
                <FiChevronRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tournament;
