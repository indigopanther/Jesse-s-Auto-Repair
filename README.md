# Jesse's Automotive LLC — Website

A redesigned marketing site for Jesse's Automotive LLC (St. Louis, MO), built on
**React 19 + Vite**. All content (services, hours, history, blog, contact info,
the ShopMonkey scheduler, and the review widget) is pulled from the real business.

## Run it

```bash
npm install      # if needed
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
npm run lint     # eslint
```

## Structure

```
src/
  data/site.js          One source of truth for all real business content
  router.jsx            Tiny dependency-free client-side router (clean URLs)
  App.jsx               Layout + route table
  components/           Navbar, Footer, MobileCallBar, CtaBand, Reveal, Icons
  pages/                Home, Services, About, Appointment, Blog, NotFound
  index.css            Global theme (navy + steel blue, automotive-red accents)
```

## Notes

- **Booking** uses the real ShopMonkey scheduler + quote-request, embedded as
  iframes on `/appointment` (tabbed).