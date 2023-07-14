// Carousel.tsx
import React, { CSSProperties, Fragment } from 'react';
import { useSnapCarousel } from 'react-snap-carousel';

const styles = {
  root: {},
  scroll: {
    position: 'relative',
    display: 'flex',
    overflow: 'auto',
    // scrollSnapType: 'x mandatory'
  },
  item: {
    flexShrink: 0,
  },
  itemSnapPoint: {
    scrollSnapAlign: 'start',
  },
  controls: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'start',
  },
  nextPrevButton: {},
  nextPrevButtonDisabled: { opacity: 0.3 },
  pagination: {
    display: 'flex',
  },
  paginationButton: {
    margin: '10px',
  },
  paginationButtonActive: { opacity: 0.3 },
  pageIndicator: {
    display: 'flex',
    justifyContent: 'center',
  },
} satisfies Record<string, CSSProperties>;

interface CarouselProps<T> {
  readonly items: T[];
  readonly renderItem: (props: CarouselRenderItemProps<T>) => React.ReactElement<CarouselItemProps>;
}

interface CarouselRenderItemProps<T> {
  readonly item: T;
  readonly isSnapPoint: boolean;
}

export const Carousel = <T extends any>({ items, renderItem }: CarouselProps<T>) => {
  const { scrollRef, pages, activePageIndex, prev, next, goTo, snapPointIndexes } =
    useSnapCarousel();
  return (
    <Fragment>
      <ul style={styles.scroll} ref={scrollRef}>
        {items.map((item, i) =>
          renderItem({
            item,
            isSnapPoint: snapPointIndexes.has(i),
          })
        )}
      </ul>
      <div className="owl-dots" dir='rtl' style={styles.controls} aria-hidden>
        {pages.map((_, i) => (
          <div
            key={i}
            className={`owl-dot ${activePageIndex === i ? 'active' : ''}`}
            onClick={() => goTo(i)}>
            <span/>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

interface CarouselItemProps {
  readonly isSnapPoint: boolean;
  readonly children?: React.ReactNode;
  readonly classes?: string;
}

export const CarouselItem = ({ isSnapPoint, children, classes }: CarouselItemProps) => (
  <li
    style={{
      ...styles.item,
      ...(isSnapPoint ? styles.itemSnapPoint : {}),
    }}
    className={ classes ?? `w-full sm:w-[30%] h-auto mr-4 rtl:mr-0 ml-4` }>
    {children}
  </li>
);
