import PageHeader from '@/components/PageHeader';
import { FileText, ArrowRight, Scale, Lock, ShieldCheck, BookOpen, Gavel, RefreshCcw } from 'lucide-react';

const ndaClauses = [
  {
    icon: RefreshCcw,
    title: 'Return of Information',
    accent: '#3b82f6',
    bg: 'bg-blue-50',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    border: 'border-blue-100 hover:border-blue-300',
    glow: 'hover:shadow-[0_8px_30px_rgba(59,130,246,0.12)]',
    bar: 'bg-blue-500',
    num: 'text-blue-100',
    content:
      'All information provided by the Disclosing Party shall remain their property. The Receiving Party agrees to return all Confidential Information within 15 days of written demand. Once a decision is made regarding the working relationship, all information must be returned promptly.',
  },
  {
    icon: ArrowRight,
    title: 'Non-Assignability',
    accent: '#7c3aed',
    bg: 'bg-violet-50',
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-600',
    border: 'border-violet-100 hover:border-violet-300',
    glow: 'hover:shadow-[0_8px_30px_rgba(124,58,237,0.12)]',
    bar: 'bg-violet-500',
    num: 'text-violet-100',
    content:
      'This agreement is non-assignable by the Receiving Party unless prior written consent of the Disclosing Party is received. If assigned or transferred, it shall remain binding on all successors and assigns.',
  },
  {
    icon: Scale,
    title: 'Governing Law',
    accent: '#059669',
    bg: 'bg-emerald-50',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    border: 'border-emerald-100 hover:border-emerald-300',
    glow: 'hover:shadow-[0_8px_30px_rgba(5,150,105,0.12)]',
    bar: 'bg-emerald-500',
    num: 'text-emerald-100',
    content:
      'This Agreement shall be governed by and construed in accordance with the laws of the Indian constitution, Bangalore — notwithstanding any conflict-of-laws doctrines — without the aid of any canon, custom or rule of law requiring construction against the draftsman.',
  },
  {
    icon: Lock,
    title: 'No License',
    accent: '#e11d48',
    bg: 'bg-rose-50',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    border: 'border-rose-100 hover:border-rose-300',
    glow: 'hover:shadow-[0_8px_30px_rgba(225,29,72,0.12)]',
    bar: 'bg-rose-500',
    num: 'text-rose-100',
    content:
      'Neither party, by virtue of disclosure of Confidential Information, grants — either expressly or by implication, estoppel or otherwise — any right or license to any patent, trade secret, invention, trademark, copyright, or other intellectual property rights.',
  },
  {
    icon: ShieldCheck,
    title: 'Binding Nature of Agreement',
    accent: '#d97706',
    bg: 'bg-amber-50',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    border: 'border-amber-100 hover:border-amber-300',
    glow: 'hover:shadow-[0_8px_30px_rgba(217,119,6,0.12)]',
    bar: 'bg-amber-500',
    num: 'text-amber-100',
    content:
      'This Agreement shall be binding upon and inure to the benefit of both parties and their respective heirs, personal representatives, successors, and assigns.',
  },
  {
    icon: BookOpen,
    title: 'Separability of Provisions',
    accent: '#0284c7',
    bg: 'bg-sky-50',
    iconBg: 'bg-sky-100',
    iconColor: 'text-sky-600',
    border: 'border-sky-100 hover:border-sky-300',
    glow: 'hover:shadow-[0_8px_30px_rgba(2,132,199,0.12)]',
    bar: 'bg-sky-500',
    num: 'text-sky-100',
    content:
      'The provisions of this Agreement are independent and separable. No provision shall be affected or rendered invalid or unenforceable because another provision may be invalid or unenforceable in whole or in part.',
  },
  {
    icon: FileText,
    title: 'Entire Agreement',
    accent: '#4f46e5',
    bg: 'bg-indigo-50',
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
    border: 'border-indigo-100 hover:border-indigo-300',
    glow: 'hover:shadow-[0_8px_30px_rgba(79,70,229,0.12)]',
    bar: 'bg-indigo-500',
    num: 'text-indigo-100',
    content:
      'This Agreement sets forth all covenants, promises, agreements, conditions, and understandings between the parties. No subsequent alteration, amendment, change, or addition shall be binding unless reduced to writing and signed by both parties.',
  },
  {
    icon: Gavel,
    title: 'Arbitration',
    accent: '#c026d3',
    bg: 'bg-fuchsia-50',
    iconBg: 'bg-fuchsia-100',
    iconColor: 'text-fuchsia-600',
    border: 'border-fuchsia-100 hover:border-fuchsia-300',
    glow: 'hover:shadow-[0_8px_30px_rgba(192,38,211,0.12)]',
    bar: 'bg-fuchsia-500',
    num: 'text-fuchsia-100',
    content:
      'Any controversy or claim arising out of or relating to this Agreement shall be resolved by arbitration conducted by the Civil Court in Bangalore, India. Any award shall be final and binding. Either party may still seek temporary injunctive relief from any court of competent jurisdiction against improper disclosure.',
  },
];

export default function Confidentiality() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section */}
      <PageHeader
        title="Confidentiality"
        backgroundImage="/images/who_we_are/confidentiality_banner.jpg"
        breadcrumb={[{ label: 'HOME', href: '/' }, { label: 'CONFIDENTIALITY' }]}
      />

      {/* NDA Section */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[160px] opacity-40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100 rounded-full blur-[130px] opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">

          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#3b82f6] text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full animate-pulse" />
              LEGAL AGREEMENT
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-montserrat text-slate-900 leading-tight">
              NDA for{' '}
              <span className="text-[#3da3ff]">Data Recovery</span>
            </h2>
            <div className="mt-5 w-16 h-1 bg-[#3da3ff] rounded-full mx-auto" />
            <p className="mt-6 text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed">
              Our Non-Disclosure Agreement ensures complete confidentiality and trust at every step of your data recovery process. Your data, your privacy — always protected.
            </p>
          </div>

          {/* Intro Banner */}
          <div className="mb-14 relative rounded-3xl overflow-hidden border border-blue-100 bg-white shadow-[0_8px_40px_rgba(59,130,246,0.08)] p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-transparent pointer-events-none" />
            <div className="shrink-0 h-20 w-20 rounded-2xl bg-gradient-to-br from-[#3da3ff] to-blue-600 flex items-center justify-center shadow-[0_8px_30px_rgba(61,163,255,0.3)]">
              <FileText className="h-9 w-9 text-white" />
            </div>
            <div className="relative z-10">
              <h3 className="text-slate-900 font-bold text-lg mb-2">Our Commitment to Your Privacy</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Data Storage Solutions (DSS) treats every piece of client information as strictly confidential. The following clauses outline the binding terms of our Non-Disclosure Agreement, ensuring transparent and legally protected data recovery operations in accordance with Indian law.
              </p>
            </div>
          </div>

          {/* Clauses Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {ndaClauses.map(({ icon: Icon, title, bg, iconBg, iconColor, border, glow, bar, num, content }, idx) => (
              <div
                key={idx}
                className={`group relative bg-white border ${border} rounded-2xl p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1 ${glow} cursor-default shadow-sm`}
              >
                {/* Watermark number */}
                <span className={`absolute -top-2 -right-2 text-[90px] font-black ${num} select-none leading-none pointer-events-none`}>
                  {String(idx + 1).padStart(2, '0')}
                </span>

                {/* Icon + Title */}
                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <div className={`h-11 w-11 rounded-xl ${iconBg} flex items-center justify-center shrink-0 transition-all duration-300`}>
                    <Icon className={`h-5 w-5 ${iconColor}`} />
                  </div>
                  <h4 className="text-slate-900 font-bold text-sm tracking-wide">{title}</h4>
                </div>

                {/* Content */}
                <p className="text-slate-500 text-xs leading-relaxed group-hover:text-slate-600 transition-colors relative z-10">
                  {content}
                </p>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 h-0.5 w-0 ${bar} group-hover:w-full transition-all duration-500 rounded-full`} />
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-14 text-center">
            <p className="text-slate-400 text-xs leading-relaxed max-w-3xl mx-auto">
              This NDA is a standard legal document. For any queries regarding the agreement, please{' '}
              <a href="/contact-us" className="text-[#3da3ff] hover:underline font-semibold">contact our team</a>.
              DSS is committed to maintaining the highest standards of confidentiality and data security.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
