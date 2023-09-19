export const TmdbImage = ({
  imagePath,
  size = "original",
  altText,
  height,
  width,
}) => {
  const baseUrl = "https://image.tmdb.org/t/p/";
  const imageUrl = `${baseUrl}${size}${imagePath}`;

  return (
    <img
      style={{
        objectFit: "contain",
      }}
      src={imageUrl}
      alt={altText}
      height={height}
      width={width}
    />
  );
};
