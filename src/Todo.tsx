import { TodoType } from "./types/todo";
import { VFC } from "react";

//Pickでタイプの中の取り出したいプロパティを列挙する
//props:Omit<TodoType,"id">ではタイプからidプロパティを除いたものを抽出できる
//VFC<<Pick TodoType,〇〇〇>> のようにすることでそのコンポーネントのpropsの型はTodoTypeのpickで列挙ものを示す
export const Todo: VFC<Pick<TodoType, "userId" | "title" | "completed">> = (
  props
) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>;
};
