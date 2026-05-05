import React from 'react';

export default function CompanyOverview() {
  return (
    <section className="w-full bg-[#fbfbfd] py-32 relative overflow-hidden">
      <div className="max-w-[1366px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <p className="text-[#8b5cf6] text-xs font-bold tracking-[0.3em] uppercase mb-6">
            // DATA STORAGE SOLUTIONS
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
        <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
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

      </div>
    </section>
  );
}
