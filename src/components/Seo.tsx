import { Helmet } from "react-helmet-async";

const SITE_URL = "https://sunnydatko.com";
const DEFAULT_IMAGE = `${SITE_URL}/og.png`;

interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
}

const Seo = ({ title, description, path, image = DEFAULT_IMAGE, noIndex }: SeoProps) => {
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noIndex && <meta name="robots" content="noindex" />}

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default Seo;
