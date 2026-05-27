import PageHeader from '@/components/layout/PageHeader';

export default function ClaimsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        title="Claims"
        backgroundImage="/images/claims_banner.jpg"
        breadcrumb={[
          { label: 'HOME', href: '/' },
          { label: 'CLAIMS' },
        ]}
      />

      {/* ── Claims Content ─────────────────────────────────────────── */}
      <section className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-6 space-y-12 text-sm text-slate-700 leading-relaxed">

          {/* ── Seagate ── */}
          <div className="space-y-4">
            <p>
              See below for step-by-step instructions on how to return your drive to Seagate. Those
              familiar with the process can skip directly to the box on the right. For your personal
              security, Seagate will erase all data on returned drives. Please read our Data Erasure
              Policy for details.
            </p>
            <a
              href="http://www.seagate.com/in/en/support/warranty-and-replacements/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[#3da3ff] hover:underline break-all"
            >
              http://www.seagate.com/in/en/support/warranty-and-replacements/
            </a>
          </div>

          <hr className="border-slate-100" />

          {/* ── Western Digital ── */}
          <div className="space-y-4">
            <p>
              Western Digital (&quot;WD&quot;) values your business and always attempts to provide you the
              very best of service.
            </p>
            <p>
              See below for step-by-step instructions on how to return your drive to Western Digital
              (WD).
            </p>
            <p>
              For more details follow the below given link to connect with the respective Warranty
              Service Centers:
            </p>
            <a
              href="http://support.wdc.com/warranty/policy.asp?wdc_lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[#3da3ff] hover:underline break-all"
            >
              http://support.wdc.com/warranty/policy.asp?wdc_lang=en
            </a>
            <p>Click on the below link to verify your drive warranty status:</p>
            <a
              href="https://support-en.wd.com/app/warrantystatus"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[#3da3ff] hover:underline break-all"
            >
              https://support-en.wd.com/app/warrantystatus
            </a>
            <p className="text-slate-500 italic text-xs leading-relaxed">
              Disclaimer: &quot;The information provided regarding the Warranty &amp; Replacement
              procedures of Hard drive disk manufacturer, Western Digital, is purely for educational
              purpose only. The information given in through the established link may be used as per
              the requirement by the customer. We are not responsible for any actions taken by the
              Hard Disk Drive manufacturer for your media.&quot;
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* ── Toshiba ── */}
          <div className="space-y-4">
            <p>
              Toshiba being one of the largest manufacturer of hard disk values your business and
              have been known to provide the best of service.
            </p>
            <p>
              See below for step-by-step instructions on how to return your drive to Toshiba. For
              more details follow the below-given links to connect with the respective Warranty
              Service Centers.
            </p>
            <a
              href="https://storage.toshiba.com/consumer-hdd/support/warranty-info"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[#3da3ff] hover:underline break-all"
            >
              https://storage.toshiba.com/consumer-hdd/support/warranty-info
            </a>
            <a
              href="https://myapps.sasc.toshiba.com/myapps/admin/jsp/webma/ActionRequest/NoLogin.jsp"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[#3da3ff] hover:underline break-all"
            >
              https://myapps.sasc.toshiba.com/myapps/admin/jsp/webma/ActionRequest/NoLogin.jsp
            </a>
            <p className="text-slate-500 italic text-xs leading-relaxed">
              Disclaimer: &quot;The information provided regarding the Warranty &amp; Replacement
              procedures of Hard drive disk manufacturer, Toshiba, is purely for educational purpose
              only. The information given in through the established link may be used as per the
              requirement by the customer. We are not responsible for any actions taken by the Hard
              Disk Drive manufacturer for your media.&quot;
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* ── Data Loss Prevention ── */}
          <div className="space-y-5">
            <p>
              Preventing data loss would always be a good practice approach in avoiding potential
              breach, damage, or loss of confidential, private, or proprietary information stored in
              the Hard disk. Very importantly it applies in preventing the movement of any sensitive
              data outside an organization&apos;s secure boundary.
            </p>
            <p>
              Data loss prevention (DLP), which could also mean to be called data leak protection is
              a description of systems and technologies designed for detecting potential data breaches
              or attempts to move data outside an organization&apos;s secure data storage systems.
              The prevention aspect comes into being as such preventive systems would monitor,
              detect, and then block access to or transmission of sensitive or proprietary data and
              information. Data loss prevention systems, in general, would provide three distinct
              types of protection:
            </p>

            <ul className="space-y-5 list-disc list-outside pl-5">
              <li>
                <span className="font-semibold text-slate-800">Protection In-use</span> would be
                about sensitive data that is in use by applications or for service delivery. It would
                generally depend on various types of user authentication to establish the identity of
                those requesting access to the data along with access control systems that permit or
                deny such requests basis the user identity, job role, and security policy that
                governs such data. Such data could additionally remain encrypted at all times so that
                attempts by anyone to access paging files, memory snapshots, or temporary working
                files would not yield any plaintext data of any kind.
              </li>
              <li>
                <span className="font-semibold text-slate-800">Protection In-motion</span> would
                apply when sensitive data would be in transit on a network of any kind. It would
                generally depend on sufficiently strong encryption tools and technologies available to
                mitigate the risk of eavesdropping and to lower significantly the probability of a
                successful decryption attack. When the data that is regulated would be more valuable,
                then encryption would be stronger.
              </li>
              <li>
                <span className="font-semibold text-slate-800">Protection At-rest</span> would
                generally apply to data that resides on some kind of persistent storage platter. This
                usually would involve access controls to limit access to programs and users with a
                legitimate need to know, access monitoring to track and log all access to such
                information. Strong encryption is made available to protect against theft or attack
                against the physical platter where such data is stored.
              </li>
            </ul>

            <p>
              The overall idea behind DLP would be to watch any unauthorized attempts to access
              sensitive data and information. It is all about taking all possible measures to block or
              prevent it from going out or exiting from the organization. There are very many
              technologies and systems involved, not all of which could be labeled as DLP, but all of
              that would be equally important.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
