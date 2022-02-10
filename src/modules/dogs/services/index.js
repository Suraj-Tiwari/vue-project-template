import {inject} from "vue";

const getDogsList = async () => {
  const res = await inject('axios').get("https://dog.ceo/api/breeds/image/random/21");
  return res.data;
};

export {getDogsList};
