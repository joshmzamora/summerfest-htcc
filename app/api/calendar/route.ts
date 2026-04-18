import { siteContent } from "@/data/site-content";

function escapeIcsText(value: string) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\r?\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

function toUtcIcsTimestamp(value: string) {
  return new Date(value).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}

function foldIcsLine(line: string) {
  const maxLength = 75;

  if (line.length <= maxLength) {
    return line;
  }

  const parts: string[] = [];

  for (let index = 0; index < line.length; index += maxLength) {
    const chunk = line.slice(index, index + maxLength);
    parts.push(index === 0 ? chunk : ` ${chunk}`);
  }

  return parts.join("\r\n");
}

export async function GET() {
  const { calendarEvent } = siteContent;
  const eventDateKey = calendarEvent.start.slice(0, 10).replace(/-/g, "");
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Holy Trinity Catholic Church//Summer Fest//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${calendarEvent.fileName.replace(/\.ics$/u, "")}-${eventDateKey}@htcc-mb.org`,
    `DTSTAMP:${toUtcIcsTimestamp(new Date().toISOString())}`,
    `DTSTART:${toUtcIcsTimestamp(calendarEvent.start)}`,
    `DTEND:${toUtcIcsTimestamp(calendarEvent.end)}`,
    `SUMMARY:${escapeIcsText(calendarEvent.title)}`,
    `DESCRIPTION:${escapeIcsText(calendarEvent.description)}`,
    `LOCATION:${escapeIcsText(calendarEvent.location)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  const body = `${lines.map(foldIcsLine).join("\r\n")}\r\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `attachment; filename="${calendarEvent.fileName}"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
}
