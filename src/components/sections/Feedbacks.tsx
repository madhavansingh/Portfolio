import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { fadeIn } from "../../utils/motion";
import { beyondCode } from "../../constants";
import { Header } from "../atoms/Header";
import { config } from "../../constants/config";

type TBeyondCode = {
  title: string;
  description: string;
};

const BeyondCodeCard: React.FC<{ index: number } & TBeyondCode> = ({
  index,
  title,
  description,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 xs:w-[320px] w-full rounded-3xl p-10"
  >
    <p className="text-[48px] font-black text-white">🎯</p>

    <div className="mt-1">
      <p className="text-[18px] tracking-wider text-white font-semibold">
        {title}
      </p>

      <div className="mt-4">
        <p className="text-secondary text-[14px] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="bg-black-100 mt-12 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary min-h-[300px] rounded-2xl`}
      >
        <Header useMotion={true} {...config.sections.feedbacks} />
      </div>

      <div
        className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7 pb-14 max-sm:justify-center`}
      >
        {beyondCode.map((item, index) => (
          <BeyondCodeCard key={index} index={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
