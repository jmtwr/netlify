import { atom, selector } from "recoil";

// window.history.pushState("", "", "/")
// http://localhost:3000/?firstName=Д&lastName=Тк&patronym=П&passport=11.11122&birth=08.09.1994
const getQueryParams = (name: string) => {
  const query = window.location.search.substring(1);
  const vars = query.split("&");
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split("=");
    if (decodeURIComponent(pair[0]) === name) {
      return decodeURIComponent(pair[1]);
    }
  }
};

type MainStore = {
  firstName: string;
  lastName: string;
  passport: [string, string];
  birth: string;
  patronym: string;
};

export const store = atom<MainStore>({
  key: "mainState",
  default: selector({
    key: "mainState init",
    get: () => {
      const firstName = getQueryParams("firstName");
      const lastName = getQueryParams("lastName");
      const passport = getQueryParams("passport");
      const patronym = getQueryParams("patronym");
      const birth = getQueryParams("birth");

      if (!firstName || !lastName || !passport || !birth || !patronym) {
        window.location.href = "https://www.google.com/";
      }

      window.history.pushState("", "", "/");

      return {
        firstName: firstName!,
        lastName: lastName!,
        passport: passport!.split(".") as [string, string],
        birth: birth!,
        patronym: patronym!,
      };
    },
  }),
});
