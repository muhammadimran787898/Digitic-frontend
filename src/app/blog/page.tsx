// /* This example requires Tailwind CSS v2.0+ */
// const posts = [
//   {
//     title: "Boost your conversion rate",
//     href: "#",
//     category: {
//       name: "Article",
//       href: "#",
//       color: "bg-indigo-100 text-indigo-800",
//     },
//     description:
//       "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
//     date: "Mar 16, 2020",
//     datetime: "2020-03-16",
//     author: {
//       name: "Paul York",
//       href: "#",
//       imageUrl:
//         "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     },
//     readingTime: "6 min",
//   },
//   {
//     title: "How to use search engine optimization to drive sales",
//     href: "#",
//     category: { name: "Video", href: "#", color: "bg-pink-100 text-pink-800" },
//     description:
//       "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
//     date: "Mar 10, 2020",
//     datetime: "2020-03-10",
//     author: {
//       name: "Dessie Ryan",
//       href: "#",
//       imageUrl:
//         "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     },
//     readingTime: "4 min",
//   },
//   {
//     title: "Improve your customer experience",
//     href: "#",
//     category: {
//       name: "Case Study",
//       href: "#",
//       color: "bg-green-100 text-green-800",
//     },
//     description:
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.",
//     date: "Feb 12, 2020",
//     datetime: "2020-02-12",
//     author: {
//       name: "Easer Collins",
//       href: "#",
//       imageUrl:
//         "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     },
//     readingTime: "11 min",
//   },
// ];

import { Button } from "@/components/ui/button";

// function classNames(...classes: any) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Example() {
//   return (
//     <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
//       <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
//         <div>
//           <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
//             Recent publications
//           </h2>
//           <p className="mt-3 text-xl text-gray-500 sm:mt-4">
//             Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
//             massa dictumst amet. Sapien tortor lacus arcu.
//           </p>
//         </div>
//         <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
//           {posts.map((post) => (
//             <div key={post.title}>
//               <div>
//                 <a href={post.category.href} className="inline-block">
//                   <span
//                     className={classNames(
//                       post.category.color,
//                       "inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"
//                     )}
//                   >
//                     {post.category.name}
//                   </span>
//                 </a>
//               </div>
//               <a href={post.href} className="block mt-4">
//                 <p className="text-xl font-semibold text-gray-900">
//                   {post.title}
//                 </p>
//                 <p className="mt-3 text-base text-gray-500">
//                   {post.description}
//                 </p>
//               </a>
//               <div className="mt-6 flex items-center">
//                 <div className="flex-shrink-0">
//                   <a href={post.author.href}>
//                     <span className="sr-only">{post.author.name}</span>
//                     <img
//                       className="h-10 w-10 rounded-full"
//                       src={post.author.imageUrl}
//                       alt=""
//                     />
//                   </a>
//                 </div>
//                 <div className="ml-3">
//                   <p className="text-sm font-medium text-gray-900">
//                     <a href={post.author.href}>{post.author.name}</a>
//                   </p>
//                   <div className="flex space-x-1 text-sm text-gray-500">
//                     <time dateTime={post.datetime}>{post.date}</time>
//                     <span aria-hidden="true">&middot;</span>
//                     <span>{post.readingTime} read</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

/* This example requires Tailwind CSS v2.0+ */
const posts = [
  {
    title: "Boost your conversion rate",
    href: "#",
    category: { name: "Article", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "6 min",
    author: {
      name: "Roel Aufderehar",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "How to use search engine optimization to drive sales",
    href: "#",
    category: { name: "Video", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "4 min",
    author: {
      name: "Brenna Goyette",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Improve your customer experience",
    href: "#",
    category: { name: "Case Study", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "How to use search engine optimization to drive sales",
    href: "#",
    category: { name: "Video", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "4 min",
    author: {
      name: "Brenna Goyette",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Boost your conversion rate",
    href: "#",
    category: { name: "Article", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "6 min",
    author: {
      name: "Roel Aufderehar",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Improve your customer experience",
    href: "#",
    category: { name: "Case Study", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function Blog() {
  return (
    <div className="relative bg-gray-100 lg:pt-0 pb-20 px-4 sm:px-6  lg:pb-28 lg:px-8">
      <div className="relative w-full mx-auto">
        <div className="mt-12   grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    {/* <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a> */}
                  </p>
                  <a href={post.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900 line-clamp-1">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500 line-clamp-4">
                      {post.description}
                    </p>
                  </a>
                  <Button className=" mt-4 w-auto px-4 bg-gray-800 text-white rounded-full py-1">
                    OPTION
                  </Button>
                </div>
                {/* <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={post.author.imageUrl}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.author.href} className="hover:underline">
                        {post.author.name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingTime} read</span>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
