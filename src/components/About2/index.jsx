/* eslint-disable react/prop-types */
export default function About2(props) {
  const { aboutLogo, aboutBg, title, headline, text, awards } = props;

  return (
    <div className="relative mx-auto my-12 shadow-2xl md:mx-0">
      <img
        className="object-cover w-full h-[1000px] md:h-[800px] lg:h-[700px]"
        src={aboutBg}
        alt="Background"
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="absolute inset-0 grid items-center grid-cols-1 gap-4 p-8 lg:px-16 md:grid-cols-2">
        <div className="flex justify-center px-8">
          <img src={aboutLogo} alt="Logo" className="md:w-[400px]" />
        </div>

        <div className="grid grid-cols-1 gap-12 text-white lg:gap-8">
          <div className="flex flex-col gap-4">
            <p className="underline text-xl font-bold tracking-[0.25em] text-center text-blue-400">
              {title}
            </p>

            <p className="text-3xl lg:text-4xl">{headline}</p>

            {text}
          </div>

          <div>
            <div className="flex flex-col items-center gap-4">
              <p className="text-lg tracking-[0.25em] font-bold text-center">RECORDS</p>

              <ul className="grid grid-cols-3 gap-4 text-center">
                {awards.map((award, index) => (
                  <li key={index}>
                    <p className="font-bold lg:text-[24px] tracking-[0.25em] text-yellow-500">
                      {award.count}
                    </p>

                    <p className="text-[12px] lg:text-[18px] font-bold tracking-widest uppercase">
                      {award.title}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
