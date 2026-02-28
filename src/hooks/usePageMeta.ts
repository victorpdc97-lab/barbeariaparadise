import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://barbeariaparadise.com.br";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.webp`;

interface PageMeta {
  title: string;
  description?: string;
  image?: string;
}

const usePageMeta = ({ title, description, image }: PageMeta) => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title;

    // Canonical URL
    const canonicalUrl = `${SITE_URL}${pathname === "/" ? "" : pathname}`;
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    // og:url
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute("content", canonicalUrl);
    }

    // og:title + twitter:title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute("content", title);

    // description
    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", description);
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute("content", description);
      const twDesc = document.querySelector('meta[name="twitter:description"]');
      if (twDesc) twDesc.setAttribute("content", description);
    }

    // og:image + twitter:image
    const imgUrl = image || DEFAULT_OG_IMAGE;
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute("content", imgUrl);
    const twImage = document.querySelector('meta[name="twitter:image"]');
    if (twImage) twImage.setAttribute("content", imgUrl);
  }, [title, description, image, pathname]);
};

export default usePageMeta;
