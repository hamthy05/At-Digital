import { useState } from "react";

function FAQCard(props) {
  const [open, setOpen] = useState(false);
  const [chcol, setChcol] = useState("#000000");

  const handleClick = () => {
    if (chcol === "#000000") {
      setChcol("#6b3cc9");
    } else {
      setChcol("#000000");
    }
  };
  return (
    <div className="flex flex-col items-start gap-3 p-2 ml-auto mr-auto bg-[#faf8ff] text-[22px] w-[334px] md:w-[686px]  lg:w-[896px] xl:w-[846px]">
      <button
        className="flex justify-center gap-[100px]"
        onClick={() => {
          setOpen(!open);
          handleClick();
        }}
        style={{ color: chcol }}
      >
        <p>{props.Question}</p>
        {open ? <p>-</p> : <p>+</p>}
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p>{props.Answer}</p>
        </div>
      </div>
    </div>
  );
}

export default FAQCard;
