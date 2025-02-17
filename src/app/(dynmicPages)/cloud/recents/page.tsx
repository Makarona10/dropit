"use client";

import HeadBtnsBar from "@/app/components/common/HeadBtnsBar";
import Header from "@/app/components/common/Header";
import SideBar from "@/app/components/common/SideBar";
import UploadFile from "@/app/components/create_and_add/UploadFile";
import FileComponent from "@/app/components/files_browsing/FileComponent";
import Folder from "@/app/components/files_browsing/Folder";
import DeleteFolder from "@/app/components/files_browsing/folder_components/DeleteFolder";
import { FaSort } from "react-icons/fa";
import { MdWatchLater, MdFileUpload, MdCreateNewFolder } from "react-icons/md";

const RecentsPage = () => {
  const upFileBtnId = "upload_file_div";

  const btns = [
    {
      name: "Upload file",
      ico: MdFileUpload,
      color: "#4AA927",
      action: () => {
        const element = document.getElementById(upFileBtnId);
        if (element) {
          element.style.visibility = "visible";
          element.style.opacity = "100";
        }
      },
    },
    {
      name: "Create folder",
      ico: MdCreateNewFolder,
      color: "#4AA927",
      action: () => {},
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

  return (
    <div className="flex w-full">
      {/* upload file section */}
      <div className={`z-20`}>
        <UploadFile />
      </div>
      <SideBar title="Cloud" />
      <div className="flex flex-col w-full">
        <Header />
        <HeadBtnsBar buttons={btns} />
        <div className="flex items-center gap-4 sm:pt-10 sm:pl-10 pt-5 pl-5">
          <h1 className="sm:text-2xl text-lg font-bold">Recents</h1>
          <MdWatchLater className="sm:h-[21px] sm:w-[21px] h-[16px] w-[16px]" />
        </div>
        <hr className="sm:mt-5 mt-2 w-8/12 opacity-40 sm:ml-8 ml-5" />
        <div className="flex items-center gap-4 sm:pt-10 pt-6 sm:pl-10 pl-5">
          <h1 className="md:text-2xl text-lg font-bold">Files</h1>
        </div>
        <div className="flex gap-3 sm:p-8 p-5 flex-wrap">
          <FileComponent
            id={1}
            image={
              "https://www.kingfut.com/wp-content/uploads/2020/11/Zizo-1-scaled.jpg"
            }
            fName={"Ahmed Sayed Mizo"}
            favourite={true}
            type="video"
            resolution="1920 * 1080"
            uploaded="13/11/2023"
            size="990"
            owner="Bashs rostom"
            extenstion=".mp4"
            duration="22:31"
          />
          <FileComponent
            id={2}
            favourite={true}
            image={
              "https://i.eurosport.com/2019/09/23/2682134-55464990-2560-1440.jpg"
            }
            fName={"Mr Carlito"}
            type="image"
            resolution="1920 * 1080"
            uploaded="13/11/2023"
            size="12"
            owner="Adel Emam"
            extenstion="JPEG"
          />
          <FileComponent
            id={3}
            favourite={false}
            image={
              "https://www.kingfut.com/wp-content/uploads/2020/11/Zizo-1-scaled.jpg"
            }
            fName={"Ahmed Sayed Mizo"}
            type="document"
            uploaded="1/9/2013"
            size="1"
            owner="Amr eldeeb"
            extenstion=".pdf"
          />
          <FileComponent
            id={4}
            favourite={true}
            image={
              "https://i.eurosport.com/2019/09/23/2682134-55464990-2560-1440.jpg"
            }
            fName={"Mr Carlito"}
            type="audio"
            uploaded="15/1/2021"
            size="90"
            owner="Hussain labib"
            extenstion=".mp3"
            duration="82:41"
          />
        </div>
        <hr className="relative mt-5 w-11/12 opacity-40 sm:left-8 left-3" />
        <div className="flex items-center gap-4 sm:pt-10 pt-5 pl-10">
          <h1 className="sm:text-2xl text-lg font-bold">Folders</h1>
        </div>
        <div className="flex gap-3 p-8 flex-wrap md:z-10">
          <Folder id={1} name="FCBarcelona" created_at="24-5-2020" />
          <Folder id={2} name="Real Madrid CF" created_at="24-5-2020" />
          <Folder id={3} name="FC Bayern Munchin" created_at="24-5-2020" />
          <Folder id={4} name="Arsenal" created_at="24-5-2020" />
          <Folder id={5} name="Man City" created_at="24-5-2020" />
          <Folder id={6} name="Chelsea" created_at="24-5-2020" />
          <Folder id={7} name="Roma FC" created_at="24-5-2020" />
        </div>
      </div>
    </div>
  );
};

export default RecentsPage;
