import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { LegalLayout, LegalSummary } from '@/components/LegalLayout';

export const metadata: Metadata = pageMetadata({
  title: 'Terms of Service',
  description: 'The terms for using ExportVid: a free service with no account, your responsibility for downloaded content, and acceptable use.',
  path: '/terms',
  localized: false,
});

// Legal text is English only, so these pages exist at the English URL and nowhere else.
export const dynamicParams = false;
export function generateStaticParams() {
  return [{ locale: 'en' }];
}

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="September 23, 2026">
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Terms of Service', path: '/terms' }])} />

      <LegalSummary>
        <li>ExportVid is free to use. You do not need an account or registration.</li>
        <li>It works with content that is publicly available on supported platforms. It does not host that content.</li>
        <li>You are responsible for having the right to download and use anything you download.</li>
        <li>Do not use ExportVid to reach private content, get around protections, or overload the service.</li>
      </LegalSummary>

      <p>
        These Terms of Service (&quot;Terms&quot;) apply to your use of the ExportVid website and downloader (the
        &quot;Service&quot;). By using the Service, you agree to these Terms and to our{' '}
        <Link href="/privacy">Privacy Policy</Link>. If you do not agree, please do not use the Service.
      </p>

      <h2>1. The Service</h2>
      <p>
        ExportVid lets you paste a link to a public post from a supported platform and download the media the platform makes
        publicly available, such as videos and photos. ExportVid identifies the platform, reads the link, lists the formats
        the source offers, and delivers the file you choose. In some cases it combines separate video and audio files into
        one file without re-encoding them.
      </p>
      <p>
        ExportVid does not host, create, or own the media it retrieves. The media belongs to its creators and to the
        platforms that host it.
      </p>

      <h2>2. Free to use, no account</h2>
      <p>
        The Service is free of charge. There are no subscriptions, fees, or account registration. To keep the Service
        available to everyone, we apply limits such as request rate limits, and maximum file size and video length. We may
        change these limits at any time.
      </p>

      <h2>3. Your responsibilities and content rights</h2>
      <ul>
        <li>
          You are responsible for making sure you have the right, license, or permission to download, keep, use, or share
          any content you retrieve. Using ExportVid does not give you any rights in that content.
        </li>
        <li>
          Downloading content you do not own may infringe copyright or other rights, and the rules differ from country to
          country. Personal, lawful use is your responsibility. Do not republish or redistribute content without permission
          from the rights holder.
        </li>
        <li>
          Your use of a platform remains subject to that platform&apos;s own terms. You are responsible for following them.
        </li>
      </ul>

      <h2>4. Acceptable use</h2>
      <p>You agree not to use the Service to:</p>
      <ul>
        <li>Access, or try to access, private accounts, login-protected content, or anything that requires authentication.</li>
        <li>Get around technical protection measures or access controls set by a platform or a rights holder.</li>
        <li>Run automated, bulk, or large-scale downloading, or otherwise place an unreasonable load on the Service.</li>
        <li>Interfere with or attempt to disrupt the Service, its security, or its rate limits.</li>
        <li>Infringe the intellectual property, privacy, or other rights of anyone else.</li>
        <li>Break any law or regulation that applies to you.</li>
      </ul>

      <h2>5. Third-party platforms and content</h2>
      <p>
        ExportVid is not affiliated with, endorsed by, or sponsored by TikTok, Instagram, Facebook, X, Reddit, YouTube,
        Pinterest, Snapchat, Twitch, LinkedIn, Tumblr, Vimeo, or any other platform. Their names and logos belong to their
        owners and are used only to describe what the Service supports. Platforms can change how they work, restrict access, or
        remove content at any time, and that can affect what ExportVid is able to retrieve.
      </p>

      <h2>6. Quality and availability</h2>
      <p>
        We show the quality and formats a source provides and do not add qualities that do not exist. Where a platform offers
        a version without a watermark, ExportVid chooses it. Where it only offers a watermarked version, we cannot remove the
        watermark. We do not guarantee that any given link, platform, or file will work, that results will be complete or
        error-free, or that the Service will always be available.
      </p>

      <h2>7. Our intellectual property</h2>
      <p>
        The ExportVid name, logo, website design, and software belong to us or our licensors. These Terms do not give you any
        right to use them, other than to use the Service as intended.
      </p>

      <h2>8. Copyright complaints</h2>
      <p>
        If you believe content available through the Service infringes your copyright, see our{' '}
        <Link href="/copyright">Copyright and DMCA</Link> page for how to send a notice.
      </p>

      <h2>9. Suspension and changes to the Service</h2>
      <p>
        We may limit, suspend, or end access to the Service for anyone who breaks these Terms or misuses the Service, and we
        may change or discontinue any part of the Service at any time.
      </p>

      <h2>10. Disclaimer of warranties</h2>
      <p>
        The Service is provided &quot;as is&quot; and &quot;as available&quot;, without warranties of any kind, whether
        express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement,
        to the extent the law allows.
      </p>

      <h2>11. Limitation of liability</h2>
      <p>
        To the extent the law allows, ExportVid and its operators are not liable for indirect, incidental, special,
        consequential, or punitive damages, or for lost data, profits, or goodwill, arising from your use of the Service or
        content you obtain through it. Because the Service is free, our total liability for any claim relating to the Service
        is limited to the maximum amount the law allows. Nothing in these Terms limits liability that cannot be limited by
        law.
      </p>

      <h2>12. Indemnity</h2>
      <p>
        You agree to be responsible for claims, losses, and costs that arise from your misuse of the Service, your breach of
        these Terms, or your downloading or use of content without the necessary rights.
      </p>

      <h2>13. Changes to these Terms</h2>
      <p>
        We may update these Terms as the Service changes. When we do, we will change the date at the top of this page. If you
        keep using the Service after an update, you accept the updated Terms.
      </p>

      <h2>14. Contact</h2>
      <p>
        Questions about these Terms can go to <a href="mailto:support@exportvid.com">support@exportvid.com</a> or through the{' '}
        <Link href="/contact">Contact page</Link>.
      </p>
    </LegalLayout>
  );
}
