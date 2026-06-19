"use client";

import { AlertDialog, Button } from "@heroui/react";
import toast from "react-hot-toast";

export function CancelBookingAlert({ bookingId, tutorName, onSuccess }) {

  const handleCancel = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${bookingId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
        return;
      }

      toast.success(data.message);

      // ✅ Parent state update
      onSuccess(bookingId);

    } catch {
      toast.error("Cancel failed ❌");
    }
  };

  return (
    <AlertDialog>
      <Button variant="outline" className="text-red-500">
        Cancel
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-sm">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Cancel this booking?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p>
                Are you sure you want to cancel your session with{" "}
                <strong>{tutorName}</strong>?
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                No
              </Button>
              <Button
                onClick={handleCancel}
                slot="close"
                variant="danger"
              >
                Yes, Cancel
              </Button>
            </AlertDialog.Footer>

          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}