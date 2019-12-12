import React from "react";
import { useDispatch } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

import { addVideo } from "./actions";
import { strings } from "../../constants";

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

const VideoForm = ({ onSubmitSuccess, initialValues }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values, { resetForm }) => {
      dispatch(addVideo(values));
      onSubmitSuccess();
      resetForm();
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
