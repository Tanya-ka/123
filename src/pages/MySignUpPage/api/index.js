import api from "../../../http";

export const signUp = (signData) => api.post("auth/signUp", signData);