"use client";

import { useState } from "react";
import {
  Modal,
  Button,
  TextField,
  Label,
  Input,
  TextArea,
  Select,
  ListBox,
} from "@heroui/react";
import { TbPencil } from "react-icons/tb";

// Repair status options with corresponding step numbers
const STATUS_OPTIONS = [
  { id: "Received", label: "Received", step: 1 },
  { id: "Diagnosed", label: "Diagnosed", step: 2 },
  { id: "Repairing", label: "Repairing", step: 3 },
  { id: "Ready", label: "Ready for Delivery", step: 4 },
  { id: "Delivered", label: "Delivered", step: 5 },
];

export default function EditOrderModal({ isOpen, setIsOpen, item, onSave }) {
  const [formData, setFormData] = useState({
    customerName: item?.customerName || "",
    mobileNumber: item?.mobileNumber || "",
    deviceModel: item?.deviceModel || "",
    estimatedCost: item?.estimatedCost || "",
    receivedDate: item?.receivedDate || "",
    estDeliveryDate: item?.estDeliveryDate || "",
    issueDescription: item?.issueDescription || "",
    status: item?.status || "Received",
    statusStep: item?.statusStep || 1,
  });

  // Sync state when selected item prop changes
  const [prevItemId, setPrevItemId] = useState(item?.id);
  if (item && item.id !== prevItemId) {
    setPrevItemId(item.id);
    setFormData({
      customerName: item.customerName || "",
      mobileNumber: item.mobileNumber || "",
      deviceModel: item.deviceModel || "",
      estimatedCost: item.estimatedCost || "",
      receivedDate: item.receivedDate || "",
      estDeliveryDate: item.estDeliveryDate || "",
      issueDescription: item.issueDescription || "",
      status: item.status || "Received",
      statusStep: item.statusStep || 1,
    });
  }

  // Handle standard input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle status selection and update status step
  const handleStatusChange = (selectedStatusId) => {
    const matchedOption = STATUS_OPTIONS.find(
      (opt) => opt.id === selectedStatusId,
    );
    if (matchedOption) {
      setFormData((prev) => ({
        ...prev,
        status: matchedOption.id,
        statusStep: matchedOption.step,
      }));
    }
  };

  // Handle form submission and trigger save callback
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item) return;

    const updatedItem = {
      ...item,
      ...formData,
      estimatedCost: Number(formData.estimatedCost),
    };

    onSave(updatedItem);
    setIsOpen(false);
  };

  if (!item) return null;

  return (
    <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon className="bg-purple-100 text-purple-600 dark:bg-purple-950/50 dark:text-purple-300">
                <TbPencil className="w-5 h-5" />
              </Modal.Icon>
              <Modal.Heading className="text-xl font-extrabold text-slate-900 dark:text-white">
                Edit Tracking Info
              </Modal.Heading>
              <p className="mt-1.5 text-xs text-slate-500 font-medium">
                Update customer, device, repair status, and estimated details
                for <strong className="text-purple-600">{item.id}</strong>.
              </p>
            </Modal.Header>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Modal.Body className="space-y-4 py-2">
                {/* Repair progress status dropdown */}
                <Select
                  className="w-full"
                  selectedKey={formData.status}
                  onSelectionChange={(key) => handleStatusChange(key)}
                >
                  <Label className="text-xs font-semibold">
                    Repair Progress Status
                  </Label>
                  <Select.Trigger>
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      {STATUS_OPTIONS.map((statusOpt) => (
                        <ListBox.Item key={statusOpt.id} id={statusOpt.id}>
                          {statusOpt.label}
                        </ListBox.Item>
                      ))}
                    </ListBox>
                  </Select.Popover>
                </Select>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Customer name */}
                  <TextField className="w-full">
                    <Label className="text-xs font-semibold">
                      Customer Name
                    </Label>
                    <Input
                      name="customerName"
                      value={formData.customerName}
                      onChange={handleChange}
                      placeholder="Enter customer name"
                      required
                    />
                  </TextField>

                  {/* Mobile number */}
                  <TextField className="w-full">
                    <Label className="text-xs font-semibold">
                      Mobile Number
                    </Label>
                    <Input
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      placeholder="Enter mobile number"
                      required
                    />
                  </TextField>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Device model */}
                  <TextField className="w-full">
                    <Label className="text-xs font-semibold">
                      Device Model
                    </Label>
                    <Input
                      name="deviceModel"
                      value={formData.deviceModel}
                      onChange={handleChange}
                      placeholder="e.g. iPhone 17 Pro"
                      required
                    />
                  </TextField>

                  {/* Estimated cost */}
                  <TextField className="w-full">
                    <Label className="text-xs font-semibold">
                      Est. Cost (৳)
                    </Label>
                    <Input
                      type="number"
                      name="estimatedCost"
                      value={formData.estimatedCost}
                      onChange={handleChange}
                      placeholder="e.g. 12000"
                      required
                    />
                  </TextField>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Received date */}
                  <TextField className="w-full">
                    <Label className="text-xs font-semibold">
                      Received Date
                    </Label>
                    <Input
                      type="date"
                      name="receivedDate"
                      value={formData.receivedDate}
                      onChange={handleChange}
                      required
                    />
                  </TextField>

                  {/* Estimated delivery date */}
                  <TextField className="w-full">
                    <Label className="text-xs font-semibold">
                      Est. Delivery Date
                    </Label>
                    <Input
                      type="date"
                      name="estDeliveryDate"
                      value={formData.estDeliveryDate}
                      onChange={handleChange}
                      required
                    />
                  </TextField>
                </div>

                {/* Issue description */}
                <TextField className="w-full">
                  <Label className="text-xs font-semibold">
                    Issue Description
                  </Label>
                  <TextArea
                    name="issueDescription"
                    value={formData.issueDescription}
                    onChange={handleChange}
                    placeholder="Describe the issue..."
                    rows={3}
                  />
                </TextField>
              </Modal.Body>

              <Modal.Footer className="flex justify-end gap-2 pt-2">
                <Button
                  slot="close"
                  variant="tertiary"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" variant="secondary">
                  Save Changes
                </Button>
              </Modal.Footer>
            </form>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
