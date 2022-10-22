import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validateContactForm } from "../utilities/validateContactForm";

const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    resetForm();
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
        onSubmit={handleSubmit}
        validate={validateContactForm}
      >
        <Form>
          <FormGroup row>
            <Label htmlFor="firstName" md="2" className="label">
              First Name
            </Label>
            <Col md="10">
              <Field
                name="firstName"
                placeholder="First Name"
                className="form-control"
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
            <Col md="10">
              <Field
                name="lastName"
                placeholder="Last Name"
                className="form-control"
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
            <Col md="10">
              <Field
                name="phoneNum"
                placeholder="Phone Number"
                className="form-control"
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
            <Col md="10">
              <Field
                name="email"
                placeholder="Email"
                className="form-control"
              />
              <ErrorMessage name="email">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label htmlFor="feedback" md="12" className="label mt-4">
              Send Me Feedback!
            </Label>
            <Col md="10">
              <Field
                name="feedback"
                as="textarea"
                rows="12"
                placeholder="Enter feedback here"
                className="form-control"
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col>
              <Button type="submit" className="label" id="button">
                Send Feedback
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
