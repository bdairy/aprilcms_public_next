interface IconProps {
  className?: string;
  color?: string;
}

export const ReadMoreLinkArrow = ({ className, color = '#bc8a8d' }: IconProps) => (
  <span className={className}>
    <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.521 13L7.069 11.5L10.752 7.81696H0.414001V5.74194H10.751L7.06799 2.05896L8.52 0.55896L14.745 6.78397L8.521 13Z"
        fill={color}
      />
    </svg>
  </span>
);
