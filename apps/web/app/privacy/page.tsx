import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { LegalLayout, LegalSummary } from '@/components/LegalLayout';

export const metadata: Metadata = pageMetadata({
  title: 'Privacy Policy',
  description: 'How ExportVid handles data: what we process, how long temporary files and cached results are kept, and what we never collect.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="September 23, 2026">
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy' }])} />

      <LegalSummary>
        <li>ExportVid is free. There are no accounts, registration, or payments, so we never ask for your name, email, or payment details.</li>
        <li>We process the link you paste and basic technical request data, only to run the service and keep it secure.</li>
        <li>We do not keep the videos or photos you download. Any temporary file is deleted about 15 minutes after it is ready.</li>
        <li>We do not sell your data and do not use it for advertising.</li>
      </LegalSummary>

      <p>
        This Privacy Policy explains what information ExportVid (&quot;we&quot;, &quot;us&quot;) processes when you use
        the website and downloader (the &quot;Service&quot;), why we process it, and how long we keep it. It should be read
        together with our <Link href="/terms">Terms of Service</Link>.
      </p>

      <h2>1. No account, no registration</h2>
      <p>
        You can use ExportVid without creating an account or signing in. Because of that, we do not hold a profile, download
        history, or saved list for you, and nothing on our side ties your visits together.
      </p>

      <h2>2. Information we process</h2>
      <p>When you use the Service, we process the following:</p>
      <ul>
        <li>
          <strong>The link you submit.</strong> We use it to identify the platform, ask that platform for the publicly available
          media, and show you the available formats.
        </li>
        <li>
          <strong>Technical request data.</strong> This includes your IP address, the time of the request, and details of the
          request itself. We use it to apply rate limits, block abuse, and diagnose errors.
        </li>
        <li>
          <strong>Service metrics.</strong> For each attempt we record which platform was requested, whether it succeeded or
          failed, and how long it took. For files that need to be combined, we also record whether the job succeeded and any
          error message. These records do not include your IP address or the link you submitted.
        </li>
        <li>
          <strong>Your theme choice.</strong> If you pick a light or dark theme, your browser keeps that choice in its local
          storage. It stays on your device and is not sent to us.
        </li>
      </ul>
      <p>
        We do not collect your name, email address, phone number, payment details, or precise location, and we do not use
        advertising or cross-site tracking cookies.
      </p>

      <h2>3. How we use information</h2>
      <ul>
        <li>To read your link, list the available formats, and deliver the file you choose.</li>
        <li>To enforce rate limits and other protections against abuse, automated scraping, and attacks.</li>
        <li>To monitor reliability, fix errors, and understand which platforms need attention.</li>
        <li>To respond to messages you send us and to meet legal obligations.</li>
      </ul>

      <h2>4. How downloads and temporary files work</h2>
      <ul>
        <li>
          <strong>Direct downloads.</strong> When a platform offers a ready-to-use file, it passes through our servers to your
          device while you download it. We do not save a copy.
        </li>
        <li>
          <strong>Files that must be combined.</strong> Some platforms serve video and audio separately, or serve a stream
          that has to be repackaged. In those cases we build the file in temporary storage, give you a link to it, and delete
          it about 15 minutes after it is ready.
        </li>
        <li>
          <strong>Cached results.</strong> The list of formats found for a link is kept in a short-lived cache for about 5
          minutes so repeat requests are quick. Download links stop working when the cache entry expires, and you would need
          to paste the link again.
        </li>
      </ul>

      <h2>5. How long we keep information</h2>
      <ul>
        <li>Cached extraction results: about 5 minutes.</li>
        <li>Temporary merged files: about 15 minutes after they are ready.</li>
        <li>Rate-limit counters: about one minute.</li>
        <li>Server logs: only as long as needed for security, abuse prevention, and debugging, then deleted on a rolling basis.</li>
        <li>Service metrics: kept to track reliability over time. They do not identify you.</li>
      </ul>

      <h2>6. Sharing</h2>
      <p>We do not sell your information and we do not share it for advertising. We share it only in these cases:</p>
      <ul>
        <li>
          <strong>Service providers.</strong> We use infrastructure providers, such as hosting, cloud storage, and network
          security services, to run ExportVid. They process data on our behalf and only for that purpose.
        </li>
        <li>
          <strong>Legal reasons.</strong> We may disclose information if the law requires it, or if it is needed to protect
          the Service, our users, or others from abuse or harm.
        </li>
      </ul>

      <h2>7. Third-party platforms</h2>
      <p>
        To fetch media, our servers contact the platform that hosts it, so the platform sees a request from us rather than
        from your device. Those platforms have their own privacy policies, and we do not control how they handle data. ExportVid
        does not sign in to any platform, and it never asks you for platform credentials.
      </p>

      <h2>8. Security</h2>
      <p>
        We restrict the Service to supported platforms, apply rate limits and size limits, and delete temporary files
        automatically. No online service is completely secure, so we cannot guarantee absolute security.
      </p>

      <h2>9. Children</h2>
      <p>
        ExportVid is not directed to children under 13, and we do not knowingly collect personal information from them.
      </p>

      <h2>10. Your choices and rights</h2>
      <p>
        Because we do not keep accounts or profiles, there is usually nothing tied to you that we could access, correct, or
        delete. Depending on where you live, you may have rights over personal data, such as access or deletion. To make a
        request or ask a privacy question, email <a href="mailto:privacy@exportvid.com">privacy@exportvid.com</a>. Our
        infrastructure providers may process data in other countries.
      </p>

      <h2>11. Changes to this policy</h2>
      <p>
        We may update this policy as the Service changes. When we do, we will change the date at the top of this page. Please
        check back from time to time.
      </p>

      <h2>12. Contact</h2>
      <p>
        Questions about this policy can go to <a href="mailto:privacy@exportvid.com">privacy@exportvid.com</a> or through
        the <Link href="/contact">Contact page</Link>.
      </p>
    </LegalLayout>
  );
}
