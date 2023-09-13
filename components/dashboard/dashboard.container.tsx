import Summary from "./summary/summary";

export default function Dashboard() {
  return (
    <div className="dashboard-container flex">
      <div className="dbLeftPanel basis-9/12">
        <Summary />
      </div>
      <div className="dbRightPanel basis-3/12"></div>
    </div>
  );
}
