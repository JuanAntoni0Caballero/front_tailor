const login = async (userData: any) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      if (errorData.errorMessages) {
        return errorData.errorMessages;
      } else {
        throw new Error(errorData.errorMessages);
      }
    }
    const token = await response.json();
    return token;
  } catch (error) {
    console.error(error);
  }
};

const signUp = async (userData: any) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      if (errorData.errorMessages) {
        return errorData.errorMessages;
      } else {
        throw new Error(
          "Error desconocido durante el registro",
          errorData.errorMessages
        );
      }
    }
    const data = await response.json();
    console.log("la data", data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default {
  login,
  signUp,
};
