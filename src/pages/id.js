import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Skill from "@/components/Skill";
import Stats from "@/components/Stats";
export default function Id() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Stats />
      <div className="m-4 space-x-4 flex justify-around h-auto overflow-hidden">
        <div className="group-1 flex flex-col justify-between">
          <Skill name={"COMMUNITY"} value={3} />
          <Skill name={"CRAFT"} value={1} />
          <Skill name={"PARTNERSHIPS"} value={1} />
        </div>
        <div className="group-2 flex flex-col justify-between">
          <Skill name={"CRAFT"} value={2} />
          <Skill name={"PARTNERSHIPS"} value={3} />
          <Skill name={"COMMUNITY"} value={4} />
        </div>
      </div>
    </>
  );
}
