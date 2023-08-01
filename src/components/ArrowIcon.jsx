export const ArrowIcon = ({ className, stroke }) => {
  return (
    <svg className={className} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M35 262C160.529 140.938 328.006 207.285 361 215.518"
        stroke={stroke}
        strokeOpacity="0.9"
        strokeWidth="40"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M343.69 143C355.23 190.289 361 214.681 361 216.177C361 218.421 327.488 234.13 312 258"
        stroke={stroke}
        strokeOpacity="0.9"
        strokeWidth="40"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;
