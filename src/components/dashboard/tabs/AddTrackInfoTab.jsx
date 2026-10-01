"use client";

import {
  Form,
  Fieldset,
  FieldGroup,
  TextField,
  Label,
  Input,
  TextArea,
  Select,
  ListBox,
  Button,
  Card,
  FieldError,
} from "@heroui/react";
import { TbSend, TbRefresh } from "react-icons/tb";

export default function AddTrackInfoTab() {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    console.log("Submitted Service Data:", data);
  };

  const initialStatusOptions = [
    { id: "1", label: "1. Received" },
    { id: "2", label: "2. Diagnosed" },
    { id: "3", label: "3. Repairing" },
    { id: "4", label: "4. Ready" },
    { id: "5", label: "5. Delivered" },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header Info */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
          Create New Service Order
        </h1>
        <p className="text-xs text-slate-500 font-medium">
          Add new device tracking details for customer repair status updates.
        </p>
      </div>

      <Card className="p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xs rounded-3xl">
        <Form onSubmit={onSubmit} className="w-full space-y-6">
          <Fieldset>
            <FieldGroup className="space-y-6">
              {/* 1. Customer Information */}
              <div className="space-y-4">
                <Fieldset.Legend className="text-xs font-extrabold uppercase tracking-widest text-purple-600 block">
                  1. Customer Information
                </Fieldset.Legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <TextField isRequired name="customerName">
                    <Label>Customer Name</Label>
                    <Input
                      className="custom-input"
                      placeholder="e.g. Salman Sahed"
                    />
                    <FieldError />
                  </TextField>

                  <TextField
                    isRequired
                    name="mobileNumber"
                    validate={(value) => {
                      if (!/^01[3-9]\d{8}$/.test(value)) {
                        return "Enter a valid 11-digit Bangladeshi mobile number";
                      }
                      return null;
                    }}
                  >
                    <Label>Mobile Number</Label>
                    <Input className="custom-input" placeholder="01700000000" />
                    <FieldError />
                  </TextField>
                </div>
              </div>

              {/* 2. Repair Information */}
              <div className="space-y-4">
                <Fieldset.Legend className="text-xs font-extrabold uppercase tracking-widest text-purple-600 block">
                  2. Repair Information
                </Fieldset.Legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <TextField isRequired name="deviceModel">
                    <Label>Device Model</Label>
                    <Input
                      className="custom-input"
                      placeholder="e.g. iPhone 17 Pro"
                    />
                    <FieldError />
                  </TextField>

                  <TextField isRequired name="estimatedCost">
                    <Label>Estimated Cost (৳)</Label>
                    <Input
                      className="custom-input"
                      type="number"
                      placeholder="e.g. 12500"
                    />
                    <FieldError />
                  </TextField>
                </div>

                <TextField
                  isRequired
                  name="issueDescription"
                  validate={(value) => {
                    if (value.length < 5) {
                      return "Description must be at least 5 characters";
                    }
                    return null;
                  }}
                >
                  <Label>Issue Description</Label>
                  <TextArea
                    className="custom-input"
                    placeholder="e.g. Display Replacement & Battery Diagnostics"
                  />
                  <FieldError />
                </TextField>
              </div>

              {/* 3. Timeline & Status */}
              <div className="space-y-4">
                <Fieldset.Legend className="text-xs font-extrabold uppercase tracking-widest text-purple-600 block">
                  3. Timeline & Status
                </Fieldset.Legend>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <TextField isRequired name="receivedDate">
                    <Label>Received Date</Label>
                    <Input className="custom-input" type="date" />
                    <FieldError />
                  </TextField>

                  <TextField isRequired name="estDeliveryDate">
                    <Label>Est. Delivery Date</Label>
                    <Input className="custom-input" type="date" />
                    <FieldError />
                  </TextField>

                  {/* Select Mapped Pattern */}
                  <Select name="status" defaultValue="1" className="w-full">
                    <Label>Initial Status</Label>
                    <Select.Trigger className="custom-input">
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        {initialStatusOptions.map((item) => (
                          <ListBox.Item
                            key={item.id}
                            id={item.id}
                            textValue={item.label}
                          >
                            {item.label}
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                        ))}
                      </ListBox>
                    </Select.Popover>
                  </Select>
                </div>
              </div>
            </FieldGroup>

            {/* Form Action Buttons */}
            <Fieldset.Actions className="pt-4 flex justify-end gap-3">
              <Button type="reset" variant="secondary">
                <TbRefresh className="w-4 h-4" />
                Reset Form
              </Button>
              <Button
                type="submit"
                className="bg-purple-600 text-white font-bold hover:bg-purple-700 shadow-md shadow-purple-500/20"
              >
                <TbSend className="w-4 h-4" />
                Save Service Order
              </Button>
            </Fieldset.Actions>
          </Fieldset>
        </Form>
      </Card>
    </div>
  );
}
