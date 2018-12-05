import data from '../data/data';

export default function (req, res, next) {
  const index = data.findIndex((d) => d.title === req.params.title);
  if (index >= 0) {
    data.splice(index, 1);
    return res.status(204).end();
  }
  res.status(404).end();
}