import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL || `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
    accountAssociation: {
      header: "eyJmaWQiOiA4ODcyNDYsICJ0eXBlIjogImN1c3RvZHkiLCAia2V5IjogIjB4N0Q0MDBGRDFGNTkyYkI0RkNkNmEzNjNCZkQyMDBBNDNEMTY3MDRlNyJ9",
      payload: "eyJkb21haW4iOiAiZGlzaC13ZWF0aGVyZnJhbWUudmVyY2VsLmFwcCJ9",
      signature: "MHg0YTI4N2RmYTIzYWYxYWI4Y2ExNWQxNjAyMzk3NzQ0NmEzZmVhZmQ5MzFkODNjNjZmYWIwMWFkMGE2Mjc4Nzc5MmM3YTJiZDkzMDNiYjc5M2JiZWM0YmFjNzk5NWI1NmU0MDYzMGM0NTkxMWQ2ZDMzNWFmZmUwMjI1OGQ5M2Y5YjFj"
    },
    frame: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/frames/hello/opengraph-image`,
      buttonTitle: "Launch Frame",
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
      webhookUrl: `${appUrl}/api/webhook`,
    },
  };

  return Response.json(config);
}
