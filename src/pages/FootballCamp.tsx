import React, { useState, ReactNode } from 'react';
import {
  Calendar,
  MapPin,
  Clock,
  Shirt,
  Coffee,
  PhoneOff,
  Trophy,
  Star,
  Moon,
  Sun
} from 'lucide-react';

interface ScheduleItemProps {
  time: string;
  title: string;
  desc: string;
  icon: ReactNode;
}

function ScheduleItem({ time, title, desc, icon }: ScheduleItemProps) {
  return (
    <div className="flex items-center gap-4 p-4 hover:bg-slate-50 transition-colors group">
      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:shadow-md transition-all">
        {icon}
      </div>
      <div className="grow">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
          <h4 className="font-bold text-slate-800">{title}</h4>
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">{time}</span>
        </div>
        <p className="text-sm text-slate-500">{desc}</p>
      </div>
    </div>
  );
}

// Simple icon for Utensils since it might not be exported by all lucide versions in the environment
function Utensils({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  );
}

export default function FootballCamp() {
  const [activeTab, setActiveTab] = useState<'daily' | 'sunday'>('daily');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" aria-hidden="true"></div>
        <div className="max-w-4xl mx-auto px-6 py-16 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-emerald-900 px-4 py-1 rounded-full font-bold text-sm mb-6 uppercase tracking-wider shadow-lg">
            <Trophy size={16} /> Residential Football Camp
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">Chengalpat Football Camp</h1>
          <p className="text-xl md:text-2xl text-emerald-100 mb-8 font-light">
            Building Champions. Building Character.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto text-center md:text-left bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            <div className="flex flex-col items-center md:items-start">
              <span className="flex items-center gap-2 text-yellow-300 font-bold uppercase text-xs tracking-wider">
                <Calendar size={14} /> When
              </span>
              <span className="font-semibold text-lg">Thu – Sun (4 Days)</span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <span className="flex items-center gap-2 text-yellow-300 font-bold uppercase text-xs tracking-wider">
                <MapPin size={14} /> Where
              </span>
              <span className="font-semibold text-lg">Chengalpat</span>
              <span className="text-xs text-emerald-200">(Venue details below)</span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <span className="flex items-center gap-2 text-yellow-300 font-bold uppercase text-xs tracking-wider">
                <Star size={14} /> Who
              </span>
              <span className="font-semibold text-lg">Boys (Ages 5-18)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-20 pb-16">
        {/* Pricing Card */}
        <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-b-4 border-yellow-400">
          <div>
            <h3 className="text-2xl font-bold text-slate-800">All-Inclusive Package</h3>
            <p className="text-slate-500 mt-1">Includes T-shirt, 3 meals/day, travel (T&DA), and training.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="block text-sm text-slate-400 line-through">₹2,500</span>
              <span className="block text-3xl font-black text-emerald-600">₹2,000</span>
            </div>
            <a
              href="#contact"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-bold transition-colors shadow-lg shadow-emerald-200"
            >
              Register Now
            </a>
          </div>
        </div>

        {/* Digital Detox Section */}
        <div className="mt-12 bg-slate-100 rounded-2xl p-8 border border-slate-200">
          <div className="flex items-start gap-4">
            <div className="bg-red-100 p-3 rounded-full text-red-600 shrink-0">
              <PhoneOff size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Strictly Phone-Free Zone</h3>
              <p className="italic text-slate-600 mb-4">
                "In today’s world, students spend too much time glued to mobile phones, missing out on physical activity and essential life skills."
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                  <h4 className="font-bold text-emerald-700 mb-1">Focus</h4>
                  <p className="text-sm text-slate-600">Develop teamwork and discipline without digital distractions.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                  <h4 className="font-bold text-emerald-700 mb-1">Fitness</h4>
                  <p className="text-sm text-slate-600">Learn football fundamentals and improve physical health.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                  <h4 className="font-bold text-emerald-700 mb-1">Growth</h4>
                  <p className="text-sm text-slate-600">Grow into confident individuals ready for life's challenges.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule Section */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-800">Camp Schedule</h2>
            <div className="flex bg-slate-200 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('daily')}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'daily'
                    ? 'bg-white text-emerald-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Daily Routine
              </button>
              <button
                onClick={() => setActiveTab('sunday')}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'sunday'
                    ? 'bg-white text-emerald-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Sunday Finale
              </button>
            </div>
          </div>

          {activeTab === 'daily' ? (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="divide-y divide-slate-100">
                <ScheduleItem
                  time="6:30 AM – 8:00 AM"
                  title="Morning Practice"
                  desc="Warm-up, drills, physical conditioning"
                  icon={<Sun className="text-orange-400" />}
                />
                <ScheduleItem
                  time="8:00 AM – 9:00 AM"
                  title="Freshen Up & Breakfast"
                  desc="Nutritious start to the day"
                  icon={<Coffee className="text-slate-400" />}
                />
                <ScheduleItem
                  time="9:00 AM – 10:00 AM"
                  title="Team Building"
                  desc="Open talk sessions and bonding"
                  icon={<Star className="text-yellow-400" />}
                />
                <ScheduleItem
                  time="10:00 AM – 12:30 PM"
                  title="Study Hall"
                  desc="Dedicated time for homework and study"
                  icon={<Clock className="text-blue-400" />}
                />
                <ScheduleItem
                  time="12:30 PM – 1:30 PM"
                  title="Lunch & Prayer"
                  desc="Healthy meal break"
                  icon={<Utensils className="text-green-400" />}
                />
                <ScheduleItem
                  time="1:30 PM – 4:30 PM"
                  title="Rest & Recreation"
                  desc="Free play, indoor games, reading (No phones)"
                  icon={<Moon className="text-purple-400" />}
                />
                <ScheduleItem
                  time="4:30 PM – 6:00 PM"
                  title="Evening Practice"
                  desc="Tactics, strategy, small-sided games"
                  icon={<Shirt className="text-red-400" />}
                />
                <ScheduleItem
                  time="6:00 PM – 7:30 PM"
                  title="Dinner"
                  desc="Evening meal"
                  icon={<Utensils className="text-green-400" />}
                />
                <ScheduleItem
                  time="7:30 PM – 9:00 PM"
                  title="Leisure Time"
                  desc="Board games, group chats"
                  icon={<Star className="text-yellow-400" />}
                />
                <ScheduleItem
                  time="9:30 PM"
                  title="Lights Out"
                  desc="Bedtime for recovery"
                  icon={<Moon className="text-indigo-900" />}
                />
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden p-8 text-center">
              <div className="inline-block p-4 bg-yellow-100 rounded-full text-yellow-600 mb-4">
                <Trophy size={48} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Grand Finale Event</h3>
              <p className="text-slate-500 mb-8">Parents are invited to watch the showcase!</p>

              <div className="max-w-md mx-auto space-y-4">
                <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-lg border border-slate-100 text-left">
                  <div className="bg-emerald-100 text-emerald-700 font-bold px-3 py-1 rounded text-sm whitespace-nowrap">
                    3:00 PM
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Mini-Tournament</h4>
                    <p className="text-sm text-slate-500">Showcase matches demonstrating skills learned.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-lg border border-slate-100 text-left">
                  <div className="bg-emerald-100 text-emerald-700 font-bold px-3 py-1 rounded text-sm whitespace-nowrap">
                    4:30 PM
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Closing Ceremony</h4>
                    <p className="text-sm text-slate-500">Prize distribution and awards.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Contact Section */}
        <div className="mt-12 border-t pt-8" id="contact">
          <h2 className="text-center text-xl font-bold text-slate-800 mb-6">Contact & Registration</h2>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm max-w-2xl mx-auto">
            <div className="grid gap-6">
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-600 uppercase">Contact Person</label>
                <div className="bg-slate-50 p-3 rounded border border-slate-200 text-slate-400 italic">[Name Placeholder]</div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-600 uppercase">Phone</label>
                  <div className="bg-slate-50 p-3 rounded border border-slate-200 text-slate-400 italic">[Phone Placeholder]</div>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-600 uppercase">Email</label>
                  <div className="bg-slate-50 p-3 rounded border border-slate-200 text-slate-400 italic">[Email Placeholder]</div>
                </div>
              </div>
              <a
                className="w-full mt-2 bg-slate-800 text-white font-bold py-3 rounded-lg hover:bg-slate-900 transition-colors text-center"
                href="#"
              >
                Download Application Form
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
