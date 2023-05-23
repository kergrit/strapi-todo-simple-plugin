# Welcome to strapi-todo-simple-plugin!

Hi! I'm your first Markdown file in **StackEdit**. If you want to learn about StackEdit, you can read me. If you want to play with Markdown, you can edit me. Once you have finished with me, you can create new files by opening the **file explorer** on the left corner of the navigation bar.

# References

**Strapi blog** by [**Maxime Castres**](https://strapi.io/user/maxime-castres) for main resource
 - 1/6 [Generate a Strapi plugin - How to create a Strapi v4 plugin](https://strapi.io/blog/how-to-create-a-strapi-v4-plugin-generate-a-plugin-1-6) 
 - 2/6 [File structure of a Strapi plugin - How to create a Strapi v4 plugin](https://strapi.io/blog/how-to-create-a-strapi-v4-plugin-file-structure-2-6)
 - 3/6 [Add a content-type to a plugin - How to create a Strapi v4 plugin](https://strapi.io/blog/how-to-create-a-strapi-v4-plugin-add-a-content-type-to-a-plugin-3-6)
 - 4/6 [Server customization - How to create a Strapi v4 plugin](https://strapi.io/blog/how-to-create-a-strapi-v4-plugin-server-customization-4-6)
 - 5/6 [Admin customization of a Strapi v4 plugin - How to create a Strapi v4 plugin](https://strapi.io/blog/how-to-create-a-strapi-v4-plugin-admin-customization-5-6)
 - 6/6 [Publish a Strapi v4 plugin on npm - How to create a Strapi v4 plugin](https://strapi.io/blog/how-to-create-a-strapi-v4-plugin-publish-on-npm-6-6)

**Strapi blog** by [**Ath Tripathi**](https://strapi.io/user/ath-tripathi) for request @strapi/helper-plugin
 - [How to Create a Simple Strapi Plugin](https://strapi.io/blog/making-a-simple-strapi-plugin)

**I combined from 2 resources because** 
- Maxime Castres is missing axiosInstance in tutorial
- Ath Tripathi is missing 2 components (modal and editModal) in tutorial
- Fixed some code using request @strapi/helper-plugin instead of axiosInstance

```js
// used request instance
import { request } from "@strapi/helper-plugin";
const rest = await request("/someURL", {
	 method: "GET",
});

// instead of axiosInstance
import axiosInstance from '../../utils/axiosInstance';
await axiosInstance.get("/someURL");
```
