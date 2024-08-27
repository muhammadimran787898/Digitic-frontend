"uce client";

import Main from "./(components)/main";

// import { AccordionItem } from "@/components/ui/accordion";
// import { AccordionContent } from "@/components/ui/accordion";
// import { AccordionTrigger } from "@/components/ui/accordion";
// import { Accordion } from "@/components/ui/accordion";

export default function CustomAccordion() {
  return (
    <>
      <Main />
    </>
  );
  // const items = [
  //   {
  //     title: "Accordion Item 1",
  //     content: "This is the content of the first accordion item.",
  //   },
  //   {
  //     title: "Accordion Item 2",
  //     content: "This is the content of the second accordion item.",
  //   },
  //   {
  //     title: "Accordion Item 3",
  //     content: "This is the content of the third accordion item.",
  //   },
  // ];

  // return (
  //   <div className="max-w-md mx-auto p-4">
  //     <Accordion type="multiple">
  //       {items.map((item, index) => (
  //         <AccordionItem key={index} value={`item-${index}`}>
  //           <AccordionTrigger showIcon={false}>
  //             <div className="flex justify-between items-center">
  //               <span>{item.title}</span>
  //               <PlusMinusIcon />
  //             </div>
  //           </AccordionTrigger>
  //           <AccordionContent>
  //             <p classNameN="text-gray-700">{item.content}</p>
  //           </AccordionContent>
  //         </AccordionItem>
  //       ))}
  //     </Accordion>
  //   </div>
  // );
}

// function PlusMinusIcon() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="ml-2">
//       {open ? (
//         <MinusIcon className="w-5 h-5 text-gray-500" />
//       ) : (
//         <PlusIcon className="w-5 h-5 text-gray-500" />
//       )}
//     </div>
//   );
// }

// function PlusIcon(className: any) {
//   return (
//     <svg
//       className={className}
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       viewBox="0 0 24 24"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M12 4v16m8-8H4"
//       ></path>
//     </svg>
//   );
// }

// function MinusIcon(className: any) {
//   return (
//     <svg
//       className={className}
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       viewBox="0 0 24 24"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4"></path>
//     </svg>
//   );
// }
