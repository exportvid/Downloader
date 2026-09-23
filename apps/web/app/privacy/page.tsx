import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { LegalLayout } from '@/components/LegalLayout';

export const metadata: Metadata = pageMetadata({
  title: 'Privacy Policy',
  description: 'How ExportVid handles data: what we collect, what we never store, and how long temporary files are kept.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="September 23, 2026">
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy' }])} />

      <p>
        ExportVid is built to require as little data as possible. There are no accounts, no logins, and no need to provide
        any personal information to use the service.
      </p>

      <h2>What we collect</h2>
      <p>When you use ExportVid, our servers process:</p>
      <ul>
        <li>The URL you submit, solely to extract and serve the requested media.</li>
        <li>Standard technical request data (IP address, timestamp, basic request metadata) used only for rate limiting, abuse prevention, and diagnosing errors.</li>
        <li>Aggregate, non-identifying operational metrics (which platform was requested, success or failure, processing time) used to monitor service health.</li>
      </ul>
      <p>We do not require or collect names, emails, payment details, or account information, because there is no account system.</p>

      <h2>What we don&apos;t store</h2>
      <ul>
        <li>We do not permanently store the media you download. Extracted metadata is cached briefly (minutes) purely to serve identical concurrent requests efficiently, then discarded.</li>
        <li>Any temporary file our servers produce to combine separately-hosted video and audio is deleted automatically shortly after it becomes available for download.</li>
        <li>We do not build user profiles, and we do not sell or share request data with third parties for advertising purposes.</li>
      </ul>

      <h2>Cookies and tracking</h2>
      <p>
        ExportVid does not use advertising or cross-site tracking cookies. Any cookies set are strictly limited to what is
        necessary for basic site functionality and security.
      </p>

      <h2>Third-party platforms</h2>
      <p>
        ExportVid retrieves publicly available media from third-party platforms. Your use of those platforms remains
        subject to their own privacy policies and terms, which we do not control.
      </p>

      <h2>Data retention</h2>
      <p>
        We keep the technical logs described above only as long as needed for security, abuse prevention, and debugging,
        and delete them on a rolling basis rather than retaining them indefinitely.
      </p>

      <h2>Your rights</h2>
      <p>
        Because ExportVid does not maintain accounts or persistent personal data, there is generally nothing tied to you
        to access, export, or delete. If you have a specific privacy concern or request, contact us using the details on
        the <Link href="/contact">Contact page</Link>.
      </p>

      <h2>Changes to this policy</h2>
      <p>We may update this policy as the service evolves. Material changes will be reflected by updating the date above.</p>
    </LegalLayout>
  );
}
