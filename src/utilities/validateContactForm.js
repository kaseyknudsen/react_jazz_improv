export const validateContactForm = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName < 2) {
    errors.firstName = "First name must be 2 characters or more.";
  } else if (values.firstName > 15) {
    errors.firstName = "Last name must be less than 15 characters";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName < 2) {
    errors.lastName = "Last name must be 2 characters or more.";
  } else if (values.lastName > 15) {
    errors.lastName = "Last name must be 15 charcters or less.";
  }

  const regularExpression = /^\d+$/;
  if (!values.phoneNum) {
    errors.phoneNum = "Required";
  } else if (!regularExpression.test(values.phoneNum)) {
    errors.phoneNum = "The phone number should only contain numbers.";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!values.email.includes("@")) {
    errors.email = "Email address must include @.";
  }

  return errors;
};
