import * as FadeIn from "@/motion/fade";
import { Textarea } from "@/ui/textarea";

const page = () => {
  return (
    <FadeIn.Container className="size-full">
      <Textarea placeholder="Type your message here." />
    </FadeIn.Container>
  );
};

export default page;
