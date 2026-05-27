'use client';

import PageHeader from '@/components/PageHeader';

const steps = [
  {
    number: '01',
    title: 'Consultation',
    desc: 'We are there to help you and support you if you have lost your data by offering consultation. When you contact our data recovery experts at DSS, you can stay rest assured that we also will arrange for the immediate collection of your faulty media and take it in for evaluation. Feel free to call us or Email us narrating your problem as soon as the problem occurs.',
  },
  {
    number: '02',
    title: 'Device Analysis and Problem Identification',
    desc: 'We analyse the crashed storage devices in Class 100 Clean Lab so as to determine data crisis cause & the most appropriate data recovery approach will be followed. Device will be analysed to identify the problem or the cause for failure and diagnosis report along with, time required for recovery, percentage of possible recoverable data and a detailed evaluation report together with the quotation will be emailed to you.',
  },
  {
    number: '03',
    title: 'Data Recovery and Backup Storage',
    desc: 'Upon hearing from you and obtaining your written authorization, we will proceed immediately with the data recovery of your faulty media making also provision for the Backup Storage. Once the data recovery is completed, files are checked for validating the data to ensure that quality of recovery has happened & format of files in order. We shall send directory listings in a JPG / PDF OR HTML file format to you for your verification and approval of file type & file names. Alternatively you are also welcome to visit us for data verification. We want to make you know that we follow professional Recovery Procedures.',
  },
  {
    number: '04',
    title: 'Data & Device Delivery',
    desc: 'You can stay relaxed. Delivery shall be as per the Time frame & agreed Percentage of Data to recover & Cost agreed between us. After confirmed payment from your end, data will be backed up on the media of your choice CD, DVD (nominal cost of CD / DVD provided by the client), Hard drive, Pen drive (Media provided by client).',
  },
];

export default function RecoveryProcedurePage() {
  return (
    <main className="min-h-screen bg-white">

      <PageHeader
        title="Data Recovery Procedure"
        backgroundImage="/images/headers_img/recovery_procedure.jpg"
        breadcrumb={[
          { label: 'HOME', href: '/' },
          { label: 'DATA RECOVERY' },
          { label: 'RECOVERY PROCEDURE' },
        ]}
      />

      {/* ── Main Content ──────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* Section intro */}
        <div className="mb-10">
          <h2 className="text-slate-900 font-bold text-2xl mb-2">Data Recovery Procedure</h2>
          <p className="text-slate-500 text-sm">DSS follows Recovery procedure in 4 broadly devised steps</p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map(({ number, title, desc }) => (
            <div
              key={number}
              className="relative overflow-hidden rounded-2xl bg-[#0f1538] px-8 py-8 shadow-lg"
            >
              {/* Watermark number */}
              <span
                className="absolute right-6 bottom-2 select-none pointer-events-none font-black text-[110px] leading-none text-white/[0.04]"
              >
                {number}
              </span>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-white font-bold text-base mb-3">{title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
              </div>

              {/* Star accent */}
              <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none select-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-12 h-12"
                >
                  <path d="M12 2l2.7 8.26H23l-6.85 4.97 2.62 8.08L12 18.27l-6.77 5.04 2.62-8.08L2 10.26h8.3z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

    </main>
  );
}
