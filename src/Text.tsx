import { VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

//FC<Props> のようにすることでそのコンポーネントのpropsの型はPropsであることを示す
//「コンポーネントである」という型と「Propsはこれ」という型を同時に指定しているイメージ
export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>;
};
