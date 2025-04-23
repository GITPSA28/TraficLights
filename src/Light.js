export default function Light({ lightColor, curColor }) {
  const style = { backgroundColor: lightColor };
  const active = curColor === lightColor;
  if (active) style.boxShadow = `0px 0px 20px 0px ${lightColor}`;
  return <div className={`light ${active ? "active" : ""}`} style={style} />;
}
