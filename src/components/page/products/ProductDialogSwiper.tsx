import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import type { Product } from '../../../services/products/products.type.ts';
export function ProductDialogSwiper({ product }: Readonly<Props>) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
  };
  return (
    <>
      {/* Main */}
      <Swiper
        modules={[Thumbs]}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        onSwiper={setThumbsSwiper}
        className="mb-6 bg-surface rounded-2xl"
        onSlideChange={handleSlideChange}
      >
        {product.images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img src={src} alt={`Product ${idx}`} className="w-full object-contain" />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Thumbnails */}
      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={3}
        spaceBetween={16}
        freeMode={true}
        watchSlidesProgress
      >
        {product.images.map((src, idx) => (
          <SwiperSlide
            key={idx}
            className={`bg-surface rounded-2xl border ${activeIndex === idx ? 'border-foreground' : 'border-transparent'}`}
          >
            <img src={src} alt={`Thumb ${idx}`} className="cursor-pointer w-full object-contain" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

interface Props {
  product: Product;
}
