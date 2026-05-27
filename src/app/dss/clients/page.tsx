import PageHeader from '@/components/layout/PageHeader';
import Image from 'next/image';
import { publicPath } from '@/lib/site';

// Clients with local images
const clientsWithImg = [
  { name: 'Skolta BPM',            img: null },
  { name: 'Lucent Technologies',   img: null },
  { name: 'Indegene',              img: null },
  { name: 'Collabera',             img: null },
  { name: 'Airtel',                img: '/images/partner_companies/airtel-logo.webp' },
  { name: 'Agilent Technologies',  img: '/images/partner_companies/agilent_technologies_logo.webp' },
  { name: 'Panacea',               img: null },
  { name: 'Bharat Petroleum',      img: '/images/partner_companies/bharat-petroleum_logo.webp' },
  { name: 'Cypress',               img: null },
  { name: 'Kennametal',            img: '/images/partner_companies/kennametal_logo.webp' },
  { name: 'Manipal Hospitals',     img: null },
  { name: 'GE',                    img: null },
  { name: 'Epiance',               img: null },
  { name: 'UB Group',              img: null },
  { name: 'Schneider Electric',    img: null },
  { name: 'Columbia Asia',         img: '/images/partner_companies/columbia_asia_logo.webp' },
  { name: 'SKF',                   img: '/images/partner_companies/skf_logo.webp' },
  { name: 'ITC',                   img: '/images/partner_companies/itc_limited_logo.webp' },
  { name: 'Quantum',               img: null },
  { name: 'HCG',                   img: null },
  { name: 'BSNL',                  img: '/images/partner_companies/bsnl_logo.webp' },
  { name: 'Microland',             img: null },
  { name: 'Blue Star',             img: '/images/partner_companies/blue-star-logo.webp' },
  { name: 'Force',                 img: null },
  { name: 'Lenovo',                img: null },
  { name: 'APC',                   img: null },
  { name: 'Marvell',               img: null },
  { name: 'Cognizant',             img: null },
];

function ClientCard({ name, img }: { name: string; img: string | null }) {
  return (
    <div className="border border-slate-200 rounded-sm flex items-center justify-center p-4 h-[90px] hover:border-slate-400 hover:shadow-sm transition-all duration-200 bg-white cursor-default">
      {img ? (
        <div className="relative w-full h-full">
          <Image
            src={publicPath(img)}
            alt={name}
            fill
            className="object-contain p-1"
            sizes="160px"
          />
        </div>
      ) : (
        <span className="text-slate-700 font-bold text-sm text-center leading-tight">{name}</span>
      )}
    </div>
  );
}

export default function ClientsPage() {
  return (
    <main className="min-h-screen bg-white">

      <PageHeader
        title="Clients"
        backgroundImage="/images/headers_img/clients.jpg"
        breadcrumb={[
          { label: 'HOME', href: '/' },
          { label: 'CLIENTS' },
        ]}
      />

      {/* ── Client Logo Grid ────────────────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {clientsWithImg.map((client, i) => (
              <ClientCard key={i} name={client.name} img={client.img} />
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
