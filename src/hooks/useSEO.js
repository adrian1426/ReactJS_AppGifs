import { useEffect, useRef } from 'react';

export const useSEO = ({ title, description }) => {

  const prevTitle = useRef(document.title);
  const metaDescription = document.querySelector('meta[name="description"]');
  const prevDescription = useRef(metaDescription);

  useEffect(() => {
    const previousTitle = prevTitle.current;
    if (title) {
      document.title = `Giffy | ${title}`;
    }

    return () => document.title = previousTitle;
  }, [title]);


  useEffect(() => {
    const previousDescription = prevDescription.current.getAttribute('content');
    if (description) {
      metaDescription.setAttribute('content', description);
    }

    return () => metaDescription.setAttribute('content', previousDescription);
  }, [description, metaDescription]);
};