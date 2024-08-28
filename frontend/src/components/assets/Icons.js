export const MenuIcon = ({ setSide }) => {
  return (
    <svg
      onClick={() => setSide(true)}
      width="22"
      height="18"
      viewBox="0 0 21 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: "pointer" }}
    >
      <path d="M1 1.08325H19.6667" stroke="#33363F" strokeLinecap="round" />
      <path d="M1 7.75H14.3333" stroke="#33363F" strokeLinecap="round" />
      <path d="M1 14.4167H9" stroke="#33363F" strokeLinecap="round" />
    </svg>
  );
};
export const ProfileIcon = ({ pathname, router }) => {
  return (
    <svg
      onClick={() => router.push("/login")}
      width="20"
      height="20"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: "pointer" }}
    >
      <circle
        cx="8.5"
        cy="4"
        r="3.5"
        stroke={pathname === "/login" ? "#C81127" : "#222222"}
        strokeLinecap="round"
      />
      <path
        d="M1.34913 12.9479C1.98883 10.6034 4.41473 9.5 6.845 9.5H10.155C12.5853 9.5 15.0112 10.6034 15.6509 12.9479C15.782 13.4287 15.8868 13.9489 15.9462 14.5015C16.0052 15.0507 15.5523 15.5 15 15.5H2C1.44772 15.5 0.994821 15.0507 1.05382 14.5015C1.1132 13.9489 1.21796 13.4287 1.34913 12.9479Z"
        stroke={pathname === "/login" ? "#C81127" : "#222222"}
        strokeLinecap="round"
      />
    </svg>
  );
};
export const CloseIcon = ({ setSide }) => {
  return (
    <svg
      onClick={() => setSide(false)}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: "pointer" }}
    >
      <path
        d="M13 1L1 13"
        stroke="#4B5563"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 1L13 13"
        stroke="#4B5563"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
