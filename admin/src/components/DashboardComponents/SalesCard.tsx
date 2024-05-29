/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconType } from "react-icons";
import { Link } from "react-router-dom";
type ISalesCardTypes = {
  icon?: IconType;
  ammount?: string;
  salesTitle?: string;
  saleRate?: string;
  position?: string;
  className?: string;
  link?: any;
};

const SalesCard: React.FC<ISalesCardTypes> = ({
  icon: Icon,
  ammount,
  salesTitle,
  saleRate,
  position,
  className,
  link
}) => {
  return (
    <Link
      to={link}
      className="flex flex-col items-center cursor-pointer bg-cyan-200  p-4 rounded-lg"
    >
      {Icon && <Icon className={` ${className} text-3xl mb-2`} />}
      <p className="text-xl">{ammount}</p>
      <p className="">{salesTitle}</p>
      <p className="hover:underline text-blue-800">
        {position}
        {saleRate}% from yesterday
      </p>
    </Link>
  );
};

export default SalesCard;
