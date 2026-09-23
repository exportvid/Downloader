import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { LegalLayout, LegalSummary } from '@/components/LegalLayout';

export const metadata: Metadata = pageMetadata({
  title: 'Copyright and DMCA',
  description: 'How ExportVid handles copyright: what it does and does not store, and how to send a takedown request or counter-notice.',
  path: '/copyright',
  localized: false,
});

// Legal text is English only, so these pages exist at the English URL and nowhere else.
export const dynamicParams = false;
export function generateStaticParams() {
  return [{ locale: 'en' }];
}

export default function CopyrightPage() {
  return (
    <LegalLayout title="Copyright and DMCA" updated="September 23, 2026">
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Copyright', path: '/copyright' }])} />

      <LegalSummary>
        <li>ExportVid does not host or permanently store the media people download.</li>
        <li>Content stays on the source platform. Removing it there is the most effective way to stop access.</li>
        <li>Rights holders can send a takedown notice to copyright@exportvid.com.</li>
      </LegalSummary>

      <p>
        ExportVid respects the intellectual property rights of others and expects everyone who uses the Service to do the same.
        This page explains how ExportVid relates to the content it retrieves and how to send us a copyright notice.
      </p>

      <h2>1. How ExportVid handles content</h2>
      <p>
        ExportVid does not host a library of media. When someone pastes a link, ExportVid asks the source platform for the
        publicly available media at that moment and passes it to the user. It does not keep a permanent copy. In some cases a
        temporary file is created to combine separate video and audio, and it is deleted about 15 minutes after it is ready.
        See our <Link href="/privacy">Privacy Policy</Link> for details.
      </p>
      <p>
        ExportVid only works with content that is publicly available. It does not access private accounts or content that
        requires a login.
      </p>

      <h2>2. Start at the source</h2>
      <p>
        Because the content lives on the source platform, the most effective way to stop it from being reached, including
        through ExportVid, is to report it to that platform or change its visibility there. We recommend doing this first.
        You can still send us a notice if you want us to review a specific link.
      </p>

      <h2>3. Sending a takedown notice</h2>
      <p>
        Send your notice by email to <a href="mailto:copyright@exportvid.com">copyright@exportvid.com</a>. To be valid under
        the US Digital Millennium Copyright Act (DMCA) and similar laws, it should include:
      </p>
      <ul>
        <li>Your physical or electronic signature, or that of a person authorized to act for the copyright owner.</li>
        <li>A description of the copyrighted work you say has been infringed.</li>
        <li>The exact link (URL) of the content on the source platform, so we can find it.</li>
        <li>Your name, mailing address, telephone number, and email address.</li>
        <li>A statement that you have a good-faith belief the use is not authorized by the copyright owner, its agent, or the law.</li>
        <li>A statement, under penalty of perjury, that the information in the notice is accurate and that you are the copyright owner or are authorized to act for the owner.</li>
      </ul>
      <p>
        Please make sure your claim is accurate. Under US law, anyone who knowingly makes a material misrepresentation in a
        notice may be liable for damages.
      </p>

      <h2>4. What happens next</h2>
      <p>
        We review complete notices and respond as promptly as we can. Where a notice is valid, we may take action such as
        preventing the reported links from being processed through the Service. ExportVid has no accounts and does not know who
        pastes a given link, so we cannot notify individual users. We may contact you if we need more information, and we may
        not act on notices that are incomplete or unclear.
      </p>

      <h2>5. Counter-notices</h2>
      <p>
        If you believe we acted on a notice by mistake or because content was misidentified, you can send a counter-notice to{' '}
        <a href="mailto:copyright@exportvid.com">copyright@exportvid.com</a>. Include:
      </p>
      <ul>
        <li>Your signature, physical or electronic.</li>
        <li>The content that was affected and where it was available before action was taken.</li>
        <li>A statement, under penalty of perjury, that you have a good-faith belief the action resulted from a mistake or misidentification.</li>
        <li>Your name, address, and telephone number, and your consent to the jurisdiction of the courts where you are located.</li>
      </ul>

      <h2>6. Repeat infringement</h2>
      <p>
        We may limit or end access to the Service for anyone who repeatedly misuses it to infringe copyright.
      </p>

      <h2>7. Notice to users</h2>
      <p>
        If you use ExportVid, you are responsible for making sure you have the right to download and use the content. Our{' '}
        <Link href="/terms">Terms of Service</Link> explain your responsibilities.
      </p>

      <h2>8. Trademarks</h2>
      <p>
        Platform names and logos are the property of their owners. ExportVid is not affiliated with or endorsed by any
        supported platform.
      </p>
    </LegalLayout>
  );
}
