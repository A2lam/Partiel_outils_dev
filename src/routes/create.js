import data from '../data/data';

export default function (req, res, next) {
  const title = req.body.title;
  const coordinates = req.body.coordinates;
  const type = req.body.type;
  const details = req.body.details;
  if(typeof title === 'string' && typeof coordinates === 'object' && typeof type === 'number' && type > 0 && type < 5) {
    const lat = coordinates.lat;
    const lon = coordinates.lon;
    if(typeof lat === 'number' && typeof lon === 'number') {
      if(!details || typeof details === 'string') {
        data.push({
          title: title,
          type: type,
          details: details,
          coordinates: coordinates
        });
        return res.status(201).end();
      }
    }
  }
  res.status(400).end();
}