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
      <div className="mx-72 flex justify-between h-auto">
        <div className="group-1 flex flex-col justify-between">
          <div>
            <Skill name={"COMMUNITY"} value={3} />
          </div>
          <div>
            <Skill name={"CRAFT"} value={1} />
          </div>
          <div>
            <Skill name={"PARTNERSHIPS"} value={1} />
          </div>
        </div>
        <div className="group-2 flex flex-col justify-between">
          <div>
            <Skill name={"CRAFT"} value={2} />
          </div>
          <div>
            <Skill name={"PARTNERSHIPS"} value={3} />
          </div>
          <div>
            <Skill name={"COMMUNITY"} value={4} />
          </div>
        </div>
      </div>
    </>
  );
}
