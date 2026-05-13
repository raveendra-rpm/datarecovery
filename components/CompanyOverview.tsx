import React from 'react';
import Image from 'next/image';
import { publicPath } from '@/lib/site';

const recoveryCards = [
  {
    title: 'RAID Recovery',
    desc: 'We are a reliable and experienced data recovery company. offer expert RAID data recovery services in Bangalore.',
    img: 'images/gallery_recovery_img/raid_recovery_services.jpg',
  },
  {
    title: 'Encrypted Drive Recovery',
    desc: 'We are a leading data recovery company in Bangalore. We offer data encryption services and can help you recover.',
    img: 'images/gallery_recovery_img/encrypted_drive_recovery.jpg',
  },
  {
    title: 'Hard Disk Recovery',
    desc: 'Our data recovery company can help you to recover data, contact data storage team for laptop & desktop hard drive data recovery services for better results!',
    img: 'images/gallery_recovery_img/hard_disk_recovery.jpg',
  },
  {
    title: 'External Drive Recovery',
    desc: 'Get data recovery services to help you recover data from tapes quickly and easily. Our team of experts will help you to recover any data on tapes, so you can continue using your tapes without fear of data loss.',
    img: 'images/gallery_recovery_img/external_drive_recovery.jpg',
  },
  {
    title: 'SSD Recovery',
    desc: 'Get your SSD data recovered as soon as possible. We are a professional data recovery service that offers SSD recovery.',
    img: 'images/gallery_recovery_img/ssd_recovery.jpg',
  },
  {
    title: 'Memory Card Recovery',
    desc: 'We provide data storage solutions that can help you recover lost data and retrieve old photos. We have a wide range of services that can help you store, protect, and recover your lost data.',
    img: 'images/gallery_recovery_img/memory_card_recovery.jpg',
  },
  {
    title: 'CCTV Data Recovery',
    desc: 'Recover deleted CCTV footage, video logs, and CCTV images from any computer or device. Our expert technicians are available 24/7 to help you recover CCTV data.',
    img: 'images/gallery_recovery_img/cctv_data_recovery.jpg',
  },
];

export default function CompanyOverview() {
  return (
    <section className="w-full bg-[#fbfbfd] py-32 relative overflow-hidden">
      <div className="max-w-[1366px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-20">
          <p className="text-[#e11f27] font-semibold text-sm 2xl:text-base uppercase tracking-widest mb-6">
            {'// DATA STORAGE SOLUTIONS'}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black text-[#1d1d1f] mb-10 leading-[1.1] tracking-tight">
            DSS Professional Data Recovery <br className="hidden lg:block" /> Services Provider in Bangalore
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-[22px] text-[#1d1d1f] font-medium leading-relaxed">
              Looking for reliable data recovery in Bangalore? Reach out to Data Storage Solutions today and let us help you recover your lost data with confidence and peace of mind.
            </p>
          </div>
        </div>

        {/* Content Section - Redesigned as a Premium Editorial Layout */}
        <div className="mb-20 bg-white rounded-[40px] p-8 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
          <div className="text-[16px] text-[#515154] leading-[1.8] space-y-8 text-justify">
            <p>
              We are the go-to experts for both individuals and businesses in need of professional data recovery. Our team has extensive experience, not just in Bangalore but across various parts of India. We provide comprehensive solutions for retrieving lost data from hard drives, external storage devices, and even encrypted files.
            </p>
            <p>
              Using the latest technology and industry-leading tools, we ensure a fast and hassle-free recovery process. Whether it’s a personal device or a business system, our skilled specialists can restore critical files, cherished family photos, or important business documents.
            </p>
            <p>
              Our expertise covers a wide range of hard drives and devices, including portable external drives. We are committed to safeguarding your privacy and security throughout the recovery process. As a locally based Bangalore company, we’re focused on helping individuals and businesses recover lost data swiftly, securely, and affordably. We take pride in making data recovery accessible and convenient, ensuring our clients receive top-notch service every step of the way.
            </p>
            <p>
              Providing the best data recovery solutions both in Bangalore and across India is our primary goal. We believe in putting customer satisfaction first, which drives us to deliver fast, efficient, and reliable services. Our dedication to meeting your needs and exceeding expectations is what makes us stand out. We firmly believe that everyone deserves access to excellent data recovery services, and we work tirelessly to make that a reality.
            </p>
            <p>
              If you need trustworthy data recovery in Bangalore or anywhere else in India, Data Storage Solutions is here to help. Our experts can recover your lost files quickly and without complications, offering services that are both cost-effective and tailored to your specific needs.
            </p>
            <p>
              Our highly skilled team specializes in various types of data recovery. Whether you’ve experienced a hard drive failure, your laptop isn’t working, or you’ve accidentally reformatted your external drive, we have the tools and expertise to recover your valuable data. We understand how crucial your data is, and we’re dedicated to ensuring its safe retrieval.
            </p>
          </div>

          {/* Conclusion */}
          <div className="mt-16 pt-10 border-t border-gray-100 text-center">
            <p className="text-xl md:text-2xl font-bold text-[#1d1d1f] tracking-tight">
              At Data Storage Solutions, your data is our priority, and we are here to recover it for you—<span className="text-[#3b9ae1] inline-block mt-2 md:mt-0 md:ml-1">quickly, securely, and reliably.</span>
            </p>
          </div>
        </div>

        {/* Flip Recovery Cards */}
        <div className="py-10 2xl:py-14">
          <div className="mb-8 text-center 2xl:mb-10">
            <p className="text-[#e11f27] font-semibold text-sm 2xl:text-base uppercase tracking-widest">
              {'// Recovery Capabilities'}
            </p>
            <h3 className="mt-3 text-2xl 2xl:text-3xl font-black text-[#1d1d1f] tracking-tight">
              Devices We Recover
            </h3>
          </div>
          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 2xl:gap-6">
            {recoveryCards.map((card, index) => (
              <div
                key={card.title}
                className="group h-[220px] lg:h-[210px] 2xl:h-[270px] [perspective:1200px]"
              >
                <div className="relative h-full w-full rounded-[18px] transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0 overflow-hidden rounded-[18px] bg-slate-200 shadow-[0_18px_40px_rgba(0,0,0,0.24)] [backface-visibility:hidden]">
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      sizes="(min-width: 1536px) 260px, (min-width: 1024px) 220px, (min-width: 640px) 45vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-white/10" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-[13px] 2xl:text-base font-extrabold leading-tight text-white drop-shadow">
                        {card.title}
                      </p>
                      <p className="mt-1 text-[11px] 2xl:text-sm font-semibold leading-tight text-white/82">
                        Professional recovery service
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 overflow-hidden rounded-[18px] bg-white p-6 text-[#111827] shadow-[0_18px_40px_rgba(0,0,0,0.18)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(79,172,254,0.34),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(225,31,39,0.34),transparent_34%),radial-gradient(circle_at_70%_86%,rgba(251,146,60,0.26),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.95),rgba(241,248,255,0.92))]" />
                    <div className="flex h-full flex-col justify-center">
                      <h3 className="relative text-xl 2xl:text-2xl font-black leading-tight">
                        {card.title}
                      </h3>
                      <p className="relative mt-4 text-[12px] 2xl:text-sm font-bold leading-relaxed text-[#111827]/85">
                        {card.desc}
                      </p>
                    </div>
                    <span className="absolute bottom-4 right-5 text-5xl 2xl:text-6xl font-black leading-none text-[#111827]/10">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
