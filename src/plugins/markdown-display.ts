import { useAdaptiveColor } from "@/hooks/useAdaptiveColor";
// import { PRIMARY_COLOR } from "@/lib/constants";

const monoGrayColor = useAdaptiveColor("neutral", 900, true);

const markdownStyle = {
  body: { color: "white", fontFamily: "Alexandria", lineHeight: 30 },
  heading1: { fontFamily: "Alexandria", fontSize: 24, marginBottom: 10 },
  heading2: { fontFamily: "Alexandria", fontSize: 20, marginBottom: 8 },
  heading3: { fontFamily: "Alexandria", fontSize: 18, marginBottom: 6 },
  heading4: { fontFamily: "Alexandria", fontSize: 16, marginBottom: 6 },
  heading5: { fontFamily: "Alexandria", fontSize: 14, marginBottom: 6 },
  heading6: { fontFamily: "Alexandria", fontSize: 12, marginBottom: 6 },
  hr: { borderBottomWidth: 1, borderBottomColor: "#ccc", marginVertical: 10 },
  strong: {},
  em: { fontStyle: "italic" },
  s: { textDecorationLine: "line-through" },
  blockquote: { borderLeftWidth: 4, borderLeftColor: "#ccc", paddingLeft: 10, marginLeft: 10 },
  bullet_list: { marginLeft: 20 },
  ordered_list: { marginLeft: 20 },
  list_item: { marginBottom: 5 },
  code_inline: {
    backgroundColor: monoGrayColor,
    borderRadius: 2,
    fontFamily: "monospace"
  },
  code_block: {
    backgroundColor: monoGrayColor,
    padding: 10,
    borderRadius: 4,
    fontFamily: "monospace"
  },
  fence: {
    backgroundColor: monoGrayColor,
    padding: 10,
    borderRadius: 4,
    fontFamily: "monospace"
  },
  table: { borderWidth: 0, borderColor: monoGrayColor, marginVertical: 10 },
  thead: { backgroundColor: monoGrayColor },
  tbody: { backgroundColor: "transparent" },
  th: { padding: 8, borderWidth: 1, borderColor: "white", textAlign: "center" },
  tr: { borderBottomWidth: 0, borderBottomColor: "white" },
  td: { padding: 8, borderWidth: 1, borderColor: "white" },
  link: { color: "#0066cc", textDecorationLine: "underline" },
  blocklink: { color: "#0066cc", textDecorationLine: "underline" },
  image: { maxWidth: "100%", height: "auto" },
  text: { color: "white" },
  textgroup: { marginBottom: 10 },
  paragraph: { fontSize: 10, marginBottom: 0, lineHeight: 20 },
  hardbreak: { height: 20 },
  softbreak: { height: 10 },
  pre: { fontFamily: "monospace", backgroundColor: "white", padding: 10, borderRadius: 4 },
  inline: { display: "flex", flexDirection: "row" },
  span: { fontFamily: "Alexandria", color: "white" }
};

export default markdownStyle;
