import type { SingleBankType } from "~/types/bank/singleBankType";

/**
 * An array of objects representing various banks in Iran. Each object contains the name of the bank and its ID.
 */
export const banks: SingleBankType[] = [
  { name: "ملت", id: 610433, image: "/banks/mellat-02.svg" },
  { name: "آینده", id: 636214, image: "/banks/ayande-03.svg" },
  { name: "سامان", id: 621986, image: "/banks/saman-01.svg" },
  { name: "پاسارگاد", id: 502229, image: "/banks/pasargad-10.svg" },
  { name: "ملی ایران", id: 603799, image: "/banks/melli-22.svg" },
  { name: "قوامین", id: 639599, image: "/banks/ghavvamin-31.svg" },
  { name: "کارآفرین", id: 627488, image: "/banks/karafarin-06.svg" },
  { name: "گردشگری", id: 505416, image: "/banks/gardeshgari-20.svg" },
  { name: "صادرات ", id: 603769, image: "/banks/saderat-29.svg" },
  { name: "تجارت", id: 627353, image: "/banks/tejarat-13.svg" },
  { name: "تجارت", id: 585983, image: "/banks/tejarat-13.svg" },
  { name: "سپه", id: 589210, image: "/banks/sepah-24.svg" },
  { name: "کشاورزی", id: 603770, image: "/banks/keshavarzi-07.svg" },
  { name: "موسسه اعتباری کوثر", id: 505801, image: "/banks/kosar.svg" },
  { name: "سینا", id: 639346, image: "/banks/sina-23.svg" },
  { name: "پارسیان", id: 622106, image: "/banks/parsian-21.svg" },
  { name: "پست بانک ایران", id: 627760, image: "/banks/post-09.svg" },
  {
    name: "توسعه صادرات ایران",
    id: 627648,
    image: "/banks/tosesaderat-18.svg",
  },
  { name: "حکمت ایرانیان", id: 636949, image: "/banks/hekmat-30.svg" },
  { name: "مرکزی", id: 636795, image: "/banks/markazi.svg" },
  { name: "موسسه اعتباری عسکریه(ملل)", id: 606256, image: "/banks/melal.svg" },
  { name: "ایران زمین", id: 505785, image: "/banks/iranZamin.svg" },
  { name: "دی", id: 502938, image: "/banks/day-12.svg" },
  { name: "رفاه کارگران", id: 589463, image: "/banks/refahkargaran-28.svg" },
  { name: "سرمایه", id: 639607, image: "/banks/sarmaye-17.svg" },
  { name: "توسعه تعاون", id: 502908, image: "/banks/tosetaavon-19.svg" },
  { name: "اقتصاد نوین", id: 627412, image: "/banks/eghtesad-04.svg" },
  { name: "شهر", id: 502806, image: "/banks/shahr-25.svg" },
  { name: "مسکن", id: 628023, image: "/banks/maskan-26.svg" },
  { name: "قرض الحسنه رسالت", id: 504172, image: "/banks/resalat.svg" },
  { name: "انصار", id: 627381, image: "/banks/ansar-05.svg" },
  { name: "صنعت و معدن", id: 627961, image: "/banks/sanatmadan-16.svg" },
  { name: "قرض الحسنه مهر ایران", id: 606373, image: "/banks/mehriran-15.svg" },
];

/**
 * Checks if a given credit card number is valid and returns a boolean value.
 * @param {string} CardNumber - the credit card number to check
 * @returns {SingleBankType | undefined } - true if the credit card number is valid, false otherwise
 */
export const bankName = (CardNumber: string): SingleBankType | undefined => {
  // if (!CardNumber || CardNumber.length < 6) return undefined;
  const foundedBank: SingleBankType | undefined = banks.find(
    (item) => item.id === +CardNumber
  );
  if (foundedBank) return foundedBank;
};

/**
 * The function `CardNumberDeepCheck` checks if a given card number is valid using the Luhn algorithm.
 * @param {string} CardNumber - The `CardNumber` parameter is a string representing a credit card
 * number.
 * @returns a boolean value. It returns true if the CardNumber passes the deep check algorithm, and
 * false otherwise.
 */
export const cardNumberDeepCheck = (CardNumber: string): boolean => {
  if (CardNumber.length !== 16) return false;
  const numbers: string[] = CardNumber.split("");
  const oddNumberKey = Object.keys(numbers).filter((item) => +item % 2 !== 0);
  const evenNumberKey = Object.keys(numbers).filter((item) => +item % 2 === 0);
  const oddNumberValue = oddNumberKey.map(
    (item, index) => numbers[+oddNumberKey[index]]
  );
  const evenNumberValue = evenNumberKey.map(
    (item, index) => numbers[+evenNumberKey[index]]
  );
  const multiple = [
    ...evenNumberValue.map((element) =>
      +element * 2 > 9 ? +element * 2 - 9 : +element * 2
    ),
    ...oddNumberValue.map((element) => +element * 1),
  ].reduce((accumulator, currentValue) => accumulator + currentValue);
  return multiple % 10 === 0 ? true : false;
};
