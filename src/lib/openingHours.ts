/**
 * Opening Hours Utility
 * Calculates real-time restaurant status based on Swedish time (Europe/Stockholm)
 */

export interface OpeningHoursSchedule {
  day: number; // 0 = Sunday, 1 = Monday, etc.
  open: string; // "11:00"
  close: string; // "20:00"
}

// Parse from siteConfig format to structured schedule
export const weeklySchedule: OpeningHoursSchedule[] = [
  { day: 0, open: "12:00", close: "20:30" }, // Sunday
  { day: 1, open: "11:00", close: "20:00" }, // Monday
  { day: 2, open: "11:00", close: "20:00" }, // Tuesday
  { day: 3, open: "11:00", close: "20:00" }, // Wednesday
  { day: 4, open: "11:00", close: "20:00" }, // Thursday
  { day: 5, open: "11:00", close: "20:30" }, // Friday
  { day: 6, open: "12:00", close: "20:30" }, // Saturday
];

export type RestaurantStatus = "open" | "closed" | "closing-soon";

export interface OpeningHoursInfo {
  status: RestaurantStatus;
  statusText: string;
  nextEvent?: string; // "Closes at 20:00" or "Opens Mon at 11:00"
  isClosingSoon: boolean; // True if closing within 30 minutes
}

/**
 * Convert time string "HH:MM" to minutes since midnight
 */
function timeToMinutes(timeStr: string): number {
  const [hours, minutes] = timeStr.split(":").map(Number);
  return hours * 60 + minutes;
}

/**
 * Get current time in Sweden (Europe/Stockholm timezone)
 */
function getCurrentSwedishTime(): Date {
  return new Date(
    new Date().toLocaleString("en-US", { timeZone: "Europe/Stockholm" })
  );
}

/**
 * Get day name from day number
 */
function getDayName(dayNumber: number): string {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[dayNumber];
}

/**
 * Calculate restaurant status and next event
 */
export function getOpeningHoursInfo(): OpeningHoursInfo {
  const now = getCurrentSwedishTime();
  const currentDay = now.getDay();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const todaySchedule = weeklySchedule.find((s) => s.day === currentDay);

  if (!todaySchedule) {
    return {
      status: "closed",
      statusText: "Closed",
      nextEvent: "Check opening hours",
      isClosingSoon: false,
    };
  }

  const openMinutes = timeToMinutes(todaySchedule.open);
  const closeMinutes = timeToMinutes(todaySchedule.close);

  // Check if currently open
  if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
    const minutesUntilClose = closeMinutes - currentMinutes;
    const isClosingSoon = minutesUntilClose <= 30;

    if (isClosingSoon) {
      return {
        status: "closing-soon",
        statusText: "Closing Soon",
        nextEvent: `Closes at ${todaySchedule.close}`,
        isClosingSoon: true,
      };
    }

    return {
      status: "open",
      statusText: "Open Now",
      nextEvent: `Closes at ${todaySchedule.close}`,
      isClosingSoon: false,
    };
  }

  // Restaurant is closed - find next opening
  let nextOpeningDay = currentDay;
  let nextSchedule = todaySchedule;

  // If before opening time today, next opening is today
  if (currentMinutes < openMinutes) {
    return {
      status: "closed",
      statusText: "Closed",
      nextEvent: `Opens today at ${todaySchedule.open}`,
      isClosingSoon: false,
    };
  }

  // Otherwise find next day we're open
  for (let i = 1; i <= 7; i++) {
    nextOpeningDay = (currentDay + i) % 7;
    nextSchedule = weeklySchedule.find((s) => s.day === nextOpeningDay)!;

    if (nextSchedule) {
      const dayName = getDayName(nextOpeningDay);
      const openingTime = nextSchedule.open;

      return {
        status: "closed",
        statusText: "Closed",
        nextEvent: `Opens ${dayName} at ${openingTime}`,
        isClosingSoon: false,
      };
    }
  }

  return {
    status: "closed",
    statusText: "Closed",
    nextEvent: "Check opening hours",
    isClosingSoon: false,
  };
}

/**
 * Get status icon emoji
 */
export function getStatusIcon(status: RestaurantStatus): string {
  switch (status) {
    case "open":
      return "🟢";
    case "closing-soon":
      return "⏰";
    case "closed":
      return "🔴";
    default:
      return "⏰";
  }
}
