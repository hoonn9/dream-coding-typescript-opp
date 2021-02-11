{
  /**
   * Enum
   */

  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;

  const MONDAY = 0;
  const TUESDAY = 0;

  // Javascript 에서 Enum 표현
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";
  enum Days {
    Monday, // 0 부터 auto
    Tuesday, //1
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  let day: Days = Days.Saturday;

  day = Days.Tuesday;
  day = 10; // ??? 컴파일 수행
  console.log(day);

  let dayOfWeek: DaysOfWeek = "Monday";
  dayOfWeek = "Tuesday";
}
