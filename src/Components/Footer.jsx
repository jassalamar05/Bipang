import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-2">
            <div className="bg-yellow-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">
              🔥
            </div>
            <h2 className="text-2xl font-bold">Bipang</h2>
          </div>

          <p className="text-gray-500 mt-4 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut elit tellus, luctus nec ullamcorper mattis.
          </p>

          <p className="mt-6 font-semibold text-sm tracking-widest">
            GET IT ON :
          </p>

          <div className="flex gap-3 mt-3">
            <button className="bg-yellow-500 text-white p-2 rounded">
              ▶
            </button>
            <button className="bg-yellow-500 text-white p-2 rounded">
              🏬
            </button>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-500 text-sm">
            {["Homepage", "About Us", "Our Services", "Our Menu", "Our Chef"].map(
              (item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-yellow-500">▶</span> {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* SITE POLICY */}
        <div>
          <h3 className="font-bold text-lg mb-4">Site Policy</h3>
          <ul className="space-y-3 text-gray-500 text-sm">
            {[
              "Privacy Policy",
              "Term Of Service",
              "Disclaimer",
              "GDPR Policy",
              "Usage Policy",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-yellow-500">▶</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-bold text-lg mb-4">Stay In Touch</h3>

          <div className="space-y-4 text-gray-500 text-sm">
            <div className="flex items-center gap-3">
              <MdEmail className="text-yellow-500 text-lg" />
              info@email.com
            </div>

            <div className="flex items-center gap-3">
              <MdPhone className="text-yellow-500 text-lg" />
              + (62) 123 456 789
            </div>
          </div>

          <h4 className="font-bold text-lg mt-6 mb-2">Head Office</h4>
          <p className="text-gray-500 text-sm">
            Sidomukti Village Gresik <br />
            United East Java State 61152
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-xs text-gray-500 tracking-widest">
            ALLRIGHT RESERVED | BIPANG - BBQ & GRILL RESTAURANT
          </p>

          <div className="flex gap-3">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="bg-yellow-500 text-white p-2 rounded cursor-pointer hover:scale-110 transition"
                >
                  <Icon />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
