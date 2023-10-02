export const TitleIcon = ({color,className}:{color:string,className?:string}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="79"
      height="79"
      viewBox="0 0 79 79"
      fill="none"
      className={className}
    >
      <path
        d="M49.1433 0.74179C49.1433 0.74179 46.2594 21.1888 52.4743 31.591C58.6892 41.9932 78.0612 49.1432 78.0612 49.1432C78.0612 49.1432 57.6142 46.2593 47.212 52.4742C36.8097 58.6891 29.6597 78.0611 29.6597 78.0611C29.6597 78.0611 32.5436 57.6141 26.3287 47.2119C20.1138 36.8097 0.741853 29.6597 0.741853 29.6597C0.741853 29.6597 21.1888 32.5436 31.5911 26.3287C41.9933 20.1138 49.1433 0.74179 49.1433 0.74179Z"
        style={{fill:color}}
        fillOpacity="0.12"
      />
    </svg>
  );
};
