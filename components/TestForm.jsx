"use client";
import React from "react";
import { useForm } from "react-hook-form";

function TestForm() {
  // get functions to build form with useForm() hook
  const { handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;
  console.log(isSubmitting);

  function onSubmit(data) {
    // return promise that resolves after 2 seconds
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

  return (
    <div className="card m-3">
      <h5 className="card-header">
        React Hook Form - Submitting Spinner Example
      </h5>
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <button disabled={isSubmitting} className="btn btn-primary mr-1">
            {isSubmitting && <span className="bg-gray-700">Yea</span>}
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export { TestForm };
