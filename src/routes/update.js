import data from '../data/data';

export default function (req, res, next) {
  const title = req.params.title;
  const index = data.findIndex((d) => d.title === title);
  if (index >= 0) {
    const title = req.body.title;
    if (title && typeof title !== 'string') {
      return res.status(400).end();
    }
    const type = req.body.type;
    if (type && (typeof type !== 'number' || (type <= 0 || type > 4))) {
      return res.status(400).end();
    }
    const details = req.body.details;
    if (details && typeof details !== 'string') {
      return res.status(400).end();
    }
    const coordinates = req.body.coordinates;
    if (coordinates && typeof coordinates !== 'object') {
      return res.status(400).end();
    }
    if (coordinates && coordinates.lat && typeof coordinates.lat !== 'number') {
      return res.status(400).end();
    }
    if (coordinates && coordinates.lon && typeof coordinates.lon !== 'number') {
      return res.status(400).end();
    }
    if (title) {
      data[index].title = title;
    }
    if (details) {
      data[index].details = details;
    }
    if (type) {
      data[index].type = type;
    }
    if (coordinates) {
      const c = data[index].coordinates || {};
      if(coordinates.lat) {
        c.lat = coordinates.lat;
      }
      if(coordinates.lon) {
        c.lon = coordinates.lon;
      }
      data[index].coordinates = c;
    }
    return res.status(204).end();
  } else {
    res.status(404).end();
  }
}