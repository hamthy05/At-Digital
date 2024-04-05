import FAQCard from "./FAQ-card";

function FAQ() {
  return (
    <>
      <div className="flex flex-col items-center gap-[28px] mt-[50px]">
        <h1 className="text-[27px] text-[#6b3cc9] font-semibold  ml-auto mr-auto ">
          Frequently asked questions
        </h1>
        <FAQCard
          Question={"What is Webflow and why is it the best website builder?"}
          Answer={
            "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere."
          }
        />
        <FAQCard
          Question={"What is Webflow and why is it the best website builder?"}
          Answer={
            "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere."
          }
        />
        <FAQCard
          Question={"What is Webflow and why is it the best website builder?"}
          Answer={
            "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere."
          }
        />
      </div>
    </>
  );
}

export default FAQ;
