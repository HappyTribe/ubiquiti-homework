"use client";

import { useState } from "react";
import Button from "src/ui/Button";

export default function ShowJSONButton(props: { json: string }) {
  const [showJSON, setShowJSON] = useState<boolean>(false);

  function onToggleShowJSON() {
    setShowJSON((prevState) => !prevState);
  }

  return (
    <>
      <Button
        className="self-center text-primary mt-4"
        onClick={onToggleShowJSON}
      >
        {showJSON ? "Hide JSON Details" : "See All Details as JSON"}
      </Button>

      {showJSON && (
        <div className="flex self-center bg-[#F9FAFA] p-2 text-xs max-h-[400px] overflow-y-auto rounded-lg mt-4">
          <pre>{props.json}</pre>
        </div>
      )}
    </>
  );
}
