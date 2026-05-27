'use client';

import PageHeader from '@/components/PageHeader';
import {
  FileText, Mail, FileSpreadsheet, Star, FileImage, ShieldCheck, FileKey, Wrench
} from 'lucide-react';

const reviews = [
  { platform: 'Google', rating: '4.8', color: 'text-[#4285F4]', bg: 'bg-blue-50', border: 'border-blue-100' },
  { platform: 'Facebook', rating: '4.7', color: 'text-[#1877F2]', bg: 'bg-indigo-50', border: 'border-indigo-100' },
  { platform: 'Justdial', rating: '4.5', color: 'text-[#3da3ff]', bg: 'bg-sky-50', border: 'border-sky-100' },
  { platform: 'Sulekha', rating: '4.7', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-100' },
];

function SectionHeading({ icon: Icon, title, iconBg, iconColor }: {
  icon: React.ElementType; title: string; iconBg: string; iconColor: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className={`h-10 w-10 rounded-xl ${iconBg} flex items-center justify-center shrink-0`}>
        <Icon className={`h-5 w-5 ${iconColor}`} />
      </div>
      <h2 className="text-slate-900 font-bold text-xl">{title}</h2>
    </div>
  );
}

export default function FilesDataRecovery() {
  return (
    <main className="min-h-screen bg-white">

      <PageHeader
        title="Files Data Recovery Services"
        backgroundImage="/images/services/file_recovery_banner.jpg"
        breadcrumb={[
          { label: 'HOME', href: '/' },
          { label: 'SERVICES' },
          { label: 'FILES DATA RECOVERY' },
        ]}
      />

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">

        {/* Customer Reviews */}
        <div>
          <div className="flex items-center justify-center mb-6">
            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#3b82f6] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full animate-pulse" />
              CUSTOMER REVIEWS &amp; RATINGS
            </span>
          </div>
          <div className="flex justify-center gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-center text-slate-400 text-xs mb-6">Rated by thousands of satisfied customers</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {reviews.map(({ platform, rating, color, bg, border }) => (
              <div key={platform} className={`${bg} ${border} border rounded-xl p-4 flex flex-col items-center text-center hover:shadow-md transition-shadow`}>
                <p className={`${color} font-black text-base mb-1.5`}>{platform}</p>
                <div className="flex items-center gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-500 text-xs">Rating <span className="font-black text-amber-500 text-sm ml-1">{rating}</span></p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-slate-100" />

        {/* Email Recovery */}
        <div>
          <SectionHeading icon={Mail} title="Email Data Recovery" iconBg="bg-blue-50" iconColor="text-[#3da3ff]" />
          <div className="space-y-4">
            <p className="text-slate-600 text-sm leading-relaxed">
              Data Storage Solutions provide you with email recovery utilities for damaged files and deleted messages created in &quot;Outlook&quot; or &quot;Outlook Express&quot; software. DSS utilities are proficient with very effective Intelligent Rebuild <span className="font-bold text-[#3da3ff]">Email recovery</span> methodology that allows us to repair damaged *.pst and *.dbx files and restore lost e-mail messages just in a quick steps process.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              <span className="font-semibold text-slate-800">DSS recovers</span> accidentally deleted Outlook email messages, contacts, notes, tasks, and other items, and repairs damaged Outlook data files (*.pst) files where Outlook stores folders with the data. We can save the recovered data in the *pst, *.msg, and *.eml formats that Outlook can open and import.
            </p>
            <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 mt-4">
              <p className="text-slate-600 text-sm leading-relaxed">
                When doing any operation, including <span className="font-bold text-[#3da3ff]">Outlook data file recovery</span>, it does not delete Outlook data from disks as it is written to or modified as would in the original Outlook data file that will be recovered by DSS using the special methodology. Outlook Express has a tool designed to undelete accidentally deleted Outlook Express email messages and recover damaged *.dbx files as Outlook Express stores folders with email messages. The messages are recovered in the email format and can be simply imported into Outlook Express mail and news bases.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-slate-100" />

        {/* Excel Recovery */}
        <div>
          <SectionHeading icon={FileSpreadsheet} title="Excel File Recovery" iconBg="bg-emerald-50" iconColor="text-emerald-600" />
          <div className="bg-emerald-50/30 border border-emerald-100 rounded-2xl p-6">
            <p className="text-slate-600 text-sm leading-relaxed">
              <span className="font-bold text-emerald-600">Excel file recovery</span> DSS uses software to repair and rebuild the damaged excel file. Excel recovery software that we use scans the damaged .xls file and extracts the maximum of data from it to a new usable excel file. Two recovery modes: Single file recovery and Multi file recovery modes enable quick repairing of the corrupt excel files.
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-slate-100" />

        {/* File Data Recovery Services For All Types */}
        <div>
          <SectionHeading icon={FileText} title="File Data Recovery Services For All Types" iconBg="bg-violet-50" iconColor="text-violet-600" />

          <div className="grid md:grid-cols-3 gap-6 mt-6">

            {/* Word Document Recovery */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md hover:border-violet-300 transition-all flex flex-col">
              <div className="h-12 w-12 rounded-full bg-violet-50 flex items-center justify-center mb-4 shrink-0">
                <FileText className="h-6 w-6 text-violet-600" />
              </div>
              <h3 className="text-slate-900 font-bold text-base mb-3">MS Word Documents</h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                DSS has technological tools designed to recover corrupted MS Word documents. It extracts text even from heavily damaged *.docx files as it never deletes from disk, writes to, or modifies the original document files when performing any operation including MS Word document recovery. The recovered documents can be saved as Word *.docx or plain text *.txt files.
              </p>
            </div>

            {/* PDF Password Recovery */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md hover:border-amber-300 transition-all flex flex-col">
              <div className="h-12 w-12 rounded-full bg-amber-50 flex items-center justify-center mb-4 shrink-0">
                <FileKey className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-slate-900 font-bold text-base mb-3">PDF Password Recovery</h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                DSS can recover password-protected PDF files quickly and efficiently! Instantly unlock restricted PDF documents by removing printing, editing, and copying restrictions! Advanced PDF Password Recovery recovers or instantly removes passwords protecting or locking PDF documents created with all versions of Adobe Acrobat or any other PDF application.
              </p>
            </div>

            {/* Image Files Recovery */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md hover:border-sky-300 transition-all flex flex-col">
              <div className="h-12 w-12 rounded-full bg-sky-50 flex items-center justify-center mb-4 shrink-0">
                <FileImage className="h-6 w-6 text-sky-600" />
              </div>
              <h3 className="text-slate-900 font-bold text-base mb-3">Image Files Recovery</h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                DSS is also well versed in recovering the data from the corrupted *.jpg and <span className="font-semibold text-slate-800">image files recovery</span> due to the physical damage of the memory card or hard disk etc.
              </p>
            </div>

          </div>
        </div>

      </div>

    </main>
  );
}
