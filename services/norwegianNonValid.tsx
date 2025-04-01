import leoProfanity from "leo-profanity";

let loaded = false;

export async function initProfanityFilter() {
  if (loaded) return;

  try {
    const response = await fetch("https://raw.githubusercontent.com/saadeghi/curse/master/norwegian.csv");
    const text = await response.text();

    const words = text
        .split("\n")
        .map(word => word.trim().replace(/[^\p{L}\p{N} ]+/gu, ""))
        .filter(Boolean);

    leoProfanity.add(words);

    loaded = true;
  } catch (err) {
    console.error("Failed to load profanity list:", err);
  }
}

export function isProfanityFilterReady() {
  return loaded;
}
