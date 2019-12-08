import { MONTHS_ARRAY } from "./constants";

// This method give the contents that are present in current folder
export const getContentsForCurrentPath = (currentPath, explorer) => {
  explorer = { ...explorer };
  currentPath = [...currentPath];
  explorer = explorer.root;
  currentPath.shift();
  if (currentPath.length === 0) {
    return explorer;
  }
  currentPath.forEach((path, index) => {
    explorer = explorer.content[path];
  });
  return explorer;
};

// For validating filename
export const validateFileName = value => {
  if (value.length > 1) {
    value = value.split(".");
    return value.length <= 1 || value.slice(-1)[0] === "";
  }
  return true;
};

// For validating nornam name folder/name
export const validateName = value => {
  return value.length < 1;
};

// For validating size
export const validateNumber = value => {
  try {
    value = Number(value) || "e";
    return isNaN(value) || value < 0;
  } catch (err) {
    return null;
  }
};

// For validating created date
export const validateDate = value => {
  const [givenYear, givenMonth, givenDate] = value.split("-");
  const todayDate = new Date();
  const givenInputDate = new Date();
  givenInputDate.setMonth(Number(givenMonth) - 1, Number(givenDate));
  givenInputDate.setFullYear(givenYear);
  return (
    todayDate.getDate() !== givenInputDate.getDate() ||
    todayDate.getMonth() !== givenInputDate.getMonth() ||
    todayDate.getFullYear() !== givenInputDate.getFullYear()
  );
};

// This will give the formatted like 12th December, 2019 for the date in format yyyy/mm/dd
export const getFormatedCreatedDate = value => {
  const [givenYear, givenMonth, givenDate] = value.split("-");
  let date = new Date();
  date.setMonth(Number(givenMonth) - 1, Number(givenDate));
  date.setFullYear(givenYear);
  const month = MONTHS_ARRAY[date.getMonth()];
  const year = date.getFullYear();
  date = date.getDate();
  const dateSuffix =
    [1, 21, 31].indexOf(date) > -1
      ? "st"
      : [2, 22].indexOf(date) > -1
      ? "nd"
      : [3, 23].indexOf(date) > -1
      ? "rd"
      : "th";
  return `${date}${dateSuffix} ${month}, ${year}`;
};

// This method check for the file/folder already present in the directory
export const checkForValidObject = (contents, value) => {
  let flag = 0;
  contents.forEach(content => {
    if (content.toLocaleLowerCase() === value.toLocaleLowerCase()) {
      flag = 1;
    }
  });
  return flag === 1;
};
