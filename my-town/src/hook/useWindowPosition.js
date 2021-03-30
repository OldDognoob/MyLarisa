import { useLayoutEffect, useState } from 'react';

export default function useWindowPosition(id) {
    // it listen to an id we want to compare it
    // pageYOffset represents the animation when we are going to scroll the animation will start
    // and o.7 means at 70% the animation will start
  const [animation, setAnimation] = useState(false);

  useLayoutEffect(() => {
    function updatePosition() {
      const offetSetHeight = window.document.getElementById(id).offsetHeight;
      if (window.pageYOffset > offetSetHeight * 0.7) {
        setAnimation(true);
      }
    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, [id]);
  return animation;
}