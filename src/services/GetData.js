import axios from "axios";

import { useParams } from "react-router-dom";

export function getAllFolder() {
  const res = axios.get(`https://form-apps-backend.vercel.app/folder`);

  return res;
}

export function deleteFolder(id) {
  const res = axios.delete(`https://form-apps-backend.vercel.app/${id}`, {
    method: "DELETE",
  });
  return res;
}

export function getAllTypebot() {
  const res = axios.get(`https://form-apps-backend.vercel.app/typebot`);

  return res;
}
export function deleteTypebot(id) {
  const res = axios.delete(`https://form-apps-backend.vercel.app/typebot/${id}`, {
    method: "DELETE",
  });
  return res;
}
import { decodeToken } from 'react-jwt';
export function isView(id) {
  const token = localStorage.getItem("token");

  if (!token) {
    console.error("No token found in localStorage");
    return false;
  }

  const decoded = decodeToken(token);

  if (!decoded) {
    console.error("Failed to decode token");
    return false;
  }

  if (!decoded.id) {
    console.warn("Decoded token does not contain 'id'. Falling back to false.");
    return false;
  }

  return decoded.id === id;
}

 
  export function AddTokenToHeader({ headers }) {
    const token = localStorage.getItem("token");
    if (token) {
        headers.Authorization = `${token}`;
    }
    return headers; }