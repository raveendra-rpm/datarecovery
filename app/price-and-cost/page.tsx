'use client';

import PageHeader from '@/components/PageHeader';
import { Mail, Phone, MapPin } from 'lucide-react';

const pricingData = [
  {
    type: 'Logical Recovery',
    media: 'Hard Disk (IDE, SATA, SSD), Desktop, Laptop, Ext HDD, Flash Drive, Memory Card',
    capacity: 'Up to 1TB',
    cost: '2,000 - 3,500',
    time: '1-2 Days'
  },
  {
    type: 'Logical Recovery',
    media: 'Hard Disk (IDE, SATA, SSD), Desktop, Laptop, Ext HDD',
    capacity: '2TB to 4TB',
    cost: '3,500 - 5,000',
    time: '2-3 Days'
  },
  {
    type: 'Electronic Issues',
    media: 'HDD, SSD, Desktop, Laptop, Ext HDD',
    capacity: 'Any Capacity',
    cost: '3,500 - 5,000',
    time: '2-3 Days'
  },
  {
    type: 'Firmware Issues',
    media: 'HDD, SSD, Desktop, Laptop, Ext HDD',
    capacity: 'Any Capacity',
    cost: '3,500 - 5,000',
    time: '2-3 Days'
  },
  {
    type: 'Bad Sector Recovery',
    media: 'Hard Disk (IDE, SATA, SSD), Desktop, Laptop, Ext HDD',
    capacity: 'Any Capacity',
    cost: '3,500 - 5,000',
    time: '2-3 Days (Depends on condition)'
  },
  {
    type: 'Media Issues / Physical Recovery / Head Replacement',
    media: 'Hard Disk (IDE, SATA, SSD), Desktop, Laptop, Ext HDD',
    capacity: '500GB to 1TB',
    cost: '7,000 & Above',
    time: '4-8 Days (Depends on donor availability)'
  },
  {
    type: 'Physical Recovery / Media Damage',
    media: 'HDD, SSD, Desktop, Laptop, Ext HDD',
    capacity: '2TB to 4TB',
    cost: '10,000 & Above',
    time: '7-12 Days'
  },
  {
    type: 'Encrypted Drive Recovery',
    media: 'HDD, SSD, Desktop, Laptop, Ext HDD',
    capacity: 'Any Capacity',
    cost: '5,000 & Above',
    time: '3-7 Days'
  },
  {
    type: 'RAID / Server Recovery',
    media: 'RAID 0, 1, 5, 10, NAS, SAN, Server, Database',
    capacity: 'Any Capacity',
    cost: '10,000 & Above (Depends on number of drives)',
    time: '4-15 Days'
  },
  {
    type: 'Flash Drive Recovery',
    media: 'Pen Drive, SD Card, Micro SD, Compact Flash',
    capacity: 'Any Capacity',
    cost: '1,500 - 5,000',
    time: '2-4 Days'
  },
  {
    type: 'SSD Data Recovery',
    media: 'SATA, NVMe, mSATA',
    capacity: 'Any Capacity',
    cost: '3,500 & Above',
    time: '3-7 Days'
  },
  {
    type: 'External HDD Recovery',
    media: 'Seagate, WD, Toshiba, Sony, Samsung',
    capacity: 'Any Capacity',
    cost: '3,500 & Above',
    time: '3-7 Days'
  },
  {
    type: 'Mobile Phone Recovery',
    media: 'Android, iOS, Windows',
    capacity: 'Any Capacity',
    cost: '3,500 & Above',
    time: '3-7 Days'
  },
  {
    type: 'Tape Drive Recovery',
    media: 'LTO, DLT, DAT',
    capacity: 'Any Capacity',
    cost: '5,000 & Above',
    time: '5-10 Days'
  },
  {
    type: 'Encrypted Data Recovery',
    media: 'BitLocker, FileVault, VeraCrypt',
    capacity: 'Any Capacity',
    cost: '5,000 & Above',
    time: '3-7 Days'
  },
  {
    type: 'File Repair & Recovery',
    media: 'SQL, Oracle, Excel, Word, PDF',
    capacity: 'Any Capacity',
    cost: '2,000 - 5,000',
    time: '1-2 Days'
  },
  {
    type: 'File Repair & Recovery',
    media: 'Outlook PST, OST, EDB',
    capacity: 'Any Capacity',
    cost: '3,500 & Above',
    time: '2-4 Days'
  },
  {
    type: 'File Repair & Recovery',
    media: 'Photos, Videos, Audio',
    capacity: 'Any Capacity',
    cost: '2,000 - 5,000',
    time: '1-2 Days'
  },
  {
    type: 'File Repair & Recovery',
    media: 'Zip, Rar, 7z, GZ',
    capacity: 'Any Capacity',
    cost: '2,000 - 5,000',
    time: '1-2 Days'
  }
];

export default function PriceAndCostPage() {
  return (
    <main className="min-h-screen bg-white">

      <PageHeader
        title="Price and Cost"
        backgroundImage="/images/price_cost_banner.jpg"
        breadcrumb={[
          { label: 'HOME', href: '/' },
          { label: 'PRICE AND COST' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Intro Text */}
        <div className="mb-12 space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">Price and Cost</h2>
          <p className="text-gray-600 leading-relaxed">
            The cost of data recovery is always one of the most important factors for any customer. At DSS, we provide a very competitive and affordable price for all types of data recovery services. We provide a 100% Free Diagnosis & Evaluation of your media to determine the exact problem and the cost of recovery.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The cost of data recovery depends on the storage media type, the extent of damage (logical or physical), the capacity of the drive, and the amount of work required. We provide a detailed diagnosis report and quotation after the evaluation.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our prices are very competitive and affordable. We provide a fixed price quote after the diagnosis so you know exactly what you will be paying for. We provide various recovery options like Standard, Express, and Emergency to suit your needs.
          </p>
        </div>

        {/* Pricing Table */}
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-20">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#004b9b] text-white">
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-sm">RECOVERY TYPE</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-sm">MEDIA TYPE</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-sm">MEDIA CAPACITY</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-sm">COST [INR]</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-sm">APPROX. TIME</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {pricingData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">{row.type}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{row.media}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{row.capacity}</td>
                  <td className="px-6 py-4 text-sm font-bold text-[#004b9b]">Rs {row.cost}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Contact Us Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact us</h2>
              <p className="text-gray-600">
                With our expertise in data recovery services, we can help you recover data from all types of storage media. Get in touch with our experts for any query.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-full">
                  <MapPin className="text-[#004b9b]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Our Address</h4>
                  <p className="text-gray-600">Shop# S-11 & S-12, 2nd Floor, KHB Colony, 80 Feet Road, 5th Block, Koramangala, Bangalore - 560095.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-full">
                  <Mail className="text-[#004b9b]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email Us</h4>
                  <p className="text-gray-600">helpdesk@datastoragesolutions.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-full">
                  <Phone className="text-[#004b9b]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Call Us</h4>
                  <p className="text-gray-600">+91 9880872536, +91 9880979123</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Block placeholder matching the image style */}
          <div className="bg-[#56a8db] rounded-2xl p-10 text-white min-h-[400px] flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-8">Get In Touch :</h2>
            {/* Form elements would go here, but I'll leave it as a stylized block to match the image's "Get In Touch :" text area */}
          </div>
        </div>
      </div>

    </main>
  );
}
