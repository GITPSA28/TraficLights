export default function Light({ lightColor, active }) {
  const style = { backgroundColor: lightColor };
  if (active) style.boxShadow = `0px 0px 20px 0px ${lightColor}`;
  return <div className={`light ${active ? "active" : ""}`} style={style} />;
}
