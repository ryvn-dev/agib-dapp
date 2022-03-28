import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { askMe } from "../utils/data/askMe";

export default function FAQ() {
  return (
    <div className="w-full px-4 pt-16">
      <div className="w-full max-w-md p-2 mx-auto bg-white rounded-2xl">
        {askMe.map((item, index) => {
          return (
            <Disclosure key={item.question}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 my-2 text-sm font-medium text-left text-agib-blue bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          );
        })}
      </div>
    </div>
  );
}
