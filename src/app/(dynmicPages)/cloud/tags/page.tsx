"use client";

import Header from "@/app/components/common/Header";
import SideBar from "@/app/components/common/SideBar";
import Tag from "@/app/components/files_browsing/Tag";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaTags } from "react-icons/fa6";
import { FaSort } from "react-icons/fa";
import HeadBtnsBar from "@/app/components/common/HeadBtnsBar";
import AddTag from "@/app/components/files_browsing/tags_components/AddTag";
import DeleteTag from "@/app/components/files_browsing/tags_components/DeleteTag";

const btns = [
  {
    name: "Add tag",
    ico: IoMdAddCircleOutline,
    color: "#4AA927",
    action: () => {
      const add_tag_div_id = "add_tag";
      const element = document.getElementById(add_tag_div_id);
      if (element) {
        element.style.visibility = "visible";
        element.style.opacity = "100";
      }
    },
  },
  {
    name: "Sort by name",
    ico: FaSort,
    color: "#D2D2D2",
    action: () => {},
  },
  {
    name: "Sort by files",
    ico: FaSort,
    color: "#D2D2D2",
    action: () => {},
  },
];

const TagsPage = () => {
  return (
    <div className="flex w-full">
      <SideBar title="Cloud" />
      <AddTag />
      <div className="z-20">
        <DeleteTag tag_id={1} />
      </div>
      <div className="flex flex-col w-full">
        <Header />
        <HeadBtnsBar buttons={btns} />
        <div className="flex items-center gap-4 pt-10 pl-10">
          <h1 className="sm:text-2xl text-lg font-bold">Tags</h1>
          <FaTags className="text-primary-500 sm:w-[21px] sm:h-[21px] h-[16px] w-[16px]" />
        </div>
        <div className="flex flex-wrap gap-5 p-8 w-full">
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
        </div>
      </div>
    </div>
  );
};

export default TagsPage;
