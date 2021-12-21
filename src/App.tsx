import { useRecoilValue } from "recoil";
import { Header } from "./Header";
import { store } from "./state";
import { useTranslate } from "./useTranslate";
import checked from "./checked.png";

function App() {
  const { firstName, lastName, patronym, passport, birth } =
    useRecoilValue(store);
  const translate = useTranslate();

  console.log({ firstName, lastName, patronym, passport, birth });

  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      <Header />
      <div className="flex flex-col p-10">
        <div className="flex flex-col pb-5 mb-5 border-b border-gray-200">
          <h1 className="text-2xl font-bold">Проверка справки COVID-19</h1>
          <p>Verification of a COVID-19 document</p>
        </div>

        <div className="flex flex-col pb-5 mb-5 border-b border-gray-200">
          <div className="flex items-center p-5 bg-green-200 text-green-500">
            <img className="w-10 h-10 mr-4" alt="checked" src={checked} />
            <div className="flex flex-col">
              <p>Справка действительна</p>
              <p>The document is valid</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col pb-5 mb-5 border-b border-gray-200">
          <p className="text-gray-400">Пациент</p>
          <p className="mb-4">{`${lastName[0]}***${lastName[1]} ${firstName}. ${patronym}.`}</p>

          <p className="text-gray-400">Год рождения</p>
          <p className="mb-4">{birth}</p>

          <p className="text-gray-400">Паспорт</p>
          <p className="mb-4">{`${passport[0]}** ***${passport[1]}`}</p>

          <p className="text-gray-400">
            Коронавирус, РНК (SARS-CoV-2, ПЦР) мазок, кач., срочно
          </p>
          <p className="font-bold">РНК НЕ ОБНАРУЖЕНА (20 дек 2021)</p>
        </div>

        <div className="flex flex-col pb-5 mb-5 border-b border-gray-200">
          <p className="text-gray-400">Patient</p>
          <p className="mb-4">{`${translate(lastName[0])}***${translate(
            lastName[1]
          )} ${translate(firstName)}. ${translate(patronym)}.`}</p>

          <p className="text-gray-400">Year of birth</p>
          <p className="mb-4">{birth}</p>

          <p className="text-gray-400">Passport</p>
          <p className="mb-4">{`${passport[0]}** ***${passport[1]}`}</p>

          <p className="text-gray-400">
            Coronavirus, RNA (SARS-CoV-2, Real-time PCR) smear, qualitative
          </p>
          <p className="font-bold">Negative (20 Dec 2021)</p>
        </div>
      </div>
    </div>
  );
}

export default App;
