import { useEffect, useRef, useState } from "react";

export const useNearScreen = ({ distance = '100px', externalRef, once = true }) => {
  const [show, setShow] = useState(false);
  const elementoDiv = useRef();
  const elemento = externalRef || elementoDiv;

  useEffect(() => {
    const onLoadObserver = (entries, observ) => {
      const element = entries[0];

      if (element.isIntersecting) {
        setShow(true);
        once && observ.disconnect();
      } else {
        setShow(false);
      }
    };

    const observer = new IntersectionObserver(onLoadObserver, {
      rootMargin: distance
    });

    elemento.current && observer.observe(elemento.current);

    return () => observer.disconnect();
  });

  return [show, elemento];
};