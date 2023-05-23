// admin/src/components/TaskModal/index.js
import React, { useState } from "react";
import {
  ModalLayout,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Typography,
  Button,
  TextInput,
} from "@strapi/design-system";

import { useCMEditViewDataManager } from "@strapi/helper-plugin";


import { request } from "@strapi/helper-plugin";

const TaskModal = ({ handleClose, setTasks, tasks }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState();

  const { slug, initialData } = useCMEditViewDataManager();

  const handleSubmit = async (e) => {
    // Prevent submitting parent form
    e.preventDefault();
    e.stopPropagation();

    if(name.length && initialData.id!==undefined){
      try {
        // Show loading state
        setStatus("loading");

        // Create task and link it to the related entry
        const res = await request("/todo/create", {
          method: "POST",
          body: { data: {
            name,
            isDone: false,
            related: {
              __type: slug,
              id: initialData.id,
            },
          } },
        });

        if(tasks!==null){
          setTasks([...tasks, res]);
        }else{
          setTasks([res]);
        }

        // Remove loading and close popup
        setStatus("success");
        handleClose();
      } catch (e) {
        console.log(e);
        setStatus("error");
      }
    }else{
      setStatus("error");
    }
  };

  const getError = () => {
    // Form validation error
    if (name.length > 40) {
      return "Content is too long";
    }

    // API error
    if (status === "error") {
      if(name.length == 0){
        return "Content is required";
      }
      return "Could not create todo";
    }
    return null;
  };

  return (
    <ModalLayout
      onClose={handleClose}
      labelledBy="title"
      as="form"
      onSubmit={handleSubmit}
    >
      <ModalHeader>
        <Typography fontWeight="bold" textColor="neutral800" as="h2" id="title">
          Add todo
        </Typography>
      </ModalHeader>
      <ModalBody>
        <TextInput
          placeholder="What do you need to do?"
          label="Name"
          name="text"
          hint="Max 140 characters"
          error={getError()}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </ModalBody>
      <ModalFooter
        startActions={
          <Button onClick={handleClose} variant="tertiary">
            Cancel
          </Button>
        }
        endActions={
          <Button type="submit" loading={status === "loading"}>
            {status === "loading" ? "Saving..." : "Save"}
          </Button>
        }
      />
    </ModalLayout>
  );
};

export default TaskModal;
