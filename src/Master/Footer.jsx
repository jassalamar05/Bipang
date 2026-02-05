import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-cyan-700 text-gray-300">

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold text-lg">
              🔥
            </div>
            <h2 className="text-2xl font-bold text-white tracking-wide">
              Bipang
            </h2>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mt-5">
            Premium BBQ & Grill restaurant delivering the finest taste with a
            luxurious dining experience.
          </p>

          <div className="mt-6">
            <p className="text-xs tracking-widest text-gray-400 mb-3">
              GET OUR APP
            </p>

            <div className="flex gap-3">
              <button className="flex items-center gap-2 bg-neutral-800 hover:bg-yellow-500 hover:text-black px-4 py-2 rounded-lg text-xs font-semibold transition">
                ▶ Google Play
              </button>
              <button className="flex items-center gap-2 bg-neutral-800 hover:bg-yellow-500 hover:text-black px-4 py-2 rounded-lg text-xs font-semibold transition">
                🏬 App Store
              </button>
            </div>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            {["Homepage", "About Us", "Our Services", "Our Menu", "Our Chef"].map(
              (item, i) => (
                <li
                  key={i}
                  className="group flex items-center gap-3 cursor-pointer"
                >
                  <span className="text-yellow-500 group-hover:translate-x-1 transition">
                    →
                  </span>
                  <span className="group-hover:text-yellow-500 transition">
                    {item}
                  </span>
                </li>
              )
            )}
          </ul>
        </div>

        {/* POLICY */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-5">
            Legal & Policy
          </h3>

          <ul className="space-y-3 text-sm">
            {[
              "Privacy Policy",
              "Terms of Service",
              "Disclaimer",
              "GDPR Policy",
              "Usage Policy",
            ].map((item, i) => (
              <li
                key={i}
                className="group flex items-center gap-3 cursor-pointer"
              >
                <span className="text-yellow-500 group-hover:translate-x-1 transition">
                  →
                </span>
                <span className="group-hover:text-yellow-500 transition">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-5">
            Stay In Touch
          </h3>

          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <MdEmail className="text-yellow-500 text-lg" />
              info@bipangbbq.com
            </div>

            <div className="flex items-center gap-3">
              <MdPhone className="text-yellow-500 text-lg" />
              +62 123 456 789
            </div>
          </div>

          <div className="mt-6">
            <p className="text-white font-semibold mb-2 text-sm">
              Head Office
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Sidomukti Village Gresik <br />
              East Java, Indonesia 61152
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-xs text-gray-500 tracking-widest text-center">
            © {new Date().getFullYear()} BIPANG BBQ & GRILL — ALL RIGHTS RESERVED
          </p>

          <div className="flex gap-4">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition cursor-pointer"
                >
                  <Icon size={14} />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
