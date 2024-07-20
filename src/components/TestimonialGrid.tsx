import React from "react";
import Image from "next/image";

const TestimonialGrid: React.FC = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="">
          <h2 className="text-4xl text-black font-serif pb-3 ml-12 italic">Reviews:</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:mr-10 lg:ml-10 md:mr-6 md:ml-6 mr-1 ml-1 lg:grid-cols-4 gap-6">
          {/* div1 */}
          <div className="bg-violet-200 hover:bg-violet-300 transition-colors duration-300 text-black p-8 rounded-lg shadow-lg md:col-span-2">
            <div className="flex items-center mb-6">
              <Image
                className="w-10 h-10 rounded-full mr-4"
                src="/images/profile.png"
                alt="First Name, Last Name"
                width={100}
                height={100}
              />
              <div>
                <p className="font-semibold">First Name, Last Name</p>
                <p className="text-gray-700">Author of ...</p>
              </div>
            </div>
            <h4 className="text-xl font-bold mb-4">
              Lorem ipsum dolor sit amet, erat laboramus efficiantur usu te, sit
              reque impedit epicuri ne. Eu laudem integre qui. Eu minim nostro
              nec, modus ullamcorper definitionem cum cu. Ad vel veri illum.
            </h4>
            <p className="text-gray-800">
              Mel te laudem minimum. Mei eros civibus an, vim te quod putant
              detracto. Ferri regione usu in. Vitae voluptaria ut mel, qui
              eruditi accommodare ex, pri ea noluisse referrentur. Wisi fuisset
              qui cu, pri ullum qualisque no. Eum cu mundi iudico definitionem,
              sed graece deterruisset id, ad duis possit sanctus est.
            </p>
          </div>

          {/* div2 */}
          <div className="bg-gray-500 hover:bg-slate-500 transition-colors duration-300 text-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <Image
                className="w-10 h-10 rounded-full mr-4"
                src="/images/profile.png"
                alt="First Name, Last Name"
                width={100}
                height={100}
              />
              <div>
                <p className="font-semibold">First Name, Last Name</p>
                <p className="text-gray-300">Author of ...</p>
              </div>
            </div>
            <h4 className="text-xl font-bold mb-4">
              Id qui possit legendos constituto, ei sea inermis accumsan.
            </h4>
            <p className="text-gray-300">
              Error petentium patrioque vim an. Ex his quod tota mundi, porro
              putent everti eum et. Ei usu albucius placerat dissentiet, modus
              facete nominavi vim ne. Has ut duis minim tamquam, probo primis
              periculis eu mei.
            </p>
          </div>

          {/* div3 */}
          <div className="bg-white hover:bg-violet-100 p-8 transition-colors duration-300 rounded-lg shadow-lg md:row-span-2">
            <div className="flex items-center mb-6">
              <Image
                className="w-10 h-10 rounded-full mr-4"
                src="/images/profile.png"
                alt="First Name, Last Name"
                width={100}
                height={100}
              />
              <div>
                <p className="font-semibold text-gray-800">
                  First Name, Last Name
                </p>
                <p className="text-gray-600">Author of ...</p>
              </div>
            </div>
            <h4 className="text-xl font-bold mb-4 text-gray-800">
              Duo diam habemus consetetur cu. Est eu facer delicata.
            </h4>
            <p className="text-gray-600">
              Pri in assum tamquam ancillae, inimicus definitionem cu nec.
              Albucius definitiones ius ex. Ad decore fabellas molestiae qui.
              Electram forensibus et sea, his stet illum dicta ex. Summo
              deseruisse ut vel, quo enim affert atomorum ne. Hinc decore
              reprehendunt mei no. Ad pro dolor bonorum accumsan, usu putant
              democritum ea. Legere omittam deterruisset eam id, sit accusamus
              dignissim cu. Sed et inani offendit, usu adversarium instructior
              an. Alii graecis rationibus sed ea, at tale perpetua duo. Libris
              nostrum liberavisse ei cum. Eu vel viderer graecis, vim laudem
              principes definiebas eu, mel augue principes ut. Vix cu sint veri
              salutandi, eos ei gubergren sententiae accommodare.
            </p>
          </div>

          {/* div4 */}
          <div className="bg-white hover:bg-purple-50 p-8 transition-colors duration-300 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <Image
                className="w-10 h-10 rounded-full mr-4"
                src="/images/profile.png"
                alt="First Name, Last Name"
                width={100}
                height={100}
              />
              <div>
                <p className="font-semibold text-gray-800">
                  First Name, Last Name
                </p>
                <p className="text-gray-600">Author of ...</p>
              </div>
            </div>
            <h4 className="text-xl font-bold mb-4 text-gray-800">
              Ad alia ridens qui, duo modo volumus id, ea pro amet modo.
            </h4>
            <p className="text-gray-600">
              QuoAd alia ridens qui, duo modo volumus id, ea pro amet modo. sale
              eligendi ad, te pro mucius possit dolores, cum no nullam gubergren
              consequuntur.
            </p>
          </div>

          {/* div5 */}
          <div className="bg-text-dark-purple hover:bg-violet-300 transition-colors duration-300 text-white p-8 rounded-lg shadow-lg md:col-span-2">
            <div className="flex items-center mb-6">
              <Image
                className="w-10 h-10 rounded-full mr-4"
                src="/images/profile.png"
                alt="First Name, Last Name"
                width={100}
                height={100}
              />
              <div>
                <p className="font-semibold">First Name, Last Name</p>
                <p className="text-gray-200">Author of ...</p>
              </div>
            </div>
            <h4 className="text-xl font-bold mb-4">
              Ad assum laudem tacimates vel. Habeo cotidieque qui no. Eu cum
              possit omnesque, omittantur adversarium ius te, per et equidem
              convenire.
            </h4>
            <p className="text-gray-100">
              Vim cu sale tacimates, oratio nonumes consequat vel cu. Hinc
              laboramus at pri, sed aperiam persequeris ex, mei ea saepe
              accusata. Vim autem ignota voluptatibus at, ne sea fugit perpetua,
              liber affert ut vis. Vis iisque invidunt adversarium eu, cu eos
              ullum nihil assentior, nibh inani adipiscing id ius.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialGrid;
