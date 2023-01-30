import t from "./text-alltags";
const Compoent = () => {
  return (
    <div>
      <t.p variant="- / exBold / accent" value="테일윈드 사용 시" />
      <t.div variant="large / * / " value="좀더 직관적으로" />
      <t.article
        variant="base / medium / secondary"
        value="문자를 꾸미는 방법입니다."
      />
      <t.span
        variant="exLarge / * / "
        className="text-justify"
        value="타입스크립트 덕분에 자동완성 되는 부분이 인상적이었고"
      />
      <t.a
        variant="large / bold / "
        value="명확하게 텍스트를 꾸미는 로직임을 알 수 있어 좋았습니다."
      />
    </div>
  );
};

export default Compoent;
