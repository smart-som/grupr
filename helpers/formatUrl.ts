const formatUrl = (url: string) => {
  const domain = new URL(url).hostname.replace("www.", "");

  return domain;
};
export default formatUrl;
