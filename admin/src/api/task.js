// admin/src/api/task.js
import { request } from "@strapi/helper-plugin";

const taskRequests = {
  getTaskCount: async () => {
    const data =  await request("/todo/count", {
      method: "GET",
    });
    return data;
  },
  getSettings: async () => {
    const data =  await request("/todo/settings", {
      method: "GET",
    });
    return data;

  },
  setSettings: async data => {
    return await request(`/todo/settings`, {
      method: "POST",
      body: data,
    });
  },
};
export default taskRequests;
