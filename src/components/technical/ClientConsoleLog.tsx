"use client";

export default function ClientConsoleLog(props: {
  dataToLog: any;
  hide?: boolean;
  name?: string;
}) {
  const { dataToLog, hide = true, name = "ClientConsoleLog" } = props;
  const content = JSON.stringify(dataToLog, null, 2);
  console.log(name, dataToLog);

  return (
    <div>
      <pre>{hide ? null : content}</pre>
    </div>
  );
}
