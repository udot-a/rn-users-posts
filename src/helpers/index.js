/*
Фунцияб к-я возвращает первые буквы слов в строке
 */
const getFirstLetter = str =>
  typeof str !== "string"
    ? ""
    : str.trim().split(" ")
      .reduce((prev, cur) => {
        if (!!cur) {
          prev += cur.trim()[0];
        }
        return prev
      }, "").slice(0, 2).toUpperCase();


export {
  getFirstLetter
};

