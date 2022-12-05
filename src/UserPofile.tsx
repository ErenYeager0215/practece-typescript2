import { VFC } from "react";
import { User } from "./types/user";

type Props = {
  user: User;
};

export const UserProfile: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      {/* user.hobbiesの後ろに？をいれることで要素がない場合にエラーを回避 */}
      {/* してundefinedになる（joinを読まずエラーを回避でする） */}
      <dd>{user.hobbies?.join("/")}</dd>
    </dl>
  );
};
