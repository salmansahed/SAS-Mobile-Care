"use client";

import { AlertDialog, Button } from "@heroui/react";

export default function DeleteOrderModal({
  isOpen,
  setIsOpen,
  item,
  onConfirmDelete,
}) {
  if (!item) return null;

  return (
    <AlertDialog isOpen={isOpen} onOpenChange={setIsOpen}>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-sm">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete order permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete tracking record{" "}
                <strong>{item.id}</strong> ({item.deviceModel}) and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button
                slot="close"
                variant="tertiary"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
              <Button
                variant="danger"
                onClick={() => {
                  onConfirmDelete(item.id);
                  setIsOpen(false);
                }}
              >
                Delete Order
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
