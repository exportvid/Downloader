import type { Metadata } from 'next';
import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { LegalLayout } from '@/components/LegalLayout';

export const metadata: Metadata = pageMetadata({
  title: 'Copyright & Takedown Requests',
  description: 'How to submit a copyright takedown request for content accessible through ExportVid.',
  path: '/copyright',
});

export default function CopyrightPage() {
  return (
    <LegalLayout title="Copyright & Takedown Requests" updated="September 23, 2026">
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Copyright', path: '/copyright' }])} />

      <p>
        ExportVid respects the intellectual property rights of others and expects users of the Service to do the same.
        ExportVid does not host or store copyrighted media — it retrieves publicly available content directly from
        the source platform at the time of a request. If you believe your copyrighted work is being made available
        through the Service in a way that infringes your rights, you may submit a takedown request.
      </p>

      <h2>Before you file a request</h2>
      <p>
        Because ExportVid only retrieves content that is already publicly accessible on the source platform, removing
        access at the source (e.g. filing a takedown directly with TikTok, Instagram, Facebook, X, or Reddit, or setting
        the content to private) is typically the fastest way to prevent further access, including through ExportVid.
      </p>

      <h2>Submitting a takedown request to ExportVid</h2>
      <p>To submit a request, contact us via the <a href="/contact">Contact page</a> and include:</p>
      <ul>
        <li>Identification of the copyrighted work you claim has been infringed.</li>
        <li>The specific URL(s) or description of the content in question.</li>
        <li>Your contact information (name, email, and, if applicable, the company you represent).</li>
        <li>A statement that you have a good-faith belief the use is not authorized by the copyright owner, its agent, or the law.</li>
        <li>A statement, under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or authorized to act on their behalf.</li>
        <li>Your physical or electronic signature.</li>
      </ul>

      <h2>Counter-notices</h2>
      <p>
        If you believe content was removed or blocked in error, you may submit a counter-notice through the same contact
        channel, including your contact information, identification of the content and its previous location, and a
        statement under penalty of perjury that you have a good-faith belief the content was removed as a result of
        mistake or misidentification.
      </p>

      <h2>Repeat infringement</h2>
      <p>We reserve the right to restrict or terminate access to the Service for users associated with repeated, valid infringement claims.</p>

      <h2>Contact</h2>
      <p>
        Send copyright and takedown requests through the <a href="/contact">Contact page</a>, selecting the Copyright
        category so it reaches the right team.
      </p>
    </LegalLayout>
  );
}
