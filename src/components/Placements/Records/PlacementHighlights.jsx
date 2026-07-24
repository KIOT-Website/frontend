import React from "react";
import {
  Building2,
  UsersRound,
  Trophy,
  IndianRupee,
  TrendingUp,
} from "lucide-react";

const placementStats = [
  {
    title: "COMPANIES VISITED",
    value: "150+",
    description: "Top recruiters across diverse industries.",
    icon: Building2,
    theme: "blue",
  },
  {
    title: "TOTAL STUDENTS PLACED",
    value: "679",
    description: "Empowering students to build careers.",
    icon: UsersRound,
    theme: "yellow",
  },
  {
    title: "HIGHEST SALARY",
    value: "13.00 LPA",
    description: "Outstanding packages from organizations.",
    icon: Trophy,
    theme: "blue",
  },
  {
    title: "AVERAGE SALARY",
    value: "4.10 LPA",
    description: "Strong career growth for all students.",
    icon: IndianRupee,
    theme: "yellow",
  },
];

const PlacementHighlights = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8faff] py-10 lg:py-14">
      {/* Background decoration */}
      <div className="absolute left-0 top-16 grid grid-cols-4 gap-4 opacity-20">
        {Array.from({ length: 24 }).map((_, index) => (
          <span
            key={index}
            className="h-2 w-2 rounded-full bg-[#17439b]"
          />
        ))}
      </div>


      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <h2 className="text-2xl font-black tracking-tight md:text-3xl lg:text-4xl">
            <span
              className="text-[#123d91]"
              style={{
                textShadow: "0 4px 0 rgba(8,45,115,.12)",
              }}
            >
              Driving Careers.
            </span>

            <span
              className="ml-3 text-[#ffbd00]"
              style={{
                textShadow: "0 4px 0 rgba(200,140,0,.12)",
              }}
            >
              Delivering Success.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
            Strong industry connections and career-focused training continue to
            open doors to exceptional opportunities.
          </p>

          <div className="mt-7 flex items-center justify-center gap-2">
            <span className="h-1.5 w-16 rounded-full bg-[#123d91]" />
            <span className="h-1.5 w-16 rounded-full bg-[#ffbd00]" />
          </div>
        </div>

        {/* Background growth chart */}
        <div className="pointer-events-none absolute right-12 top-36 hidden items-end gap-4 opacity-[0.12] lg:flex">
          {[80, 130, 190, 270].map((height, index) => (
            <div
              key={index}
              className="w-16 rounded-t-2xl border border-white bg-[#123d91]"
              style={{ height }}
            />
          ))}

          <TrendingUp
            size={180}
            strokeWidth={1.5}
            className="absolute -left-10 top-4 text-[#123d91]"
          />
        </div>

        {/* Cards */}
        <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {placementStats.map((item, index) => {
            const Icon = item.icon;
            const isBlue = item.theme === "blue";

            return (
              <article
                key={index}
                className="group relative min-h-[390px] rounded-[30px]"
              >
                {/* 3D depth layer */}
                <div
                  className={`absolute inset-0 translate-x-3 translate-y-3 rounded-[30px] ${
                    isBlue ? "bg-[#123d91]" : "bg-[#ffbd00]"
                  }`}
                />

                {/* Card */}
                <div className="relative flex h-full min-h-[390px] flex-col overflow-hidden rounded-[30px] border border-white/80 bg-white px-7 py-8 shadow-[0_20px_45px_rgba(15,45,100,0.18)] transition-all duration-300 group-hover:-translate-y-2">
                  {/* Subtle gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      isBlue
                        ? "from-[#eef4ff] via-white to-white"
                        : "from-[#fff9e5] via-white to-white"
                    }`}
                  />

                  {/* Bottom folded corner */}
                  <div
                    className={`absolute -bottom-12 -right-12 h-40 w-40 rotate-45 ${
                      isBlue ? "bg-[#174eb2]" : "bg-[#ffc20e]"
                    }`}
                  />

                  <div className="relative z-10 flex h-full flex-col">
                    {/* Icon */}
                    <div
                      className={`mb-8 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white shadow-[0_8px_18px_rgba(0,0,0,0.18)] ${
                        isBlue
                          ? "bg-gradient-to-br from-[#2867d8] to-[#082e80]"
                          : "bg-gradient-to-br from-[#ffd94f] to-[#ffb400]"
                      }`}
                    >
                      <Icon className="h-8 w-8 text-white" strokeWidth={2.3} />
                    </div>

                    <p className="mb-3 text-sm font-extrabold tracking-wide text-[#123d91]">
                      {item.title}
                    </p>

                    <h3
                      className="text-4xl font-black text-[#123d91] lg:text-[42px]"
                      style={{
                        textShadow: "0 3px 4px rgba(18,61,145,.18)",
                      }}
                    >
                      {item.value}
                    </h3>

                    <div className="my-6 h-px w-full bg-slate-300" />

                    <p className="max-w-[210px] text-base leading-7 text-slate-700">
                      {item.description}
                    </p>

                    {/* Decorative watermark */}
                    <Icon
                      className={`absolute -bottom-2 -right-1 h-14 w-14 ${
                        isBlue ? "text-blue-300/40" : "text-yellow-700/30"
                      }`}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>


      </div>
    </section>
  );
};

export default PlacementHighlights;
