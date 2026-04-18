// ========== ALL DATA FROM THE VEDIC ASTROLOGY REPORT ==========
export const birthData = {
  name: "Manyata Sodhani",
  dob: "September 12, 2006",
  tob: "6:25 AM",
  pob: "Kolkata, West Bengal, India",
  latitude: "22.57° N",
  longitude: "88.36° E",
  timezone: "GMT+5.5",
  sunset: "16:52:29",
  ayanamsha: "23.95399°",
  ascendant: "Scorpio (Vrishchika)",
  moonSign: "Cancer (Karka)",
  nakshatraAsc: "Jyeshtha",
  nakshatraMoon: "Pushya - 3",
};

export const avakhadaData = [
  { field: "Varna", value: "Brahmin", icon: "🕉️", desc: "Soul drive oriented toward knowledge acquisition, spiritual teaching, and intellectual superiority." },
  { field: "Vashya", value: "Jalchar (Water-dweller)", icon: "🌊", desc: "Instinctive attraction to water-element environments, emotional depth, and fluid adaptability." },
  { field: "Yoni", value: "Chaga (Goat/Sheep)", icon: "🐐", desc: "Enthusiastic, communicative nature in relationships. Playful, socially interactive energy." },
  { field: "Gan", value: "Dev (Divine)", icon: "✨", desc: "Naturally pious, ethical, and compassionate disposition. Shielded from lower-vibrational conflicts." },
  { field: "Nadi", value: "Madhya (Middle)", icon: "🔥", desc: "Governed by Pitta (fire), ruled by Vishnu. Robust metabolic engine, fiery energetic flow." },
  { field: "Rashi", value: "Cancer", icon: "♋", desc: "Moon-ruled water sign. Deep emotional intelligence, nurturing, and protective instincts." },
  { field: "Sign Lord", value: "Moon", icon: "🌙", desc: "Emotional depth, intuition, and subconscious processing power." },
  { field: "Nakshatra", value: "Pushya - 3", icon: "⭐", desc: "Most auspicious of all 27 Nakshatras. Calm, patient, and deeply nurturing emotional core." },
  { field: "Yog", value: "Indra", icon: "👑", desc: "Royalty-like status, commanding authority, wealth accumulation, and lasting fame." },
  { field: "Karan", value: "Kaulav", icon: "🤝", desc: "Deeply sociable, independent, traditional. Refined diplomatic skills." },
  { field: "Tithi", value: "Krishna Panchami", icon: "🌑", desc: "Conducive to introspection, systemic analysis, and consolidation of complex knowledge." },
  { field: "Tatva", value: "Water", icon: "💧", desc: "Water element dominance dictating intuition, emotional resonance, and depth." },
  { field: "Name Alphabet", value: "Ho", icon: "📝", desc: "Recommended starting letter for the native's name based on Nakshatra position." },
  { field: "Paya", value: "Silver (Rajat Paad)", icon: "🥈", desc: "Most beneficial footing. Guarantees peace, financial stability, spiritual blessings." },
];

export const planetaryData = [
  { planet: "Sun", sign: "Scorpio", signLord: "Mars", house: 1, nakshatra: "Jyeshtha", nakshatraLord: "Mercury", color: "#f5c842" },
  { planet: "Moon", sign: "Cancer", signLord: "Moon", house: 9, nakshatra: "Pushya", nakshatraLord: "Saturn", color: "#c0c0c0" },
  { planet: "Mercury", sign: "Scorpio", signLord: "Mars", house: 1, nakshatra: "Anuradha", nakshatraLord: "Saturn", color: "#42e8d5" },
  { planet: "Venus", sign: "Sagittarius", signLord: "Jupiter", house: 2, nakshatra: "Mula", nakshatraLord: "Ketu", color: "#ff6b9d" },
  { planet: "Mars", sign: "Scorpio", signLord: "Mars", house: 1, nakshatra: "Anuradha", nakshatraLord: "Saturn", color: "#ff4444" },
  { planet: "Jupiter", sign: "Scorpio", signLord: "Mars", house: 1, nakshatra: "Anuradha", nakshatraLord: "Saturn", color: "#f5c842" },
  { planet: "Saturn", sign: "Leo", signLord: "Sun", house: 10, nakshatra: "Magha", nakshatraLord: "Ketu", color: "#6e5cff" },
  { planet: "Rahu", sign: "Aquarius", signLord: "Saturn", house: 4, nakshatra: "P. Bhadrapada", nakshatraLord: "Jupiter", color: "#4da6ff" },
  { planet: "Ketu", sign: "Leo", signLord: "Sun", house: 10, nakshatra: "U. Phalguni", nakshatraLord: "Sun", color: "#ff8c42" },
  { planet: "Neptune", sign: "Capricorn", signLord: "Saturn", house: 3, nakshatra: "Dhanishta", nakshatraLord: "Mars", color: "#42a5f5" },
  { planet: "Uranus", sign: "Aquarius", signLord: "Saturn", house: 4, nakshatra: "Shatabhisha", nakshatraLord: "Rahu", color: "#80cbc4" },
  { planet: "Pluto", sign: "Sagittarius", signLord: "Jupiter", house: 2, nakshatra: "Mula", nakshatraLord: "Ketu", color: "#8d6e63" },
];

export const houseDistribution = [
  { house: 1, label: "Self / Personality", planets: ["Sun", "Mars", "Mercury", "Jupiter"], score: 4, significance: "Massive stellium — rare confluence of cosmic power. Immense willpower, magnetic presence.", color: "#a882ff" },
  { house: 2, label: "Wealth / Speech", planets: ["Venus", "Pluto"], score: 2, significance: "Deep desire for luxury, capacity for immense wealth. Transformative financial dynamics.", color: "#f5c842" },
  { house: 3, label: "Courage / Siblings", planets: ["Neptune"], score: 1, significance: "Intuitive communication, efforts driven by high ideals rather than pure force.", color: "#42a5f5" },
  { house: 4, label: "Home / Mother", planets: ["Rahu", "Uranus"], score: 2, significance: "Unconventional domestic arrangements, potential foreign settlement.", color: "#4da6ff" },
  { house: 5, label: "Intellect / Children", planets: [], score: 0, significance: "Empty — energies channeled through Jupiter's lordship from 1st house.", color: "#888" },
  { house: 6, label: "Enemies / Health", planets: [], score: 0, significance: "Empty — reduced direct conflict but influenced by Mars's aspect.", color: "#888" },
  { house: 7, label: "Marriage / Partners", planets: [], score: 0, significance: "Empty — relationships shaped by 1st house stellium's demand for loyalty.", color: "#888" },
  { house: 8, label: "Transformation", planets: [], score: 0, significance: "Empty — Mercury's lordship channels transformative energy to 1st house.", color: "#888" },
  { house: 9, label: "Fortune / Dharma", planets: ["Moon"], score: 1, significance: "Moon in own sign. Inexhaustible emotional intelligence, phenomenal fortune.", color: "#42e8d5" },
  { house: 10, label: "Career / Karma", planets: ["Saturn", "Ketu"], score: 2, significance: "Ascetic-Steel archetype. Heavy responsibilities, ultimate karmic obligations.", color: "#6e5cff" },
  { house: 11, label: "Gains / Networks", planets: [], score: 0, significance: "Empty — but Mercury's lordship ensures massive financial accumulation.", color: "#888" },
  { house: 12, label: "Losses / Liberation", planets: [], score: 0, significance: "Empty — spiritual liberation pursued through 9th house Moon.", color: "#888" },
];

export const yogaData = [
  {
    name: "Ruchaka Yoga", type: "Panchamahapurusha", color: "#ff4444",
    formation: "Mars in own sign (Scorpio) in 1st house (Kendra)",
    desc: "Bestows extraordinary courage, massive physical stamina, and a majestic character. Fiercely independent thinker, natural commander. Destined for land, property, and significant wealth.",
    power: 95,
  },
  {
    name: "Budha-Aditya Yoga", type: "Solar-Intellectual", color: "#f5c842",
    formation: "Sun + Mercury conjunction in 1st house (Scorpio)",
    desc: "Fuses the soul's infinite vitality with the processing power of the intellect. Vastly superior communication, razor-sharp memory, immense analytical abilities.",
    power: 90,
  },
  {
    name: "Lakshmi Yoga", type: "Dhana Yoga (Wealth)", color: "#42e8d5",
    formation: "Mars (Lagna lord) in Lagna + Moon (9th lord) in own sign in 9th house",
    desc: "Named after the Goddess of Wealth. Mathematically guarantees immense fortune, endless abundance, spotless character, and luxurious lifestyle.",
    power: 92,
  },
  {
    name: "Indra Yoga", type: "Royal Yoga", color: "#a882ff",
    formation: "Specific Panchang alignment at time of birth",
    desc: "Royalty-like status, commanding authority. Cosmically destined to inhabit positions of power. Immense good deeds, lengthened lifespan, overwhelming opposition.",
    power: 88,
  },
  {
    name: "Anapha Yoga", type: "Lunar Yoga", color: "#c0c0c0",
    formation: "Planets in 12th house from Moon (Saturn/Ketu in Leo after Cancer Moon)",
    desc: "Robust physical constitution, majestic appearance. Empathetic, polite, generous nature. Spiritual renunciation in later life.",
    power: 78,
  },
  {
    name: "Amala Yoga", type: "Spotless Fame", color: "#6e5cff",
    formation: "Benefic planet in 10th from Moon or Lagna",
    desc: "Professional life and societal reputation remain absolutely spotless. Lasting fame, enduring legacy, incorruptible approach to professional duties.",
    power: 82,
  },
  {
    name: "Vesi Yoga", type: "Solar Fortune", color: "#ff8c42",
    formation: "Planets other than Moon in 2nd position from Sun",
    desc: "Exceptionally fortunate. Opportunities fall into lap with minimal struggle. Highly virtuous, ethical, aristocratic personality.",
    power: 80,
  },
];

export const dashaData = [
  { planet: "Saturn", start: "Birth", end: "Feb 2012", years: "~5.4", status: "completed", color: "#6e5cff",
    desc: "Foundational structures of intellect and discipline built. Early promotional gains in academic settings. Forged intellectual resilience." },
  { planet: "Mercury", start: "Feb 2012", end: "Feb 2029", years: "17", status: "active", color: "#42e8d5",
    desc: "CURRENT PERIOD — Immense intellectual expansion, higher educational achievement, sharp wit, and diplomacy. Significant financial accumulation. Caution against extravagance." },
  { planet: "Ketu", start: "Feb 2029", end: "Feb 2036", years: "7", status: "upcoming", color: "#ff8c42",
    desc: "Profound shift from material expansion to spiritual introspection. Sudden career shifts possible. Purification phase leading to elevated leadership." },
  { planet: "Venus", start: "Feb 2036", end: "Feb 2056", years: "20", status: "upcoming", color: "#ff6b9d",
    desc: "THE GOLDEN ERA — Maximum financial prosperity, absolute material comfort. Immense wealth accumulation, luxurious living, heightened social status." },
  { planet: "Sun", start: "Feb 2056", end: "Feb 2062", years: "6", status: "upcoming", color: "#f5c842",
    desc: "Highly authoritative life. Focus on family virtues and bonding. Guard against impatience and eye health issues." },
  { planet: "Moon", start: "Feb 2062", end: "Feb 2072", years: "10", status: "upcoming", color: "#c0c0c0",
    desc: "Profound satisfaction, deep societal recognition. Popularity skyrockets. Tranquil domestic life in scenic environment." },
  { planet: "Mars", start: "Feb 2072", end: "Feb 2079", years: "7", status: "upcoming", color: "#ff4444",
    desc: "Resurgence of intense vitality and ambition. Amplified fame, extensive international travel. Strictly avoid impulsive decisions." },
  { planet: "Rahu", start: "Feb 2079", end: "Feb 2097", years: "18", status: "future", color: "#4da6ff",
    desc: "Massive 18-year period of profound expansion, unconventional achievements, and foreign connections." },
  { planet: "Jupiter", start: "Feb 2097", end: "Feb 2113", years: "16", status: "future", color: "#f5c842",
    desc: "Final major period. Spiritual culmination, wisdom dissemination, and enduring legacy." },
];

export const sadeSatiData = [
  { phase: "Setting (Past)", start: "Nov 2006", end: "Sep 2009", sign: "Leo", status: "completed" },
  { phase: "Rising", start: "May 2032", end: "Jul 2034", sign: "Gemini", status: "upcoming" },
  { phase: "Peak", start: "Jul 2034", end: "Aug 2036", sign: "Cancer", status: "upcoming" },
  { phase: "Setting", start: "Aug 2036", end: "Jul 2039", sign: "Leo", status: "upcoming" },
  { phase: "Rising", start: "Jul 2061", end: "Aug 2063", sign: "Gemini", status: "future" },
  { phase: "Peak", start: "Aug 2063", end: "Oct 2065", sign: "Cancer", status: "future" },
  { phase: "Setting", start: "Oct 2065", end: "Aug 2068", sign: "Leo", status: "future" },
];

export const kpPlanetsData = [
  { planet: "Sun", cusp: 11, sign: "Scorpio", signLord: "Mars", starLord: "Mercury", subLord: "Moon" },
  { planet: "Moon", cusp: 8, sign: "Cancer", signLord: "Moon", starLord: "Saturn", subLord: "Rahu" },
  { planet: "Mars", cusp: 11, sign: "Scorpio", signLord: "Mars", starLord: "Saturn", subLord: "Ketu" },
  { planet: "Rahu", cusp: 3, sign: "Aquarius", signLord: "Saturn", starLord: "Jupiter", subLord: "Venus" },
  { planet: "Jupiter", cusp: 11, sign: "Scorpio", signLord: "Mars", starLord: "Saturn", subLord: "Venus" },
  { planet: "Saturn", cusp: 8, sign: "Leo", signLord: "Sun", starLord: "Ketu", subLord: "Venus" },
  { planet: "Mercury", cusp: 11, sign: "Scorpio", signLord: "Mars", starLord: "Saturn", subLord: "Mercury" },
];

export const kpCuspsData = [
  { cusp: 1, degree: "236.43°", sign: "Scorpio", signLord: "Mars", starLord: "Mercury", subLord: "Jupiter" },
  { cusp: 2, degree: "267.70°", sign: "Sagittarius", signLord: "Jupiter", starLord: "Sun", subLord: "Moon" },
  { cusp: 3, degree: "301.70°", sign: "Aquarius", signLord: "Saturn", starLord: "Mars", subLord: "Mercury" },
  { cusp: 4, degree: "335.77°", sign: "Pisces", signLord: "Jupiter", starLord: "Saturn", subLord: "Mercury" },
  { cusp: 5, degree: "6.27°", sign: "Aries", signLord: "Mars", starLord: "Ketu", subLord: "Rahu" },
  { cusp: 6, degree: "32.50°", sign: "Taurus", signLord: "Venus", starLord: "Sun", subLord: "Jupiter" },
  { cusp: 7, degree: "56.43°", sign: "Taurus", signLord: "Venus", starLord: "Mars", subLord: "Jupiter" },
  { cusp: 8, degree: "87.70°", sign: "Gemini", signLord: "Mercury", starLord: "Jupiter", subLord: "Venus" },
  { cusp: 9, degree: "121.70°", sign: "Leo", signLord: "Sun", starLord: "Ketu", subLord: "Venus" },
  { cusp: 10, degree: "155.77°", sign: "Virgo", signLord: "Mercury", starLord: "Sun", subLord: "Mercury" },
  { cusp: 11, degree: "186.27°", sign: "Libra", signLord: "Venus", starLord: "Mars", subLord: "Moon" },
  { cusp: 12, degree: "212.50°", sign: "Scorpio", signLord: "Mars", starLord: "Jupiter", subLord: "Rahu" },
];

export const nakshatraData = [
  { name: "Jyeshtha", planets: "Ascendant, Sun", ruler: "Mercury", deity: "Lord Indra", symbol: "Umbrella / Amulet",
    desc: "\"The Eldest\" — Eagle archetype. Capable of soaring high, observing minute details, striking with precision. Highly ambitious, fiercely protective." },
  { name: "Anuradha", planets: "Mars, Mercury, Jupiter", ruler: "Saturn", deity: "Mitra (Friendship)", symbol: "Lotus",
    desc: "Despite aggressive Scorpio nature, ultimate success comes through collaboration, networking, and strategic alliances. Massive success far from birthplace." },
  { name: "Pushya", planets: "Moon", ruler: "Saturn", deity: "Brihaspati (Jupiter)", symbol: "Udder / Flower",
    desc: "Most auspicious of all 27 Nakshatras. Calm, patient, deeply nurturing emotional core. Innate understanding of cosmic duty (Dharma)." },
  { name: "Magha", planets: "Saturn", ruler: "Ketu", deity: "Pitris (Ancestors)", symbol: "Throne",
    desc: "Professional destiny tied to ancestral karma. Upholding deep traditions, managing heavy administrative responsibilities." },
  { name: "Mula", planets: "Venus, Pluto", ruler: "Ketu", deity: "Nirriti (Destruction)", symbol: "Root / Tail",
    desc: "Financial life may undergo periods of total destruction and profound rebuilding. Deeper understanding of true nature of material resources." },
];

export const elementDistribution = {
  water: { pct: 50, planets: ["Sun","Mars","Mercury","Jupiter","Moon"], desc: "Dominant — deep intuition, emotional resonance" },
  fire: { pct: 25, planets: ["Saturn","Ketu","Venus"], desc: "Career drive, spiritual transformation" },
  air: { pct: 17, planets: ["Rahu","Uranus"], desc: "Innovation, unconventional domestic life" },
  earth: { pct: 8, planets: ["Neptune"], desc: "Grounded communication, practical ideals" },
};

export const remedyData = [
  {
    name: "14-Mukhi Rudraksha", subtitle: "The Deva Mani", icon: "📿",
    planet: "Saturn", significance: "Blessed by Lord Shiva and Lord Hanuman. Linked to Saturn.",
    benefits: "Supreme protection against negative energies. Activates Ajna (Third Eye) Chakra for heightened intuition. Unshakeable courage and rapid decision-making. Ultimate cosmic antidote to Saturn's malefic effects.",
    protocol: "Wear as Mala on chest or right hand on Monday/Mahashivaratri. Purify with Gangajal. Chant 'Om Hreem Hoom Namah'. Strictly avoid non-vegetarian food and alcohol. Remove before sleeping or funerals.",
  },
  {
    name: "17-Mukhi Rudraksha", subtitle: "Manokamna Purti", icon: "📿",
    planet: "Saturn + Creativity", significance: "Ruled by Goddess Katyayani and Lord Vishwakarma.",
    benefits: "Ultimate 'wealth magnet' — attracts sudden, massive financial gains. Clears deep karmic blockages. Removes subconscious fear of failure. Enhances charismatic appeal.",
    protocol: "Wear around neck or keep in place of worship. Wear on Monday morning facing East after bathing. Chant 'Om Namaha Shivaya'. Clean with Panchaamrit periodically. Maintain absolute faith.",
  },
  {
    name: "Yellow Sapphire (Pukhraj)", subtitle: "The Fortune Stone", icon: "💎",
    planet: "Jupiter", significance: "Jupiter rules 2nd (wealth) and 5th (intellect) houses for Scorpio Asc.",
    benefits: "Amplifies Jupiter's power in 1st house stellium. Exponential financial growth, profound mental peace, absolute divine protection from life's hurdles.",
    protocol: "Set in high-quality Gold, worn on Index finger of right hand. Energize and wear on Thursday morning. Chant 'Om gram grim graum sah gurave namah'.",
  },
  {
    name: "Red Coral (Moonga)", subtitle: "The Life Stone", icon: "🔴",
    planet: "Mars", significance: "Mars is supreme Lord of the Ascendant.",
    benefits: "Strengthens physical vitality. Enhances raw confidence. Solidifies commanding, authoritative presence. Shield against opposition. Maximally fortifies Ruchaka Yoga.",
    protocol: "Set in Gold or Silver, worn on Ring finger. Wear on Tuesday morning. Chant 'Om kram krim kraum sah bhaumaya namah'.",
  },
];

export const stelliumAnalysis = [
  { planet: "Mars", role: "Physical Drive", house: "1st (Scorpio)", desc: "Lord of Ascendant in own sign. Exceptionally powerful — robust constitution, immense courage, indomitable will. Endless vitality, royal grandeur. Mangal Dosha cancelled by Sun's proximity.", power: 95, color: "#ff4444" },
  { planet: "Sun", role: "Soul / Authority", house: "1st (Scorpio)", desc: "Regal demeanor, undeniable leadership, commanding influence. Deep pride, excellent money management. Identity intertwined with professional title and social standing.", power: 90, color: "#f5c842" },
  { planet: "Mercury", role: "Intellect / Commerce", house: "1st (Scorpio)", desc: "Razor-sharp, piercing, strategic intellect. Thinks multiple steps ahead. Rules 8th house (transformation) and 11th house (gains). Constant internal psychological reconstructions.", power: 88, color: "#42e8d5" },
  { planet: "Jupiter", role: "Wisdom / Protection", house: "1st (Scorpio)", desc: "The ultimate saving grace. Deep philosophical wisdom, diplomacy, strong moral compass. Channels intense energies toward noble pursuits. Divine shield against catastrophic crises.", power: 92, color: "#f5c842" },
];
