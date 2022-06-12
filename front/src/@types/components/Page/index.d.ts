interface IProps {
  name: string;
}

declare module "components/Page" {
  import { VFC } from "react";
  export const Page: VFC<IProps>;
}
