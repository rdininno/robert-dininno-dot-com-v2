import { LoaderFunction, json } from "@remix-run/node";
import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const fileName = url.searchParams.get("fileName");

  if (!fileName) {
    return new Response("fileName parameter is required", { status: 400 });
  }

  try {
    const presignedUrl = s3.getSignedUrl("getObject", {
      Bucket: process.env.AWS_S3_BUCKET,
      Key: fileName,
      Expires: 6 * 60,
    });

    return json({ url: presignedUrl });
  } catch (error) {
    console.error("Error generating signed URL", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
