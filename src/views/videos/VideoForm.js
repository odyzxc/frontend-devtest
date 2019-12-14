import React from "react";
import { Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

import { strings } from "common/constants";

const Input = ({ errors, touched, formik, formKey, name }) => (
  <Form.Group>
    <Form.Label htmlFor={formKey}>{name}</Form.Label>
    <Form.Control
      id={formKey}
      name={formKey}
      type="text"
      onChange={formik.handleChange}
      value={formik.values[formKey]}
      className={formik.errors[formKey] && formik.touched[formKey] && "error"}
    />
    {formik.errors[formKey] && formik.touched[formKey] && (
      <div className="input-feedback">{formik.errors[formKey]}</div>
    )}
  </Form.Group>
);

const VideoForm = ({ onSubmitSuccess, initialValues, onSubmit }) => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values, { resetForm }) => {
      onSubmit(values);
      resetForm();
      onSubmitSuccess(); // disclaimer - in a production grade app I would use some async action middleware (eg. redux-observable or redux-thunk) and fire this after receiving 200 OK after sending form data to backend
    },
    validationSchema: Yup.object().shape({
      title: Yup.string().required(strings.errorMessage.required),
      videoSnapshotThumbnailUrl: Yup.string().url(strings.errorMessage.notCorrectUrl).required(strings.errorMessage.required),
      videoSnapshotUrl: Yup.string().url(strings.errorMessage.notCorrectUrl).required(strings.errorMessage.required),
      description: Yup.string()
    })
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Input formKey="title" formik={formik} name="Title" />
      <Input
        formKey="videoSnapshotThumbnailUrl"
        formik={formik}
        name="Video Snapshot Thumbnail Url"
      />
      <Input
        formKey="videoSnapshotUrl"
        formik={formik}
        name="Video Snapshot Url"
      />
      <Input formKey="description" formik={formik} name="Description" />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default VideoForm;
