import { useEffect, useRef, useState } from "react";

export const useNearScreen = (distance = '100px') => {
  const [show, setShow] = useState(false);
  const elementoDiv = useRef();

  useEffect(() => {
    const onLoadObserver = (entries, observ) => {
      const element = entries[0];

      if (element.isIntersecting) {
        setShow(true);
        observ.disconnect();
      }
    };

    const observer = new IntersectionObserver(onLoadObserver, {
      rootMargin: distance
    });

    observer.observe(elementoDiv.current);

    return () => observer.disconnect();
  });

  return [show, elementoDiv];
};