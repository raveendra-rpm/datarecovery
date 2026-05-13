'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Image from 'next/image';
import { publicPath } from '@/lib/site';

export default function Class100CleanRoomPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <PageHeader
        title="Class 100 Clean Room Method"
        backgroundImage="/images/headers_img/data_recovery_clean_room.jpg"
        breadcrumb={[
          { label: 'HOME', href: '/' },
          { label: 'DATA RECOVERY' },
          { label: 'CLASS 100 CLEAN ROOM' },
        ]}
      />

      {/* ── Main Content ──────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* Section heading */}
        <h2 className="text-slate-900 font-bold text-2xl mb-8">Class 100 Clean Room Method</h2>

        {/* Two-column: text + image */}
        <div className="flex flex-col md:flex-row gap-8 mb-10">

          {/* Left: intro paragraphs */}
          <div className="flex-1 space-y-4">
            <p className="text-slate-600 text-sm leading-relaxed">
              In case of mechanical failure, for data recovery, we must open the drive to replace parts,
              or perform other techniques necessary to recover data. It will be crucial that someone
              accomplishes the work in the most proper environment meeting Class 100 specifications.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              In case of mechanical failure, for data recovery, we must open the drive to replace parts,
              or perform other techniques necessary to recover data. It will be crucial that someone
              accomplishes the work in the most proper environment meeting Class 100 specifications.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              The working components inside the hard drives are prone to damage when exposed to
              dust particles and other airborne contaminants.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Data Recovery cases that require head swaps or re-calibration, platter swaps, visual
              inspection, or involve head stiction, where a technical expert has to open the drive case,
              it must be done in a{' '}
              <a href="#" className="text-[#3da3ff] font-semibold hover:underline">
                Class 100 cleanroom
              </a>{' '}
              environment.
            </p>
          </div>

          {/* Right: image */}
          <div className="md:w-64 lg:w-72 shrink-0">
            <div className="relative w-full h-56 md:h-full min-h-[220px] rounded-xl overflow-hidden border border-slate-100 shadow-md">
              <Image
                src={publicPath("/images/headers_img/data_recovery_clean_room.jpg")}
                alt="Data Recovery in Clean Room Lab"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 288px"
              />
            </div>
            <p className="text-center text-xs text-slate-400 mt-2 italic">
              Data Recovery in Clean Room Lab
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-100 mb-10" />

        {/* Full-width body paragraphs */}
        <div className="space-y-5">
          <p className="text-slate-600 text-sm leading-relaxed">
            The read/write head assembly will be placed just several nanometers above the platters,
            and are never supposed to come into contact with them. (they should The read/write head
            assembly will be placed just several nanometers above the platters, and are never supposed
            to come into contact with them. (they should note that a nanometer is a million times
            smaller than a millimetre). In case the assembly comes into contact, they can scratch the
            platter, permanently destroying your data.
          </p>

          <p className="text-slate-600 text-sm leading-relaxed">
            It would then also mean that most bacteria couldn&apos;t fit between the platters and the
            read/write head. It is to be imagined like that, you can know how delicate they are and
            we, therefore, consider every airborne particle, considering the space between the head
            and the platter on your hard drive.
          </p>

          <p className="text-slate-600 text-sm leading-relaxed">
            Hard drive platters rotate several thousand times per minute, and because of which dust
            particles can cause a disastrous head crash which will be very{' '}
            <span className="text-[#3da3ff] font-semibold">damaging for your data</span>.
          </p>

          <p className="text-slate-600 text-sm leading-relaxed">
            <span className="text-[#3da3ff] font-semibold">Data Storage Solutions (DSS)</span> has a
            cleanroom facility which is the most important factor for maintaining a controlled
            environment. We have understood well the importance of a cleanroom and have ensured
            cleanliness where airborne particulate matters are kept under check in the data recovery
            process. We are in possession of a Class 100 Data Recovery &ndash; Clean Room Method with
            an average count of 170.5nm particles per cubic foot.
          </p>

          <p className="text-slate-600 text-sm leading-relaxed">
            We at DSS take pride in providing our clients with the safest terms in every possible way.
            We ensure to provide discretive and controlled access to your storage device, and also the
            safest possible environment in which we examine your media and worked on it.
          </p>
        </div>

      </div>

      <Footer />
    </main>
  );
}
