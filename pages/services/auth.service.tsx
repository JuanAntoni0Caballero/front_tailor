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
        throw new Error(errorData.errorMessages.join(", "));
      } else {
        throw new Error("Unknown error occurred");
      }
    }

    const token: string = await response.json();
    return { token };
  } catch (error: any) {
    return { error: error.message };
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
        throw new Error(errorData.errorMessages.join(", "));
      } else {
        throw new Error("Unknown error occurred");
      }
    }
    const data: object = await response.json();
    return { data };
  } catch (error: any) {
    return { error: error.message };
  }
};

export default {
  login,
  signUp,
};
