"use client";

import { useState } from "react";
import Button from "src/ui/Button";

export default function ShowJSONButton(props: { json: string }) {
  const [showJSON, setShowJSON] = useState<boolean>(false);

  function onShowJson() {
    setShowJSON(true);
  }

  if (showJSON) {
    return (
      <div className="flex self-center bg-[#F9FAFA] p-2 text-xs max-h-[400px] overflow-y-auto rounded-lg mt-10">
        <pre>{props.json}</pre>
      </div>
    );
  }

  return (
    <Button className="self-center text-primary mt-4" onClick={onShowJson}>
      See All Details as JSON
    </Button>
  );
}
