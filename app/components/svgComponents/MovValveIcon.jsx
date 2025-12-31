const ValveIcon = ({
  size = 50,
  background = "transparent",
  fill = "#d1d1d1",
  stroke = "#000",
  className,
  style,
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <rect x="0" y="0" fill={background} />

        <rect
          x="43.602"
          y="21.367"
          width="14.585"
          height="45.249"
          fill={fill}
          stroke={stroke}
          strokeWidth="5"
        />

        <path
          d="m10.701 94.173v-51.555l40.269 25.778 40.269-25.778v51.555l-40.269-25.777-40.269 25.777z"
          fill={fill}
          stroke={stroke}
          strokeWidth="5"
        />

        <rect
          x="21.455"
          y="8.87"
          width="59.245"
          height="12.483"
          fill={fill}
          stroke={stroke}
          strokeWidth="5"
        />
      </g>
    </svg>
  );
};

export default ValveIcon;
