const express = require('express');
const mongodb = require('mongodb');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

dotenv.config();

async function run() {
  const userDatabaseClient = await mongodb.MongoClient.connect(
    process.env.USER_DB_URL
  );
  //user db
  const userDb = userDatabaseClient.db();
  const User = userDb.collection('users');

  //calendar db
  const client = await mongodb.MongoClient.connect(process.env.DB_URL);
  const db = client.db();
  const Event = db.collection('events');

  const server = express();
  const port = process.env.PORT || 8080;

  server.use(cookieParser());
  server.use(express.json());

  server.use(express.static('../fe/public'));

  server.post('/api/users/login', async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (user) {
      res.cookie('user', user._id, { maxAge: maxAgeInMilliseconds });
      return res.sendStatus(200);
    }

    return res.sendStatus(400);
  });

  server.get('/api/events', async (req, res) => {
    const start = new Date(req.query.start);
    const end = new Date(start);
    end.setTime(end.getTime() + 24 * 60 * 60 * 1000);

    const startAllDayUTC = new Date(start);
    startAllDayUTC.setUTCHours(0, 0, 0, 0);
    const events = await Event.find({
      $or: [
        {
          start: {
            $gte: start,
            $lte: end,
          },
          allDay: false,
        },
        {
          start: startAllDayUTC,
          allDay: true,
        },
      ],
    }).toArray();

    return res.json({ data: events });
  });

  server.post('/api/events', async (req, res) => {
    console.log('req', req.body);
    const event = await Event.insertOne({
      title: req.body.title,
      description: req.body.description,
      start: new Date(req.body.start),
      end: req.body.end ? new Date(req.body.end) : undefined,
      allDay: req.body.allDay,
      users: req.body.users,
    });
    return res.sendStatus(200);
  });

  server.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  });
  server.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}

run();
