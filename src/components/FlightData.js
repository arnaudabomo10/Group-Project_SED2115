//Andrick
const airports = [
  { city: "Calgary", code: "YYC", distance: 2900, duration: 280 },
  { city: "Charlottetown", code: "YYG", distance: 1000, duration: 117 },
  { city: "Edmonton", code: "YEG", distance: 3000, duration: 270 },
  { city: "Fredericton", code: "YFC", distance: 800, duration: 91 },
  { city: "Halifax", code: "YHZ", distance: 1000, duration: 112 },
  { city: "Iqaluit", code: "YFB", distance: 2100, duration: 210 },
  { city: "Moncton", code: "YQM", distance: 900, duration: 105 },
  { city: "Montreal", code: "YUL", distance: 150, duration: 52 },
  { city: "Quebec City", code: "YQB", distance: 400, duration: 65 },
  { city: "St. John's", code: "YYT", distance: 1900, duration: 210 },
  { city: "Thunder Bay", code: "YQT", distance: 1200, duration: 149 },
  { city: "Toronto (Billy Bishop)", code: "YTZ", distance: 350, duration: 68 },
  { city: "Toronto Pearson", code: "YYZ", distance: 350, duration: 80 },
  { city: "Vancouver", code: "YVR", distance: 4400, duration: 323 },
  { city: "Winnipeg", code: "YWG", distance: 1700, duration: 177 },
  { city: "Yellowknife", code: "YZF", distance: 3400, duration: 300 },
  { city: "Boston", code: "BOS", distance: 800, duration: 75 },
  { city: "Chicago", code: "ORD", distance: 1300, duration: 156 },
  { city: "Fort Lauderdale", code: "FLL", distance: 2400, duration: 227 },
  { city: "Fort Myers", code: "RSW", distance: 2300, duration: 230 },
  { city: "Las Vegas", code: "LAS", distance: 3500, duration: 320 },
  { city: "Newark", code: "EWR", distance: 550, duration: 102 },
  { city: "Orlando", code: "MCO", distance: 2000, duration: 209 },
  { city: "Tampa", code: "TPA", distance: 2200, duration: 205 },
  { city: "Washington (Reagan)", code: "DCA", distance: 730, duration: 110 },
  { city: "Washington (Dulles)", code: "IAD", distance: 730, duration: 110 },
];

export function findAirports({ locationCode = null, maxDistance = null, maxDuration = null }) {
  return airports.filter(airport => {
      const matchesLocation = locationCode ? airport.code.toUpperCase() === locationCode.toUpperCase() : true;
      const withinDistance = maxDistance ? airport.distance <= maxDistance : true;
      const withinDuration = maxDuration ? airport.duration <= maxDuration : true;

      return matchesLocation && withinDistance && withinDuration;
  });
}