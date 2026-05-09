/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Zap, 
  Shield, 
  Headphones, 
  CreditCard, 
  MoveHorizontal, 
  CheckCircle2, 
  XCircle, 
  ChevronDown,
  Info,
  Server,
  Cloud,
  ArrowRight
} from "lucide-react";
import { useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 md:p-8 lg:p-12">
      <div className="max-w-[1440px] mx-auto bg-white rounded-xl shadow-2xl border-8 border-slate-200 overflow-hidden flex flex-col min-h-[85vh]">
        
        {/* Header Section */}
        <header className="p-6 border-b border-slate-300 bg-white">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Server className="w-5 h-5 text-indigo-600" />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Comparison Matrix v2.0</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-800 leading-tight mb-4">
                WPX Hosting vs Cloudways: Managed WordPress Hosting Compared (2026)
              </h1>
              <div className="bg-indigo-50 border-l-4 border-indigo-600 p-3 rounded-r-lg">
                <p className="text-sm font-medium text-indigo-900">
                  <span className="font-bold underline decoration-indigo-300 decoration-2 underline-offset-2">Quick Answer:</span> WPX for hands-off users wanting simplicity and 30s support response. Cloudways for developers needing granular control and cloud infrastructure choice.
                </p>
              </div>
            </div>
            <div className="text-right shrink-0">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Status Report</div>
              <div className="text-lg font-bold text-indigo-600 italic">Updated: Q2 2026</div>
              <p className="text-[10px] text-slate-400 max-w-[200px] mt-2 leading-tight">
                Disclosure: We may earn a commission from partners if you click via our links.
              </p>
            </div>
          </div>
        </header>

        {/* Main Content Grid */}
        <main className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-4 p-6 overflow-hidden">
          
          {/* Column 1: Core Metrics */}
          <div className="md:col-span-4 flex flex-col gap-4">
            {/* Performance */}
            <section className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col">
              <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center">
                <Zap className="w-3 h-3 mr-2 text-orange-500" />
                Performance Comparison
              </h2>
              <div className="space-y-4 flex-1">
                <div className="space-y-2">
                  <div className="flex justify-between text-[11px] font-bold">
                    <span>LCP Load Time (ms)</span>
                    <span className="font-mono text-slate-400">Lower is Better</span>
                  </div>
                  <div className="space-y-1">
                    <div className="h-6 w-full bg-slate-100 rounded flex overflow-hidden">
                      <div className="h-full bg-orange-500 w-[42%] flex items-center px-2">
                        <span className="text-[10px] font-bold text-white">WPX: 420ms</span>
                      </div>
                    </div>
                    <div className="h-6 w-full bg-slate-100 rounded flex overflow-hidden">
                      <div className="h-full bg-blue-500 w-[58%] flex items-center px-2">
                        <span className="text-[10px] font-bold text-white">Cloudways: 580ms</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-orange-50 p-2 rounded-lg border border-orange-100">
                    <div className="text-[10px] font-bold text-orange-700 uppercase mb-1">WPX Uptime</div>
                    <div className="text-xl font-black text-slate-800">99.99%</div>
                  </div>
                  <div className="bg-blue-50 p-2 rounded-lg border border-blue-100">
                    <div className="text-[10px] font-bold text-blue-700 uppercase mb-1">CW Uptime</div>
                    <div className="text-xl font-black text-slate-800">99.98%</div>
                  </div>
                </div>
                
                <p className="text-[11px] text-slate-500 leading-relaxed italic">
                  *2026 Speed tests conducted across 12 global nodes. WPX XDN optimization shows 18% faster international delivery.
                </p>
              </div>
            </section>

            {/* Support */}
            <section className="bg-slate-900 text-white p-4 rounded-xl shadow-lg flex flex-col">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center">
                <Headphones className="w-3 h-3 mr-2 text-indigo-400" />
                Support Quality
              </h2>
              <div className="space-y-3 text-[12px] flex-1">
                <div className="flex justify-between items-center p-2 bg-white/5 rounded border border-white/10">
                  <span className="font-medium">WPX Response Time</span>
                  <span className="font-bold text-green-400 underline decoration-green-800 underline-offset-4">~28s</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white/5 rounded border border-white/10">
                  <span className="font-medium">CW Response Time</span>
                  <span className="text-slate-400">~2.4m</span>
                </div>
                <div className="mt-2 text-slate-300 leading-snug">
                  <span className="text-orange-400 font-bold block mb-1">The "Fixed For You" Edge:</span>
                  WPX resolves code issues directly. Cloudways typically provides documentation links for application-level fixes.
                </div>
              </div>
            </section>
          </div>

          {/* Column 2: scenarios & migration */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <section className="bg-orange-50/50 p-4 rounded-xl border border-orange-200">
              <h2 className="text-xs font-bold text-orange-700 uppercase tracking-widest mb-3">Choose WPX If...</h2>
              <ul className="text-[11px] space-y-2 text-slate-700">
                {[
                  "You prioritize absolute simplicity and \"hands-off\" management.",
                  "You need 30-second live chat support from WP experts.",
                  "You want free, unlimited, manual site migrations.",
                  "Malware insurance is a priority (Free unlimited cleanup).",
                  "You host 1-5 sites on a single predictable monthly fee."
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <CheckCircle2 className="w-3 h-3 text-orange-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-blue-50/50 p-4 rounded-xl border border-blue-200">
              <h2 className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">Choose Cloudways If...</h2>
              <ul className="text-[11px] space-y-2 text-slate-700">
                {[
                  "You want to pick your cloud provider (DO, Vultr, AWS, Google).",
                  "You require root-level server control and scalability.",
                  "Pay-as-you-go hourly billing fits your fluctuating traffic.",
                  "You're technical enough to manage basic server tweaks.",
                  "You host many low-traffic sites on one shared resource."
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <CheckCircle2 className="w-3 h-3 text-blue-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex-1">
              <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Pricing Architecture</h2>
              <div className="space-y-2">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex justify-between items-center">
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase">WPX Starts At</span>
                    <span className="text-lg font-black text-slate-800">$24.99/mo</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] text-slate-400 block font-bold uppercase truncate">Fixed Rate</span>
                  </div>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex justify-between items-center">
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase">CW Starts At</span>
                    <span className="text-lg font-black text-slate-800">$14.00/mo</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] text-slate-400 block font-bold uppercase truncate">Scalable</span>
                  </div>
                </div>
                <div className="text-[10px] text-slate-400 leading-tight mt-2 italic px-1">
                  *Cloudways base price excludes potential extra bandwidth/storage fees.
                </div>
              </div>
            </section>
          </div>

          {/* Column 3: Table, FAQ & Action */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <table className="w-full text-[10px] text-left border-collapse">
                <thead className="bg-slate-50 text-slate-500 border-b border-slate-200 uppercase tracking-tighter">
                  <tr>
                    <th className="p-2 font-bold">Criteria</th>
                    <th className="p-2 font-bold text-indigo-600">WPX</th>
                    <th className="p-2 font-bold">Cloudways</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  {[
                    ["Ease of Use", "Elite", "Moderate"],
                    ["Migration", "Free (Manual)", "1st Free (DIY)"],
                    ["Global CDN", "Included", "Paid Add-on"],
                    ["Malware Hack", "Free Cleanup", "Self-Managed"],
                    ["Dashboard", "Proprietary", "Custom SaaS"]
                  ].map(([label, wpx, cw], i) => (
                    <tr key={i}>
                      <td className="p-2 font-bold">{label}</td>
                      <td className="p-2 text-indigo-600 font-medium">{wpx}</td>
                      <td className="p-2">{cw}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            <section className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex-1">
              <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Quick FAQ</h2>
              <div className="space-y-3">
                {[
                  { q: "Who is faster?", a: "WPX for global caching; CW for raw compute power." },
                  { q: "Business email?", a: "WPX includes it for free; CW requires Rackspace add-on ($1)." },
                  { q: "Core Web Vitals?", a: "WPX is generally easier to pass out-of-the-box." }
                ].map((faq, i) => (
                  <div key={i} className="text-[11px]">
                    <div className="font-bold text-slate-800 mb-0.5">Q: {faq.q}</div>
                    <div className="text-slate-500 leading-snug">{faq.a}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-indigo-600 p-6 rounded-xl text-white text-center flex flex-col justify-center gap-4 relative overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-1 leading-tight">Ready to Deploy?</h3>
                <p className="text-[11px] opacity-80 mb-4">Both offer trial periods or money-back guarantees.</p>
                <div className="flex flex-col gap-2">
                  <button className="w-full bg-orange-500 hover:bg-orange-600 py-2.5 rounded-lg text-[11px] font-black uppercase tracking-widest transition-all shadow-lg active:scale-95">
                    Visit WPX Hosting
                  </button>
                  <button className="w-full bg-white hover:bg-slate-100 text-indigo-600 py-2.5 rounded-lg text-[11px] font-black uppercase tracking-widest transition-all shadow-lg active:scale-95 border border-indigo-200">
                    Visit Cloudways
                  </button>
                </div>
              </div>
            </section>
          </div>
        </main>

        {/* Footer Section */}
        <footer className="p-4 bg-slate-50 border-t border-slate-200 mt-auto flex justify-between items-center text-[10px] text-slate-400">
          <div className="flex items-center gap-4">
            <p>&copy; 2026 HostingReviewer Matrix</p>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="font-bold">Tests Operational</span>
            </div>
          </div>
          <div className="flex gap-4 font-bold uppercase truncate">
            <a href="#" className="hover:text-indigo-600">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-600">Comparison Data</a>
            <a href="#" className="hover:text-indigo-600 opacity-50">Affiliate Disclaimer</a>
          </div>
        </footer>
      </div>
    </div>
  );
}


