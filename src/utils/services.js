import toast from "react-hot-toast";

// Form Error handling
export const validateError = (formData) => {
    const newError = {};
    if (!formData.email.trim()) {
      newError.email = "Please provide your email address";
    }

    if (!formData.password.trim()) {
      newError.password = "Password is required";
    }
    if (Object.keys(newError).length > 0) {
      toast.error(Object.values(newError)[0]);
      return false;
    }
    return true;
  };