import Image from 'next/image';

interface PlateProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function Plate({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = '',
  style = {},
}: PlateProps) {
  return (
    <div
      className={`plate ${className}`}
      style={{
        position: fill ? 'relative' : 'static',
        alignSelf: 'start',
        ...style,
      }}
    >
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: 'cover' }}
          priority={priority}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width || 600}
          height={height || 400}
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          priority={priority}
        />
      )}
    </div>
  );
}
