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