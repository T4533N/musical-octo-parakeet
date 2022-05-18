const boldQuery = (str: any, query: any) => {
  const n = str.toUpperCase();
  const q = query.toUpperCase();
  const x = n.indexOf(q);
  if (!q || x === -1) {
    return str; // bail early
  }
  const l = q.length;
  return (
    // str.substr(0, x) + "<b>" + str.substr(x, l) + "</b>" + str.substr(x + l)
    `<span>${str.substr(0, x)}${str.substr(x, l).bold()}${str.substr(
      x + l
    )}</span>`
  );
};

export default boldQuery;
