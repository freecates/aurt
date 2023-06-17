const htmlToString = (string) => string.replace(/(<([^>]+)>)/gi, '');

export { htmlToString };