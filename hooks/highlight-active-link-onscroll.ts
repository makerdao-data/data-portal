import { RefObject, useEffect, useState } from 'react';

export type Link = {
  text: string;
  href: string;
  ref: RefObject<HTMLDivElement>;
};

function nearestIndex(
  currentPosition: number,
  sectionPositionArray: Link[],
  startIndex: number,
  endIndex: number
): number {
  if (startIndex === endIndex) return startIndex;
  else if (startIndex === endIndex - 1) {
    if (
      Math.abs(
        (sectionPositionArray[startIndex].ref.current?.offsetTop ?? 0) -
          currentPosition
      ) <
      Math.abs(
        (sectionPositionArray[endIndex].ref.current?.offsetTop ?? 0) -
          currentPosition
      )
    )
      return startIndex;
    else return endIndex;
  } else {
    var nextNearest = ~~((startIndex + endIndex) / 2);
    var a = Math.abs(
      (sectionPositionArray[nextNearest].ref.current?.offsetTop ?? 0) -
        currentPosition
    );
    var b = Math.abs(
      (sectionPositionArray[nextNearest + 1].ref.current?.offsetTop ?? 0) -
        currentPosition
    );
    if (a < b) {
      return nearestIndex(
        currentPosition,
        sectionPositionArray,
        startIndex,
        nextNearest
      );
    } else {
      return nearestIndex(
        currentPosition,
        sectionPositionArray,
        nextNearest,
        endIndex
      );
    }
  }
}

export default function useHighlightLinkOnScroll(links: Link[]) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    function handleScroll() {
      var index = nearestIndex(window.scrollY, links, 0, links.length - 1);
      setActiveIndex(index);
    }
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [links]);

  return activeIndex;
}
