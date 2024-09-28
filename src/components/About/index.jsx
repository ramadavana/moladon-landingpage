/* eslint-disable react/prop-types */
export default function About(props) {
  const { picture, aboutIcon1, aboutIcon2, aboutIcon3 } = props;

  return (
    <div className="grid grid-cols-1 gap-8 px-12 py-12 border-gray-500 border-y md:grid-cols-2 justify-items-center lg:px-64">
      <div className="flex justify-center">
        <img src={picture} alt="Rama Davana" className="object-cover w-full rounded-xl" />
      </div>

      <div className="flex flex-col items-center justify-center gap-8 px-2 py-4 border-2 border-blue-500 lg:px-12 md:px-4 md:py-8 rounded-xl">
        <p className="w-64 pb-4 text-xl font-bold tracking-[0.3em] text-center text-blue-500 border-b-2 border-blue-500">
          GABUNG SEKARANG!
        </p>

        <div className="flex flex-col gap-4">
          <p className="text-lg font-bold text-center ">Dapatkan pembiayaan usaha dealer</p>

          <div className="flex items-center justify-between gap-2">
            <div className="flex flex-col items-center">
              <img src={aboutIcon1} alt="Test" className="w-16" />

              <p className="text-center">Equity Security</p>
            </div>

            <div className="flex flex-col items-center">
              <img src={aboutIcon2} alt="Test" className="w-16" />

              <p className="text-center">Company Asset</p>
            </div>

            <div className="flex flex-col items-center">
              <img src={aboutIcon3} alt="Test" className="w-16" />

              <p className="text-center">Stock Share</p>
            </div>
          </div>
        </div>

        <div>
          <button className="px-8 py-2 font-bold text-white transition-all duration-300 bg-orange-700 border-2 border-orange-700 rounded-lg hover:bg-white hover:text-orange-700">
            AJUKAN PEMBIAYAAN
          </button>
        </div>
      </div>
    </div>
  );
}
