import * as Yup from "yup";

export const formikInitialValues = {
  fullname: "",
  email: "",
  mobilenumber: "",
  project: "",
  amount: "",
  chequenumber: "",
  country: "",
};

export const formikValidation = {
  type: Yup.string().required("Required"),
  fullname: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  mobilenumber: Yup.number()
    .typeError("Invalid mobile number")
    .positive("Invalid mobile number")
    .integer("Invalid mobile number")
    .required("Required"),
  project: Yup.string().required("Required"),
  amount: Yup.number()
    .typeError("Invalid donation amount")
    .positive("Invalid mobile number")
    .required("Required"),
  validationObj: function (fieldArray) {
    const finalObj = {};
    fieldArray.forEach((x) => {
      finalObj[x] = this[x];
    });
    return finalObj;
  },
};
