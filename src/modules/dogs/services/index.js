import vue from "vue";

const getDogsList = async () => {
  const res = await vue.axios.get("https://dog.ceo/api/breeds/image/random/21");
  return res.data;
};

export { getDogsList };
