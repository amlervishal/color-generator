/* eslint-disable react/prop-types */

export default function Button(props) {
  const { children, ...rest } = props;
  return (
    <>
      <button
        style={{
          margin: "1rem",
          padding: "10px 25px",
          background: "#fff",
          color: "#000",
        }}
        {...rest}
      >
        {children}
      </button>
    </>
  );
}
