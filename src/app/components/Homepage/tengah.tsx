import Image from "next/image";
import ForYou from "../fragments/Home/forYou";
import LagiTrending from "../fragments/Home/lagiTrending";
export default function TengahHomepage(homeClassName: any) {
  return (
    <>
    <div className="flex justify-center">
      <div className={homeClassName.homeClassName}>
        <LagiTrending></LagiTrending>
        <ForYou></ForYou>
      </div>
      </div>
    </>
  );
}