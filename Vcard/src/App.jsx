import { useState } from 'react'
import { Mail, Phone, Code, PenTool } from "lucide-react";

export default function App() {
  return (
    <>
      <div className="min-h-screen bg-black text-gray-200 flex flex-col md:flex-row p-4 md:p-8 gap-6">
        {/* Sidebar */}
        <aside className="w-full md:w-80 bg-[#1E1E1F] border border-solid border-[#383838] rounded-3xl py-15 px-8 flex flex-col items-center shadow-lg">
          <img
            src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
            alt="avatar"
            className="w-24 h-24 md:w-28 md:h-28 rounded-full mb-4"
          />
          <h2 className="text-2xl font-bold my-4 text-center">Richard Hanrick</h2>
          <span className="bg-[#2B2B2C] text-sm px-3 py-1 rounded-lg mb-6">
            Web Developer
          </span>

          <hr className='w-[100%] border-[#383838] border-solid'/>

          {/* Contact Info */}
          <div className="space-y-4 w-full">
            <div className="flex items-center gap-3 mt-3 p-3 rounded-xl">
              <Mail className="text-primary w-5 h-5" />
              <div>
                <p className="text-xs text-gray-400">EMAIL</p>
                <p className="text-sm break-all">richard@example.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl">
              <Phone className="text-primary w-5 h-5" />
              <div>
                <p className="text-xs text-gray-400">PHONE</p>
                <p className="text-sm">+1 (213) 352-2795</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-[#1E1E1F] border border-solid border-[#383838] rounded-3xl shadow-lg">
          {/* Tabs */}
          <div className="flex justify-between items-center  mb-8">
            <div>
              About Us
            </div>
            <div className="bg-[#1E1E1F] border border-solid border-[#383838] rounded-tr-3xl rounded-bl-3xl px-10 py-4 flex flex-wrap justify-center md:justify-end gap-20">
              {["About", "Resume", "Portfolio", "Blog", "Contact"].map((tab) => (
                <button
                  key={tab}
                  className={`font-semibold ${
                    tab === "About"
                      ? "text-primary"
                      : "text-gray-400 hover:text-primary transition-colors"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
        
          </div>

          {/* About Section */}
          <section className='p-6 md:p-8'>
            <h2 className="text-3xl font-bold mb-3">About Me</h2>
            <div className="w-10 h-1 bg-primary rounded-full mb-4"></div>

            <p className="mb-4 text-gray-400 leading-relaxed">
              I’m a Creative Director and UI/UX Designer from Sydney, Australia,
              working in web development and print media. I enjoy turning complex
              problems into simple, beautiful, and intuitive designs.
            </p>

            <p className="text-gray-400 leading-relaxed mb-10">
              My job is to build your website so that it is functional and
              user-friendly but at the same time attractive. I add a personal
              touch to your product and make sure it’s eye-catching and easy to
              use.
            </p>

            <h3 className="text-2xl font-semibold mb-4">What I'm Doing</h3>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gray-900 p-6 rounded-2xl flex items-start gap-4 shadow">
                <PenTool className="text-primary w-10 h-10 shrink-0" />
                <div>
                  <h4 className="font-bold mb-2 text-lg">Web Design</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    The most modern and high-quality design made at a professional
                    level.
                  </p>
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-2xl flex items-start gap-4 shadow">
                <Code className="text-primary w-10 h-10 shrink-0" />
                <div>
                  <h4 className="font-bold mb-2 text-lg">Web Development</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    High-quality development of sites at the professional level.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
