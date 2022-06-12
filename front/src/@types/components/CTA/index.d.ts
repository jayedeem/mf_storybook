interface CTAProps {
  href: string;
  text: string;
}

declare module "components/CTA" {
  import { VFC } from "react";
  export const CTA: VFC<CTAProps>;
}
