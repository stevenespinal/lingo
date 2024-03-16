import Image from "next/image";

type Props = {
  question: string;
};
export const QuestionBubble = ({ question }: Props) => {
  return (
    <div className="flex items-center mb-6 gap-x-4">
      <Image
        src="/mascot.svg"
        alt="Macot"
        height={60}
        width={60}
        className="hidden lg:block"
      />
      <Image
        src="/mascot.svg"
        alt="Macot"
        height={40}
        width={40}
        className="block lg:hidden"
      />
      <div className="relative px-4 py-2 text-sm border-2 rounded-xl lg:text-base">
        {question}
        <div className="absolute w-0 h-0 transform rotate-90 -translate-y-1/2 border-t-8 -left-3 top-1/2 border-x-8 border-x-transparent" />
      </div>
    </div>
  );
};
