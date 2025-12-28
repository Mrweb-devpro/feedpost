import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes, useId } from "react";

export default function InterestButtonField({
  Icon,
  interest,
  interestsList,
  handleChange,
}: {
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  interest: string;
  interestsList: string[];
  handleChange: (interestValue: string) => void;
}) {
  const id = useId();
  const interestId = `interest-${id}`;

  return (
    <span className="">
      <input
        type="checkbox"
        id={interestId}
        name={interestId}
        hidden
        checked={interestsList.includes(
          interest.replaceAll(" ", "_").toUpperCase()
        )}
        className="peer"
        onChange={() => handleChange(interest)}
      />

      <label
        htmlFor={interestId}
        className="border border-stone-300 text-stone-600/90 p-2 flex items-center text-sm font-semibold gap-2 rounded-lg peer-checked:bg-blue-700 peer-checked:text-white peer-checked:border-transparent transition-all cursor-pointer hover:bg-blue-500 hover:text-white peer-checked:hover:bg-blue-700"
      >
        <Icon size={16} />
        {interest}
      </label>
    </span>
  );
}
