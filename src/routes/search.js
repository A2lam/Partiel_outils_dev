import data from '../data/data';

export default function (req, res, next) {
  res.json(data.filter((poi) => poi.title.toLowerCase().indexOf(req.params.search.toLowerCase()) !== -1 || (poi.details !== undefined ? poi.details.toLowerCase().indexOf(req.params.search.toLowerCase()) !== -1 : false)));
}