import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validateContactForm } from "../utilities/validateContactForm";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const sendEmail = (values, actions) => {
    const templateParams = {
      firstName: values.firstName,
      lastName: values.lastName,
      phoneNum: values.phoneNum,
      email: values.email,
      feedback: values.feedback,
    };

    emailjs
      .send(
        "service_de2nhch",
        "template_244o448",
        templateParams,
        "IUfrty1FrHYjCCiIv"
      )
      .then(
        (result) => {
          alert("Message Sent!");
          console.log(result.text);
          actions.setSubmitting(false);
          actions.resetForm()
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
          actions.setSubmitting(false);
          actions.resetForm()
        }
      );
  };
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          phoneNum: "",
          email: "",
          contactType: "By Email",
          feedback: "",
        }}
        validate={() => validateContactForm()}
        onSubmit={(values, actions) => {
          sendEmail(values, actions);
        }}
      >
        <Form>
          <FormGroup row>
            <Label htmlFor="firstName" md="2" className="label">
              First Name
            </Label>
            <Col md="5" lg="4">
              <Field
                name="firstName"
                placeholder="First Name"
                className="form-control"
                id="firstName"
              />
              <ErrorMessage name="firstName">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label htmlFor="lastName" md="2" className="label">
              Last Name
            </Label>
            <Col md="5" lg="4">
              <Field
                name="lastName"
                placeholder="Last Name"
                className="form-control"
                id="lastName"
              />
              <ErrorMessage name="lastName">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label htmlFor="phoneNum" md="2" className="label">
              Phone Number
            </Label>
            <Col md="5" lg="4">
              <Field
                name="phoneNum"
                placeholder="Phone Number"
                className="form-control"
                id="phoneNum"
              />
              <ErrorMessage name="phoneNum">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label htmlFor="email" md="2" className="label">
              Email
            </Label>
            <Col md="5" lg="4">
              <Field
                name="email"
                placeholder="Email"
                className="form-control"
                id="email"
              />
              <ErrorMessage name="email">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label htmlFor="feedback" md="7" className="label mt-4">
              Send Me Feedback!
            </Label>
            <Col md="8">
              <Field
                name="feedback"
                as="textarea"
                rows="8"
                placeholder="Enter feedback here"
                className="form-control"
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col>
              <Button type="submit" className="label" id="button">
                Submit
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
