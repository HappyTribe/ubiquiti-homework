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

export async function getDeviceById(params: { id: string }) {
  const result = await getDevices();

  if (!result.success) {
    return null;
  }

  return result.data.find((device) => device.id === params.id);
}

export async function getSiblingDeviceIds(params: { id: string }) {
  const result = await getDevices();

  if (!result.success) {
    return { previous: null, next: null };
  }

  const currentDeviceIndex = result.data.findIndex(
    (device) => device.id === params.id
  );

  if (currentDeviceIndex === -1) {
    return { previous: null, next: null };
  }

  const previousDeviceIndex = currentDeviceIndex - 1;
  const nextDeviceIndex = currentDeviceIndex + 1;

  if (previousDeviceIndex === -1) {
    // current device is the first one
    // set previous device to the last device so it loops
    // set next device normally

    return {
      previous: result.data[result.data.length - 1].id,
      next: result.data[nextDeviceIndex].id,
    };
  }

  if (nextDeviceIndex === result.data.length) {
    // current device is the last one
    // set previou device normally
    // set next device to the first device so it loops

    return {
      previous: result.data[previousDeviceIndex].id,
      next: result.data[0].id,
    };
  }

  // current device is neither first nor last
  // set previous and next normally

  return {
    previous: result.data[previousDeviceIndex].id,
    next: result.data[nextDeviceIndex].id,
  };
}
