# WeatherApp

A clean weather dashboard that shows current conditions and a 5-day forecast for any city in the world. Search for any city and get real-time weather data instantly.

## Features

- Search for any city worldwide with autocomplete suggestions
- Current weather — temperature, feels like, humidity, wind speed, pressure
- 5-day forecast with weather icons
- UV Index with risk level indicator
- Visibility conditions
- Sunrise and Sunset times
- Dark mode support

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS + Shadcn UI
- **Data Fetching:** TanStack React Query
- **Weather API:** WeatherAPI
- **Search:** use-debounce

## Getting Started

1. Clone the repository
```bash
   git clone https://github.com/RomyVSoto/weatherapp.git
   cd weatherapp
```

2. Install dependencies
```bash
   npm install
```

3. Create a `.env.local` file with your WeatherAPI key

```bash
NEXT_PUBLIC_WEATHER_API_KEY=your_api_key
```

4. Run the development server
```bash
   npm run dev
```

## API

This project uses [WeatherAPI](https://www.weatherapi.com/) — free tier, no credit card required.