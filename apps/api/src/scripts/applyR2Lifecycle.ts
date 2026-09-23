import 'dotenv/config';
import { S3Client, PutBucketLifecycleConfigurationCommand } from '@aws-sdk/client-s3';
import { config, r2Configured } from '../config';

/**
 * One-time setup: tells R2 itself to delete objects after one day, as a backstop to the worker's own
 * cleanup. R2 lifecycle rules work in whole days, so this is the outer limit, not the 15-minute target.
 *
 *   npm run r2:lifecycle --workspace=apps/api
 */
async function main() {
  if (!r2Configured) {
    console.error('Set R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, and R2_SECRET_ACCESS_KEY first.');
    process.exit(1);
  }
  const s3 = new S3Client({
    region: 'auto',
    endpoint: config.R2_ENDPOINT ?? `https://${config.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId: config.R2_ACCESS_KEY_ID!, secretAccessKey: config.R2_SECRET_ACCESS_KEY! },
  });
  await s3.send(
    new PutBucketLifecycleConfigurationCommand({
      Bucket: config.R2_BUCKET,
      LifecycleConfiguration: {
        Rules: [{ ID: 'expire-temp-downloads', Status: 'Enabled', Filter: { Prefix: '' }, Expiration: { Days: 1 } }],
      },
    }),
  );
  console.log(`Lifecycle rule set on bucket "${config.R2_BUCKET}": objects expire after 1 day.`);
}

main().catch((err) => {
  console.error('Failed to set lifecycle rule', err);
  process.exit(1);
});
