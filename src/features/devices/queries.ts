import { z } from "zod";
import { MinimalDeviceSchema } from "./types";

export async function getDevices(): Promise<
  | { success: false; message: string }
  | { success: true; data: Array<z.infer<typeof MinimalDeviceSchema>> }
> {
  try {
    const result = await fetch(
      "https://static.ui.com/fingerprint/ui/public.json"
    ).then((res) => res.json());

    if (!result.devices) {
      throw new Error("No devices in fetch result");
    }

    const validationResult = z
      .array(MinimalDeviceSchema)
      .safeParse(result.devices);

    if (!validationResult.success) {
      throw new Error("Not enough minimal device fields");
    }

    return {
      success: true,
      data: result.devices,
    };
  } catch (error) {
    console.error("getDevices error: ", error);

    return {
      success: false,
      message: "Something went wrong while requesting devices",
    };
  }
}
