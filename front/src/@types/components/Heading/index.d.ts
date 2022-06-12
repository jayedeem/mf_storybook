interface IHeading {
  heading: string;
}

declare module "components/Heading" {
  import { VFC } from "react";
  export const Heading: VFC<IHeading>;
}
