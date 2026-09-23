import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { LegalLayout } from '@/components/LegalLayout';

export const metadata: Metadata = pageMetadata({
  title: 'Terms of Service',
  description: 'The terms governing use of ExportVid, including acceptable use and your responsibility for downloaded content.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="September 23, 2026">
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Terms of Service', path: '/terms' }])} />

      <p>
        These Terms of Service (&quot;Terms&quot;) govern your use of ExportVid (&quot;the Service&quot;). By using the
        Service, you agree to these Terms. If you do not agree, do not use the Service.
      </p>

      <h2>What the Service does</h2>
      <p>
        ExportVid lets you retrieve and download publicly accessible media from supported social media platforms by
        submitting a public URL. The Service extracts and serves media that the source platform makes publicly
        available; it does not host, create, or own that media.
      </p>

      <h2>Your responsibility for downloaded content</h2>
      <p>
        You are solely responsible for ensuring you have the necessary rights, licenses, or permission to download, use,
        reproduce, or redistribute any content you retrieve through the Service. ExportVid does not grant you any rights
        to third-party content, and using the Service does not transfer copyright or ownership of anything you download.
      </p>

      <h2>Acceptable use</h2>
      <p>You agree not to use the Service to:</p>
      <ul>
        <li>Access, or attempt to access, private accounts, login-protected content, or any content requiring authentication.</li>
        <li>Circumvent technical protection measures put in place by a source platform.</li>
        <li>Engage in large-scale automated scraping, bulk downloading, or any use that places excessive load on the Service.</li>
        <li>Infringe the intellectual property, privacy, or other rights of any third party.</li>
        <li>Use the Service for any unlawful purpose.</li>
      </ul>

      <h2>No warranty</h2>
      <p>
        The Service is provided &quot;as is&quot; and &quot;as available.&quot; We do not guarantee that any specific
        content will remain available, that extraction will always succeed, or that the Service will be uninterrupted or
        error-free. Source platforms may change their systems at any time in ways that affect what the Service can
        retrieve.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, ExportVid and its operators are not liable for any indirect, incidental,
        or consequential damages arising from your use of the Service or from content obtained through it.
      </p>

      <h2>Changes to the Service and these Terms</h2>
      <p>
        We may modify or discontinue any part of the Service at any time, and we may update these Terms as the Service
        evolves. Continued use of the Service after changes take effect constitutes acceptance of the updated Terms.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms can be sent through the <Link href="/contact">Contact page</Link>.
      </p>
    </LegalLayout>
  );
}
